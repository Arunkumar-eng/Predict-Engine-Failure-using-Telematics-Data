var url, id;
function getlife() {
    document.getElementById('invalid').style.display = 'none';
    id = document.getElementById('machineid').value;
    url = "http://127.0.0.1:8000/get_machine_life/?id=" + id;
    fetch(url).then((res) => res.json()).then(data => {
        if (Object.keys(data).length == 1 || data.hasOwnProperty('error')) {
            document.getElementById('invalid').innerHTML = 'Please enter a valid machine ID';
            document.getElementById('invalid').style.display = 'block';
            return;
        }
        document.getElementById('output').style.display = 'flex';
        document.getElementById('put_id').innerHTML = data.machine_id;
        document.getElementById('put_cause').innerHTML = data.fail_event;
        document.getElementById('put_value').innerHTML = data.RUL.toFixed(2) + " min(s)";
    });
}