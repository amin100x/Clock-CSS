const sechand= document.querySelector(".second-hand");
    const minHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");



    function setDate() {
      const now=new Date();
      const sec=now.getSeconds();
      const min=now.getMinutes();
      const hour=now.getHours();
      const secDeg = ((sec/60)*360)+90;
      const minDeg = ((min/60)*360)+90;
      const hourDeg = ((hour/12)*360)+90;

      sechand.style.transform =`rotate(${secDeg}deg)`;
      minHand.style.transform =`rotate(${minDeg}deg)`;
      hourHand.style.transform =`rotate(${hourDeg}deg)`;

    }

setInterval(setDate,1000);