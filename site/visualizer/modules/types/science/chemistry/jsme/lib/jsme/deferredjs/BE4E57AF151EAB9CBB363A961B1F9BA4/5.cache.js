$wnd.jsme.runAsyncCallback5('function lR(){this.pb=sn("file");this.pb[dd]="gwt-FileUpload"}r(358,339,ni,lR);_.Fd=function(a){wv(this,a)};function mR(a){var b=$doc.createElement(Fd);NK(tg,b.tagName);this.pb=b;this.b=new wL(this.pb);this.pb[dd]="gwt-HTML";vL(this.b,a,!0);EL(this)}r(362,363,ni,mR);function nR(){dy();var a=$doc.createElement("textarea");!Tt&&(Tt=new St);!Rt&&(Rt=new Qt);this.pb=a;this.pb[dd]="gwt-TextArea"}r(402,403,ni,nR);\nfunction oR(a,b){var c,d;c=$doc.createElement(Tg);d=$doc.createElement(Dg);d[Gc]=a.a.a;d.style[Zg]=a.b.a;var e=(Vt(),ju(d));c.appendChild(e);Ut(a.d,c);Iv(a,b,d)}function sR(){Kw.call(this);this.a=(Nw(),Uw);this.b=(Vw(),Yw);this.e[$c]=$a;this.e[Zc]=$a}r(411,355,Eh,sR);_.$d=function(a){var b;b=un(a.pb);(a=Mv(this,a))&&this.d.removeChild(un(b));return a};\nfunction tR(a){try{a.w=!1;var b,c,d,e,f;d=a.hb;c=a.ab;d||(a.pb.style[$g]=we,a.ab=!1,a.le());b=a.pb;b.style[Ge]=0+(pp(),Mf);b.style[Lg]=ab;e=En()-on(a.pb,Af)>>1;f=Dn()-on(a.pb,zf)>>1;eN(a,hj(Fn($doc)+e,0),hj(Gn($doc)+f,0));d||((a.ab=c)?(Sx(a.pb,Zf),a.pb.style[$g]=ah,Ei(a.gb,200)):a.pb.style[$g]=ah)}finally{a.w=!0}}function uR(a){a.i=(new rM(a.j)).yc.af();sv(a.i,new vR(a),(uq(),uq(),vq));a.d=F(qy,q,41,[a.i])}\nfunction wR(){zN();var a,b,c,d,e;WN.call(this,(nO(),oO),null,!0);this.bh();this.db=!0;a=new mR(this.k);this.f=new nR;this.f.pb.style[ch]=cb;ev(this.f,cb);this._g();qN(this,"400px");e=new sR;e.pb.style[ve]=cb;e.e[$c]=10;c=(Nw(),Ow);e.a=c;oR(e,a);oR(e,this.f);this.e=new bx;this.e.e[$c]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],Zw(this.e,a);oR(e,this.e);EN(this,e);AM(this,!1);this.ah()}r(671,672,QI,wR);_._g=function(){uR(this)};\n_.ah=function(){var a=this.f;a.pb.readOnly=!0;var b=iv(a.pb)+"-readonly";dv(a.Nd(),b,!0)};_.bh=function(){zM(this.I.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i=null;_.j="Close";_.k="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function vR(a){this.a=a}r(674,1,{},vR);_.md=function(){GN(this.a,!1)};_.a=null;function xR(a){this.a=a}r(675,1,{},xR);\n_.Pc=function(){nv(this.a.f.pb,!0);this.a.f.pb.focus();var a=this.a.f,b;b=pn(a.pb,Yg).length;if(0<b&&a.kb){if(0>b)throw new kG("Length must be a positive integer. Length: "+b);if(b>pn(a.pb,Yg).length)throw new kG("From Index: 0  To Index: "+b+"  Text Length: "+pn(a.pb,Yg).length);try{a.pb.setSelectionRange(0,0+b)}catch(c){}}};_.a=null;function yR(a){uR(a);a.a=(new rM(a.b)).yc.af();sv(a.a,new zR(a),(uq(),uq(),vq));a.d=F(qy,q,41,[a.a,a.i])}\nfunction AR(a){a.j="Cancel";a.k="Paste the text to import into the text area below.";a.b="Accept";zM(a.I.b,"Paste")}function BR(a){zN();wR.call(this);this.c=a}r(677,671,QI,BR);_._g=function(){yR(this)};_.ah=function(){ev(this.f,"150px")};_.bh=function(){AR(this)};_.le=function(){VN(this);Zm((Wm(),Xm),new CR(this))};_.a=null;_.b=null;_.c=null;function DR(a){zN();BR.call(this,a)}r(676,677,QI,DR);_._g=function(){var a;yR(this);a=new lR;sv(a,new ER(this),(gK(),gK(),hK));this.d=F(qy,q,41,[this.a,a,this.i])};\n_.ah=function(){ev(this.f,"150px");MB(new FR(this),this.f)};_.bh=function(){AR(this);this.k+=" Or drag and drop a file on it."};function ER(a){this.a=a}r(678,1,{},ER);_.ld=function(a){var b,c;b=new FileReader;a=(c=a.a.target,c.files[0]);GR(b,new HR(this));b.readAsText(a)};_.a=null;function HR(a){this.a=a}r(679,1,{},HR);_.mf=function(a){fB();cy(this.a.a.f,a)};_.a=null;function FR(a){this.a=a;this.b=new IR(this);this.c=this.d=1}r(680,510,{},FR);_.a=null;function IR(a){this.a=a}r(681,1,{},IR);\n_.mf=function(a){this.a.a.f.pb[Yg]=null!=a?a:l};_.a=null;function zR(a){this.a=a}r(685,1,{},zR);_.md=function(){if(this.a.c){var a=this.a.c,b;b=new cB(a.a,0,pn(this.a.f.pb,Yg));TB(a.a.a,b.a)}GN(this.a,!1)};_.a=null;function CR(a){this.a=a}r(686,1,{},CR);_.Pc=function(){nv(this.a.f.pb,!0);this.a.f.pb.focus()};_.a=null;r(687,1,Xh);_.cd=function(){var a,b;a=new JR(this.a);void 0!=$wnd.FileReader?b=new DR(a):b=new BR(a);sN(b);tR(b)};function JR(a){this.a=a}r(688,1,{},JR);_.a=null;r(689,1,Xh);\n_.cd=function(){var a;a=new wR;var b=this.a,c;cy(a.f,b);b=(c=pG(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);ev(a.f,20*(10>b?b:10)+Mf);Zm((Wm(),Xm),new xR(a));sN(a);tR(a)};function GR(a,b){a.onload=function(a){b.mf(a.target.result)}}V(671);V(677);V(676);V(688);V(674);V(675);V(685);V(686);V(678);V(679);V(680);V(681);V(362);V(411);V(402);V(358);x(PI)(5);\n//@ sourceURL=5.js\n')
