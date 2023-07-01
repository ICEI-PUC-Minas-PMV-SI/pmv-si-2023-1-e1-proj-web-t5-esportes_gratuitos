import storedGroups from './grupos.json' assert {type: 'json'};
import storedModalities from './modalidades.json' assert {type: 'json'}

var grupos = JSON.parse(localStorage.getItem('grupos') || '[]');
if (grupos.length === 0) {
    grupos = storedGroups;
    localStorage.setItem('grupos', JSON.stringify(grupos));
}

var modalidades = JSON.parse(localStorage.getItem('modalidades') || '[]');
if (modalidades.length === 0) {
    modalidades = storedModalities;
    localStorage.setItem('modalidades', JSON.stringify(modalidades));
}


