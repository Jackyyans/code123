(function () {
    function autoHover(myChart, option, num, time) {
      var defaultData = {
        //设置默认值
        time: 2000,
        num: 100,
      };
      if (!time) {
        time = defaultData.time;
      }
      if (!num) {
        num = defaultData.num;
      }
  
      var count = 0;
      var timeTicket = null;
      autoLoop();
      myChart.on('mouseover', function (params) {
        timeTicket && clearInterval(timeTicket);
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
        });
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: params.dataIndex,
        });
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: params.dataIndex,
        });
      });
  
      myChart.on('mouseout', function () {
        autoLoop();
      });
  
      function autoLoop() {
        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(function () {
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0, //serieIndex的索引值   可以触发多个
          });
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: count,
          });
          myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: count,
          });
          count++;
          if (count >= num) {
            count = 0;
          }
        }, time);
      }
      return timeTicket;
    }
    window.autoHover = autoHover;
  })();