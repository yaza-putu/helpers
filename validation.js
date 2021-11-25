
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
