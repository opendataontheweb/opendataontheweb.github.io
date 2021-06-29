var model;
var img_url;
var loaded = false;

async function load(){

    res = document.getElementById('result');
    res.innerHTML = "LOADING...";
    model = await tf.loadLayersModel('models/alexnet_xray_js/model.json');
    loaded = true;
    res.innerHTML = "LOADED";

}

function LoadFile(event){
    img_url = URL.createObjectURL(event.target.files[0]);
    console.log(img_url);
}
function predict(){

    if(loaded){
        
        res = document.getElementById('result');
        
        res.innerHTML = "PREDICTING...";

        var image = new Image();

        image.src = img_url;

        image.onload = () =>{

        var img_tensor = tf.browser.fromPixels(image).resizeBilinear([227, 227]).div(tf.scalar(255));

        img_tensor = tf.expandDims(img_tensor, 0);

        console.log(img_tensor.shape);

        var pred = model.predict(img_tensor).dataSync()[0];

        pred = pred*100;

        pred = pred.toFixed(2);

        console.log(pred);

        res = document.getElementById('result');

        if(pred>70){
            res.innerHTML = "PNEUMONIA: "+pred.toString()+"%";
        }

        else if (pred<30){
            res.innerHTML = "NORMAL: "+(100-pred).toString()+"%";
        }

        else{

            res.innerHTML = "UNKNOWN";

        }

        }

    }

    else{
        alert('Prediction model has not loaded yet, please try again in a few seconds');
    }

}
