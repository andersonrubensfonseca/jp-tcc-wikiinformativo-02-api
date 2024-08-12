async function login(event){
    event.preventDefault();
    const form = document.getElementById('tcc');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    if(data.username.trim() === 'emilly' && data.password.trim() === '123123'){
        console.log('entrou')
        localStorage.setItem('user',JSON.stringify(data))
        window.location="PaginaInicial.html"
    }else{
        alert('Credenciais inválidas!')
        form.reset();
    };

    return false;
}
class Scripts{
    //rota para listar meus usuarios
    async index(req,res) {
        const usuarios = await prisma.users.findAll();
        res.json(usuarios)
        
    }
    //rota para criar usuarios no sistema
    async create(req,res){
        const usuario = await prisma.users.create(req.body)
        res.status(201).json({message:'Usuário criado com sucesso.'})
    }
}

moduler.exports = Scripts