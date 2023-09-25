document.getElementById('pickBtn').addEventListener('click', (e) => {
    e.preventDefault();
  //   Test
  if ("showPicker" in HTMLInputElement.prototype) {
    console.log("yes");
    try {
        // document.getElementById('inputColor').showPicker();
        document.getElementById('inputDatalist').showPicker();
        // document.getElementById('inDate').showPicker();
        // document.getElementById('inTime').showPicker();
        // document.getElementById('inputLocal').showPicker();
        // document.getElementById('inMonth').showPicker();
        // document.getElementById('inWeek').showPicker();
        // document.getElementById('inputFile').showPicker();
      } catch (err) {
        switch (err.type) {
          case 'InvalidStateError':
          //element is not mutable (disabled)
          case 'NotAllowedError':
          //didn't use transient activation
          case 'SecurityError':
            //cross-origin issue involving iframes
            console.log({ err });
            break;
          default:
            console.log('general error');
        }
      }
  }

  // input[type=color]
  // const inputColor = document.querySelector('input[type=color]');
  // inputColor.showPicker();

  // // EyeDropper
  // document.querySelector('.button--eyedropper')
  //   .addEventListener('click',
  //     async () => {
  //       const eyeDropper = new EyeDropper();
  //       const result = await eyeDropper.open();
  //       const colorHexValue = result.sRGBHex;
  //     }
  //   )
})