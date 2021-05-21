function getUniqueId(){
    const randomVal = Math.random().toString(36).replace('0.','_random_' || '');
    return (new Date().getTime()).toString(36) + new Date().getUTCMilliseconds() + randomVal;
}

//toasts
function successToast(data) {
    $.toast({
        heading: data.header,
        text: data.text,
        icon: 'success',
        hideAfter: 3000,
        bgColor: '#0ff24f',
        position: 'bottom-right'
    });
}

function infoToast(data) {
    $.toast({
        heading: data.header,
        text: data.text,
        icon: 'info',
        hideAfter: 3000,
        bgColor: '#a441f0',
        position: 'bottom-right'
    });
}

function errorToast(data) {
    $.toast({
        heading: data.header,
        text: data.text,
        icon: 'warning',
        hideAfter: 3000,
        bgColor: '#ff0000',
        position: 'bottom-right'
    });
}
