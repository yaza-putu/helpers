const versioningCdnUrl = "V2.0.4";
const confirmSweetFinishDefault = {
    text : "Click the ? button to return to the previous page",
    cancelButtonFirst : "Continue",
    cancelButtonSecond : "Edit",
    buttonLabel : "Done",
    buttonConfirmColor : "#6c5ce7",
}
const confirmSweetDeleteDefault = {
    title : 'Are you sure?',
    body : 'The data will be deleted and cannot be recovered!',
    buttonLabel : 'Delete',
    buttonConfirmColor : "#6c5ce7",
}

// read how to use this helper : https://gist.github.com/yaza-putu/6cac370a6fafcc05c3f964427e370504
// add csrf token header ajax sending
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

// auto reset form on hide modal
$('.modal').on('hidden.bs.modal', function(){
    $(this).find('form')[0].reset();
    $('#id').val('');
});

//show hide password
function visiblePassword(button, idPassword) {
    $(document).on('click', button, function() {
        var input = $(idPassword);
        input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
    });
}

// add label required
$('.required').append(' <span style="color:red">*</span>');

// assets url
const assets = location.protocol + '//' + location.host + '/';

// loading
var loadingSpiner = '<img src="https://cdn.jsdelivr.net/gh/yaza-putu/helpers@'+versioningCdnUrl+'/img/loadingCircle.gif" style="width: 22px;">';
var paperPlaneImg = '<img src="https://cdn.jsdelivr.net/gh/yaza-putu/helpers@'+versioningCdnUrl+'/img/paper_plane.png" />';

// handel error function
function sweetError(message) {
    Swal.fire({
        title: "Error",
        text: message,
        type: "error"
    });
}
// handel info message
function sweetInfo(message) {
    Swal.fire({
        title: "Info",
        text: message,
        type: "info"
    });
}

// handel success function
function sweetSuccess(message, url = null, confirmSweetFinish = null, reload = false) {
    if (url !== null) {
        const text = confirmSweetFinish == null ? confirmSweetFinishDefault.text : confirmSweetFinish.text;
        const cancelButtonFirst = confirmSweetFinish == null ? confirmSweetFinishDefault.cancelButtonFirst : confirmSweetFinish.cancelButtonFirst;
        const cancelButtonSecond = confirmSweetFinish == null ? confirmSweetFinishDefault.cancelButtonSecond : confirmSweetFinish.cancelButtonSecond;
        const buttonLabel = confirmSweetFinish == null ? confirmSweetFinishDefault.buttonLabel : confirmSweetFinish.buttonLabel;
        const buttonConfirmColor = confirmSweetFinish == null ? confirmSweetFinishDefault.buttonConfirmColor : confirmSweetFinish.buttonConfirmColor;

        Swal.fire({
            title: message,
            type: "success",
            text: text.replace('?', buttonLabel),
            showCancelButton: true,
            cancelButtonText: reload ? cancelButtonSecond : cancelButtonFirst,
            confirmButtonColor: buttonConfirmColor,
            confirmButtonText: buttonLabel
        }).then((result) => {
            if (result.value) {
                window.location.href = url;
            } else {
                if (reload == true) {
                    location.reload();
                }
            }
        });
    } else {
        if (reload == true) {
            location.reload();
        }
        Swal.fire({
            title: "Success!",
            text: message,
            type: "success"
        });
    }
}

// toast success
function toastSuccess(message, position = 'top-right') {
    $.toast({
        heading: 'Success',
        text: message,
        position: position,
        stack: false,
        icon: 'success',
        bgColor: '#10ac84',
        textColor: 'white',
        loaderBg: '#1dd1a1'
    })
}

// toast error
function toastError(message, position = 'top-right') {
    $.toast({
        heading: 'Error',
        text: message,
        position: position,
        stack: false,
        icon: 'error',
        bgColor: '#ee5253',
        textColor: 'white',
        loaderBg: '#ff6b6b'
    })
}

// toast warning
function toastWarning(message, position = 'top-right') {
    $.toast({
        heading: 'Warning',
        text: message,
        position: position,
        stack: false,
        icon: 'warning',
        bgColor: '#cc8e35',
        textColor: 'white',
        loaderBg: '#ffb142'
    })
}

// snackbar default
function snackbar(message, position = 'bottom-center') {
    Snackbar.show({
        text: message,
        actionTextColor: '#FFFFFF',
        pos: position,
        actionText: 'Close'
    })
}

// snackbar success
function snackbarSuccess(message, position = 'bottom-center') {
    Snackbar.show({
        text: message,
        actionTextColor: '#155724',
        pos: position,
        actionText: 'Close',
        backgroundColor: '#d4edda',
        textColor: '#155724'
    })
}

// snackbar warning
function snackbarWarning(message, position = 'bottom-center') {
    Snackbar.show({
        text: message,
        actionTextColor: '#856404',
        pos: position,
        actionText: 'Close',
        backgroundColor: '#fff3cd',
        textColor: '#856404'
    })
}

// snackbar error
function snackbarError(message, position = 'bottom-center') {
    Snackbar.show({
        text: message,
        actionTextColor: '#721c24',
        pos: position,
        actionText: 'Close',
        backgroundColor: '#f8d7da',
        textColor: '#721c24'
    })
}

// notify success
function notifySuccess(message, x = "right", y = "top") {
    notify({
        type: "success", //alert | success | error | warning | info
        title: "Success",
        position: {
            x: x, //right | left | center
            y: y //top | bottom | center
        },
        icon: paperPlaneImg,
        message: message,
        autoHide: true, //true | false
        delay: 2500, //number ms
    });
}

// notify warning
function notifyWarning(message, x = "right", y = "top") {
    notify({
        type: "warning", //alert | success | error | warning | info
        title: "Warning",
        theme: "dark-theme",
        position: {
            x: x, //right | left | center
            y: y //top | bottom | center
        },
        icon: paperPlaneImg,
        message: message,
        autoHide: true, //true | false
        delay: 2500, //number ms
    });
}
// notify error
function notifyError(message, x = "right", y = "top") {
    notify({
        type: "error", //alert | success | error | warning | info
        title: "Error",
        theme: "dark-theme",
        position: {
            x: x, //right | left | center
            y: y //top | bottom | center
        },
        icon: paperPlaneImg,
        message: message,
        autoHide: true, //true | false
        delay: 2500, //number ms
    });
}


// validation handel ajax + laravel : https://gist.github.com/yaza-putu/0e8c13100e1ef9f29306c8c4ef07d3c1

function handleValidation(messages)
{
    // reset before looping
    $('.invalid-feedback').remove();
    for(let i in messages)
    {
        for(let t in messages[i])
        {
            $('[name='+i+']').addClass('is-invalid').after('<div class="text-left invalid-feedback">'+messages[i][t]+'</div>');
        }

        // remove message if event key press
        $('[name='+i+']').keypress(function(){
            $('[name='+i+']').removeClass('is-invalid');
        });

        // remove message if event change
        $('[name='+i+']').change(function(){
            $('[name='+i+']').removeClass('is-invalid');
        });
    }
}

// reload datatable
function reloadTable(id) {
    var table = $(id).DataTable();
    table.cleanData;
    table.ajax.reload();
}

// ajax post
// send data with method post
function ajaxPost(url , data, button = null, typeErrorNotification = 'sweetError') {

    if (button !== null) {
        var valButton = $(button).html();
    }

    var ajax = $.ajax({
        type: 'post',
        url: url,
        data: data,
        dataType: 'json',
        contentType: false,
        processData: false,
        beforeSend: function () {
            if (button !== null) {
                $(button).empty().append(loadingSpiner).prop('disabled', true).css('cursor', 'wait');
            }
        },
        complete: function () {
            // on complate
        }
    }).done(function (response) {
        // write your script

    }).fail(function (response) {
        let res = response.responseJSON;

        if (res.errors || res.invalid) {
            new handleValidation(res.errors||res.invalid);
        } else if(res.message !== undefined) {
            if (typeErrorNotification == 'sweetError') {
                sweetError(res.message);
            }

            if (typeErrorNotification == 'toastError') {
                toastError(res.message);
            }

            if (typeErrorNotification == 'snackbarError') {
                snackbarError(res.message)
            }

            if (typeErrorNotification == 'snackbar') {
                snackbar(res.message);
            }
        } else {
            if (typeErrorNotification == 'sweetError') {
                sweetError('There is an error');
            }

            if (typeErrorNotification == 'toastError') {
                toastError('There is an error');
            }

            if (typeErrorNotification == 'snackbarError') {
                snackbarError('There is an error')
            }

            if (typeErrorNotification == 'snackbar') {
                snackbar('There is an error');
            }
        }

    }).always(function () {
        if (button !== null) {
            $(button).empty().append(valButton).prop('disabled', false).css('cursor', 'auto');
        }
    });

    return ajax;
}

// ajax post file
function ajaxPostFile(url, data, button = null, showLoading = '#loading-body') {
    var loadingHtml = '<div class="progress" style="display:none;">\n' +
    '<div class="progress-bar bg-danger progress-bar-striped\n' +
    'active" role="progressbar"\n' +
    'aria-valuemin="0" aria-valuemax="100" style="width:0%">\n' +
    '0%\n' +
    '</div>\n' +
    '</div>';

    // create loading
    $(showLoading).empty().html(loadingHtml);

    // send data
    if (button !== null) {
        var valButton = $(button).html();
    }

    var ajax = $.ajax({
        type: 'post',
        url: url,
        data: data,
        dataType: 'json',
        contentType: false,
        processData: false,
        beforeSend: function () {
            if (button !== null) {
                $(button).empty().append(loadingSpiner).prop('disabled', true).css('cursor', 'wait');
            }
            $('.progress').fadeIn();
        },
        complete: function () {
            // on complate
        },
        xhr: function() {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function(evt) {
                if (evt.lengthComputable) {
                    var percentComplete = evt.loaded / evt.total;
                    percentComplete = parseInt(percentComplete * 100);
                    $('.progress-bar').width(percentComplete+'%');
                    $('.progress-bar').html(percentComplete+'%');
                }
            }, false);
            return xhr;
        }
    }).done(function (response) {
        // write your script

    }).fail(function (response) {
        let res = response.responseJSON;

        if (res.errors || res.invalid) {
            new handleValidation(res.errors||res.invalid);
        } else if(res.message !== undefined) {
            new sweetError(res.message);
        } else {
            new sweetError('There is an error');
        }

    }).always(function () {
        if (button !== null) {
            $(button).empty().append(valButton).prop('disabled', false).css('cursor', 'auto');
        }
        $('.progress').fadeOut();
    });

    return ajax;
}

// ajax Get
function ajaxGet(url, blockUi = false) {
    var ajax = $.ajax({
        type: 'get',
        url: url,
        dataType: 'json',
        contentType: false,
        processData: false,
        beforeSend: function () {
            if (blockUi == true) {
                new showBlockUI();
            }
        }
    }).done(function (response) {

    }).fail(function (response) {
        new sweetError('There is an error');
    }).always(function () {
        if (blockUi == true) {
            new hideBlockUI();
        }
    });
    return ajax;
}

// deprecate in next release
function ajaxDel(url, id,reload = false,typeNotification = 'sweetSuccess', table = null, confirmSweetDelete = null) {
    const title = confirmSweetDelete == null ? confirmSweetDeleteDefault.title : confirmSweetDelete.title;
    const body = confirmSweetDelete == null ? confirmSweetDeleteDefault.body : confirmSweetDelete.body;
    const buttonLabel = confirmSweetDelete == null ? confirmSweetDeleteDefault.buttonLabel : confirmSweetDelete.buttonLabel;
    const buttonConfirmColor = confirmSweetDelete == null ? confirmSweetDeleteDefault.buttonConfirmColor : confirmSweetDelete.buttonConfirmColor;

    Swal.fire({
        title: title,
        text: body,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: buttonConfirmColor,
        confirmButtonText: buttonLabel
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: 'POST',
                url: url,
                data:{'id':id},
                dataType: 'json',
                success: function (res) {
                    if (res.success == true) {
                        if(typeNotification == 'sweetSuccess') {
                            sweetSuccess(res.message);
                        }

                        if (typeNotification == 'notifySuccess') {
                            notifySuccess(res.message);
                        }

                        if (typeNotification == 'toastSuccess') {
                            toastSuccess(res.message);
                        }

                        if (typeNotification == 'snackbarSuccess') {
                            snackbarSuccess(res.message);
                        }

                        if(table !== null)
                        {
                            reloadTable(table);
                        }
                        if (reload == true) {
                            setTimeout(function (){
                                location.reload();
                            }, 1500);
                        }
                    }else {
                        new sweetError(res.message);
                    }
                },
                error: function (res) {
                    new sweetError('There is an error');
                }
            });
        }
    });
}

// ajax delete
function ajaxDelete(url, id,reload = false,typeNotification = 'sweetSuccess', table = null, confirmSweetDelete = null) {
    const title = confirmSweetDelete == null ? confirmSweetDeleteDefault.title : confirmSweetDelete.title;
    const body = confirmSweetDelete == null ? confirmSweetDeleteDefault.body : confirmSweetDelete.body;
    const buttonLabel = confirmSweetDelete == null ? confirmSweetDeleteDefault.buttonLabel : confirmSweetDelete.buttonLabel;
    const buttonConfirmColor = confirmSweetDelete == null ? confirmSweetDeleteDefault.buttonConfirmColor : confirmSweetDelete.buttonConfirmColor;

    Swal.fire({
        title: title,
        text: body,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: buttonConfirmColor,
        confirmButtonText: buttonLabel
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: 'POST',
                url: url,
                data:{'id':id},
                dataType: 'json',
                success: function (res) {
                    if (res.success == true) {
                        if(typeNotification == 'sweetSuccess') {
                            sweetSuccess(res.message);
                        }

                        if (typeNotification == 'notifySuccess') {
                            notifySuccess(res.message);
                        }

                        if (typeNotification == 'toastSuccess') {
                            toastSuccess(res.message);
                        }

                        if (typeNotification == 'snackbarSuccess') {
                            snackbarSuccess(res.message);
                        }

                        if(table !== null)
                        {
                            reloadTable(table);
                        }
                        if (reload == true) {
                            setTimeout(function (){
                                location.reload();
                            }, 1500);
                        }
                    }else {
                        new sweetError(res.message);
                    }
                },
                error: function (res) {
                    new sweetError('There is an error');
                }
            });
        }
    });
}

// convert currency
$(document).on('keyup','.convert-currency', function () {
    $(this).val(formatRupiah(this.value, "Rp. "));
})

/* Fungsi formatRupiah */
function formatRupiah(angka, prefix) {
    var number_string = angka.toString().replace(/[^,\d]/g, ""),
        split = number_string.split(","),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
}

function setTimeZone() {
    var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.cookie = "timezone ="+timeZone+";secure";
}

function setParam(url, param, value) {
    param = encodeURIComponent(param);
    var r = "([&?]|&amp;)" + param + "\\b(?:=(?:[^&#]*))*";
    var a = document.createElement('a');
    var regex = new RegExp(r);
    var str = param + (value ? "=" + encodeURIComponent(value) : "");
    a.href = url;
    var q = a.search.replace(regex, "$1"+str);
    if (q === a.search) {
        a.search += (a.search ? "&" : "") + str;
    } else {
        a.search = q;
    }
    return a.href;
}

// handel datatables
function datatable(table, url, columns= [], columnDefs = [], callback, responsive = true) {
    callback = callback || function() {};
    $(table).DataTable({
        ordering: true,
        serverSide: true,
        processing: true,
        autoWidth: responsive ? false : true,
        responsive: responsive,
        oLanguage: {sProcessing: loadingSpiner},
        ajax: {
            'url': url,
            'data' : callback
        },
        drawCallback: function (settings) {
            // bootrap 3 or 4
            $('[data-toggle="tooltip"]').tooltip();
            // bootstrap 5
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            })
        },
        columns: columns,
        columnDefs: columnDefs,
    });
}

// show block UI
function showBlockUI(message = "Please wait a moment ...") {
    $.blockUI({
        message: message,
        css: {
            'z-index': 10002,
            border: 'none',
            padding: '15px',
            backgroundColor: '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            opacity: .5,
            color: '#fff',
        }
    });
}

// hided block UI
function hideBlockUI() {
    $.unblockUI();
}
