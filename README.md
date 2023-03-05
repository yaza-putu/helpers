# Table Of Content Helper
### How to Install
- [Read me please](#important)
- [step by step install](#how-to-install)
#### Notification Javascript
- [Snackbar](#notification-with-snackbar)
    - [snackbar default](#snackbar-default)
    - [snackbar success](#snackbar-success)
    - [snackbar warning](#snackbar-warning)
    - [snackbar error](#snackbar-error)
- [Notify](#notification-with-notifyjs)
    - [notify success](#handel-success-notify)
    - [notify error](#handel-error-notify)
    - [notify warning](#handel-warning-notify)
- [Toast](#notification-with-toast)
    - [toast success](#handel-success-toast-js)
    - [toast error](#handel-error-toast-js)
    - [toast warning](#handel-warning-toast-js)
- [Sweetalert2](#notification-with-sweetalert2)
    - [sweetalert success](#success-message-sweet-alert)
    - [sweetalert error](#handel-error-sweet-alert)
    
#### handel ajax
- [ajax get](#ajax-get)
- [ajax post](#ajax-post)
- [ajax delete](#ajax-delete)
- [ajax post file](#ajax-post-file-with-progress-bar)

#### datatables javascript
- [Datatable](#datatables)
    - [reload datatable](#reload-datatable)
    - [instance call datatable with template](#template-datatable)

#### other
- [reload datatable](#reload-datatable)
- [auto label required](#label-required)
- [form validation handel](#validation-handel)
- [visible or hidden text password](#visible-password)
- [auto convert input currency](#auto-convert-input-currency)
- [convert currency](#convert-currency)
- [Show hide blockUI](#show-block-ui)

# Important
- require jquery 3.*
- current support only framwork css bootstrap for auto handel validations form

# how to manual install
- Download and copy the root folder to public folder (LARAVEL Framwork) or any location is public
- include file libs-core.min.js & libs-core.min.css
- inlcude helper.js

# or install via cdn
- put css inside head
```html
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yaza-putu/helpers@V2.0.0/libs/libs-core.min.css">
```
- put js helper inside body
```html
    <!-- remove jquery if jquery is installed -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/yaza-putu/helpers@V2.0.0/libs/libs-core.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/yaza-putu/helpers@V2.0.0/helpers.js"></script>
```

# how to use
## Notification with snackbar
![snackbar](https://res.cloudinary.com/dk0053zbe/image/upload/v1637983552/helper/Screen_Shot_2021-11-27_at_11.20.16_vnkjhx.png)
### snackbar Default
- function in helper.js
```javascript
function snackbar(message) {
    Snackbar.show({
        text: message,
        actionTextColor: '#FFFFFF',
        pos: 'bottom-center',
        actionText: 'Close'
    })
}

// call
new snackbar(message)
```

### snackbar Success
- function in helper.js
```javascript
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

// call
new snackbarSuccess(message)
```

### snackbar Warning
- function in helper.js
```javascript
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

// call
new snackbarWarning(message)
```

### snackbar Error
- function in helper.js
```javascript
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

// call
new snackbarError(message)
```

## Notification with notify.js
![notify](https://res.cloudinary.com/dk0053zbe/image/upload/v1637983552/helper/Screen_Shot_2021-11-27_at_11.19.35_k5y7y2.png)
### handel success notify
- function in helper.js
```javascript
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
// call
new notifySuccess(message)
```
### handel warning notify
- function in helper.js
```javascript
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
// call
new notifyWarning(message)
```
### handel error notify
- function in helper.js
```javascript
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
// call
new notifyError(message)
```
## Notification with Toast
![toast](https://res.cloudinary.com/dk0053zbe/image/upload/v1637983552/helper/Screen_Shot_2021-11-27_at_11.19.57_mvd2rh.png)
### handel error toast js
- function in helper.js
```javascript
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
// call
new toastError(message)
```

### handel success toast js
- function in helper.js
```javascript
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
// call
new toastSuccess(message)
```

### handel warning toast js
- function in helper.js
```javascript
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
// call
new toastWarning(messsage)
```
## Notification with sweetalert2
![sweetalert2](https://res.cloudinary.com/dk0053zbe/image/upload/v1637983552/helper/Screen_Shot_2021-11-27_at_11.20.37_kjerww.png)
### handel error sweet alert
- function in helper.js
```javascript
function sweetError(message) {
    Swal.fire({
        title: "Error",
        text: message,
        type: "error"
    });
}
```
- call
```javascript
new sweetError(message);
```

### Success Message Sweet alert
- function in helper.js
```javascript
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
        Swal.fire({
            title: "Success!",
            text: message,
            type: "success"
        });
    }
}
```
- call
```javascript
// with pop up
new sweetSuccess(message, url);
// with reload page
new sweetSuccess(message, url, true);
// just message
new sweetSuccess(message);
```

## validation handel
- read doc <a href="https://gist.github.com/yaza-putu/0e8c13100e1ef9f29306c8c4ef07d3c1">Validation Error Handel</a>

## Datatables
### reload DataTable
- function in helper.js
```javascript
function reloadTable(id) {
    var table = $(id).DataTable();
    table.cleanData;
    table.ajax.reload();
}
```
- call
```javascript
new reloadTable('#table');
```

### template datatable
```javascript
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
// call
    // example config datatable
    // setup columns
    let columns = [
        {data: 'DT_RowIndex', name: 'DT_RowIndex', width: '10px', orderable: false, searchable: false},
        {data: 'name', name: 'name'},
        {data: 'image', name: 'image'},
        {data: 'opsi', name: 'opsi', orderable: false, searchable: false},
    ];
    // config columnDefs
    let columnDefs = [
        {responsivePriority: 1, targets: 0},
        {responsivePriority: 2, targets: 1},
        {responsivePriority: 3, targets: 3},
        {responsivePriority: 4, targets: 2},
    ];
    // set url
    let url = $('#table-url').val();
    // set tableId
    let table = '#table';  
    new datatable(table, url, columns, columnDefs);
```

## ajax post
- function in helper.js
```javascript
// send data with method post
function ajaxPost(url , data, button = null) {
    
    if (button !== null) {
        var valButton = $(button).html();
    }
    
    var loading = 'insert loading html';
    
    var ajax = $.ajax({
        type: 'post',
        url: url,
        data: data,
        dataType: 'json',
        contentType: false,
        processData: false,
        beforeSend: function () {
            if (button !== null) {
                $(button).empty().append(loading).prop('disabled', true).css('cursor', 'wait');
            }
        },
        complete: function () {
            if (button !== null) {
                $(button).empty().append(valButton).prop('disabled', false).css('cursor', 'auto');
            }
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

    });

    return ajax;
}
```
- call 
```javascript
// with button loading, if not need button loading blank a callback button
new ajaxPost(url, formData, button)
    .done(function(response){
      // write any script
    });
// or
new ajaxPost(url, formData)
    .done(function(response){
      // write any script
    });
 // need a error condition just use
 new ajaxPost(url, formData)
    .done(function(response){
      // write any script
    })
    .fail(function(response){
    // write condition error
    })
```

## Ajax Post File with progress bar
- function in helper.js
```javascript
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
        } else {
            new sweetError('Terjadi Kesalahan');
        }

    }).always(function () {
        if (button !== null) {
            $(button).empty().append(valButton).prop('disabled', false).css('cursor', 'auto');
        }
        $('.progress').fadeOut();
    });

    return ajax;
}
// call
new ajaxPostFile(url, data, button, showLoading)
    .done(function(res) {
      // response
    }).fail(function(res) {
      // handel error
    });
```

## ajax get
- function in helper.js
```javascript
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
```
- call
```javascript
new ajaxGet(url)
    .done(function(response){
    // write done condition
    });
// need error condition
new ajaxGet(url)
    .done(function(response){
    // write done condition
    })
    .fail(function(response){
    // write error condition
    }); 
```

## Ajax Delete
- function in helper.js
```javascript
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
                       new toastSuccess(res.message);
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
```
- call
```javascript
// with reload datatable
new ajaxDel(url, id, table);
// without reload
new ajaxDel(url, id);
```

## visible password
```javascript
//show hide password
function visiblePassword(button, idPassword) {
    $(document).on('click', button, function() {
        var input = $(idPassword);
        input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
    });
}
```
- html
```html
<div class="form-group">
    <label class="required" for="password">Password</label>
    <input name="password" type="password" id="password" class="form-control" placeholder="Masukan Password">
</div>
<div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="show-password">
    <label class="form-check-label" for="show-password">Lihat Password</label>
</div>
```
- use
```javascript
new visiblePassword(button, idPassword);
//
new visiblePassword('#show-password','#password');
```

## label required
- script
```javascript
    $('.required').append(' <span style="color:red">*</span>');
```
- html
```html
<label class="required">Email</label>
```

## enable tooltip bootstrap v4
```javascript
$('[data-toggle="tooltip"]').tooltip();
```

## Set Query Param url
```javascript
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
// call
new setParam(url, param, value);
```

## auto convert input currency
```javascript
$('.convert-currency').on('keyup', function () {
    $(this).val(formatRupiah(this.value, "Rp. "));
})
```

## convert currency
```javascript
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
// call
new formatRupiah(angka, prefix)
```
## Show Block UI
- function in helper.js
```javascript
function showBlockUI() {
    $.blockUI({
        message: 'Mohon Tunggu Sebentar ...',
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
// call
new showBlockUI();
```

## Hide block UI
- function in helper.js
```javascript
// hided block UI
function hideBlockUI() {
    $.unblockUI();
}
// call
new hideBlockUI();
```
