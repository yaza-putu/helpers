// read how to use this helper : https://gist.github.com/yaza-putu/6cac370a6fafcc05c3f964427e370504

// add csrf token header ajax sending
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
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
const assets = $('#asset-url').val() ? $('#asset-url').val() : location.protocol + '//' + location.host + '/';


// loading
var loadingSpiner = '<img src="'+assets+'/helpers/img/loadingCircle.gif" style="width: 22px;">';

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
function sweetSuccess(message, url = null, reload = false) {
    if (url !== null) {
        Swal.fire({
            title: message,
            type: "success",
            text: "Klik tombol selesai untuk kembali ke halaman sebelumnya",
            showCancelButton: true,
            cancelButtonText: reload ? 'Edit Lagi' :'Buat Lagi',
            confirmButtonColor: "#ff4d4d",
            confirmButtonText: "Selesai"
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
function snackbar(message) {
    Snackbar.show({
        text: message,
        actionTextColor: '#FFFFFF',
        pos: 'bottom-center',
        actionText: 'Close'
    })
}

// snackbar success
function snackbarSuccess(message) {
    Snackbar.show({
        text: message,
        actionTextColor: '#155724',
        pos: 'bottom-center',
        actionText: 'Close',
        backgroundColor: '#d4edda',
        textColor: '#155724'
    })
}

// snackbar warning
function snackbarWarning(message) {
    Snackbar.show({
        text: message,
        actionTextColor: '#856404',
        pos: 'bottom-center',
        actionText: 'Close',
        backgroundColor: '#fff3cd',
        textColor: '#856404'
    })
}

// snackbar error
function snackbarError(message) {
    Snackbar.show({
        text: message,
        actionTextColor: '#721c24',
        pos: 'bottom-center',
        actionText: 'Close',
        backgroundColor: '#f8d7da',
        textColor: '#721c24'
    })
}

// notify success
function notifySuccess(message) {
    notify({
        type: "success", //alert | success | error | warning | info
        title: "Success",
        position: {
            x: "right", //right | left | center
            y: "top" //top | bottom | center
        },
        icon: '<img src="'+assets+'helpers/img/paper_plane.png" />',
        message: message,
        autoHide: true, //true | false
        delay: 2500, //number ms
    });
}

// notify warning
function notifyWarning(message) {
    notify({
        type: "warning", //alert | success | error | warning | info
        title: "Warning",
        theme: "dark-theme",
        position: {
            x: "right", //right | left | center
            y: "top" //top | bottom | center
        },
        icon: '<img src="'+assets+'helpers/img/paper_plane.png" />',
        message: message,
        autoHide: true, //true | false
        delay: 2500, //number ms
    });
}
// notify error
function notifyError(message) {
    notify({
        type: "error", //alert | success | error | warning | info
        title: "Error",
        theme: "dark-theme",
        position: {
            x: "right", //right | left | center
            y: "top" //top | bottom | center
        },
        icon: '<img src="'+assets+'helpers/img/paper_plane.png" />',
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
function ajaxPost(url , data, button = null) {

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
        } else {
            new sweetError('Terjadi Kesalahan');
        }

    }).always(function () {
        if (button !== null) {
            $(button).empty().append(valButton).prop('disabled', false).css('cursor', 'auto');
        }
    });

    return ajax;
}

// ajax Get
function ajaxGet(url) {
    var ajax = $.ajax({
        type: 'get',
        url: url,
        dataType: 'json',
        contentType: false,
        processData: false,
    }).done(function (response) {

    }).fail(function (response) {
        new sweetError('Terjadi Kesalahan');
    });
    return ajax;
}

// ajax Delete
function ajaxDel(url, id, table = null) {
    Swal.fire({
        title: "Apakah kamu yakin?",
        text: "Data akan dihapus dan tidak akan bisa dikembalikan!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ff4d4d",
        confirmButtonText: "Hapus"
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: 'POST',
                url: url,
                data:{'id':id},
                dataType: 'json',
                success: function (res) {
                    if (res.success == true) {
                        new notifySuccess(res.message);
                        if(table !== null)
                        {
                            reloadTable(table);
                        }
                    }else {
                        new sweetError(res.message);
                    }
                },
                error: function (res) {
                    new sweetError('Terjadi Kesalahan');
                }
            });
        }
    });
}

// convert currency
$('.convert-currency').on('keyup', function () {
    $(this).val(formatRupiah(this.value, "Rp. "));
})

/* Fungsi formatRupiah */
function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
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
function datatable(table, url, columns= [], columnDefs = [], responsive = true) {
    $(table).DataTable({
        ordering: true,
        serverSide: true,
        processing: true,
        autoWidth: responsive ? false : true,
        responsive: responsive,
        oLanguage: {sProcessing: loadingSpiner},
        ajax: {
            'url': url,
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
