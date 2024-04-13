describe('Pruebas en Algún Componente', ()=>{
    test('Esta prueba no puede fallar', ()=>{
        //1. Inicialización
         const message1 = 'Hola mundo';
        //2. Estímulo
         const message2 = message1.trim();
        //3. Observar el comportamiento
        expect(message1).toBe(message2)
     })


})





