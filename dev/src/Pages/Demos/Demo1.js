import React from 'react'

function Demo1() {
    return (
        <div>
            <div dangerouslySetInnerHTML={{__html:`<html>
  <head>
    <link rel="stylesheet" href="./MNIST/style.css" />
  </head>

  <body>
    <div class="card elevation">
      <canvas
        class="canvas elevation"
        id="canvas"
        width="280"
        height="280"
      ></canvas>

      <div class="button" id="clear-button">CLEAR</div>

      <div class="predictions">
        <div class="prediction-col" id="prediction-0">
          <div class="prediction-bar-container">
            <div class="prediction-bar"></div>
          </div>
          <div class="prediction-number">0</div>
        </div>

        <div class="prediction-col" id="prediction-1">
          <div class="prediction-bar-container">
            <div class="prediction-bar"></div>
          </div>
          <div class="prediction-number">1</div>
        </div>

        <div class="prediction-col" id="prediction-2">
          <div class="prediction-bar-container">
            <div class="prediction-bar"></div>
          </div>
          <div class="prediction-number">2</div>
        </div>

        <div class="prediction-col" id="prediction-3">
          <div class="prediction-bar-container">
            <div class="prediction-bar"></div>
          </div>
          <div class="prediction-number">3</div>
        </div>

        <div class="prediction-col" id="prediction-4">
          <div class="prediction-bar-container">
            <div class="prediction-bar"></div>
          </div>
          <div class="prediction-number">4</div>
        </div>

        <div class="prediction-col" id="prediction-5">
          <div class="prediction-bar-container">
            <div class="prediction-bar"></div>
          </div>
          <div class="prediction-number">5</div>
        </div>

        <div class="prediction-col" id="prediction-6">
          <div class="prediction-bar-container">
            <div class="prediction-bar"></div>
          </div>
          <div class="prediction-number">6</div>
        </div>

        <div class="prediction-col" id="prediction-7">
          <div class="prediction-bar-container">
            <div class="prediction-bar"></div>
          </div>
          <div class="prediction-number">7</div>
        </div>

        <div class="prediction-col" id="prediction-8">
          <div class="prediction-bar-container">
            <div class="prediction-bar"></div>
          </div>
          <div class="prediction-number">8</div>
        </div>

        <div class="prediction-col" id="prediction-9">
          <div class="prediction-bar-container">
            <div class="prediction-bar"></div>
          </div>
          <div class="prediction-number">9</div>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/onnxjs/dist/onnx.min.js"></script>
    <script src="./MNIST/script.js"></script>
  </body>
</html>`}}/>
        </div>
    )
}

export default Demo1
