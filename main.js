document.getElementById('pickBtn').addEventListener('click', () => {
  //   Test
  if ("showPicker" in HTMLInputElement.prototype) {
    console.log("yes");
    try {
      document.getElementById('inputDatalist').showPicker();
        // document.getElementById('inputColor').showPicker();
        // document.getElementById('inputDate').showPicker();
        // document.getElementById('inputTime').showPicker();
        // document.getElementById('inputLocal').showPicker();
        // document.getElementById('inputMonth').showPicker();
        // document.getElementById('inputWeek').showPicker();
        // document.getElementById('inputFile').showPicker();
      } catch (err) {
        switch (err.type) {
          case 'InvalidStateError':
          // element is not mutable (disabled)
          case 'NotAllowedError':
          // didn't use transient activation
          case 'SecurityError':
            // cross-origin issue involving iframe
            console.log({ err });
            break;
          default:
            console.log('general error');
        }
      }
  }
})


// stepUp & stepDown
const inputNumber = document.querySelector('input[type=number]');
// Plus
document.getElementById('btnPlus').addEventListener('click', () => {
  inputNumber.stepUp();
})

// Minus
document.getElementById('btnMinus').addEventListener('click', () => {
  inputNumber.stepDown();
});

// select()
const inputSelectContent = document.querySelector('.input-selectContent');
document.getElementById('selectBtn').addEventListener('click', () => {
  inputSelectContent.select();
});


// EyeDropper
// document.querySelector('.button--eyedropper')
//   .addEventListener('click',
//     async () => {
//       const eyeDropper = new EyeDropper();
//       const result = await eyeDropper.open();
//       const colorHexValue = result.sRGBHex;
//     }
//   )