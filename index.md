## Our Browser Based Pneumonia Detector
Using AlexNet - a convolutional neural network architecture - we were able to train a neural network to recognize signs of pneumonia in lungs with almost 90% accuracy. We have developed a browser based application using Tensorflowjs to make this tool available for general use. <a href="https://github.com/opendataontheweb/PneumoniaClassifier">View repository here.</a>

#### Upload X-ray image:

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js"></script>
<script src="static/classifier.js"></script>
<input type="button" value="Load Classifier" onclick="load();"><br>
<input type="file" id="img" accept="image/*" onchange="LoadFile(event);"><br>
<input type="button" onclick="predict(model);" value="Predict"><br>
<h1 id="result">Classifier not loaded.</h1>
<br>
## Tomorrow's Forecast for KSE100
<img src="/images/pred.png" />

## KSE100 Dataset
<a href="/stock-exchange-kse-100pakistan.csv">stock-exchange-kse-100pakistan.csv (CSV)</a>
