## Perform Linear Regression Online

Linear regression is a technique used in statistics and data science to predict continuous data based on previous knowledge of that data. We have created a tool allowing anyone without knowledge of programming linear regression to be able to use it to suit their needs. This tool is entirely browser based and requires no downloads.

<script src="linear_regression.js"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
Number of inputs:<input type="number" id="n_x" value="0"><br>
Number of training examples:<input type="number" id="m" value="0"><br>
<input type="button" value="Create Table" onclick="create_forms(parseInt($('#n_x').val()), parseInt($('#m').val()));">
<form id="form"></form>
Enter learning rate:
<input type="number" id="lr"><br>
<i>*Lower learning rates allow for more accuracy whereas higher learning rates allow for more speed</i><br>
<input type="button" value="Train" onclick="train(parseFloat($('#lr').val()));"><br>
<b><div id="training">Not TRAINED.</div></b><br>
Enter inputs to predict:<br>
<form id="inputs"><b>NO INPUTS</b></form><br>
<input type="button" value="Predict" onclick="predict()">
</html>

## Our Browser Based Pneumonia Detector
Using AlexNet - a convolutional neural network architecture - we were able to train a neural network to recognize signs of pneumonia in lungs with almost 90% accuracy. We have developed a browser based application using Tensorflowjs to make this tool available for general use. <a href="https://github.com/opendataontheweb/PneumoniaClassifier">View repository here.</a>

Disclaimer: The results produced by this tool are by no means to be used as a substitute for the opinion of a medical professional. This work is purely an experiment and should be treated as such.

#### Upload X-ray image:

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js"></script>
<script src="static/classifier.js"></script>
<input type="button" value="Load Classifier" onclick="load();"><br>
<input type="file" id="img" accept="image/*" onchange="LoadFile(event);"><br>
<input type="button" onclick="predict(model);" value="Predict"><br>
<h1 id="result">Classifier not loaded.</h1>
<br>
## Tomorrow's Forecast for KSE100
Given the lack of historical data for our stock index, we decided to design a web scraper to gather that data and make it accessible to the public. We have also implemented a basic prediction model for the stock index closing values based on the changes and trends in historical data.

Disclaimer: The predictions by this model should not be regarded as absolute truth. We advise against using this model to make financial decisions. However, you may use the dataset to suite your own needs.
<img src="/images/pred.png" />

## KSE100 Dataset
<a href="/stock-exchange-kse-100pakistan.csv">stock-exchange-kse-100pakistan.csv (CSV)</a>
