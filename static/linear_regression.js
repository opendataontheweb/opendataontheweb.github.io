var global_nx;
var global_m;

function partial_derivative(thetas, X, Y, m, n_x, j) {

    var output = 0;

    for (let i = 0; i < m; i++) {

        for (let j = 0; j < n_x; j++) {

            output += (hypothesis(thetas, X[i], n_x) - Y[i]) * X[i][j];

        }

    }

    return output / m;

}

function mean_squared_error(thetas, X, Y, n_x, m) {

    var output = 0;

    for (let i = 0; i < m; i++) {

        for (let j = 0; j < n_x; j++) {

            output += Math.pow((hypothesis(thetas, X[i], n_x) - Y[i]), 2);

        }

    }

    return output / (m * 2);

}

function hypothesis(thetas, X, n_x) {

    var output = 0;

    for (let i = 0; i < n_x; i++) {

        output += thetas[i] * X[i];

    }

    return output;

}

class Model {

    constructor() {
        this.n_x = 0;
        this.m = 0;
        this.thetas = [];
    }

    fit(X, Y, learning_rate) {

        this.m = X.length;
        this.n_x = X[0].length;

        for (let i = 0; i < this.n_x; i++) {

            this.thetas.push(Math.random());

        }

        var new_thetas = this.thetas;
        var previous_mse = mean_squared_error(this.thetas, X, Y, this.n_x, this.m);

        while (mean_squared_error(new_thetas, X, Y, this.n_x, this.m) <= previous_mse) {
            //console.log(mean_squared_error(new_thetas, X, Y, this.n_x, this.m));
            this.thetas = new_thetas;
            previous_mse = mean_squared_error(this.thetas, X, Y, this.n_x, this.m);
            for (let i = 0; i < this.n_x; i++) {
                new_thetas[i] = this.thetas[i] - (learning_rate * partial_derivative(this.thetas, X, Y, this.m, this.n_x, i));
            }
        }

        return 0;

    }

    predict(X) {
        return hypothesis(this.thetas, X, this.n_x);
    }

    evaluate(X, Y, m) {
        var y_bar = 0;
        for (let i = 0; i < m; i++) {
            y_bar = y_bar + Y[i];
        }
        y_bar = y_bar / m;
        var ss_total = 0;
        var ss_pred = 0;
        for (let i = 0; i < m; i++) {
            ss_total += Math.pow(Y[i] - y_bar, 2);
            ss_pred += Math.pow(Y[i] - this.predict(X[i]), 2);
        }

        return 1 - (ss_pred / ss_total);

    }

}

function create_forms(n_x, m) {
    var form_html = '<b>';
    for (let i = 1; i <= n_x; i++) {
        form_html += "X" + i.toString() + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;"
    }
    form_html += 'Y</b><br>';
    for (let i = 0; i < m; i++) {
        form_html += '<input type="hidden" value="1" id="X' + i.toString() + (0).toString() + '">';
        for (let j = 1; j <= n_x; j++) {
            form_html += '<input type="number" value="0" id="X' + i.toString() + j.toString() + '">';
        }
        form_html += '<input type="number" value="0" id="Y' + i.toString() + '">';
        form_html += "<br>";
        if (i == 0) {
            $('#inputs').html(form_html.replaceAll('X0', 'X_IN').replace('Y0', 'Y_OUT'));
        }
    }
    $('#form').html(form_html);
    global_nx = n_x;
    global_m = m;
}

function read_forms(n_x, m) {
    var X = [];
    var Y = [];
    var current_X = [];
    for (let i = 0; i < m; i++) {
        current_X = []
        for (let j = 0; j <= n_x; j++) {
            current_X.push(parseFloat($('#X' + i.toString() + j.toString()).val()));
        }
        Y.push(parseFloat($('#Y' + i.toString()).val()));
        X.push(current_X);
    }
    return [X, Y];
}

function train(learning_rate) {
    $('#training').html('TRAINING');
    XY = read_forms(global_nx, global_m);
    model.fit(XY[0], XY[1], learning_rate);
    var eval = model.evaluate(XY[0], XY[1], model.m);
    $('#training').html('TRAINED<br>ACCURACY: ' + eval.toString() + '<br>');
}

function predict() {

    var X = [];

    for (let i = 0; i <= global_nx; i++) {

        X.push(parseFloat($('#X_IN' + i.toString()).val()))

    }

    pred = model.predict(X);

    $('#Y_OUT').val(pred);

}

let model = new Model();

//X = [[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9]];

//Y = [6,10,14,18,22,26,30,34,38];

//console.log(model.fit(X, Y, 0.000001));

//console.log(model.predict([1,12]));

//console.log(model.evaluate(X, Y, model.m));
