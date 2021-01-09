export const flowerDesc = "Mobile app that identifies what species of flower your image is. Currently supports Daisy, Dandelion, Rose, Tulip, Sunflower";
export const flowerDetail = `This app uses a Convolutional Neural Network, created with Keras, to identify the flower. The App is built using React Native, and the model is loading locally onto the phone using TensorFlowJS
We used this dataset: https://www.kaggle.com/alxmamaev/flowers-recognition, which has labeled images of 5 flower types: daisies, dandelions, roses, sunflowers, and tulips.
This is why our app currently only supports these flower types.
Instead of using transfer learning on a model like MobileNet, the model was created from scratch`;

export const reindenterDesc = "Web app/callable REST API that reformats your code, assuming your code is c-style.";
export const reindenterDetail = `This web app was created using NextJS, and to parse the code input, I used recursive descent
Code is parsed as either:
- A conjunction of code and code blocks
- Code without code blocks
How to use the API is specified on the ReadMe`;
    