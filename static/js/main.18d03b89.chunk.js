(this.webpackJsonprollgenerator=this.webpackJsonprollgenerator||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n(17),r=n.n(i),a=n(18),s=n(2),u=n(6),c=(n(24),n(25),n(0)),d=function(e){var t=e.title,n=e.value;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("label",{className:"FormRollLabel",children:t}),Object(c.jsx)("input",{className:"FormRollInput",type:"text",name:t,value:n,readOnly:!0})]})},l=function(e){var t=e.bonus,n=e.type,o=e.affectedAtributte,i=e.useCondition,r=e.effect,a=e.durability;return Object(c.jsxs)("div",{className:"FormRoll1",children:[Object(c.jsx)(d,{title:"B\xf4nus",value:t}),Object(c.jsx)(d,{title:"Tipo",value:n}),Object(c.jsx)(d,{title:"Atributo Afetado",value:o}),Object(c.jsx)(d,{title:"Condi\xe7\xf5es de Uso",value:i}),Object(c.jsx)(d,{title:"Efeito",value:r}),Object(c.jsx)(d,{title:"Durabilidade",value:"".concat(a,"/").concat(a," Dungeons")})]})},p=(n(27),function(e){var t=e.penality,n=e.effectDescription,o=e.itemRank,i=e.handleRoll,r=e.handleGenerateCode;return Object(c.jsxs)("div",{className:"FormRoll2",children:[Object(c.jsx)(d,{title:"Penalidade",value:t}),Object(c.jsx)(d,{title:"Descri\xe7\xe3o de Efeito",value:n}),Object(c.jsx)(d,{title:"Rank do Item",value:o}),Object(c.jsx)("button",{className:"GenerateCodeButton",onClick:function(){return r()},children:"Gerar C\xf3digo"}),Object(c.jsx)("button",{className:"GenerateCodeButton",onClick:function(){return i()},children:"Rolar Novamente"})]})}),f=function(e){var t=e.code;return Object(c.jsx)("div",{className:"GeneratedCode",children:Object(c.jsx)("div",{className:"GeneratedCodeArea",id:"CodeText",children:t})})};function b(e){return'<center><small>[b]SUBSTITUIR O NOME PELO LEILOEIRO[/b] escreveu:</small>\n  TEXTO DE DESCRI\xc7\xc3O\n  <img src="URL DA IMAGEM" style="width: 80%; height: auto;" alt="Nome do item"/>\n  [b]Descri\xe7\xe3o:[/b] INSERIR DESCRI\xc7\xc3O\n\n  [b]Nome:[/b]\n  [b]Rank do Item:[/b] '.concat(e.getItemRank,"\n  [b]Tipo do Item:[/b] ").concat(e.getType,"\n  [b]B\xf4nus:[/b]").concat(e.getBonus,"\n  [b]Atributo Bonificado:[/b] ").concat(e.getAffectedAtributte,"\n  [b]Condi\xe7\xe3o de Uso:[/b] ").concat(e.getUseCondition,"\n  [b]Efeito:[/b] ").concat(e.getEffect,"\n  [b]Descri\xe7\xe3o do efeito:[/b] ").concat(e.getEffectDescription,"\n  [b]Penalidade:[/b] ").concat(e.getPenality,"\n  [b]Durabilidade:[/b]").concat(e.getDurability,"\n  [b]Valor:[/b] Definir\n  </center>")}var m=n(10),h=n(11);function g(e,t,n,o){return e<=2?t:e>=3&&e<=8?n:e>=9?o:{bonus:0,points:0}}function j(e){return e<=-5?"Rank E":e>-5&&e<15?"Rank D":e>=15&&e<25?"Rank C":e>=25&&e<35?"Rank B":e>=35&&e<45?"Rank A":e>=45?"Rank S":""}var y,v=function(){function e(){Object(m.a)(this,e),this.bonus=0,this.type="",this.affectedAtributte="",this.useCondition="",this.effect="",this.durability=0,this.penality="",this.effectDescription="",this.itemRank="",this.totalPoints=0;var t=function(){var e=Math.floor(5*Math.random()+1),t=Math.floor(10*Math.random()+1);switch(e){case 2:return g(t,{bonus:24,points:-10},{bonus:30,points:0},{bonus:50,points:0});case 3:return g(t,{bonus:50,points:0},{bonus:60,points:10},{bonus:100,points:10});case 4:return g(t,{bonus:100,points:10},{bonus:120,points:20},{bonus:180,points:20});case 5:return g(t,{bonus:180,points:20},{bonus:250,points:30},{bonus:340,points:30});default:return g(t,{bonus:15,points:-10},{bonus:24,points:-10},{bonus:15,points:-10})}}(),n=function(){switch(Math.floor(9*Math.random()+1)){case 2:return"Elmo";case 3:return"Armadura";case 4:return"Luva";case 5:return"Bota";case 6:return"Capa";case 7:return"Anel";case 8:return"Colar";case 9:return"Runa";default:return"Arma"}}(),o=function(){var e=Math.floor(9*Math.random()+1);return 1===e||6===e?{bonus:"For\xe7a",penality:"Agilidade"}:2===e||7===e?{bonus:"Agilidade",penality:"Vitalidade"}:3===e||8===e?{bonus:"Sentidos",penality:"Intelig\xeancia"}:4===e||9===e?{bonus:"Intelig\xeancia",penality:"Sentidos"}:5===e||10===e?{bonus:"Vitalidade",penality:"For\xe7a"}:{bonus:"",penality:""}}(),i=function(e){if("Arma"===e)switch(Math.floor(13*Math.random()+1)){case 2:return{points:5,effect:"Afiada",description:"+20 de dano"};case 3:return{points:5,effect:"Toque de Fogo",description:"Aplica DoT I (queimadura) uma vez por post"};case 4:return{points:5,effect:"Toque de Gelo",description:"Aplica o efeito lentid\xe3o uma vez por post"};case 5:return{points:5,effect:"Toque de Vento",description:"Aplica DoT I (sangramento) uma vez por post"};case 6:return{points:5,effect:"Toque Venenoso",description:"Aplica DoT I (veneno) uma vez por post"};case 7:return{points:10,effect:"Obra Prima",description:"+ 50 de Dano"};case 8:return{points:10,effect:"Flamejante",description:"Aplica DoT II (queimadura) uma vez por post"};case 9:return{points:10,effect:"Congelada",description:"Aplica o efeito Imobilizar uma vez por post"};case 10:return{points:10,effect:"Sagrada",description:"Cura 100 de HP do usu\xe1rio uma vez por post"};case 11:return{points:10,effect:"Tenebrosa",description:"Aplica o efeito Medo uma vez por post"};case 12:return{points:10,effect:"Vorpal",description:"Aplica DoT II (sangramento) uma vez por post"};case 13:return{points:10,effect:"Necr\xf3tica",description:"Aplica DoT II (veneno) uma vez por post"};default:return{points:-10,effect:"N/A",description:"Sem efeito"}}else switch(Math.floor(9*Math.random()+1)){case 2:return{points:5,effect:"Prote\xe7\xe3o",description:"10% de redu\xe7\xe3o de dano f\xedsico"};case 3:return{points:5,effect:"Prote\xe7\xe3o Fogo",description:"10% de redu\xe7\xe3o de dano de fogo"};case 4:return{points:5,effect:"Prote\xe7\xe3o \xc1gua",description:"10% de redu\xe7\xe3o de dano de \xe1gua"};case 5:return{points:5,effect:"Prote\xe7\xe3o Vento",description:"10% de redu\xe7\xe3o de dano de vento"};case 6:return{points:5,effect:"Prote\xe7\xe3o Terra",description:"10% de redu\xe7\xe3o de dano de terra"};case 7:return{points:5,effect:"Prote\xe7\xe3o Sombra",description:"10% de redu\xe7\xe3o de dano de sombra"};case 8:return{points:5,effect:"Prote\xe7\xe3o Luz",description:"10% de redu\xe7\xe3o de dano de luz"};case 9:return{points:5,effect:"Prote\xe7\xe3o M\xe1gica",description:"10% de redu\xe7\xe3o de dano m\xe1gico n\xe3o elemental"};default:return{points:-10,effect:"N/A",description:"Sem efeito"}}}(n),r=function(e){if("Arma"===e){var t=Math.floor(12*Math.random()+1);if(t>=1&&t<7)return{points:0,useCondition:"Ser Arma da Classe"};if(t>=7)return{points:-5,useCondition:"Ter Maestria com a Arma"}}else switch(Math.floor(13*Math.random()+1)){case 2:return{points:-5,useCondition:"Ter no m\xednimo o valor do b\xf4nus em For\xe7a bruta"};case 3:return{points:-5,useCondition:"Ter no m\xednimo o valor do b\xf4nus em Agilidade bruta"};case 4:return{points:-5,useCondition:"Ter no m\xednimo o valor do b\xf4nus em Sentidos bruto"};case 5:return{points:-5,useCondition:"Ter no m\xednimo o valor do b\xf4nus em Intelig\xeancia bruta"};case 6:return{points:-5,useCondition:"Ter no m\xednimo o valor do b\xf4nus em Vitalidade bruta"};case 7:return{points:0,useCondition:"Ter foco em For\xe7a"};case 8:return{points:0,useCondition:"Ter foco em Sentidos"};case 9:return{points:0,useCondition:"Ter foco em Agilidade"};case 10:return{points:0,useCondition:"Ter foco em Intelig\xeancia"};case 11:return{points:0,useCondition:"Ter foco em Vitalidade"};case 12:return{points:-5,useCondition:"Enquanto equipado, receba DoT I Veneno"};case 13:return{points:-10,useCondition:"Receba a penalidade"};default:return{points:10,useCondition:"N/A"}}return{points:0,useCondition:""}}(n),a=function(){var e=Math.floor(10*Math.random()+1);return e<=2?{points:-5,durability:3}:e>=3&&e<=8?{points:0,durability:4}:e>=9?{points:5,durability:5}:{points:0,durability:0}}();this.affectedAtributte=o.bonus,this.bonus=t.bonus,this.effect=i.effect,this.useCondition=r.useCondition,this.durability=a.durability,this.totalPoints=t.points+i.points+a.points+r.points,this.penality=o.penality,this.type=n,this.effectDescription=i.description,console.log(t.points,i.points,a.points,r.points),this.itemRank=j(this.totalPoints)}return Object(h.a)(e,[{key:"getBonus",get:function(){return this.bonus}},{key:"getType",get:function(){return this.type}},{key:"getAffectedAtributte",get:function(){return this.affectedAtributte}},{key:"getUseCondition",get:function(){return this.useCondition}},{key:"getEffect",get:function(){return this.effect}},{key:"getDurability",get:function(){return this.durability}},{key:"getPenality",get:function(){return this.penality}},{key:"getEffectDescription",get:function(){return this.effectDescription}},{key:"getItemRank",get:function(){return this.itemRank}},{key:"getTotalPonts",get:function(){return this.totalPoints}}]),e}(),C=function(){var e=Object(o.useState)(new v),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(o.useState)(""),a=Object(u.a)(r,2),s=a[0],d=a[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(l,{bonus:n.getBonus,type:n.getType,affectedAtributte:n.getAffectedAtributte,durability:n.getDurability,effect:n.getEffect,useCondition:n.getUseCondition}),Object(c.jsx)(p,{effectDescription:n.getEffectDescription,itemRank:n.getItemRank,penality:n.getPenality,handleRoll:function(){var e=new v;i(e)},handleGenerateCode:function(){var e=b(n);d(e);var t=document.createElement("textarea");t.style.width="100px",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),alert("C\xf3digo copiado !"),document.body.removeChild(t)}}),Object(c.jsx)(f,{code:s})]})},O=(n(28),function(e){var t=e.dgRankInput,n=e.bonusRoll,o=e.typeRoll,i=e.attributeRoll,r=e.conditionRoll,a=e.effectRoll,s=e.durabilityRoll;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("label",{className:"LabelTranslator",children:"Escolha o rank da DG"}),Object(c.jsx)("input",{list:"dgRanks",className:"InputTranslator",onChange:function(e){return t(e.target.value)}}),Object(c.jsxs)("datalist",{id:"dgRanks",children:[Object(c.jsx)("option",{value:"E"}),Object(c.jsx)("option",{value:"D"}),Object(c.jsx)("option",{value:"C"}),Object(c.jsx)("option",{value:"B"}),Object(c.jsx)("option",{value:"A"})]}),Object(c.jsx)("label",{className:"LabelTranslator",children:"Insira o Roll do B\xf4nus"}),Object(c.jsx)("input",{type:"number",min:"1",max:"10",className:"InputTranslator",onChange:function(e){return n(Number.parseInt(e.target.value))}}),Object(c.jsx)("label",{className:"LabelTranslator",children:"Insira o Roll do Tipo"}),Object(c.jsx)("input",{type:"number",min:"1",max:"9",className:"InputTranslator",onChange:function(e){return o(Number.parseInt(e.target.value))}}),Object(c.jsx)("label",{className:"LabelTranslator",children:"Insira o Roll do Atributo"}),Object(c.jsx)("input",{type:"number",min:"1",max:"10",className:"InputTranslator",onChange:function(e){return i(Number.parseInt(e.target.value))}}),Object(c.jsx)("label",{className:"LabelTranslator",children:"Insira o Roll da Condi\xe7\xe3o"}),Object(c.jsx)("input",{type:"number",min:"1",max:"13",className:"InputTranslator",onChange:function(e){return r(Number.parseInt(e.target.value))}}),Object(c.jsx)("label",{className:"LabelTranslator",children:"Insira o Roll do Efeito"}),Object(c.jsx)("input",{type:"number",min:"1",max:"13",className:"InputTranslator",onChange:function(e){return a(Number.parseInt(e.target.value))}}),Object(c.jsx)("label",{className:"LabelTranslator",children:"Insira o Roll de Durabilidade"}),Object(c.jsx)("input",{type:"number",min:"1",max:"13",className:"InputTranslator",onChange:function(e){return s(Number.parseInt(e.target.value))}})]})});!function(e){e[e.E=1]="E",e[e.D=2]="D",e[e.C=3]="C",e[e.B=4]="B",e[e.A=5]="A"}(y||(y={}));var A=function(){function e(t,n,o,i,r,a,s){Object(m.a)(this,e),this.DgRank="",this.bonus=0,this.type="",this.affectedAtributte="",this.useConditions="",this.effect="",this.durability=0,this.itemRank="",this.penality="",this.effectDescription="",this.totalPoints=0;var u,c=1===(u=a)||6===u?{bonus:"For\xe7a",penality:"Agilidade"}:2===u||7===u?{bonus:"Agilidade",penality:"Vitalidade"}:3===u||8===u?{bonus:"Sentidos",penality:"Intelig\xeancia"}:4===u||9===u?{bonus:"Intelig\xeancia",penality:"Sentidos"}:5===u||10===u?{bonus:"Vitalidade",penality:"For\xe7a"}:{bonus:"",penality:""},d=function(e,t){switch(y[e]){case 2:return g(t,{bonus:24,points:-10},{bonus:30,points:0},{bonus:50,points:0});case 3:return g(t,{bonus:50,points:0},{bonus:60,points:10},{bonus:100,points:10});case 4:return g(t,{bonus:100,points:10},{bonus:120,points:20},{bonus:180,points:20});case 5:return g(t,{bonus:180,points:20},{bonus:250,points:30},{bonus:340,points:30});default:return g(t,{bonus:15,points:-10},{bonus:24,points:-10},{bonus:15,points:-10})}}(n,t),l=function(e,t){switch(e){case 2:return"Elmo";case 3:return"Armadura";case 4:return"Luva";case 5:return"Bota";case 6:return"Capa";case 7:return"Anel";case 8:return"Colar";case 9:return"Runa";default:return"Arma"}}(o),p=function(e,t){if("Arma"===t)switch(e){case 2:return{points:5,effect:"Afiada",description:"+20 de dano"};case 3:return{points:5,effect:"Toque de Fogo",description:"Aplica DoT I (queimadura) uma vez por post"};case 4:return{points:5,effect:"Toque de Gelo",description:"Aplica o efeito lentid\xe3o uma vez por post"};case 5:return{points:5,effect:"Toque de Vento",description:"Aplica DoT I (sangramento) uma vez por post"};case 6:return{points:5,effect:"Toque Venenoso",description:"Aplica DoT I (veneno) uma vez por post"};case 7:return{points:10,effect:"Obra Prima",description:"+ 50 de Dano"};case 8:return{points:10,effect:"Flamejante",description:"Aplica DoT II (queimadura) uma vez por post"};case 9:return{points:10,effect:"Congelada",description:"Aplica o efeito Imobilizar uma vez por post"};case 10:return{points:10,effect:"Sagrada",description:"Cura 100 de HP do usu\xe1rio uma vez por post"};case 11:return{points:10,effect:"Tenebrosa",description:"Aplica o efeito Medo uma vez por post"};case 12:return{points:10,effect:"Vorpal",description:"Aplica DoT II (sangramento) uma vez por post"};case 13:return{points:10,effect:"Necr\xf3tica",description:"Aplica DoT II (veneno) uma vez por post"};default:return{points:-10,effect:"N/A",description:"Sem efeito"}}else switch(e){case 2:return{points:5,effect:"Prote\xe7\xe3o",description:"10% de redu\xe7\xe3o de dano f\xedsico"};case 3:return{points:5,effect:"Prote\xe7\xe3o Fogo",description:"10% de redu\xe7\xe3o de dano de fogo"};case 4:return{points:5,effect:"Prote\xe7\xe3o \xc1gua",description:"10% de redu\xe7\xe3o de dano de \xe1gua"};case 5:return{points:5,effect:"Prote\xe7\xe3o Vento",description:"10% de redu\xe7\xe3o de dano de vento"};case 6:return{points:5,effect:"Prote\xe7\xe3o Terra",description:"10% de redu\xe7\xe3o de dano de terra"};case 7:return{points:5,effect:"Prote\xe7\xe3o Sombra",description:"10% de redu\xe7\xe3o de dano de sombra"};case 8:return{points:5,effect:"Prote\xe7\xe3o Luz",description:"10% de redu\xe7\xe3o de dano de luz"};case 9:return{points:5,effect:"Prote\xe7\xe3o M\xe1gica",description:"10% de redu\xe7\xe3o de dano m\xe1gico n\xe3o elemental"};case 10:case 11:case 12:case 13:default:return{points:-10,effect:"N/A",description:"Sem efeito"}}}(r,l),f=function(e){return e<=2?{points:-5,durability:3}:e>=3&&e<=8?{points:0,durability:4}:e>=9?{points:5,durability:5}:{points:0,durability:0}}(i),b=function(e,t){if("Arma"===e){if(t>=1&&t<7)return{points:0,useCondition:"Ser Arma da Classe"};if(t>=7)return{points:-5,useCondition:"Ter Maestria com a Arma"}}else switch(t){case 2:return{points:-5,useCondition:"Ter no m\xednimo o valor do b\xf4nus em For\xe7a bruta"};case 3:return{points:-5,useCondition:"Ter no m\xednimo o valor do b\xf4nus em Agilidade bruta"};case 4:return{points:-5,useCondition:"Ter no m\xednimo o valor do b\xf4nus em Sentidos bruto"};case 5:return{points:-5,useCondition:"Ter no m\xednimo o valor do b\xf4nus em Intelig\xeancia bruta"};case 6:return{points:-5,useCondition:"Ter no m\xednimo o valor do b\xf4nus em Vitalidade bruta"};case 7:return{points:0,useCondition:"Ter foco em For\xe7a"};case 8:return{points:0,useCondition:"Ter foco em Sentidos"};case 9:return{points:0,useCondition:"Ter foco em Agilidade"};case 10:return{points:0,useCondition:"Ter foco em Intelig\xeancia"};case 11:return{points:0,useCondition:"Ter foco em Vitalidade"};case 12:return{points:-5,useCondition:"Enquanto equipado, receba DoT I Veneno"};case 13:return{points:-10,useCondition:"Receba a penalidade"};default:return{points:10,useCondition:"N/A"}}return{points:0,useCondition:""}}(l,s);this.DgRank=n,this.type=l,this.bonus=d.bonus,this.effect=p.effect,this.effectDescription=p.description,this.durability=f.durability,this.penality=c.penality,this.affectedAtributte=c.bonus,this.useConditions=b.useCondition,this.totalPoints=d.points+p.points+f.points+b.points,this.itemRank=j(this.totalPoints)}return Object(h.a)(e,[{key:"getDgRank",get:function(){return this.DgRank}},{key:"getBonus",get:function(){return this.bonus}},{key:"getType",get:function(){return this.type}},{key:"getAffectedAtributte",get:function(){return this.affectedAtributte}},{key:"getUseCondition",get:function(){return this.useConditions}},{key:"getEffect",get:function(){return this.effect}},{key:"getDurability",get:function(){return this.durability}},{key:"getItemRank",get:function(){return this.itemRank}},{key:"getPenality",get:function(){return this.penality}},{key:"getEffectDescription",get:function(){return this.effectDescription}}]),e}();n(29);function T(){var e=Object(o.useState)(""),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(o.useState)(1),a=Object(u.a)(r,2),s=a[0],d=a[1],l=Object(o.useState)(1),p=Object(u.a)(l,2),f=p[0],m=p[1],h=Object(o.useState)(1),g=Object(u.a)(h,2),j=g[0],y=g[1],v=Object(o.useState)(1),C=Object(u.a)(v,2),T=C[0],I=C[1],x=Object(o.useState)(1),R=Object(u.a)(x,2),k=R[0],D=R[1],N=Object(o.useState)(1),P=Object(u.a)(N,2),E=P[0],S=P[1],M=Object(o.useState)(""),z=Object(u.a)(M,2),F=z[0],B=z[1];return Object(c.jsxs)("div",{className:"Translator",children:[Object(c.jsx)("div",{className:"inputArea1",children:Object(c.jsx)(O,{dgRankInput:i,bonusRoll:d,attributeRoll:y,typeRoll:m,conditionRoll:I,durabilityRoll:S,effectRoll:D})}),Object(c.jsxs)("div",{className:"GenerateCodeArea",children:[Object(c.jsx)("button",{className:"GenerateCodeButton",onClick:function(){return function(){var e=b(new A(s,n,f,E,k,j,T));B(e);var t=document.createElement("textarea");t.style.width="100px",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),alert("C\xf3digo copiado !"),document.body.removeChild(t)}()},children:"GenerateCode"}),F]})]})}var I=function(){return Object(c.jsx)(a.a,{children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/rpg-sololeveling-generateitemroll",component:C}),Object(c.jsx)(s.a,{path:"/rpg-sololeveling-generateitemroll/translator",component:T})]})})};n(35);r.a.render(Object(c.jsx)(I,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.18d03b89.chunk.js.map