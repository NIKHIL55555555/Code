const RECPDATA_URL = 'https://input-nrzf.onrender.com';
const SENSORDATA_URL = 'https://sdata.onrender.com';
//const USERDATA_URL = 'http://localhost:5002/user-data';
// http://localhost:5003/sensor-data

$.get(`${SENSORDATA_URL}/sensor-data/SensorData`)
  .then(response => {
    response.forEach(device => {
      $('#patientdata tbody').append(`
      <tr>
        <td>${device.room_temp}</td>
        <td>${device.body_temp}</td>
        <td>${device.heartrate}</td>
        <td>${device.bpm}</td>
        <td>${device.dateandtime}</td>
      </tr>`
      );
    });
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

$.get(`${RECPDATA_URL}/data/devices`)
  .then(response => {
    $('#add-user').on('click', () => {
      const user = $('#user').val();
      const name = $('#name').val();
      response.forEach(device => {
        if (user == '101' && name == device.password) {
          alert(`Successfully Login ${user}`)
          location.href = '101.html';
        }
        if (user == '102' && name == device.password) {
          alert(`Successfully Login ${user}`)
          location.href = '102.html';
        }
        if (user == '103' && name == device.password) {
          alert(`Successfully Login ${user}`)
          location.href = '103.html';
        }
        if (user == '104' && name == device.password) {
          alert(`Successfully Login ${user}`)
          location.href = '104.html';
        }
        if (user == 'admin' && name == device.password) {
          alert(`Successfully Login ${user}`)
          location.href = 'rhtml.html';
        }
        if (user == device.id && name == device.password) {
          alert(`Successfully Login ${user}`)
          location.href = 'ht.html';
        }
      })
    })
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

var lastvalue = 0;
var lastvalue1 = 0;
var lastvalue2 = 0;
var lastvalue3 = 0;
var lastvalue4 = 0;
var value = [];
var value1 = [];
var value2 = [];
var value3 = [];
var value4 = [];

$.get(`${SENSORDATA_URL}/sensor-data/SensorData`)
  .then(response => {
    response.forEach(device => {
      lastvalue = device.room_temp;
      value.push(device.room_temp);
    })
    response.forEach(device => {
      lastvalue1 = device.body_temp;
      value1.push(device.body_temp);
    })
    response.forEach(device => {
      lastvalue2 = device.heartrate;
      value2.push(device.heartrate);
    })
    response.forEach(device => {
      lastvalue3 = device.bpm;
      value3.push(device.bpm);
    })
    response.forEach(device => {
      lastvalue4 = device.dateandtime;
      value4.push(device.dateandtime);
    })

    document.getElementById("lastvalue").textContent = lastvalue;
    document.getElementById("lastvalue1").textContent = lastvalue1;
    document.getElementById("lastvalue2").textContent = lastvalue2;
    document.getElementById("lastvalue3").textContent = lastvalue3;
    document.getElementById("lastvalue4").textContent = lastvalue4;

    let hoursArray = value4.map(function (time) {
      let timeParts = time.split(":");
      let hours = parseInt(timeParts[0]);
      let minutes = parseInt(timeParts[1]);
      let seconds = parseInt(timeParts[2]);

      return Math.floor(hours + minutes / 60 + seconds / 3600);
    });

    const numericYArray = value.map(val => parseFloat(val));

    Highcharts.chart('chart', {
      title: {
        text: 'Graph b/w room temp value and time'
      },
      xAxis: {
        title: {
          text: 'Time (in hours)'
        },
        categories: hoursArray
      },
      yAxis: {
        title: {
          text: 'tds value'
        },
      },
      series: [{
        data: numericYArray
      }]
    });

    const numericYArray1 = value1.map(val => parseFloat(val));

    Highcharts.chart('chart1', {
      title: {
        text: 'Graph b/w body temp and time'
      },
      xAxis: {
        title: {
          text: 'Time (in hours)'
        },
        categories: hoursArray
      },
      yAxis: {
        title: {
          text: 'Load cell value'
        },
      },
      series: [{
        data: numericYArray1
      }]
    });

    const numericYArray2 = value2.map(val => parseFloat(val));

    Highcharts.chart('chart2', {
      title: {
        text: 'Graph b/w heartrate value and time'
      },
      xAxis: {
        title: {
          text: 'Time (in hours)'
        },
        categories: hoursArray
      },
      yAxis: {
        title: {
          text: 'Load cell value'
        },
      },
      series: [{
        data: numericYArray2
      }]
    });

    const numericYArray3 = value3.map(val => parseFloat(val));

    Highcharts.chart('chart3', {
      title: {
        text: 'Graph b/w bpm value and time'
      },
      xAxis: {
        title: {
          text: 'Time (in hours)'
        },
        categories: hoursArray
      },
      yAxis: {
        title: {
          text: 'Load cell value'
        },
      },
      series: [{
        data: numericYArray3
      }]
    });
  })

$('#add-new-user').on('click', () => {
  const id = 'admin';
  const password = $('#password1').val();

  const body = {
    id,
    password
  };

  $.post(`${RECPDATA_URL}/data/devices`, body)
    .then(response => {
      location.href = 'welcome.html';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});

$('#doctor').on('click', () => {
  const id = $('#user').val();
  const password = $('#password').val();

  const body = {
    id,
    password
  };

  $.post(`${RECPDATA_URL}/data/devices`, body)
    .then(response => {
      location.href = 'welcome.html';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});

$('#101').on('click', () => {
  const id = '101';
  const password = $('#Password').val();

  const body = {
    id,
    password
  };

  $.post(`${RECPDATA_URL}/data/devices`, body)
    .then(response => {
      location.href = 'welcome.html';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});

$('#102').on('click', () => {
  const id = '102';
  const password = $('#Password1').val();

  const body = {
    id,
    password
  };

  $.post(`${RECPDATA_URL}/data/devices`, body)
    .then(response => {
      location.href = 'welcome.html';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});

$('#103').on('click', () => {
  const id = '103';
  const password = $('#Password2').val();

  const body = {
    id,
    password
  };

  $.post(`${RECPDATA_URL}/data/devices`, body)
    .then(response => {
      location.href = 'welcome.html';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});

$('#104').on('click', () => {
  const id = '104';
  const password = $('#Password3').val();

  const body = {
    id,
    password
  };

  $.post(`${RECPDATA_URL}/data/devices`, body)
    .then(response => {
      location.href = 'welcome.html';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});