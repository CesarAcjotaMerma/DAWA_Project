const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Serie = require('../models/series');

const Documento = require('../models/documentos');

// Node packages for file system
var fs = require('fs');
var path = require('path');

//importing routes
//const indexRoutes = require('./routes/index');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/series', async(req,res)=>{
    const series = await Serie.find();
    res.render('serie',{
        series
    });
});

router.get('/series/addserie', async (req,res)=>{
    const series = await Serie.find();
    res.render('addserie',{
        series
    });
})

router.post('/series/addserie', async (req,res)=>{
    const serie = new Serie(req.body);
    await serie.save();
    res.redirect('/series');
})

router.get('/series/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Serie.remove({ _id: id });
    res.redirect('/series');
});

router.get('/series/edit/:id', async (req, res) => {
    const { id } = req.params;
    const serie = await Serie.findById(id);
    res.render('editserie', {
        serie
    });
});

router.post('/series/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Serie.update({ _id: id}, req.body);
    res.redirect('/series');
});

// DOCUMENTOS

router.get('/documentos', async(req,res)=>{
    const documentos = await Documento.find();
    res.render('documento',{
        documentos
    });
});

router.get('/documentos/adddocumento', async (req,res)=>{
    res.render('adddocumento');
})

router.post('/documentos/adddocumento', async (req,res)=>{
    const documento = new Documento(req.body);
    await documento.save();
    res.redirect('/documentos');
})

router.get('/documentos/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Documento.remove({ _id: id });
    res.redirect('/documentos');
});

router.get('/documentos/edit/:id', async (req, res) => {
    const { id } = req.params;
    const documento = await Documento.findById(id);
    res.render('editdocumento', {
        documento
    });
});

router.post('/documentos/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Documento.update({ _id: id}, req.body);
    res.redirect('/documentos');
});

module.exports = router;