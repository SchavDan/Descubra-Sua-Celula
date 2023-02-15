
            var select = document.querySelector('select')
            select.addEventListener('change', celula)
            
            
            function celula(){
                      var choice = select.value
                                
                if ( (choice == "Jadim Lindoia")
                  || (choice == "Centro") 
                  || (choice == "Colina Verde")
                  || (choice == "Jadins de Monaco")) { 
                                            
                        var endLindoia = 'Jardim Lindóia: Av. Tiradentes, em frente a praça Nordestina!'
                        var res1 = document.getElementById('res')
                        var txt = document.getElementById('name')   
                        var name = String(txt.value)
                        res1.innerHTML = `Que maravilha <strong>${name}
                        </strong>, sua Célula é no <strong>${endLindoia}</strong>!
                        <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                        <p>Entre em Contato Conosco: 99772-2270 / 99877-8968</p>`
    
                    } else {
                         if ( (choice == "Jardim Europa") 
                           || (choice == "Jardim Morumbi")
                           || (choice == "Jardim Canada")
                           || (choice == "Cidade Alta") ) {

                             var endEuropa = `Jardim Europa: Av. Santa Catariana, 721. Na Casa da <strog> Pra. Marli e Pr. Kleber</strong>`
                             var res2 = document.getElementById('res')
                             var txt2 = document.getElementById('name')
                             var name2 = String(txt2.value)
                            res2.innerHTML = `Que maravilha <strong>${name2}
                            </strong>, sua Célula é no  <strong>${endEuropa}</strong>!
                            <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                            <p>Entre em Contato Conosco: 443934894</p>`
                             } 

                        } if ( (choice == "Jardim Curitiba") 
                                || (choice == "Jardim América") 
                                || (choice == "Jardim Galiléia") 
                                || (choice == "Jardim Primavera") 
                                || (choice == "Vila Nsª. das Candeias")
                                || (choice == "Jardim Tropical")
                                ) {
                                
                                var endCuritiba = `Jardim Curitiba: Rua XX, 00. <strong>Na Casa do Luiz Felipe e Maria Vitória</strong>!`
                                var res3 = document.getElementById('res')
                                var txt3 = document.getElementById('name')
                                var name3 = String(txt3.value)
                                    res3.innerHTML = `Que maravilha <strong>${name3}
                                </strong>, sua Célula é no  <strong>${endCuritiba}</strong>!
                                <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                                <p>Entre em Contato Conosco: 443934894</p>`
                              
                            } if ( (choice == "Santa Casa")
                                || (choice == "Jardim Santa Mônica")
                                || (choice == "Águas Claras")
                                || (choice == "Vila Guaíra")
                                || (choice == "Jardim Cristo Rei")
                                || (choice == "Jardim Bela Vista") ) {
                                    
                                 var endSantaCasa = `Santa Casa: Av. São Mateus do Sul, 00. <strong>Na Casa do João e da Cleusa</strong>!`
                                 var res4 = document.getElementById('res')
                                 var txt4 = document.getElementById('name')
                                 var name4 = String(txt4.value)
                                    res4.innerHTML = `Que maravilha <strong>${name4}
                                </strong>, sua Célula é no bairro  <strong>${endSantaCasa}</strong>!
                                <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                                <p>Entre em Contato Conosco: 443934894</p>`

                            } if (choice == "Jardim Universitário") {
                                var endJardimUni = `Jardim Universitário: Rua XXXX, 00. <strong>Na Casa xxxxx</strong>`
                                var res5 = document.getElementById('res')
                                var txt5 = document.getElementById('name')
                                var name5 = String(txt5.value)
                                    res5.innerHTML = `Que maravilha <strong>${name5}
                                </strong>, sua Célula é no bairro  <strong>${endJardimUni}</strong>!
                                <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                                <p>Entre em Contato Conosco: 443934894</p>`
                            }                               
            }                   
    