<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Cook Book</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body>
<script>
    window.translations = {!! Illuminate\Support\Facades\Cache::get('translations') !!};
    var csrf_token = '<?php echo csrf_token(); ?>';
    function trans(key, replace = {})
    {
        let translation = key.split('.').reduce((t, i) => t[i] || null, window.translations);

        for (const placeholder in replace) {
            translation = translation.replace(`:${placeholder}`, replace[placeholder]);
        }

        return translation;
    }
</script>
    <div id="index"></div>

<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
