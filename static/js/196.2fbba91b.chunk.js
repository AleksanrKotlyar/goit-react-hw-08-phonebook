"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[196],{1196:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var o,r,i,a,c,s,l,u,d,x,p,m,h,f=t(2791),b=t(9434),g=t(4270),v=t(6052),j=t(984),w=t(885),y=t(168),k=t(7691),Z=(0,k.ZP)("label")(o||(o=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[2]})),C=k.ZP.input(r||(r=(0,y.Z)(["\n  width: 250px;\n  font-size: 16px;\n  background-color: transparent;\n  border: none;\n  border-bottom: 0.5px solid #000000;\n  margin-bottom: ","px;\n\n  :hover {\n    outline: none;\n    box-shadow: inset 0px -3px 0px -2px ",";\n    transition: box-shadow linear 100ms;\n  }\n  :focus,\n  :active {\n    outline: none;\n    box-shadow: inset 0px -8px 3px -4px ",";\n    border-radius: 3px;\n    border-color: ",";\n    transition: box-shadow linear 500ms;\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.colorTitle}),(function(n){return n.theme.colors.colorTitle}),(function(n){return n.theme.colors.colorTitle})),S=(k.ZP.button(i||(i=(0,y.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: ","px;\n  border: 0 solid transparent;\n  padding: ","px ","px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: ","px;\n  background-color: transparent;\n  border-radius: ",";\n  box-shadow: inset -2px -2px 4px 0 #222222;\n  cursor: pointer;\n  transition: color ease-in-out 200ms, box-shadow ease-in-out 200ms;\n\n  :hover,\n  :focus {\n    background-color: ",";\n\n    box-shadow: inset -2px -2px 4px 0 ",";\n  }\n  :active {\n    background-color: ",";\n    box-shadow: inset 2px 2px 4px 0 ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.colorInteract}),(function(n){return n.theme.colors.colorTitle}),(function(n){return n.theme.colors.colorInteract}),(function(n){return n.theme.colors.colorTitle})),function(n){return n.contacts.items}),I=function(n){return n.contacts.isLoading},z=function(n){return n.filter},P=t(501),T=t(2716),L=t(9860),F=t(8141),M=t(5218),N=t(7107),A=t(7012),D=t(184),R=(0,N.Z)({components:{MuiLoadingButton:{styleOverrides:{root:{fontSize:"16px",textTransform:"capitalize",color:"#000000",borderColor:"#3d341aba","&:hover":{borderColor:"#eab013ba",boxShadow:"inset 0 0 10px 1px #eab013ba"}}}}}}),q=function(n){var e=n.handleSubmitCloseModal,t=n.defaultValue,o=void 0===t?{nick:"",phone:""}:t,r=n.btnText,i=void 0===r?"Add contact":r,a=n.id,c=(0,f.useState)(""),s=(0,w.Z)(c,2),l=s[0],u=s[1],d=(0,f.useState)(""),x=(0,w.Z)(d,2),p=x[0],m=x[1],h=(0,b.v9)(S),g=(0,b.v9)(I),y=(0,b.I0)();(0,f.useEffect)((function(){""!==o.nick&&""!==o.phone&&(u(o.nick),m(o.phone))}),[o.nick,o.phone]);var k=function(n){switch(n.target.name){case"name":u(n.target.value);break;case"number":m(n.target.value);break;default:console.log("Invalid subscription type")}};return(0,D.jsxs)(j.xu,{as:"form",display:"flex",flexDirection:"column",onSubmit:function(n){n.preventDefault();var t=l.toLocaleLowerCase(),r=h.find((function(n){return n.name.toLocaleLowerCase()===t}));if(""!==o.nick&&""!==o.phone&&l===o.nick&&p===o.phone)return e();r&&a!==r.id?M.ZP.error("Contact with name ".concat(l,"} is already in exists! Try another name"),{duration:1500,position:"top-right",style:{borderRadius:"10px",background:"#f6da26",border:"1px solid #333",color:"#000"}}):"Update"===n.currentTarget.elements[2].innerText?y((0,v.Tk)({id:a,name:l,number:p})):y((0,v.uK)({name:n.currentTarget.elements.name.value,number:n.currentTarget.elements.number.value})),r||(u(""),m(""))},autocomplete:"off",children:[(0,D.jsxs)(Z,{htmlFor:"nameId",children:[(0,D.jsx)(P.Z,{sx:{color:"black"},fontSize:"small"}),(0,D.jsx)("span",{style:{marginRight:"5px",fontSize:"20px",fontWeight:"600"},children:"Name"})]}),(0,D.jsx)(C,{id:"nameId",type:"text",name:"name",value:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:k,autocomplete:"off",autoFocus:!0}),(0,D.jsxs)(Z,{children:[(0,D.jsx)(T.Z,{sx:{color:"black"},fontSize:"small"}),(0,D.jsx)("span",{style:{marginRight:"5px",fontSize:"20px",fontWeight:"600"},children:"Number"})]}),(0,D.jsx)(C,{type:"tel",name:"number",value:p,maxLength:"20",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:k,autocomplete:"off"}),(0,D.jsx)(A.Z,{theme:R,children:(0,D.jsx)(L.Z,{loading:g,loadingPosition:"end",endIcon:(0,D.jsx)(F.Z,{}),variant:"outlined",type:"submit",size:"small",sx:{mt:"20px"},children:i})})]})},B=t(292),E=t(4808),J=(0,k.ZP)("label")(a||(a=(0,y.Z)(["\n  margin-right: 10px;\n  font-weight: 600;\n"]))),K=(k.ZP.input(c||(c=(0,y.Z)(["\n  background-color: ",";\n  width: 200px;\n  box-shadow: ",";\n  border-radius: ",";\n  outline: none;\n\n  :hover,\n  :focus {\n    background-color: ",";\n    box-shadow: none;\n  }\n"])),(function(n){return n.theme.colors.inputColor}),(function(n){return n.theme.shadows.input}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.colorInteract})),(0,N.Z)({components:{MuiInput:{styleOverrides:{root:{"&:after":{borderBottomColor:"#eab013ba"}},input:{fontFamily:"Ubuntu",fontSize:"14px",color:"#000000",padding:"0"}}}}})),O=function(){var n=(0,b.I0)(),e=(0,b.v9)(z);return(0,D.jsxs)(j.xu,{display:"flex",alignItems:"flex-end",mb:"15px",children:[(0,D.jsx)(J,{htmlFor:"filterInputId",children:"Find contacts by name:"}),(0,D.jsx)(A.Z,{theme:K,children:(0,D.jsx)(B.Z,{id:"filterInputId",type:"text",name:"filter",value:e,onChange:function(e){return n((0,E.N)(e.target.value))},autoComplete:"off"})})]})},U=k.ZP.li(s||(s=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n\n  background-color: ",";\n  border-radius: ",";\n  padding-left: ","px;\n\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"])),(function(n){return n.theme.colors.inputColor}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[3]})),_=t(2134),V=k.ZP.span(l||(l=(0,y.Z)(["\n  /* margin-left: ","px; */\n  width: 150px;\n  text-align: left;\n  margin-left: auto;\n"])),(function(n){return n.theme.space[2]})),Y=k.ZP.button(u||(u=(0,y.Z)(["\n  border: 0 solid transparent;\n  padding: ","px ","px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: ","px;\n  background-color: transparent;\n  border-radius: ",";\n  box-shadow: inset -2px -2px 4px 0 #222222;\n  cursor: pointer;\n  transition: color ease-in-out 200ms, box-shadow ease-in-out 200ms;\n\n  :hover,\n  :focus {\n    background-color: ",";\n    box-shadow: inset -2px -2px 4px 0 ",";\n  }\n  :active {\n    background-color: ",";\n    box-shadow: inset 2px 2px 4px 0 ",";\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.colorInteract}),(function(n){return n.theme.colors.colorTitle}),(function(n){return n.theme.colors.colorInteract}),(function(n){return n.theme.colors.colorTitle})),H=(0,k.ZP)(_.QML)(d||(d=(0,y.Z)(["\n  margin-right: 15px;\n  margin-left: 15px;\n  :active,\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.colorTitle})),W=k.ZP.div(x||(x=(0,y.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),G=k.ZP.div(p||(p=(0,y.Z)(["\n  position: relative;\n  padding: 24px;\n  background-image: linear-gradient(to left, #134e5e, #71b280);\n  border-radius: ",";\n"])),(function(n){return n.theme.radii.normal})),Q=k.ZP.div(m||(m=(0,y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n"]))),$=(0,k.ZP)(_.SV5)(h||(h=(0,y.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  color: black;\n\n  :focus,\n  :hover,\n  &.active {\n    color: #eab013ba;\n  }\n"]))),X=function(n){var e=n.closeModal,t=n.id,o=localStorage.getItem("persist:contacts"),r=JSON.parse(o),i=JSON.parse(r.items).find((function(n){return n.id===t})),a=function n(t){t.currentTarget!==t.target&&"Escape"!==t.key||(e(!1),document.querySelector("body").style.overflowY="visible",window.removeEventListener("keydown",n))},c=function(){return e(!1)};return document.querySelector("body").style.overflowY="hidden",window.addEventListener("keydown",a),(0,D.jsx)(W,{onClick:a,children:(0,D.jsxs)(G,{children:[(0,D.jsxs)(Q,{children:[(0,D.jsx)("p",{style:{marginLeft:"auto",marginRight:"auto",color:"#eab013ba",fontSize:"24px",marginBottom:"30px"},children:"Update contact"}),(0,D.jsx)($,{type:"button",onClick:c})]}),i&&(0,D.jsx)(q,{handleSubmitCloseModal:c,id:t,btnText:"Update",defaultValue:{nick:i.name,phone:i.number}})]})})},nn=function(n){var e=n.name,t=n.number,o=n.id,r=(0,b.I0)(),i=(0,b.v9)(I),a=(0,f.useState)(!1),c=(0,w.Z)(a,2),s=c[0],l=c[1];return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("span",{children:[e,":"]})," ",(0,D.jsx)(V,{children:t}),(0,D.jsx)(H,{type:"button",onClick:function(){return l(!0)}}),(0,D.jsxs)(Y,{type:"button",disabled:i,onClick:function(){return r((0,v.GK)(o))},children:[(0,D.jsx)(_.Psi,{}),"Delete"]}),s&&(0,D.jsx)(X,{id:o,closeModal:l})]})},en=function(){var n=(0,b.v9)(S),e=(0,b.v9)(z).toLocaleLowerCase(),t=n.filter((function(n){return n.name.toLocaleLowerCase().includes(e)}));return(0,D.jsx)(j.xu,{mr:"auto",width:"100%",mt:"5px",as:"ul",children:t.length?t.map((function(n){var e=n.id,t=n.name,o=n.number;return(0,D.jsx)(U,{children:(0,D.jsx)(nn,{name:t,number:o,id:e})},e)})):(0,D.jsx)(j.x6,{children:"No contacts find"})})},tn=t(8175),on=function(n){return(0,D.jsxs)(tn.ZP,{width:400,height:70,viewBox:"0 0 400 70",backgroundColor:"#1f55463d",children:[(0,D.jsx)("rect",{x:"5",y:"5",rx:"4",ry:"4",width:"355",height:"24"}),(0,D.jsx)("rect",{x:"5",y:"35",rx:"4",ry:"4",width:"355",height:"24"})]})},rn=(t(4339),function(){var n=(0,b.v9)(S),e=(0,b.v9)(I);return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(j.xu,{backgroundImage:"linear-gradient(to bottom, #1c7791, #71b280);)",backgroundRepeat:"no-repeat",backgroundSize:"cover",p:"4",mr:"auto",ml:"auto",mt:"3",width:"700px",minHeight:"75vh",border:"normal",borderRadius:"normal",borderColor:"#3d341aba",boxShadow:"base",as:"section",children:[(0,D.jsx)(j.Dx,{children:"Phonebook"}),(0,D.jsxs)(j.im,{children:[(0,D.jsxs)(j.xu,{display:"flex",flexDirection:"column",alignItems:"center",border:"1px  ",borderStyle:"dotted",borderColor:"colorTitle",borderRadius:"normal",maxHeight:"270px",p:"3",children:[(0,D.jsx)(j.DK,{children:"Add new contact"}),(0,D.jsx)(q,{})]}),(0,D.jsxs)(j.Jh,{children:[(0,D.jsx)(j.DK,{children:"Contacts"}),(0,D.jsx)(O,{}),n&&e&&(0,D.jsx)(on,{}),0===n.length&&!e&&(0,D.jsx)(j.x6,{children:" No contacts"}),!e&&n&&(0,D.jsx)(en,{})]})]})]})})});function an(){var n=(0,b.I0)();return(0,f.useEffect)((function(){n((0,v.yF)())}),[n]),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(g.q,{children:(0,D.jsx)("title",{children:"Your contacts"})}),(0,D.jsx)(rn,{})]})}}}]);
//# sourceMappingURL=196.2fbba91b.chunk.js.map