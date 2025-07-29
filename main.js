 function copyInfo() {
      const text = "valmoris.my.id:25412";
      navigator.clipboard.writeText(text).then(() => {
        alert("IP & Port berhasil disalin: " + text);
      });
    }