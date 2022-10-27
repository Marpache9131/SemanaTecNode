const path = require('path');
const fileUpload = require('express-fileupload');

exports.getFormularioImagen = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','formularioImagen.html'))
}

exports.postUpload = (req,res)=>{
    const {image} = req.files
    if(!image) return res.send("Error al enviar imagen")
    image.mv(path.join(__dirname,'..','public','img',image.name));
    res.send('Imagen subida exitosamente')
}