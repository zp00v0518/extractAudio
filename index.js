var ffmpeg = require('fluent-ffmpeg');
/**
 *    input - string, path of input file
 *    output - string, path of output file
 *    callback - function, node-style callback fn (error, result)        
 */
function convert(input, output, callback) {
    ffmpeg(input)
        .output(output)
        .on('end', function() {                    
            console.log('conversion ended');
            callback(null);
        }).on('error', function(err){
            console.log(err);
            callback(err);
        }).run();
}

convert('./Dua Lipa - Be The One.mp4', './Dua Lipa - Be The One.mp3', function(err){
   if(!err) {
       console.log('conversion complete');
       //...

   }
});