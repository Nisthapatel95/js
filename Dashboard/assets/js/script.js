const resource = 'data.json';
fetch(resource).then((res) => {


    return res.json()
}).then((response) => {
    const res = response;


    const tableBody = document.getElementById("data")
    res.forEach(element => {
        let tableRow = document.createElement('tr')
        tableBody.appendChild(tableRow);



        for (const el in element) {

            let tableData = document.createElement('td')
            tableRow.appendChild(tableData);
            if (el == 'type') {
                tableData.classList.add('type');
                let badge = document.createElement('span');
                tableData.appendChild(badge);
                const text = document.createTextNode(element[el]);
                badge.appendChild(text);
                badge.classList.add('badge');
            }
            else {
                const text1 = document.createTextNode(element[el]);
                tableData.appendChild(text1);
            }
        }
    })
})

function filterdatajson() {
    const userTableBody = document.querySelector('#data'); /** get user tbody */
    const searchTerm = document.querySelector('#search-box');
    const noRecordDiv = document.querySelector('.no-records');
    const userTable = document.querySelector('#background-light');
    userTableBody.textContent = '';
    let filteredData = [];
  
    if (searchTerm.value !== '') {
      filteredData = data.json.filter((item) => {
        return item. Type.toLowerCase().includes( searchTerm.value.toLowerCase());
      });
    } else {
      filteredData = data.json;
    }
  
    // filteredData = searchTerm.value !== '' ? user.filter(item => item.name.toLowerCase().includes(searchTerm.value.toLowerCase())) : user;
    
    if (!filteredData.length) {
      userTableBody.classList.add(['d-none']);
      noRecordDiv.classList.remove(['d-none']);
    } else {
      userTableBody.classList.remove(['d-none']);
      noRecordDiv.classList.add(['d-none']);
    }
    getData(filteredData);
  }
  