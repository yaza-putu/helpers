# Important
- require jquery
- require sweetalert2
- require toast js
- for validation form only work on bootstrap

# how to install
- clone repository or download and copy the root folder to public folder (LARAVEL Framwork) or any location
- you can copy blade folder to view (Laravel Framwork)
- include all file in folder blade (Laravel Framwork)
- or you need call file helper.js

# how to use
## handel error toast js
- function
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
```

## handel success toast js
- function
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
```

## handel warning toast js
- function
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
```
## handel error sweet alert
- function
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

## Success Message Sweet alert
- function
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

## reload DataTable
- function
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

## ajax post
- function
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

## ajax get
- function
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
- function
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
