/*! dronestream 31-08-2013 */
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [
            function(e) {
                return r[e]
            }
        ];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('9 17={3i:\'0.1.3\',16:1e-6};l v(){}v.23={e:l(i){8(i<1||i>7.4.q)?w:7.4[i-1]},2R:l(){8 7.4.q},1u:l(){8 F.1x(7.2u(7))},24:l(a){9 n=7.4.q;9 V=a.4||a;o(n!=V.q){8 1L}J{o(F.13(7.4[n-1]-V[n-1])>17.16){8 1L}}H(--n);8 2x},1q:l(){8 v.u(7.4)},1b:l(a){9 b=[];7.28(l(x,i){b.19(a(x,i))});8 v.u(b)},28:l(a){9 n=7.4.q,k=n,i;J{i=k-n;a(7.4[i],i+1)}H(--n)},2q:l(){9 r=7.1u();o(r===0){8 7.1q()}8 7.1b(l(x){8 x/r})},1C:l(a){9 V=a.4||a;9 n=7.4.q,k=n,i;o(n!=V.q){8 w}9 b=0,1D=0,1F=0;7.28(l(x,i){b+=x*V[i-1];1D+=x*x;1F+=V[i-1]*V[i-1]});1D=F.1x(1D);1F=F.1x(1F);o(1D*1F===0){8 w}9 c=b/(1D*1F);o(c<-1){c=-1}o(c>1){c=1}8 F.37(c)},1m:l(a){9 b=7.1C(a);8(b===w)?w:(b<=17.16)},34:l(a){9 b=7.1C(a);8(b===w)?w:(F.13(b-F.1A)<=17.16)},2k:l(a){9 b=7.2u(a);8(b===w)?w:(F.13(b)<=17.16)},2j:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x+V[i-1]})},2C:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x-V[i-1]})},22:l(k){8 7.1b(l(x){8 x*k})},x:l(k){8 7.22(k)},2u:l(a){9 V=a.4||a;9 i,2g=0,n=7.4.q;o(n!=V.q){8 w}J{2g+=7.4[n-1]*V[n-1]}H(--n);8 2g},2f:l(a){9 B=a.4||a;o(7.4.q!=3||B.q!=3){8 w}9 A=7.4;8 v.u([(A[1]*B[2])-(A[2]*B[1]),(A[2]*B[0])-(A[0]*B[2]),(A[0]*B[1])-(A[1]*B[0])])},2A:l(){9 m=0,n=7.4.q,k=n,i;J{i=k-n;o(F.13(7.4[i])>F.13(m)){m=7.4[i]}}H(--n);8 m},2Z:l(x){9 a=w,n=7.4.q,k=n,i;J{i=k-n;o(a===w&&7.4[i]==x){a=i+1}}H(--n);8 a},3g:l(){8 S.2X(7.4)},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(y){8(F.13(y-x)<=17.16)?x:y})},1o:l(a){o(a.K){8 a.1o(7)}9 V=a.4||a;o(V.q!=7.4.q){8 w}9 b=0,2b;7.28(l(x,i){2b=x-V[i-1];b+=2b*2b});8 F.1x(b)},3a:l(a){8 a.1h(7)},2T:l(a){8 a.1h(7)},1V:l(t,a){9 V,R,x,y,z;2S(7.4.q){27 2:V=a.4||a;o(V.q!=2){8 w}R=S.1R(t).4;x=7.4[0]-V[0];y=7.4[1]-V[1];8 v.u([V[0]+R[0][0]*x+R[0][1]*y,V[1]+R[1][0]*x+R[1][1]*y]);1I;27 3:o(!a.U){8 w}9 C=a.1r(7).4;R=S.1R(t,a.U).4;x=7.4[0]-C[0];y=7.4[1]-C[1];z=7.4[2]-C[2];8 v.u([C[0]+R[0][0]*x+R[0][1]*y+R[0][2]*z,C[1]+R[1][0]*x+R[1][1]*y+R[1][2]*z,C[2]+R[2][0]*x+R[2][1]*y+R[2][2]*z]);1I;2P:8 w}},1t:l(a){o(a.K){9 P=7.4.2O();9 C=a.1r(P).4;8 v.u([C[0]+(C[0]-P[0]),C[1]+(C[1]-P[1]),C[2]+(C[2]-(P[2]||0))])}1d{9 Q=a.4||a;o(7.4.q!=Q.q){8 w}8 7.1b(l(x,i){8 Q[i-1]+(Q[i-1]-x)})}},1N:l(){9 V=7.1q();2S(V.4.q){27 3:1I;27 2:V.4.19(0);1I;2P:8 w}8 V},2n:l(){8\'[\'+7.4.2K(\', \')+\']\'},26:l(a){7.4=(a.4||a).2O();8 7}};v.u=l(a){9 V=25 v();8 V.26(a)};v.i=v.u([1,0,0]);v.j=v.u([0,1,0]);v.k=v.u([0,0,1]);v.2J=l(n){9 a=[];J{a.19(F.2F())}H(--n);8 v.u(a)};v.1j=l(n){9 a=[];J{a.19(0)}H(--n);8 v.u(a)};l S(){}S.23={e:l(i,j){o(i<1||i>7.4.q||j<1||j>7.4[0].q){8 w}8 7.4[i-1][j-1]},33:l(i){o(i>7.4.q){8 w}8 v.u(7.4[i-1])},2E:l(j){o(j>7.4[0].q){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][j-1])}H(--n);8 v.u(a)},2R:l(){8{2D:7.4.q,1p:7.4[0].q}},2D:l(){8 7.4.q},1p:l(){8 7.4[0].q},24:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(7.4.q!=M.q||7.4[0].q!=M[0].q){8 1L}9 b=7.4.q,15=b,i,G,10=7.4[0].q,j;J{i=15-b;G=10;J{j=10-G;o(F.13(7.4[i][j]-M[i][j])>17.16){8 1L}}H(--G)}H(--b);8 2x},1q:l(){8 S.u(7.4)},1b:l(a){9 b=[],12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;b[i]=[];J{j=10-G;b[i][j]=a(7.4[i][j],i+1,j+1)}H(--G)}H(--12);8 S.u(b)},2i:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}8(7.4.q==M.q&&7.4[0].q==M[0].q)},2j:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x+M[i-1][j-1]})},2C:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x-M[i-1][j-1]})},2B:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}8(7.4[0].q==M.q)},22:l(a){o(!a.4){8 7.1b(l(x){8 x*a})}9 b=a.1u?2x:1L;9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(!7.2B(M)){8 w}9 d=7.4.q,15=d,i,G,10=M[0].q,j;9 e=7.4[0].q,4=[],21,20,c;J{i=15-d;4[i]=[];G=10;J{j=10-G;21=0;20=e;J{c=e-20;21+=7.4[i][c]*M[c][j]}H(--20);4[i][j]=21}H(--G)}H(--d);9 M=S.u(4);8 b?M.2E(1):M},x:l(a){8 7.22(a)},32:l(a,b,c,d){9 e=[],12=c,i,G,j;9 f=7.4.q,1p=7.4[0].q;J{i=c-12;e[i]=[];G=d;J{j=d-G;e[i][j]=7.4[(a+i-1)%f][(b+j-1)%1p]}H(--G)}H(--12);8 S.u(e)},31:l(){9 a=7.4.q,1p=7.4[0].q;9 b=[],12=1p,i,G,j;J{i=1p-12;b[i]=[];G=a;J{j=a-G;b[i][j]=7.4[j][i]}H(--G)}H(--12);8 S.u(b)},1y:l(){8(7.4.q==7.4[0].q)},2A:l(){9 m=0,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(F.13(7.4[i][j])>F.13(m)){m=7.4[i][j]}}H(--G)}H(--12);8 m},2Z:l(x){9 a=w,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(7.4[i][j]==x){8{i:i+1,j:j+1}}}H(--G)}H(--12);8 w},30:l(){o(!7.1y){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][i])}H(--n);8 v.u(a)},1K:l(){9 M=7.1q(),1c;9 n=7.4.q,k=n,i,1s,1n=7.4[0].q,p;J{i=k-n;o(M.4[i][i]==0){2e(j=i+1;j<k;j++){o(M.4[j][i]!=0){1c=[];1s=1n;J{p=1n-1s;1c.19(M.4[i][p]+M.4[j][p])}H(--1s);M.4[i]=1c;1I}}}o(M.4[i][i]!=0){2e(j=i+1;j<k;j++){9 a=M.4[j][i]/M.4[i][i];1c=[];1s=1n;J{p=1n-1s;1c.19(p<=i?0:M.4[j][p]-M.4[i][p]*a)}H(--1s);M.4[j]=1c}}}H(--n);8 M},3h:l(){8 7.1K()},2z:l(){o(!7.1y()){8 w}9 M=7.1K();9 a=M.4[0][0],n=M.4.q-1,k=n,i;J{i=k-n+1;a=a*M.4[i][i]}H(--n);8 a},3f:l(){8 7.2z()},2y:l(){8(7.1y()&&7.2z()===0)},2Y:l(){o(!7.1y()){8 w}9 a=7.4[0][0],n=7.4.q-1,k=n,i;J{i=k-n+1;a+=7.4[i][i]}H(--n);8 a},3e:l(){8 7.2Y()},1Y:l(){9 M=7.1K(),1Y=0;9 a=7.4.q,15=a,i,G,10=7.4[0].q,j;J{i=15-a;G=10;J{j=10-G;o(F.13(M.4[i][j])>17.16){1Y++;1I}}H(--G)}H(--a);8 1Y},3d:l(){8 7.1Y()},2W:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}9 T=7.1q(),1p=T.4[0].q;9 b=T.4.q,15=b,i,G,10=M[0].q,j;o(b!=M.q){8 w}J{i=15-b;G=10;J{j=10-G;T.4[i][1p+j]=M[i][j]}H(--G)}H(--b);8 T},2w:l(){o(!7.1y()||7.2y()){8 w}9 a=7.4.q,15=a,i,j;9 M=7.2W(S.I(a)).1K();9 b,1n=M.4[0].q,p,1c,2v;9 c=[],2c;J{i=a-1;1c=[];b=1n;c[i]=[];2v=M.4[i][i];J{p=1n-b;2c=M.4[i][p]/2v;1c.19(2c);o(p>=15){c[i].19(2c)}}H(--b);M.4[i]=1c;2e(j=0;j<i;j++){1c=[];b=1n;J{p=1n-b;1c.19(M.4[j][p]-M.4[i][p]*M.4[j][i])}H(--b);M.4[j]=1c}}H(--a);8 S.u(c)},3c:l(){8 7.2w()},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(p){8(F.13(p-x)<=17.16)?x:p})},2n:l(){9 a=[];9 n=7.4.q,k=n,i;J{i=k-n;a.19(v.u(7.4[i]).2n())}H(--n);8 a.2K(\'\\n\')},26:l(a){9 i,4=a.4||a;o(1g(4[0][0])!=\'1f\'){9 b=4.q,15=b,G,10,j;7.4=[];J{i=15-b;G=4[i].q;10=G;7.4[i]=[];J{j=10-G;7.4[i][j]=4[i][j]}H(--G)}H(--b);8 7}9 n=4.q,k=n;7.4=[];J{i=k-n;7.4.19([4[i]])}H(--n);8 7}};S.u=l(a){9 M=25 S();8 M.26(a)};S.I=l(n){9 a=[],k=n,i,G,j;J{i=k-n;a[i]=[];G=k;J{j=k-G;a[i][j]=(i==j)?1:0}H(--G)}H(--n);8 S.u(a)};S.2X=l(a){9 n=a.q,k=n,i;9 M=S.I(n);J{i=k-n;M.4[i][i]=a[i]}H(--n);8 M};S.1R=l(b,a){o(!a){8 S.u([[F.1H(b),-F.1G(b)],[F.1G(b),F.1H(b)]])}9 d=a.1q();o(d.4.q!=3){8 w}9 e=d.1u();9 x=d.4[0]/e,y=d.4[1]/e,z=d.4[2]/e;9 s=F.1G(b),c=F.1H(b),t=1-c;8 S.u([[t*x*x+c,t*x*y-s*z,t*x*z+s*y],[t*x*y+s*z,t*y*y+c,t*y*z-s*x],[t*x*z-s*y,t*y*z+s*x,t*z*z+c]])};S.3b=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[1,0,0],[0,c,-s],[0,s,c]])};S.39=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,0,s],[0,1,0],[-s,0,c]])};S.38=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,-s,0],[s,c,0],[0,0,1]])};S.2J=l(n,m){8 S.1j(n,m).1b(l(){8 F.2F()})};S.1j=l(n,m){9 a=[],12=n,i,G,j;J{i=n-12;a[i]=[];G=m;J{j=m-G;a[i][j]=0}H(--G)}H(--12);8 S.u(a)};l 14(){}14.23={24:l(a){8(7.1m(a)&&7.1h(a.K))},1q:l(){8 14.u(7.K,7.U)},2U:l(a){9 V=a.4||a;8 14.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.U)},1m:l(a){o(a.W){8 a.1m(7)}9 b=7.U.1C(a.U);8(F.13(b)<=17.16||F.13(b-F.1A)<=17.16)},1o:l(a){o(a.W){8 a.1o(7)}o(a.U){o(7.1m(a)){8 7.1o(a.K)}9 N=7.U.2f(a.U).2q().4;9 A=7.K.4,B=a.K.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,D=7.U.4;9 b=P[0]-A[0],2a=P[1]-A[1],29=(P[2]||0)-A[2];9 c=F.1x(b*b+2a*2a+29*29);o(c===0)8 0;9 d=(b*D[0]+2a*D[1]+29*D[2])/c;9 e=1-d*d;8 F.13(c*F.1x(e<0?0:e))}},1h:l(a){9 b=7.1o(a);8(b!==w&&b<=17.16)},2T:l(a){8 a.1h(7)},1v:l(a){o(a.W){8 a.1v(7)}8(!7.1m(a)&&7.1o(a)<=17.16)},1U:l(a){o(a.W){8 a.1U(7)}o(!7.1v(a)){8 w}9 P=7.K.4,X=7.U.4,Q=a.K.4,Y=a.U.4;9 b=X[0],1z=X[1],1B=X[2],1T=Y[0],1S=Y[1],1M=Y[2];9 c=P[0]-Q[0],2s=P[1]-Q[1],2r=P[2]-Q[2];9 d=-b*c-1z*2s-1B*2r;9 e=1T*c+1S*2s+1M*2r;9 f=b*b+1z*1z+1B*1B;9 g=1T*1T+1S*1S+1M*1M;9 h=b*1T+1z*1S+1B*1M;9 k=(d*g/f+h*e)/(g-h*h);8 v.u([P[0]+k*b,P[1]+k*1z,P[2]+k*1B])},1r:l(a){o(a.U){o(7.1v(a)){8 7.1U(a)}o(7.1m(a)){8 w}9 D=7.U.4,E=a.U.4;9 b=D[0],1l=D[1],1k=D[2],1P=E[0],1O=E[1],1Q=E[2];9 x=(1k*1P-b*1Q),y=(b*1O-1l*1P),z=(1l*1Q-1k*1O);9 N=v.u([x*1Q-y*1O,y*1P-z*1Q,z*1O-x*1P]);9 P=11.u(a.K,N);8 P.1U(7)}1d{9 P=a.4||a;o(7.1h(P)){8 v.u(P)}9 A=7.K.4,D=7.U.4;9 b=D[0],1l=D[1],1k=D[2],1w=A[0],18=A[1],1a=A[2];9 x=b*(P[1]-18)-1l*(P[0]-1w),y=1l*((P[2]||0)-1a)-1k*(P[1]-18),z=1k*(P[0]-1w)-b*((P[2]||0)-1a);9 V=v.u([1l*x-1k*z,1k*y-b*x,b*z-1l*y]);9 k=7.1o(P)/V.1u();8 v.u([P[0]+V.4[0]*k,P[1]+V.4[1]*k,(P[2]||0)+V.4[2]*k])}},1V:l(t,a){o(1g(a.U)==\'1f\'){a=14.u(a.1N(),v.k)}9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,D=7.U.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 14.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*D[0]+R[0][1]*D[1]+R[0][2]*D[2],R[1][0]*D[0]+R[1][1]*D[1]+R[1][2]*D[2],R[2][0]*D[0]+R[2][1]*D[1]+R[2][2]*D[2]])},1t:l(a){o(a.W){9 A=7.K.4,D=7.U.4;9 b=A[0],18=A[1],1a=A[2],2N=D[0],1l=D[1],1k=D[2];9 c=7.K.1t(a).4;9 d=b+2N,2h=18+1l,2o=1a+1k;9 Q=a.1r([d,2h,2o]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2h)-c[1],Q[2]+(Q[2]-2o)-c[2]];8 14.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 14.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.U)}},1Z:l(a,b){a=v.u(a);b=v.u(b);o(a.4.q==2){a.4.19(0)}o(b.4.q==2){b.4.19(0)}o(a.4.q>3||b.4.q>3){8 w}9 c=b.1u();o(c===0){8 w}7.K=a;7.U=v.u([b.4[0]/c,b.4[1]/c,b.4[2]/c]);8 7}};14.u=l(a,b){9 L=25 14();8 L.1Z(a,b)};14.X=14.u(v.1j(3),v.i);14.Y=14.u(v.1j(3),v.j);14.Z=14.u(v.1j(3),v.k);l 11(){}11.23={24:l(a){8(7.1h(a.K)&&7.1m(a))},1q:l(){8 11.u(7.K,7.W)},2U:l(a){9 V=a.4||a;8 11.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.W)},1m:l(a){9 b;o(a.W){b=7.W.1C(a.W);8(F.13(b)<=17.16||F.13(F.1A-b)<=17.16)}1d o(a.U){8 7.W.2k(a.U)}8 w},2k:l(a){9 b=7.W.1C(a.W);8(F.13(F.1A/2-b)<=17.16)},1o:l(a){o(7.1v(a)||7.1h(a)){8 0}o(a.K){9 A=7.K.4,B=a.K.4,N=7.W.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;8 F.13((A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2])}},1h:l(a){o(a.W){8 w}o(a.U){8(7.1h(a.K)&&7.1h(a.K.2j(a.U)))}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=F.13(N[0]*(A[0]-P[0])+N[1]*(A[1]-P[1])+N[2]*(A[2]-(P[2]||0)));8(b<=17.16)}},1v:l(a){o(1g(a.U)==\'1f\'&&1g(a.W)==\'1f\'){8 w}8!7.1m(a)},1U:l(a){o(!7.1v(a)){8 w}o(a.U){9 A=a.K.4,D=a.U.4,P=7.K.4,N=7.W.4;9 b=(N[0]*(P[0]-A[0])+N[1]*(P[1]-A[1])+N[2]*(P[2]-A[2]))/(N[0]*D[0]+N[1]*D[1]+N[2]*D[2]);8 v.u([A[0]+D[0]*b,A[1]+D[1]*b,A[2]+D[2]*b])}1d o(a.W){9 c=7.W.2f(a.W).2q();9 N=7.W.4,A=7.K.4,O=a.W.4,B=a.K.4;9 d=S.1j(2,2),i=0;H(d.2y()){i++;d=S.u([[N[i%3],N[(i+1)%3]],[O[i%3],O[(i+1)%3]]])}9 e=d.2w().4;9 x=N[0]*A[0]+N[1]*A[1]+N[2]*A[2];9 y=O[0]*B[0]+O[1]*B[1]+O[2]*B[2];9 f=[e[0][0]*x+e[0][1]*y,e[1][0]*x+e[1][1]*y];9 g=[];2e(9 j=1;j<=3;j++){g.19((i==j)?0:f[(j+(5-i)%3)%3])}8 14.u(g,c)}},1r:l(a){9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=(A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2];8 v.u([P[0]+N[0]*b,P[1]+N[1]*b,(P[2]||0)+N[2]*b])},1V:l(t,a){9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,N=7.W.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 11.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*N[0]+R[0][1]*N[1]+R[0][2]*N[2],R[1][0]*N[0]+R[1][1]*N[1]+R[1][2]*N[2],R[2][0]*N[0]+R[2][1]*N[1]+R[2][2]*N[2]])},1t:l(a){o(a.W){9 A=7.K.4,N=7.W.4;9 b=A[0],18=A[1],1a=A[2],2M=N[0],2L=N[1],2Q=N[2];9 c=7.K.1t(a).4;9 d=b+2M,2p=18+2L,2m=1a+2Q;9 Q=a.1r([d,2p,2m]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2p)-c[1],Q[2]+(Q[2]-2m)-c[2]];8 11.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 11.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.W)}},1Z:l(a,b,c){a=v.u(a);a=a.1N();o(a===w){8 w}b=v.u(b);b=b.1N();o(b===w){8 w}o(1g(c)==\'1f\'){c=w}1d{c=v.u(c);c=c.1N();o(c===w){8 w}}9 d=a.4[0],18=a.4[1],1a=a.4[2];9 e=b.4[0],1W=b.4[1],1X=b.4[2];9 f,1i;o(c!==w){9 g=c.4[0],2l=c.4[1],2t=c.4[2];f=v.u([(1W-18)*(2t-1a)-(1X-1a)*(2l-18),(1X-1a)*(g-d)-(e-d)*(2t-1a),(e-d)*(2l-18)-(1W-18)*(g-d)]);1i=f.1u();o(1i===0){8 w}f=v.u([f.4[0]/1i,f.4[1]/1i,f.4[2]/1i])}1d{1i=F.1x(e*e+1W*1W+1X*1X);o(1i===0){8 w}f=v.u([b.4[0]/1i,b.4[1]/1i,b.4[2]/1i])}7.K=a;7.W=f;8 7}};11.u=l(a,b,c){9 P=25 11();8 P.1Z(a,b,c)};11.2I=11.u(v.1j(3),v.k);11.2H=11.u(v.1j(3),v.i);11.2G=11.u(v.1j(3),v.j);11.36=11.2I;11.35=11.2H;11.3j=11.2G;9 $V=v.u;9 $M=S.u;9 $L=14.u;9 $P=11.u;', 62, 206, '||||elements|||this|return|var||||||||||||function|||if||length||||create|Vector|null|||||||||Math|nj|while||do|anchor||||||||Matrix||direction||normal||||kj|Plane|ni|abs|Line|ki|precision|Sylvester|A2|push|A3|map|els|else||undefined|typeof|contains|mod|Zero|D3|D2|isParallelTo|kp|distanceFrom|cols|dup|pointClosestTo|np|reflectionIn|modulus|intersects|A1|sqrt|isSquare|X2|PI|X3|angleFrom|mod1|C2|mod2|sin|cos|break|C3|toRightTriangular|false|Y3|to3D|E2|E1|E3|Rotation|Y2|Y1|intersectionWith|rotate|v12|v13|rank|setVectors|nc|sum|multiply|prototype|eql|new|setElements|case|each|PA3|PA2|part|new_element|round|for|cross|product|AD2|isSameSizeAs|add|isPerpendicularTo|v22|AN3|inspect|AD3|AN2|toUnitVector|PsubQ3|PsubQ2|v23|dot|divisor|inverse|true|isSingular|determinant|max|canMultiplyFromLeft|subtract|rows|col|random|ZX|YZ|XY|Random|join|N2|N1|D1|slice|default|N3|dimensions|switch|liesIn|translate|snapTo|augment|Diagonal|trace|indexOf|diagonal|transpose|minor|row|isAntiparallelTo|ZY|YX|acos|RotationZ|RotationY|liesOn|RotationX|inv|rk|tr|det|toDiagonalMatrix|toUpperTriangular|version|XZ'.split('|'), 0, {}))

function a(b) {
    throw b
}
var aa = void 0,
    ca = true,
    ha = null,
    ka = false,
    ma = [],
    na = typeof process === "object",
    oa = typeof window === "object",
    ua = typeof importScripts === "function",
    La = !oa && !na && !ua;
if (na) {
    print = (function(b) {
        process.stdout.write(b + "\n")
    });
    printErr = (function(b) {
        process.stderr.write(b + "\n")
    });
    var Ma = require("fs");
    read = (function(b) {
        var c = Ma.readFileSync(b).toString();
        !c && b[0] != "/" && (b = __dirname.split("/").slice(0, -1).join("/") + "/src/" + b, c = Ma.readFileSync(b).toString());
        return c
    });
    ma = process.argv.slice(2)
} else {
    La ? (this.read || (read = (function(b) {
        snarf(b)
    })), ma = this.arguments ? arguments : scriptArgs) : oa ? (print = printErr = (function(b) {
        console.log(b)
    }), read = (function(b) {
        var c = new XMLHttpRequest;
        c.open("GET", b, ka);
        c.send(ha);
        return c.responseText
    }), this.arguments && (ma = arguments)) : ua ? load = importScripts : a("Unknown runtime environment. Where are we?")
}

function Wa(b) {
    eval.call(ha, b)
}
typeof load == "undefined" && typeof read != "undefined" && (load = (function(b) {
    Wa(read(b))
}));
typeof printErr === "undefined" && (printErr = (function() {}));
typeof print === "undefined" && (print = printErr);
try {
    this.Module = Module
} catch (ab) {
    this.Module = Module = {}
}
if (!Module.arguments) {
    Module.arguments = ma
}
if (Module.print) {
    print = Module.print
}

function bb(b) {
    var c = m;
    m += b;
    m = m + 3 >> 2 << 2;
    return c
}

function vb(b) {
    var c = xb;
    xb += b;
    xb = xb + 3 >> 2 << 2;
    if (xb >= yb) {
        for (; yb <= xb;) {
            yb = Math.ceil(2 * yb / zb) * zb
        }
        var b = q,
            d = new ArrayBuffer(yb);
        q = new Int8Array(d);
        x = new Int16Array(d);
        y = new Int32Array(d);
        A = new Uint8Array(d);
        Gb = new Uint16Array(d);
        F = new Uint32Array(d);
        Hb = new Float32Array(d);
        q.set(b)
    }
    return c
}
var Kb = 4,
    Mb = {},
    Ob = {
        N: 0,
        v: 0,
        Ma: {},
        La: (function(b, c) {
            c || (this.v++, this.v >= this.N && Nb("\n\nToo many corrections!"))
        }),
        print: (function() {})
    },
    I = 0,
    Pb, J;

function Nb(b) {
    print(b + ":\n" + Error().stack);
    a("Assertion: " + b)
}

function Sb(b, c) {
    b || Nb("Assertion failed: " + c)
}
var ac = this;
Module.ccall = (function(b, c, d, f) {
    try {
        var g = eval("_" + b)
    } catch (e) {
        try {
            g = ac.Module["_" + b]
        } catch (i) {}
    }
    Sb(g, "Cannot call unknown function " + b + " (perhaps LLVM optimizations or closure removed it?)");
    var h = 0,
        b = f ? f.map((function(b) {
            if (d[h++] == "string") {
                var c = m;
                bb(b.length + 1);
                bc(b, c);
                b = c
            }
            return b
        })) : [];
    return (function(b, c) {
        return c == "string" ? cc(b) : b
    })(g.apply(ha, b), c)
});

function dc(b, c, d) {
    d = d || "i8";
    d[d.length - 1] === "*" && (d = "i32");
    switch (d) {
        case "i1":
            q[b] = c;
            break;
        case "i8":
            q[b] = c;
            break;
        case "i16":
            x[b >> 1] = c;
            break;
        case "i32":
            y[b >> 2] = c;
            break;
        case "i64":
            y[b >> 2] = c;
            break;
        case "float":
            Hb[b >> 2] = c;
            break;
        case "double":
            ec[0] = c;
            y[b >> 2] = gc[0];
            y[b + 4 >> 2] = gc[1];
            break;
        default:
            Nb("invalid type for setValue: " + d)
    }
}
Module.setValue = dc;
Module.getValue = (function(b, c) {
    c = c || "i8";
    c[c.length - 1] === "*" && (c = "i32");
    switch (c) {
        case "i1":
            return q[b];
        case "i8":
            return q[b];
        case "i16":
            return x[b >> 1];
        case "i32":
            return y[b >> 2];
        case "i64":
            return y[b >> 2];
        case "float":
            return Hb[b >> 2];
        case "double":
            return gc[0] = y[b >> 2], gc[1] = y[b + 4 >> 2], ec[0];
        default:
            Nb("invalid type for setValue: " + c)
    }
    return ha
});
var M = 2;
Module.ALLOC_NORMAL = 0;
Module.ALLOC_STACK = 1;
Module.ALLOC_STATIC = M;

function P(b, c, d) {
    var f, g;
    typeof b === "number" ? (f = ca, g = b) : (f = ka, g = b.length);
    var e = typeof c === "string" ? c : ha,
        d = [jc, bb, vb][d === aa ? M : d](Math.max(g, e ? 1 : c.length));
    if (f) {
        return kc(d, 0, g), d
    }
    for (var i = 0; i < g;) {
        var h = b[i];
        typeof h === "function" && (h = Mb.Ka(h));
        f = e || c[i];
        f === 0 ? i++ : (f == "i64" && (f = "i32"), dc(d + i, h, f), Kb == 1 ? f = 1 : (h = {
            "%i1": 1,
            "%i8": 1,
            "%i16": 2,
            "%i32": 4,
            "%i64": 8,
            "%float": 4,
            "%double": 8
        }["%" + f], h || (f[f.length - 1] == "*" ? h = Kb : f[0] == "i" && (f = parseInt(f.substr(1)), Sb(f % 8 == 0), h = f / 8)), f = h), i += f)
    }
    return d
}
Module.allocate = P;

function cc(b, c) {
    for (var d = typeof c == "undefined", f = "", g = 0, e, i = String.fromCharCode(0);;) {
        e = String.fromCharCode(A[b + g]);
        if (d && e == i) {
            break
        }
        f += e;
        g += 1;
        if (!d && g == c) {
            break
        }
    }
    return f
}
Module.Pointer_stringify = cc;
Module.Array_stringify = (function(b) {
    for (var c = "", d = 0; d < b.length; d++) {
        c += String.fromCharCode(b[d])
    }
    return c
});
var lc, zb = 4096,
    q, A, x, Gb, y, F, Hb, m, mc, xb, nc = Module.TOTAL_STACK || 5242880,
    yb = Module.TOTAL_MEMORY || 52428800;
Sb(!!Int32Array && !!Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "Cannot fallback to non-typed array case: Code is too specialized");
var oc = new ArrayBuffer(yb);
q = new Int8Array(oc);
x = new Int16Array(oc);
y = new Int32Array(oc);
A = new Uint8Array(oc);
Gb = new Uint16Array(oc);
F = new Uint32Array(oc);
Hb = new Float32Array(oc);
y[0] = 255;
Sb(A[0] === 255 && A[3] === 0, "Typed arrays 2 must be run on a little-endian system");
var sc = rc("(null)");
xb = sc.length;
for (var tc = 0; tc < sc.length; tc++) {
    q[tc] = sc[tc]
}
Module.HEAP = aa;
Module.HEAP8 = q;
Module.HEAP16 = x;
Module.HEAP32 = y;
Module.HEAPU8 = A;
Module.HEAPU16 = Gb;
Module.HEAPU32 = F;
Module.HEAPF32 = Hb;
mc = (m = Math.ceil(xb / 4) * 4) + nc;
var uc = Math.ceil(mc / 8) * 8;
q.subarray(uc);
var gc = y.subarray(uc >> 2);
Hb.subarray(uc >> 2);
var ec = (new Float64Array(q.buffer)).subarray(uc >> 3);
mc = uc + 8;
xb = Math.ceil(mc / zb) * zb;

function vc(b) {
    for (; b.length > 0;) {
        var c = b.shift(),
            d = c.C;
        typeof d === "number" && (d = lc[d]);
        d(c.ra === aa ? ha : c.ra)
    }
}
var wc = [],
    xc = [];

function zc(b, c) {
    return Array.prototype.slice.call(q.subarray(b, b + c))
}
Module.Array_copy = zc;
Module.TypedArray_copy = (function(b, c) {
    for (var d = new Uint8Array(c), f = 0; f < c; ++f) {
        d[f] = q[b + f]
    }
    return d.buffer
});

function Ac(b) {
    for (var c = 0; q[b + c];) {
        c++
    }
    return c
}
Module.String_len = Ac;
Module.String_copy = (function(b, c) {
    var d = Ac(b);
    c && d++;
    var f = zc(b, d);
    c && (f[d - 1] = 0);
    return f
});

function rc(b, c) {
    for (var d = [], f = 0; f < b.length;) {
        var g = b.charCodeAt(f);
        g > 255 && (g &= 255);
        d.push(g);
        f += 1
    }
    c || d.push(0);
    return d
}
Module.intArrayFromString = rc;
Module.intArrayToString = (function(b) {
    for (var c = [], d = 0; d < b.length; d++) {
        var f = b[d];
        f > 255 && (f &= 255);
        c.push(String.fromCharCode(f))
    }
    return c.join("")
});

function bc(b, c, d) {
    for (var f = 0; f < b.length;) {
        var g = b.charCodeAt(f);
        g > 255 && (g &= 255);
        q[c + f] = g;
        f += 1
    }
    d || (q[c + f] = 0)
}
Module.writeStringToMemory = bc;
var Q = [];

function Bc(b) {
    return (b | 0) < 0 ? -b | 0 : b
}

function Cc(b, c, d) {
    return (d | 0) < (b | 0) ? b : (d | 0) > (c | 0) ? c : d
}

function Dc(b, c, d, f) {
    var g, e = A[Q.n + c | 0] & 255,
        i = A[Q.o + c | 0] & 255,
        c = y[Ec + i * 12 >> 2] << e,
        h = y[Ec + i * 12 + 4 >> 2] << e,
        e = y[Ec + i * 12 + 8 >> 2] << e;
    (d | 0) == 0 && (y[b >> 2] = y[b >> 2] * c | 0);
    d = (f & 65436 | 0) == 0;
    a: do {
        if (d) {
            if ((f & 98 | 0) == 0) {
                if (g = y[b >> 2] + 32 >> 6, (g + 512 | 0) >>> 0 > 1023) {
                    var k = 1;
                    g = 18
                } else {
                    y[b + 60 >> 2] = g, y[b + 56 >> 2] = g, y[b + 52 >> 2] = g, y[b + 48 >> 2] = g, y[b + 44 >> 2] = g, y[b + 40 >> 2] = g, y[b + 36 >> 2] = g, y[b + 32 >> 2] = g, y[b + 28 >> 2] = g, y[b + 24 >> 2] = g, y[b + 20 >> 2] = g, y[b + 16 >> 2] = g, y[b + 12 >> 2] = g, y[b + 8 >> 2] = g, y[b + 4 >> 2] = g, y[b >> 2] = g, g = 17
                }
            } else {
                var l = b + 4 | 0,
                    j = y[l >> 2] * h | 0;
                g = b + 20 | 0;
                var n = y[g >> 2] * c | 0,
                    p = b + 8 | 0,
                    i = b + 24 | 0,
                    r = y[i >> 2] * h | 0,
                    o = b + 12 | 0,
                    t = y[b >> 2],
                    s = t - n | 0,
                    u = (j >> 1) - r | 0,
                    j = j + (r >> 1) | 0,
                    t = t + (n + 32) | 0,
                    n = t + j >> 6;
                y[b >> 2] = n;
                r = s + 32 | 0;
                s = r + u >> 6;
                y[l >> 2] = s;
                l = r - u >> 6;
                y[p >> 2] = l;
                p = t - j >> 6;
                y[o >> 2] = p;
                y[b + 48 >> 2] = n;
                y[b + 32 >> 2] = n;
                y[b + 16 >> 2] = n;
                y[b + 52 >> 2] = s;
                y[b + 36 >> 2] = s;
                y[g >> 2] = s;
                y[b + 56 >> 2] = l;
                y[b + 40 >> 2] = l;
                y[i >> 2] = l;
                y[b + 60 >> 2] = p;
                y[b + 44 >> 2] = p;
                y[b + 28 >> 2] = p;
                (n + 512 | 0) >>> 0 > 1023 ? (k = 1, g = 18) : (s + 512 | 0) >>> 0 > 1023 ? (k = 1, g = 18) : (l + 512 | 0) >>> 0 > 1023 ? (k = 1, g = 18) : (p + 512 | 0) >>> 0 > 1023 ? (k = 1, g = 18) : g = 17
            }
        } else {
            var w = b + 4 | 0,
                i = b + 56 | 0,
                s = y[i >> 2],
                o = b + 60 | 0,
                v = y[w >> 2] * h | 0,
                u = y[o >> 2] * e | 0,
                z = b + 8 | 0,
                B = y[z >> 2],
                D = b + 20 | 0,
                C = b + 16 | 0,
                E = y[D >> 2] * c | 0,
                G = y[C >> 2] * e | 0,
                t = b + 32 | 0,
                H = b + 12 | 0,
                K = y[H >> 2],
                L = b + 24 | 0,
                N = y[t >> 2] * h | 0,
                O = y[L >> 2] * h | 0,
                R = b + 28 | 0,
                U = y[R >> 2],
                p = b + 48 | 0,
                r = b + 36 | 0,
                n = y[r >> 2],
                Y = y[p >> 2] * e | 0,
                X = b + 40 | 0,
                ba = b + 44 | 0,
                $ = y[ba >> 2],
                l = b + 52 | 0,
                j = y[X >> 2] * e | 0,
                ja = y[l >> 2] * h | 0,
                sa = y[b >> 2],
                Ea = E + sa | 0,
                E = sa - E | 0,
                sa = (v >> 1) - O | 0,
                v = (O >> 1) + v | 0;
            y[b >> 2] = v + Ea | 0;
            y[w >> 2] = sa + E | 0;
            y[z >> 2] = E - sa | 0;
            y[H >> 2] = Ea - v | 0;
            w = h * (U + B) | 0;
            B = (B - U) * h | 0;
            U = (G >> 1) - Y | 0;
            G = (Y >> 1) + G | 0;
            y[C >> 2] = G + w | 0;
            y[D >> 2] = U + B | 0;
            y[L >> 2] = B - U | 0;
            y[R >> 2] = w - G | 0;
            D = c * ($ + K) | 0;
            K = (K - $) * c | 0;
            $ = (N >> 1) - ja | 0;
            N = (ja >> 1) + N | 0;
            y[t >> 2] = N + D | 0;
            y[r >> 2] = $ + K | 0;
            y[X >> 2] = K - $ | 0;
            y[ba >> 2] = D - N | 0;
            t = h * (s + n) | 0;
            s = (n - s) * h | 0;
            n = (j >> 1) - u | 0;
            u = (u >> 1) + j | 0;
            y[p >> 2] = u + t | 0;
            y[l >> 2] = n + s | 0;
            y[i >> 2] = s - n | 0;
            y[o >> 2] = t - u | 0;
            for (i = 0;;) {
                s = b + (i << 2) | 0;
                o = b + (i + 12 << 2) | 0;
                l = b + (i + 4 << 2) | 0;
                p = b + (i + 8 << 2) | 0;
                if ((i | 0) == 4) {
                    g = 17;
                    break a
                }
                t = y[s >> 2];
                r = y[p >> 2];
                n = t - r | 0;
                j = y[l >> 2];
                X = y[o >> 2];
                u = (j >> 1) - X | 0;
                j = (X >> 1) + j | 0;
                r = t + (r + 32) | 0;
                t = r + j >> 6;
                y[s >> 2] = t;
                n = n + 32 | 0;
                s = n + u >> 6;
                y[l >> 2] = s;
                l = n - u >> 6;
                y[p >> 2] = l;
                p = r - j >> 6;
                y[o >> 2] = p;
                if ((t + 512 | 0) >>> 0 > 1023) {
                    k = 1;
                    g = 18;
                    break a
                }
                if ((s + 512 | 0) >>> 0 > 1023) {
                    k = 1;
                    g = 18;
                    break a
                }
                if ((l + 512 | 0) >>> 0 > 1023) {
                    k = 1;
                    g = 18;
                    break a
                }
                if ((p + 512 | 0) >>> 0 > 1023) {
                    k = 1;
                    g = 18;
                    break a
                }
                i = i + 1 | 0
            }
        }
    } while (0);
    g == 17 && (k = 0);
    return k
}
Dc.X = 1;

function Gc(b, c) {
    var d = A[Q.o + c | 0],
        f = A[Q.n + c | 0],
        g = b + 8 | 0,
        e = y[g >> 2],
        i = b + 20 | 0,
        h = y[i >> 2],
        k = b + 16 | 0,
        l = y[k >> 2],
        j = b + 32 | 0,
        n = y[j >> 2],
        p = b + 12 | 0,
        r = y[p >> 2],
        o = b + 24 | 0,
        t = y[o >> 2],
        s = b + 28 | 0,
        u = y[s >> 2],
        w = b + 48 | 0,
        v = y[w >> 2],
        z = b + 36 | 0,
        B = y[z >> 2],
        D = b + 40 | 0,
        C = y[D >> 2],
        E = b + 44 | 0,
        G = y[E >> 2],
        H = b + 52 | 0,
        K = y[H >> 2],
        L = b + 4 | 0,
        N = y[b >> 2],
        O = h + N | 0,
        R = N - h | 0,
        U = y[L >> 2],
        Y = U - t | 0,
        X = t + U | 0,
        ba = X + O | 0;
    y[b >> 2] = ba;
    var $ = Y + R | 0;
    y[L >> 2] = $;
    var ja = R - Y | 0;
    y[g >> 2] = ja;
    var sa = O - X | 0;
    y[p >> 2] = sa;
    var Ea = u + e | 0,
        Xa = e - u | 0,
        ea = l - v | 0,
        fa = v + l | 0,
        va = fa + Ea | 0;
    y[k >> 2] = va;
    var ob = ea + Xa | 0;
    y[i >> 2] = ob;
    var wa = Xa - ea | 0;
    y[o >> 2] = wa;
    var pb = Ea - fa | 0;
    y[s >> 2] = pb;
    var gb = G + r | 0,
        Ib = r - G | 0,
        Fa = n - K | 0,
        qb = K + n | 0,
        Ya = qb + gb | 0;
    y[j >> 2] = Ya;
    var Na = Fa + Ib | 0;
    y[z >> 2] = Na;
    var za = Ib - Fa | 0;
    y[D >> 2] = za;
    var da = gb - qb | 0;
    y[E >> 2] = da;
    var Oa = b + 56 | 0,
        Za = b + 60 | 0,
        Aa = y[Oa >> 2],
        hb = Aa + B | 0,
        Ga = B - Aa | 0,
        Pa = y[Za >> 2],
        $a = C - Pa | 0,
        Ab = Pa + C | 0,
        cb = Ab + hb | 0;
    y[w >> 2] = cb;
    var rb = $a + Ga | 0;
    y[H >> 2] = rb;
    var Qa = Ga - $a | 0;
    y[Oa >> 2] = Qa;
    var pa = hb - Ab | 0;
    y[Za >> 2] = pa;
    var ia = f & 255,
        qa = F[Ec + (d & 255) * 12 >> 2],
        Ra = c >>> 0 > 11;
    a: do {
        if (Ra) {
            var ra = qa << ia - 2,
                ib = Ya + ba | 0,
                sb = ba - Ya | 0,
                jb = va - cb | 0,
                db = cb + va | 0;
            y[b >> 2] = (db + ib) * ra | 0;
            y[k >> 2] = (jb + sb) * ra | 0;
            y[j >> 2] = (sb - jb) * ra | 0;
            y[w >> 2] = (ib - db) * ra | 0;
            var Sa = Na + $ | 0,
                kb = $ - Na | 0,
                ta = ob - rb | 0,
                Bb = rb + ob | 0;
            y[L >> 2] = (Bb + Sa) * ra | 0;
            y[i >> 2] = (ta + kb) * ra | 0;
            y[z >> 2] = (kb - ta) * ra | 0;
            y[H >> 2] = (Sa - Bb) * ra | 0;
            var Ha = za + ja | 0,
                ya = ja - za | 0,
                xa = wa - Qa | 0,
                Ba = Qa + wa | 0;
            y[g >> 2] = (Ba + Ha) * ra | 0;
            y[o >> 2] = (xa + ya) * ra | 0;
            y[D >> 2] = (ya - xa) * ra | 0;
            y[Oa >> 2] = (Ha - Ba) * ra | 0;
            var Ca = da + sa | 0,
                Ta = sa - da | 0,
                lb = pb - pa | 0,
                Jb = pa + pb | 0;
            y[p >> 2] = (Jb + Ca) * ra | 0;
            y[s >> 2] = (lb + Ta) * ra | 0;
            y[E >> 2] = (Ta - lb) * ra | 0;
            y[Za >> 2] = (Ca - Jb) * ra | 0
        } else {
            for (var eb = (c - 6 | 0) >>> 0 < 6 ? 1 : 2, Da = 2 - ia | 0, Ia = 0, mb = ba;;) {
                var Ua = b + (Ia + 8 << 2) | 0,
                    Ja = b + (Ia + 4 << 2) | 0,
                    Ka = b + (Ia + 12 << 2) | 0,
                    Cb = y[Ua >> 2],
                    Db = Cb + mb | 0,
                    Eb = mb - Cb | 0,
                    tb = y[Ja >> 2],
                    Va = y[Ka >> 2],
                    fb = tb - Va | 0,
                    ub = Va + tb | 0;
                y[b + (Ia << 2) >> 2] = (ub + Db) * qa + eb >> Da;
                y[Ja >> 2] = (fb + Eb) * qa + eb >> Da;
                y[Ua >> 2] = (Eb - fb) * qa + eb >> Da;
                y[Ka >> 2] = (Db - ub) * qa + eb >> Da;
                var nb = Ia + 1 | 0;
                if ((nb | 0) == 4) {
                    break a
                }
                var Fb = y[b + (nb << 2) >> 2],
                    Ia = nb,
                    mb = Fb
            }
        }
    } while (0)
}
Gc.X = 1;

function Hc(b, c) {
    var d = y[Ec + (A[Q.o + c | 0] & 255) * 12 >> 2];
    if (c >>> 0 > 5) {
        var f = 0;
        d <<= (A[Q.n + c | 0] & 255) - 1
    } else {
        f = 1
    }
    var g = y[b >> 2],
        e = b + 8 | 0,
        i = y[e >> 2],
        h = i + g | 0,
        g = g - i | 0,
        i = b + 4 | 0,
        k = y[i >> 2],
        l = b + 12 | 0,
        j = y[l >> 2],
        n = k - j | 0,
        k = j + k | 0;
    y[b >> 2] = (k + h) * d >> f;
    y[i >> 2] = (h - k) * d >> f;
    y[e >> 2] = (n + g) * d >> f;
    y[l >> 2] = (g - n) * d >> f;
    var e = b + 16 | 0,
        i = y[e >> 2],
        h = b + 24 | 0,
        l = y[h >> 2],
        g = l + i | 0,
        i = i - l | 0,
        l = b + 20 | 0,
        j = y[l >> 2],
        n = b + 28 | 0,
        p = y[n >> 2],
        k = j - p | 0,
        j = p + j | 0;
    y[e >> 2] = (j + g) * d >> f;
    y[l >> 2] = (g - j) * d >> f;
    y[h >> 2] = (k + i) * d >> f;
    y[n >> 2] = (i - k) * d >> f
}
Hc.X = 1;

function Ic(b, c, d) {
    var f = F[b + (d << 2) >> 2],
        g = d + 1 | 0,
        e = g >>> 0 < c >>> 0 & (y[b + (g << 2) >> 2] | 0) != (f | 0);
    a: do {
        if (e) {
            for (var i = d + 2 | 0, h = 0;;) {
                var k = i + h | 0;
                if (!(k >>> 0 < c >>> 0 & (y[b + (k << 2) >> 2] | 0) != (f | 0))) {
                    var l = k;
                    break a
                }
                h = h + 1 | 0
            }
        } else {
            l = g
        }
    } while (0);
    return (l | 0) == (c | 0) ? 0 : l
}

function Lc(b, c) {
    var d = F[b + 4 >> 2],
        f = (c >>> 0) % (d >>> 0),
        g = c - f | 0,
        d = y[b + 8 >> 2] * d | 0,
        e = y[b >> 2];
    y[b + 12 >> 2] = e + ((g << 8) + (f << 4)) | 0;
    f = (d << 8) + (f << 3) + (g << 6) | 0;
    y[b + 16 >> 2] = e + f | 0;
    y[b + 20 >> 2] = e + (f + (d << 6)) | 0
}

function Mc(b, c, d, f) {
    var g, e = c >>> 0 > 3;
    a: do {
        if (e) {
            if (q[b] << 24 >> 24 != 0) {
                g = 17
            } else {
                if (q[b + 1 | 0] << 24 >> 24 != 0) {
                    g = 17
                } else {
                    if ((A[b + 2 | 0] & 254 | 0) != 0) {
                        g = 17
                    } else {
                        for (var i = 2, h = 0;;) {
                            var k = h + 3 | 0;
                            if ((k | 0) == (c | 0)) {
                                y[f >> 2] = c;
                                var l = 1;
                                g = 30;
                                break a
                            }
                            var j = q[h + (b + 2) | 0];
                            if (j == 0) {
                                i = i + 1 | 0
                            } else {
                                if (j == 1 && i >>> 0 > 1) {
                                    break
                                }
                                i = 0
                            }
                            h = h + 1 | 0
                        }
                        for (var h = h + 4 | 0, n = i = 0, p = 0, j = 0;;) {
                            var r = h + j | 0,
                                o = A[b + (k + j) | 0],
                                t = o << 24 >> 24 != 0,
                                p = (t & 1 ^ 1) + p | 0,
                                n = o << 24 >> 24 == 3 & (p | 0) == 2 ? 1 : n;
                            if (o << 24 >> 24 == 1 & p >>> 0 > 1) {
                                g = j - p | 0;
                                y[d + 12 >> 2] = g;
                                var s = i,
                                    u = n,
                                    w = k,
                                    v = p - (p >>> 0 < 3 ? p : 3) | 0,
                                    z = g;
                                g = 18;
                                break a
                            }
                            t && (i = p >>> 0 > 2 ? 1 : i, p = 0);
                            if ((r | 0) != (c | 0)) {
                                j = j + 1 | 0
                            } else {
                                g = r - k - p | 0;
                                y[d + 12 >> 2] = g;
                                s = i;
                                u = n;
                                w = k;
                                v = p;
                                z = g;
                                g = 18;
                                break a
                            }
                        }
                    }
                }
            }
        } else {
            g = 17
        }
    } while (0);
    g == 17 && (y[d + 12 >> 2] = c, s = 0, u = 1, v = w = 0, z = c, g = 18);
    a: do {
        if (g == 18) {
            if (c = b + w | 0, k = d | 0, y[k >> 2] = c, y[d + 4 >> 2] = c, y[d + 8 >> 2] = 0, y[d + 16 >> 2] = 0, c = d + 12 | 0, y[f >> 2] = w + v + z | 0, (s | 0) != 0) {
                l = 1
            } else {
                if ((u | 0) != 0) {
                    l = k = y[k >> 2];
                    e = y[c >> 2];
                    h = j = 0;
                    b: for (;;) {
                        for (var B = k + h | 0, i = e - 1 | 0, r = j, j = 0;;) {
                            var D = l + j | 0,
                                n = j + 1 | 0,
                                C = l + n | 0;
                            if ((e | 0) == (j | 0)) {
                                break b
                            }
                            var E = A[D];
                            if ((r | 0) != 2) {
                                break
                            }
                            if (E << 24 >> 24 == 3) {
                                if ((i | 0) == (j | 0)) {
                                    l = 1;
                                    break a
                                }
                                if ((A[C] & 255) > 3) {
                                    l = 1;
                                    break a
                                }
                                r = 0;
                                j = n
                            } else {
                                if ((E & 255) < 3) {
                                    l = 1;
                                    break a
                                }
                                break
                            }
                        }
                        r = E << 24 >> 24 == 0 ? r + 1 | 0 : 0;
                        q[B] = E;
                        l = C;
                        e = i - j | 0;
                        j = r;
                        h = h + 1 | 0
                    }
                    y[c >> 2] = B - D + y[c >> 2] | 0
                }
                l = 0
            }
        }
    } while (0);
    return l
}
Mc.X = 1;

function Nc(b, c) {
    var d = (y[b >> 2] | 0) == (y[c >> 2] | 0);
    a: do {
        if (d) {
            if ((y[b + 4 >> 2] | 0) != (y[c + 4 >> 2] | 0)) {
                var f = 1
            } else {
                if ((y[b + 12 >> 2] | 0) != (y[c + 12 >> 2] | 0)) {
                    f = 1
                } else {
                    if (f = y[b + 16 >> 2], (f | 0) != (y[c + 16 >> 2] | 0)) {
                        f = 1
                    } else {
                        if ((y[b + 44 >> 2] | 0) != (y[c + 44 >> 2] | 0)) {
                            f = 1
                        } else {
                            if ((y[b + 48 >> 2] | 0) != (y[c + 48 >> 2] | 0)) {
                                f = 1
                            } else {
                                if ((y[b + 52 >> 2] | 0) != (y[c + 52 >> 2] | 0)) {
                                    f = 1
                                } else {
                                    if ((y[b + 56 >> 2] | 0) != (y[c + 56 >> 2] | 0)) {
                                        f = 1
                                    } else {
                                        var g = F[b + 60 >> 2];
                                        if ((g | 0) != (y[c + 60 >> 2] | 0)) {
                                            f = 1
                                        } else {
                                            if ((y[b + 80 >> 2] | 0) != (y[c + 80 >> 2] | 0)) {
                                                f = 1
                                            } else {
                                                b: do {
                                                    if (f == 0) {
                                                        if ((y[b + 20 >> 2] | 0) != (y[c + 20 >> 2] | 0)) {
                                                            f = 1;
                                                            break a
                                                        }
                                                    } else {
                                                        if (f == 1) {
                                                            if ((y[b + 24 >> 2] | 0) != (y[c + 24 >> 2] | 0)) {
                                                                f = 1;
                                                                break a
                                                            }
                                                            if ((y[b + 28 >> 2] | 0) != (y[c + 28 >> 2] | 0)) {
                                                                f = 1;
                                                                break a
                                                            }
                                                            if ((y[b + 32 >> 2] | 0) != (y[c + 32 >> 2] | 0)) {
                                                                f = 1;
                                                                break a
                                                            }
                                                            var e = F[b + 36 >> 2];
                                                            if ((e | 0) != (y[c + 36 >> 2] | 0)) {
                                                                f = 1;
                                                                break a
                                                            }
                                                            for (var i = b + 40 | 0, h = c + 40 | 0, k = 0;;) {
                                                                if (k >>> 0 >= e >>> 0) {
                                                                    break b
                                                                }
                                                                if ((y[y[i >> 2] + (k << 2) >> 2] | 0) != (y[y[h >> 2] + (k << 2) >> 2] | 0)) {
                                                                    f = 1;
                                                                    break a
                                                                }
                                                                k = k + 1 | 0
                                                            }
                                                        }
                                                    }
                                                } while (0);
                                                if ((g | 0) != 0) {
                                                    if ((y[b + 64 >> 2] | 0) != (y[c + 64 >> 2] | 0)) {
                                                        f = 1;
                                                        break
                                                    }
                                                    if ((y[b + 68 >> 2] | 0) != (y[c + 68 >> 2] | 0)) {
                                                        f = 1;
                                                        break
                                                    }
                                                    if ((y[b + 72 >> 2] | 0) != (y[c + 72 >> 2] | 0)) {
                                                        f = 1;
                                                        break
                                                    }
                                                    if ((y[b + 76 >> 2] | 0) != (y[c + 76 >> 2] | 0)) {
                                                        f = 1;
                                                        break
                                                    }
                                                }
                                                f = 0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            f = 1
        }
    } while (0);
    return f
}
Nc.X = 1;

function Oc(b, c) {
    var d = m;
    m += 4;
    Pc(c, 0, 92);
    var f = S(b, 8),
        g = (f | 0) == -1;
    a: do {
        if (g) {
            var e = 1
        } else {
            if (y[c >> 2] = f, S(b, 1), S(b, 1), (S(b, 1) | 0) == -1) {
                e = 1
            } else {
                if ((S(b, 5) | 0) == -1) {
                    e = 1
                } else {
                    var i = S(b, 8);
                    if ((i | 0) == -1) {
                        e = 1
                    } else {
                        e = c + 4 | 0;
                        y[e >> 2] = i;
                        var i = c + 8 | 0,
                            h = T(b, i);
                        if ((h | 0) != 0) {
                            e = h
                        } else {
                            if (F[i >> 2] >>> 0 > 31) {
                                e = 1
                            } else {
                                if (i = T(b, d), (i | 0) != 0) {
                                    e = i
                                } else {
                                    if (i = F[d >> 2], i >>> 0 > 12) {
                                        e = 1
                                    } else {
                                        if (y[c + 12 >> 2] = 1 << i + 4, i = T(b, d), (i | 0) != 0) {
                                            e = i
                                        } else {
                                            if (i = F[d >> 2], i >>> 0 > 2) {
                                                e = 1
                                            } else {
                                                y[c + 16 >> 2] = i;
                                                b: do {
                                                    if (i == 0) {
                                                        h = T(b, d);
                                                        if ((h | 0) != 0) {
                                                            e = h;
                                                            break a
                                                        }
                                                        h = F[d >> 2];
                                                        if (h >>> 0 > 12) {
                                                            e = 1;
                                                            break a
                                                        }
                                                        y[c + 20 >> 2] = 1 << h + 4
                                                    } else {
                                                        if (i == 1) {
                                                            h = S(b, 1);
                                                            if ((h | 0) == -1) {
                                                                e = 1;
                                                                break a
                                                            }
                                                            y[c + 24 >> 2] = (h | 0) == 1 & 1;
                                                            h = Qc(b, c + 28 | 0);
                                                            if ((h | 0) != 0) {
                                                                e = h;
                                                                break a
                                                            }
                                                            h = Qc(b, c + 32 | 0);
                                                            if ((h | 0) != 0) {
                                                                e = h;
                                                                break a
                                                            }
                                                            var h = c + 36 | 0,
                                                                k = T(b, h);
                                                            if ((k | 0) != 0) {
                                                                e = k;
                                                                break a
                                                            }
                                                            k = F[h >> 2];
                                                            if (k >>> 0 > 255) {
                                                                e = 1;
                                                                break a
                                                            }
                                                            if ((k | 0) == 0) {
                                                                y[c + 40 >> 2] = 0
                                                            } else {
                                                                var l = jc(k << 2),
                                                                    k = c + 40 | 0;
                                                                y[k >> 2] = l;
                                                                if ((l | 0) == 0) {
                                                                    e = 65535;
                                                                    break a
                                                                }
                                                                for (l = 0;;) {
                                                                    if (l >>> 0 >= F[h >> 2] >>> 0) {
                                                                        break b
                                                                    }
                                                                    var j = Qc(b, y[k >> 2] + (l << 2) | 0);
                                                                    if ((j | 0) != 0) {
                                                                        e = j;
                                                                        break a
                                                                    }
                                                                    l = l + 1 | 0
                                                                }
                                                            }
                                                        }
                                                    }
                                                } while (0);
                                                i = c + 44 | 0;
                                                h = T(b, i);
                                                if ((h | 0) != 0) {
                                                    e = h
                                                } else {
                                                    if (F[i >> 2] >>> 0 > 16) {
                                                        e = 1
                                                    } else {
                                                        if (h = S(b, 1), (h | 0) == -1) {
                                                            e = 1
                                                        } else {
                                                            if (y[c + 48 >> 2] = (h | 0) == 1 & 1, h = T(b, d), (h | 0) != 0) {
                                                                e = h
                                                            } else {
                                                                if (k = c + 52 | 0, y[k >> 2] = y[d >> 2] + 1 | 0, h = T(b, d), (h | 0) != 0) {
                                                                    e = h
                                                                } else {
                                                                    if (h = c + 56 | 0, y[h >> 2] = y[d >> 2] + 1 | 0, l = S(b, 1), l == -1 || l == 0) {
                                                                        e = 1
                                                                    } else {
                                                                        if ((S(b, 1) | 0) == -1) {
                                                                            e = 1
                                                                        } else {
                                                                            if (l = S(b, 1), (l | 0) == -1) {
                                                                                e = 1
                                                                            } else {
                                                                                l = (l | 0) == 1;
                                                                                y[c + 60 >> 2] = l & 1;
                                                                                if (l) {
                                                                                    l = c + 64 | 0;
                                                                                    j = T(b, l);
                                                                                    if ((j | 0) != 0) {
                                                                                        e = j;
                                                                                        break
                                                                                    }
                                                                                    var j = c + 68 | 0,
                                                                                        n = T(b, j);
                                                                                    if ((n | 0) != 0) {
                                                                                        e = n;
                                                                                        break
                                                                                    }
                                                                                    var n = c + 72 | 0,
                                                                                        p = T(b, n);
                                                                                    if ((p | 0) != 0) {
                                                                                        e = p;
                                                                                        break
                                                                                    }
                                                                                    var p = c + 76 | 0,
                                                                                        r = T(b, p);
                                                                                    if ((r | 0) != 0) {
                                                                                        e = r;
                                                                                        break
                                                                                    }
                                                                                    k = y[k >> 2];
                                                                                    if ((y[l >> 2] | 0) > ((k << 3) - 1 - y[j >> 2] | 0)) {
                                                                                        e = 1;
                                                                                        break
                                                                                    }
                                                                                    h = y[h >> 2];
                                                                                    if ((y[n >> 2] | 0) > ((h << 3) - 1 - y[p >> 2] | 0)) {
                                                                                        e = 1;
                                                                                        break
                                                                                    }
                                                                                } else {
                                                                                    k = y[k >> 2], h = y[h >> 2]
                                                                                }
                                                                                h = h * k | 0;
                                                                                e = y[e >> 2];
                                                                                k = aa;
                                                                                if (e == 10) {
                                                                                    var o = 99,
                                                                                        t = 152064,
                                                                                        k = 15
                                                                                } else {
                                                                                    if (e == 11) {
                                                                                        o = 396, t = 345600, k = 15
                                                                                    } else {
                                                                                        if (e == 12) {
                                                                                            o = 396, t = 912384, k = 15
                                                                                        } else {
                                                                                            if (e == 13) {
                                                                                                o = 396, t = 912384, k = 15
                                                                                            } else {
                                                                                                if (e == 20) {
                                                                                                    o = 396, t = 912384, k = 15
                                                                                                } else {
                                                                                                    if (e == 21) {
                                                                                                        o = 792, t = 1824768, k = 15
                                                                                                    } else {
                                                                                                        if (e == 22) {
                                                                                                            o = 1620, t = 3110400, k = 15
                                                                                                        } else {
                                                                                                            if (e == 30) {
                                                                                                                o = 1620, t = 3110400, k = 15
                                                                                                            } else {
                                                                                                                if (e == 31) {
                                                                                                                    o = 3600, t = 6912e3, k = 15
                                                                                                                } else {
                                                                                                                    if (e == 32) {
                                                                                                                        o = 5120, t = 7864320, k = 15
                                                                                                                    } else {
                                                                                                                        if (e == 40) {
                                                                                                                            o = 8192, t = 12582912, k = 15
                                                                                                                        } else {
                                                                                                                            if (e == 41) {
                                                                                                                                o = 8192, t = 12582912, k = 15
                                                                                                                            } else {
                                                                                                                                if (e == 42) {
                                                                                                                                    o = 8704, t = 13369344, k = 15
                                                                                                                                } else {
                                                                                                                                    if (e == 50) {
                                                                                                                                        o = 22080, t = 42393600, k = 15
                                                                                                                                    } else {
                                                                                                                                        if (e == 51) {
                                                                                                                                            o = 36864, t = 70778880, k = 15
                                                                                                                                        } else {
                                                                                                                                            var s = 2147483647,
                                                                                                                                                k = 17
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                                k == 15 && (o >>> 0 < h >>> 0 ? s = 2147483647 : (s = Math.floor((t >>> 0) / ((h * 384 | 0) >>> 0)), s = s >>> 0 < 16 ? s : 16));
                                                                                e = s;
                                                                                y[d >> 2] = e;
                                                                                h = F[i >> 2];
                                                                                (e | 0) == 2147483647 | h >>> 0 > e >>> 0 ? y[d >> 2] = h : h = e;
                                                                                e = c + 88 | 0;
                                                                                y[e >> 2] = h;
                                                                                h = S(b, 1);
                                                                                if ((h | 0) == -1) {
                                                                                    e = 1
                                                                                } else {
                                                                                    h = (h | 0) == 1;
                                                                                    y[c + 80 >> 2] = h & 1;
                                                                                    do {
                                                                                        if (h) {
                                                                                            j = l = jc(952);
                                                                                            k = c + 84 | 0;
                                                                                            y[k >> 2] = j;
                                                                                            if ((l | 0) == 0) {
                                                                                                e = 65535;
                                                                                                break a
                                                                                            }
                                                                                            l = Rc(b, j);
                                                                                            if ((l | 0) != 0) {
                                                                                                e = l;
                                                                                                break a
                                                                                            }
                                                                                            k = y[k >> 2];
                                                                                            if ((y[k + 920 >> 2] | 0) != 0) {
                                                                                                l = F[k + 948 >> 2];
                                                                                                if (F[k + 944 >> 2] >>> 0 > l >>> 0) {
                                                                                                    e = 1;
                                                                                                    break a
                                                                                                }
                                                                                                if (l >>> 0 < F[i >> 2] >>> 0) {
                                                                                                    e = 1;
                                                                                                    break a
                                                                                                }
                                                                                                if (l >>> 0 > F[e >> 2] >>> 0) {
                                                                                                    e = 1;
                                                                                                    break a
                                                                                                }
                                                                                                y[e >> 2] = (l | 0) == 0 ? 1 : l
                                                                                            }
                                                                                        }
                                                                                    } while (0);
                                                                                    S(b, 8 - y[b + 8 >> 2] | 0);
                                                                                    e = 0
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } while (0);
    m = d;
    return e
}
Oc.X = 1;

function Sc(b, c) {
    var d = m;
    m += 8;
    var f = d + 4;
    Pc(c, 0, 72);
    var g = c | 0,
        e = T(b, g),
        i = (e | 0) == 0;
    a: do {
        if (i) {
            if (F[g >> 2] >>> 0 > 255) {
                var h = 1
            } else {
                var h = c + 4 | 0,
                    k = T(b, h);
                if ((k | 0) != 0) {
                    h = k
                } else {
                    if (F[h >> 2] >>> 0 > 31) {
                        h = 1
                    } else {
                        if ((S(b, 1) | 0) != 0) {
                            h = 1
                        } else {
                            if (h = S(b, 1), (h | 0) == -1) {
                                h = 1
                            } else {
                                if (y[c + 8 >> 2] = (h | 0) == 1 & 1, h = T(b, d), (h | 0) == 0) {
                                    if (k = y[d >> 2] + 1 | 0, h = c + 12 | 0, y[h >> 2] = k, k >>> 0 > 8) {
                                        h = 1
                                    } else {
                                        k = k >>> 0 > 1;
                                        b: do {
                                            if (k) {
                                                var l = c + 16 | 0,
                                                    j = T(b, l);
                                                if ((j | 0) != 0) {
                                                    h = j;
                                                    break a
                                                }
                                                l = F[l >> 2];
                                                if (l >>> 0 > 6) {
                                                    h = 1;
                                                    break a
                                                }
                                                if (l == 0) {
                                                    j = jc(y[h >> 2] << 2);
                                                    l = c + 20 | 0;
                                                    y[l >> 2] = j;
                                                    if ((j | 0) == 0) {
                                                        h = 65535;
                                                        break a
                                                    }
                                                    for (j = 0;;) {
                                                        if (j >>> 0 >= F[h >> 2] >>> 0) {
                                                            break b
                                                        }
                                                        var n = T(b, d);
                                                        if ((n | 0) != 0) {
                                                            h = n;
                                                            break a
                                                        }
                                                        y[(y[l >> 2] + (j << 2) | 0) >> 2] = y[d >> 2] + 1 | 0;
                                                        j = j + 1 | 0
                                                    }
                                                } else {
                                                    if (l == 2) {
                                                        j = jc((y[h >> 2] << 2) - 4 | 0);
                                                        l = c + 24 | 0;
                                                        y[l >> 2] = j;
                                                        n = jc((y[h >> 2] << 2) - 4 | 0);
                                                        j = c + 28 | 0;
                                                        y[j >> 2] = n;
                                                        if ((y[l >> 2] | 0) == 0 | (n | 0) == 0) {
                                                            h = 65535;
                                                            break a
                                                        }
                                                        for (n = 0;;) {
                                                            if (n >>> 0 >= (y[h >> 2] - 1 | 0) >>> 0) {
                                                                break b
                                                            }
                                                            var p = T(b, d);
                                                            if ((p | 0) != 0) {
                                                                h = p;
                                                                break a
                                                            }
                                                            y[(y[l >> 2] + (n << 2) | 0) >> 2] = y[d >> 2];
                                                            p = T(b, d);
                                                            if ((p | 0) != 0) {
                                                                h = p;
                                                                break a
                                                            }
                                                            y[(y[j >> 2] + (n << 2) | 0) >> 2] = y[d >> 2];
                                                            n = n + 1 | 0
                                                        }
                                                    } else {
                                                        if (l == 3 || l == 4 || l == 5) {
                                                            l = S(b, 1);
                                                            if ((l | 0) == -1) {
                                                                h = 1;
                                                                break a
                                                            }
                                                            y[c + 32 >> 2] = (l | 0) == 1 & 1;
                                                            l = T(b, d);
                                                            if ((l | 0) != 0) {
                                                                h = l;
                                                                break a
                                                            }
                                                            y[c + 36 >> 2] = y[d >> 2] + 1 | 0
                                                        } else {
                                                            if (l == 6) {
                                                                l = T(b, d);
                                                                if ((l | 0) != 0) {
                                                                    h = l;
                                                                    break a
                                                                }
                                                                j = y[d >> 2] + 1 | 0;
                                                                l = c + 40 | 0;
                                                                y[l >> 2] = j;
                                                                n = jc(j << 2);
                                                                j = c + 44 | 0;
                                                                y[j >> 2] = n;
                                                                if ((n | 0) == 0) {
                                                                    h = 65535;
                                                                    break a
                                                                }
                                                                n = y[Tc + (y[h >> 2] - 1 << 2) >> 2];
                                                                for (p = 0;;) {
                                                                    if (p >>> 0 >= F[l >> 2] >>> 0) {
                                                                        break b
                                                                    }
                                                                    var r = S(b, n);
                                                                    y[(y[j >> 2] + (p << 2) | 0) >> 2] = r;
                                                                    if (F[y[j >> 2] + (p << 2) >> 2] >>> 0 >= F[h >> 2] >>> 0) {
                                                                        h = 1;
                                                                        break a
                                                                    }
                                                                    p = p + 1 | 0
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } while (0);
                                        h = T(b, d);
                                        (h | 0) == 0 && (h = F[d >> 2], h >>> 0 > 31 ? h = 1 : (y[c + 48 >> 2] = h + 1 | 0, h = T(b, d), (h | 0) == 0 && (F[d >> 2] >>> 0 > 31 ? h = 1 : (S(b, 1) | 0) != 0 ? h = 1 : S(b, 2) >>> 0 > 2 ? h = 1 : (h = Qc(b, f), (h | 0) == 0 && (h = y[f >> 2] + 26 | 0, h >>> 0 > 51 ? h = 1 : (y[c + 52 >> 2] = h, h = Qc(b, f), (h | 0) == 0 && ((y[f >> 2] + 26 | 0) >>> 0 > 51 ? h = 1 : (h = Qc(b, f), (h | 0) == 0 && (h = F[f >> 2], (h + 12 | 0) >>> 0 > 24 ? h = 1 : (y[c + 56 >> 2] = h, h = S(b, 1), (h | 0) == -1 ? h = 1 : (y[c + 60 >> 2] = (h | 0) == 1 & 1, h = S(b, 1), (h | 0) == -1 ? h = 1 : (y[c + 64 >> 2] = (h | 0) == 1 & 1, h = S(b, 1), (h | 0) == -1 ? h = 1 : (y[c + 68 >> 2] = (h | 0) == 1 & 1, S(b, 8 - y[b + 8 >> 2] | 0), h = 0)))))))))))))
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            h = e
        }
    } while (0);
    m = d;
    return h
}
Sc.X = 1;

function Uc(b, c, d, f, g) {
    var e = m;
    m += 8;
    var i = e + 4;
    Pc(c, 0, 988);
    var h = y[d + 56 >> 2] * y[d + 52 >> 2] | 0,
        k = T(b, e),
        l = (k | 0) == 0;
    a: do {
        if (l) {
            var j = F[e >> 2];
            y[c >> 2] = j;
            if (j >>> 0 < h >>> 0) {
                if (j = T(b, e), (j | 0) == 0) {
                    var j = y[e >> 2],
                        n = c + 4 | 0;
                    y[n >> 2] = j;
                    if (!(j == 2 || j == 7)) {
                        if (j == 0 || j == 5) {
                            if ((y[g >> 2] | 0) == 5) {
                                j = 1;
                                break
                            }
                            if ((y[d + 44 >> 2] | 0) == 0) {
                                j = 1;
                                break
                            }
                        } else {
                            j = 1;
                            break
                        }
                    }
                    j = T(b, e);
                    if ((j | 0) == 0) {
                        if (j = y[e >> 2], y[c + 8 >> 2] = j, (j | 0) != (y[f >> 2] | 0)) {
                            j = 1
                        } else {
                            var p = d + 12 | 0,
                                j = F[p >> 2],
                                r = (j | 0) == 0;
                            b: do {
                                if (r) {
                                    var o = -1
                                } else {
                                    for (var t = 0;;) {
                                        var s = t + 1 | 0;
                                        if ((j >>> (s >>> 0) | 0) == 0) {
                                            o = t;
                                            break b
                                        }
                                        t = s
                                    }
                                }
                            } while (0);
                            r = S(b, o);
                            if ((r | 0) == -1) {
                                j = 1
                            } else {
                                if (j = g | 0, (y[j >> 2] | 0) != 5 | (r | 0) == 0) {
                                    y[c + 12 >> 2] = r;
                                    if ((y[j >> 2] | 0) == 5) {
                                        r = T(b, e);
                                        if ((r | 0) != 0) {
                                            j = r;
                                            break
                                        }
                                        r = F[e >> 2];
                                        y[c + 16 >> 2] = r;
                                        if (r >>> 0 > 65535) {
                                            j = 1;
                                            break
                                        }
                                    }
                                    r = d + 16 | 0;
                                    t = F[r >> 2];
                                    if ((t | 0) == 0) {
                                        var t = d + 20 | 0,
                                            s = F[t >> 2],
                                            u = (s | 0) == 0;
                                        b: do {
                                            if (u) {
                                                var w = -1
                                            } else {
                                                for (var v = 0;;) {
                                                    var z = v + 1 | 0;
                                                    if ((s >>> (z >>> 0) | 0) == 0) {
                                                        w = v;
                                                        break b
                                                    }
                                                    v = z
                                                }
                                            }
                                        } while (0);
                                        u = S(b, w);
                                        if ((u | 0) == -1) {
                                            j = 1;
                                            break
                                        }
                                        s = c + 20 | 0;
                                        y[s >> 2] = u;
                                        if ((y[f + 8 >> 2] | 0) != 0) {
                                            u = Qc(b, i);
                                            if ((u | 0) != 0) {
                                                j = u;
                                                break
                                            }
                                            y[c + 24 >> 2] = y[i >> 2]
                                        }
                                        if ((y[j >> 2] | 0) == 5) {
                                            s = F[s >> 2];
                                            if (s >>> 0 > F[t >> 2] >>> 1 >>> 0) {
                                                j = 1;
                                                break
                                            }
                                            t = y[c + 24 >> 2];
                                            if ((s | 0) != (((t | 0) > 0 ? 0 : -t | 0) | 0)) {
                                                j = 1;
                                                break
                                            }
                                        }
                                        r = y[r >> 2]
                                    } else {
                                        r = t
                                    }
                                    r = (r | 0) == 1;
                                    do {
                                        if (r && (y[d + 24 >> 2] | 0) == 0) {
                                            t = Qc(b, i);
                                            if ((t | 0) != 0) {
                                                j = t;
                                                break a
                                            }
                                            t = c + 28 | 0;
                                            y[t >> 2] = y[i >> 2];
                                            if ((y[f + 8 >> 2] | 0) != 0) {
                                                s = Qc(b, i);
                                                if ((s | 0) != 0) {
                                                    j = s;
                                                    break a
                                                }
                                                y[c + 32 >> 2] = y[i >> 2]
                                            }
                                            if ((y[j >> 2] | 0) == 5 && (t = y[t >> 2], s = y[d + 32 >> 2] + t + y[c + 32 >> 2] | 0, (((t | 0) < (s | 0) ? t : s) | 0) != 0)) {
                                                j = 1;
                                                break a
                                            }
                                        }
                                    } while (0);
                                    if ((y[f + 68 >> 2] | 0) != 0) {
                                        r = T(b, e);
                                        if ((r | 0) != 0) {
                                            j = r;
                                            break
                                        }
                                        r = F[e >> 2];
                                        y[c + 36 >> 2] = r;
                                        if (r >>> 0 > 127) {
                                            j = 1;
                                            break
                                        }
                                    }
                                    r = F[n >> 2];
                                    if (r == 0 || r == 5) {
                                        r = S(b, 1);
                                        if ((r | 0) == -1) {
                                            j = 1;
                                            break
                                        }
                                        y[c + 40 >> 2] = r;
                                        if ((r | 0) == 0) {
                                            r = F[f + 48 >> 2];
                                            if (r >>> 0 > 16) {
                                                j = 1;
                                                break
                                            }
                                            y[c + 44 >> 2] = r
                                        } else {
                                            r = T(b, e);
                                            if ((r | 0) != 0) {
                                                j = r;
                                                break
                                            }
                                            r = F[e >> 2];
                                            if (r >>> 0 > 15) {
                                                j = 1;
                                                break
                                            }
                                            y[c + 44 >> 2] = r + 1 | 0
                                        }
                                        n = y[n >> 2]
                                    } else {
                                        n = r
                                    } if (n == 0 || n == 5) {
                                        n = b;
                                        r = c + 68 | 0;
                                        t = y[c + 44 >> 2];
                                        p = y[p >> 2];
                                        s = m;
                                        m += 8;
                                        u = s + 4;
                                        v = S(n, 1);
                                        z = (v | 0) == -1;
                                        b: do {
                                            if (z) {
                                                var B = 1
                                            } else {
                                                y[r >> 2] = v;
                                                if ((v | 0) != 0) {
                                                    for (B = 0;;) {
                                                        var D = r + 4 + B * 12 + 4 | 0,
                                                            C = r + 4 + B * 12 + 8 | 0,
                                                            E = r + 4 + B * 12 | 0;
                                                        if (B >>> 0 > t >>> 0) {
                                                            B = 1;
                                                            break b
                                                        }
                                                        var G = T(n, u);
                                                        if ((G | 0) != 0) {
                                                            B = G;
                                                            break b
                                                        }
                                                        G = F[u >> 2];
                                                        if (G >>> 0 > 3) {
                                                            B = 1;
                                                            break b
                                                        }
                                                        y[E >> 2] = G;
                                                        E = G >>> 0 < 2;
                                                        do {
                                                            if (E) {
                                                                var H = T(n, s);
                                                                if ((H | 0) != 0) {
                                                                    B = H;
                                                                    break b
                                                                }
                                                                H = F[s >> 2];
                                                                if (H >>> 0 >= p >>> 0) {
                                                                    B = 1;
                                                                    break b
                                                                }
                                                                y[D >> 2] = H + 1 | 0
                                                            } else {
                                                                if ((G | 0) == 2) {
                                                                    H = T(n, s);
                                                                    if ((H | 0) != 0) {
                                                                        B = H;
                                                                        break b
                                                                    }
                                                                    y[C >> 2] = y[s >> 2]
                                                                }
                                                            }
                                                        } while (0);
                                                        if ((G | 0) == 3) {
                                                            break
                                                        }
                                                        B = B + 1 | 0
                                                    }
                                                    if ((B | 0) == 0) {
                                                        B = 1;
                                                        break
                                                    }
                                                }
                                                B = 0
                                            }
                                        } while (0);
                                        m = s;
                                        p = B;
                                        if ((p | 0) != 0) {
                                            j = p;
                                            break
                                        }
                                    }
                                    if ((y[g + 4 >> 2] | 0) != 0 && (j = Vc(b, c + 276 | 0, y[j >> 2], y[d + 44 >> 2]), (j | 0) != 0)) {
                                        break
                                    }
                                    j = Qc(b, i);
                                    if ((j | 0) == 0) {
                                        if (j = y[i >> 2], y[c + 48 >> 2] = j, j = j + y[f + 52 >> 2] | 0, y[i >> 2] = j, j >>> 0 > 51) {
                                            j = 1
                                        } else {
                                            j = (y[f + 60 >> 2] | 0) == 0;
                                            do {
                                                if (!j) {
                                                    p = T(b, e);
                                                    if ((p | 0) != 0) {
                                                        j = p;
                                                        break a
                                                    }
                                                    p = F[e >> 2];
                                                    y[c + 52 >> 2] = p;
                                                    if (p >>> 0 > 2) {
                                                        j = 1;
                                                        break a
                                                    }
                                                    if ((p | 0) != 1) {
                                                        p = Qc(b, i);
                                                        if ((p | 0) != 0) {
                                                            j = p;
                                                            break a
                                                        }
                                                        p = F[i >> 2];
                                                        if ((p + 6 | 0) >>> 0 > 12) {
                                                            j = 1;
                                                            break a
                                                        }
                                                        y[c + 56 >> 2] = p << 1;
                                                        p = Qc(b, i);
                                                        if ((p | 0) != 0) {
                                                            j = p;
                                                            break a
                                                        }
                                                        p = F[i >> 2];
                                                        if ((p + 6 | 0) >>> 0 > 12) {
                                                            j = 1;
                                                            break a
                                                        }
                                                        y[c + 60 >> 2] = p << 1
                                                    }
                                                }
                                            } while (0);
                                            j = F[f + 12 >> 2] >>> 0 > 1;
                                            do {
                                                if (j && (y[f + 16 >> 2] - 3 | 0) >>> 0 < 3) {
                                                    p = f + 36 | 0;
                                                    n = y[p >> 2];
                                                    n = (((h >>> 0) % (n >>> 0) | 0) == 0 ? 1 : 2) + Math.floor((h >>> 0) / (n >>> 0)) | 0;
                                                    for (r = 0;;) {
                                                        var K = r + 1 | 0;
                                                        if ((-1 << K & n | 0) == 0) {
                                                            break
                                                        }
                                                        r = K
                                                    }
                                                    n = S(b, ((1 << r) - 1 & n | 0) == 0 ? r : K);
                                                    y[e >> 2] = n;
                                                    if ((n | 0) == -1) {
                                                        j = 1;
                                                        break a
                                                    }
                                                    y[c + 64 >> 2] = n;
                                                    p = F[p >> 2];
                                                    if (n >>> 0 > Math.floor(((h - 1 + p | 0) >>> 0) / (p >>> 0)) >>> 0) {
                                                        j = 1;
                                                        break a
                                                    }
                                                }
                                            } while (0);
                                            j = 0
                                        }
                                    }
                                } else {
                                    j = 1
                                }
                            }
                        }
                    }
                }
            } else {
                j = 1
            }
        } else {
            j = k
        }
    } while (0);
    m = e;
    return j
}
Uc.X = 1;

function Vc(b, c, d, f) {
    var g = m;
    m += 8;
    var e, i = g + 4,
        d = (d | 0) == 5,
        h = S(b, 1),
        k = (h | 0) == -1;
    a: do {
        if (d) {
            if (k) {
                var l = 1;
                e = 24;
                break
            }
            y[c >> 2] = h;
            var j = S(b, 1);
            if ((j | 0) == -1) {
                l = 1;
                e = 24;
                break
            }
            y[c + 4 >> 2] = j;
            if ((f | 0) != 0 | (j | 0) == 0) {
                e = 23;
                break
            }
        } else {
            if (k) {
                l = 1;
                e = 24;
                break
            }
            y[c + 8 >> 2] = h;
            if ((h | 0) == 0) {
                e = 23;
                break
            }
            for (var j = (f << 1) + 2 | 0, n = 0, p = 0, r = 0, o = 0, t = 0;;) {
                var s = c + 12 + t * 20 + 4 | 0,
                    u = c + 12 + t * 20 + 8 | 0,
                    w = c + 12 + t * 20 + 12 | 0,
                    v = c + 12 + t * 20 + 16 | 0;
                e = c + 12 + t * 20 | 0;
                if (t >>> 0 > j >>> 0) {
                    l = 1;
                    e = 24;
                    break a
                }
                var z = T(b, i);
                if ((z | 0) != 0) {
                    l = z;
                    e = 24;
                    break a
                }
                z = F[i >> 2];
                if (z >>> 0 > 6) {
                    l = 1;
                    e = 24;
                    break a
                }
                y[e >> 2] = z;
                do {
                    if (z == 3 || z == 1) {
                        e = T(b, g);
                        if ((e | 0) != 0) {
                            l = e;
                            e = 24;
                            break a
                        }
                        y[s >> 2] = y[g >> 2] + 1 | 0;
                        if (z == 2) {
                            e = 13
                        } else {
                            if (z == 6 || z == 3) {
                                e = 15
                            } else {
                                if (z == 4) {
                                    e = 17
                                } else {
                                    var B = o;
                                    e = 20
                                }
                            }
                        }
                    } else {
                        z == 2 ? e = 13 : z == 6 ? e = 15 : z == 4 ? e = 17 : (B = o, e = 20)
                    }
                } while (0);
                do {
                    if (e == 13) {
                        B = T(b, g);
                        if ((B | 0) != 0) {
                            l = B;
                            e = 24;
                            break a
                        }
                        y[u >> 2] = y[g >> 2];
                        B = o;
                        e = 20
                    } else {
                        if (e == 15) {
                            e = T(b, g);
                            if ((e | 0) != 0) {
                                l = e;
                                e = 24;
                                break a
                            }
                            y[w >> 2] = y[g >> 2];
                            (z | 0) == 4 ? e = 17 : (B = o, e = 20)
                        }
                    }
                } while (0);
                if (e == 17) {
                    B = T(b, g);
                    if ((B | 0) != 0) {
                        l = B;
                        e = 24;
                        break a
                    }
                    B = F[g >> 2];
                    if (B >>> 0 > f >>> 0) {
                        l = 1;
                        e = 24;
                        break a
                    }
                    y[v >> 2] = (B | 0) == 0 ? 65535 : B - 1 | 0;
                    B = o + 1 | 0
                }
                v = ((z | 0) == 5 & 1) + r | 0;
                u = ((z | 0) != 0 & z >>> 0 < 4 & 1) + n | 0;
                w = ((z | 0) == 6 & 1) + p | 0;
                if ((z | 0) == 0) {
                    break
                }
                n = u;
                p = w;
                r = v;
                o = B;
                t = t + 1 | 0
            }
            if (B >>> 0 > 1 | v >>> 0 > 1 | w >>> 0 > 1) {
                l = 1;
                e = 24;
                break
            }
            if ((u | 0) == 0 | (v | 0) == 0) {
                e = 23;
                break
            }
        }
        l = 1;
        e = 24
    } while (0);
    e == 23 && (l = 0);
    m = g;
    return l
}
Vc.X = 1;

function Wc(b, c) {
    var d = m;
    m += 24;
    var f = d + 4,
        g = f | 0;
    y[f >> 2] = y[b >> 2];
    y[f + 4 >> 2] = y[b + 4 >> 2];
    y[f + 8 >> 2] = y[b + 8 >> 2];
    y[f + 12 >> 2] = y[b + 12 >> 2];
    y[f + 16 >> 2] = y[b + 16 >> 2];
    f = T(g, d);
    (f | 0) == 0 ? (f = T(g, d), (f | 0) != 0 ? g = f : (g = T(g, d), (g | 0) == 0 && (g = F[d >> 2], g >>> 0 > 255 ? g = 1 : (y[c >> 2] = g, g = 0)))) : g = f;
    m = d;
    return g
}

function Xc(b, c, d, f) {
    var g = m;
    m += 24;
    var e = g + 4,
        i = e | 0;
    y[e >> 2] = y[b >> 2];
    y[e + 4 >> 2] = y[b + 4 >> 2];
    y[e + 8 >> 2] = y[b + 8 >> 2];
    y[e + 12 >> 2] = y[b + 12 >> 2];
    y[e + 16 >> 2] = y[b + 16 >> 2];
    b = T(i, g);
    e = (b | 0) == 0;
    do {
        if (e) {
            var h = T(i, g);
            if ((h | 0) == 0 && (h = T(i, g), (h | 0) == 0)) {
                var h = F[c + 12 >> 2],
                    k = (h | 0) == 0;
                a: do {
                    if (k) {
                        var l = -1
                    } else {
                        for (var j = 0;;) {
                            var n = j + 1 | 0;
                            if ((h >>> (n >>> 0) | 0) == 0) {
                                l = j;
                                break a
                            }
                            j = n
                        }
                    }
                } while (0);
                if ((S(i, l) | 0) == -1) {
                    h = 1
                } else {
                    if ((d | 0) == 5 && (h = T(i, g), (h | 0) != 0)) {
                        break
                    }
                    h = F[c + 20 >> 2];
                    k = (h | 0) == 0;
                    a: do {
                        if (k) {
                            var p = -1
                        } else {
                            for (j = 0;;) {
                                n = j + 1 | 0;
                                if ((h >>> (n >>> 0) | 0) == 0) {
                                    p = j;
                                    break a
                                }
                                j = n
                            }
                        }
                    } while (0);
                    h = S(i, p);
                    (h | 0) == -1 ? h = 1 : (y[f >> 2] = h, h = 0)
                }
            }
        } else {
            h = b
        }
    } while (0);
    m = g;
    return h
}
Xc.X = 1;

function bd(b, c, d, f) {
    var g = m;
    m += 24;
    var e = g + 4,
        i = e | 0;
    y[e >> 2] = y[b >> 2];
    y[e + 4 >> 2] = y[b + 4 >> 2];
    y[e + 8 >> 2] = y[b + 8 >> 2];
    y[e + 12 >> 2] = y[b + 12 >> 2];
    y[e + 16 >> 2] = y[b + 16 >> 2];
    b = T(i, g);
    e = (b | 0) == 0;
    do {
        if (e) {
            var h = T(i, g);
            if ((h | 0) == 0 && (h = T(i, g), (h | 0) == 0)) {
                var h = F[c + 12 >> 2],
                    k = (h | 0) == 0;
                a: do {
                    if (k) {
                        var l = -1
                    } else {
                        for (var j = 0;;) {
                            var n = j + 1 | 0;
                            if ((h >>> (n >>> 0) | 0) == 0) {
                                l = j;
                                break a
                            }
                            j = n
                        }
                    }
                } while (0);
                if ((S(i, l) | 0) == -1) {
                    h = 1
                } else {
                    if ((d | 0) == 5 && (h = T(i, g), (h | 0) != 0)) {
                        break
                    }
                    h = F[c + 20 >> 2];
                    k = (h | 0) == 0;
                    a: do {
                        if (k) {
                            var p = -1
                        } else {
                            for (j = 0;;) {
                                n = j + 1 | 0;
                                if ((h >>> (n >>> 0) | 0) == 0) {
                                    p = j;
                                    break a
                                }
                                j = n
                            }
                        }
                    } while (0);
                    h = (S(i, p) | 0) == -1 ? 1 : Qc(i, f)
                }
            }
        } else {
            h = b
        }
    } while (0);
    m = g;
    return h
}
bd.X = 1;

function cd(b) {
    return b == 1 || b == 0 ? 1 : b == 2 || b == 3 ? 2 : 4
}

function dd(b) {
    return b >>> 0 < 6 ? 2 : (b | 0) != 6 & 1
}

function ed(b, c, d, f) {
    var g = m;
    m += 28;
    var e = g + 4,
        i = g + 8,
        h = i | 0;
    y[i >> 2] = y[c >> 2];
    y[i + 4 >> 2] = y[c + 4 >> 2];
    y[i + 8 >> 2] = y[c + 8 >> 2];
    y[i + 12 >> 2] = y[c + 12 >> 2];
    y[i + 16 >> 2] = y[c + 16 >> 2];
    c = T(h, g);
    i = (c | 0) == 0;
    a: do {
        if (i) {
            var k = T(h, g);
            if ((k | 0) == 0 && (k = T(h, g), (k | 0) == 0)) {
                var k = F[d + 12 >> 2],
                    l = (k | 0) == 0;
                b: do {
                    if (l) {
                        var j = -1
                    } else {
                        for (var n = 0;;) {
                            var p = n + 1 | 0;
                            if ((k >>> (p >>> 0) | 0) == 0) {
                                j = n;
                                break b
                            }
                            n = p
                        }
                    }
                } while (0);
                if ((S(h, j) | 0) == -1) {
                    k = 1
                } else {
                    if (k = T(h, g), (k | 0) == 0) {
                        k = d + 16 | 0;
                        l = F[k >> 2];
                        if ((l | 0) == 0) {
                            l = F[d + 20 >> 2];
                            n = (l | 0) == 0;
                            b: do {
                                if (n) {
                                    var r = -1
                                } else {
                                    for (p = 0;;) {
                                        var o = p + 1 | 0;
                                        if ((l >>> (o >>> 0) | 0) == 0) {
                                            r = p;
                                            break b
                                        }
                                        p = o
                                    }
                                }
                            } while (0);
                            if ((S(h, r) | 0) == -1) {
                                k = 1;
                                break
                            }
                            if ((y[f + 8 >> 2] | 0) != 0 && (l = Qc(h, e), (l | 0) != 0)) {
                                k = l;
                                break
                            }
                            k = y[k >> 2]
                        } else {
                            k = l
                        }
                        k = (k | 0) == 1;
                        do {
                            if (k && (y[d + 24 >> 2] | 0) == 0) {
                                l = Qc(h, e);
                                if ((l | 0) != 0) {
                                    k = l;
                                    break a
                                }
                                if ((y[f + 8 >> 2] | 0) != 0 && (l = Qc(h, e), (l | 0) != 0)) {
                                    k = l;
                                    break a
                                }
                            }
                        } while (0);
                        if ((y[f + 68 >> 2] | 0) != 0 && (k = T(h, g), (k | 0) != 0)) {
                            break
                        }
                        k = S(h, 1);
                        y[b >> 2] = k;
                        k = (k | 0) == -1 & 1
                    }
                }
            }
        } else {
            k = c
        }
    } while (0);
    m = g;
    return k
}
ed.X = 1;

function fd(b, c, d, f) {
    var g = m;
    m += 440;
    var e, i = g + 432,
        h = g + 436,
        k = g + (-g & 15) | 0,
        l = F[c + 3376 >> 2],
        j = y[f >> 2];
    y[i >> 2] = 0;
    var n = c + 1192 | 0;
    y[n >> 2] = y[n >> 2] + 1 | 0;
    var p = c + 1200 | 0;
    y[p >> 2] = 0;
    var r = c + 12 | 0;
    y[h >> 2] = y[f + 48 >> 2] + y[y[r >> 2] + 52 >> 2] | 0;
    var o = f + 36 | 0,
        t = c + 1212 | 0,
        s = f + 4 | 0,
        u = c + 1176 | 0,
        w = l + 12 | 0,
        v = l | 0,
        z = f + 44 | 0,
        B = c + 1220 | 0,
        D = c + 1172 | 0,
        C = f + 52 | 0,
        E = f + 56 | 0,
        f = f + 60 | 0,
        G = 0,
        H = 0,
        K = 0,
        L = y[t >> 2];
    a: for (;;) {
        if ((y[o >> 2] | 0) == 0 && (y[L + j * 216 + 196 >> 2] | 0) != 0) {
            var N = 1;
            break
        }
        L = L + j * 216 | 0;
        e = y[C >> 2];
        var O = y[E >> 2],
            R = y[f >> 2],
            U = y[y[r >> 2] + 56 >> 2];
        y[L + 4 >> 2] = y[n >> 2];
        y[L + 8 >> 2] = e;
        y[L + 12 >> 2] = O;
        y[L + 16 >> 2] = R;
        y[L + 24 >> 2] = U;
        L = F[s >> 2];
        do {
            if (L == 2 || L == 7) {
                e = 10
            } else {
                if ((H | 0) != 0) {
                    e = 10
                } else {
                    e = T(b, i);
                    if ((e | 0) != 0) {
                        N = e;
                        break a
                    }
                    e = F[i >> 2];
                    if (e >>> 0 > (y[u >> 2] - j | 0) >>> 0) {
                        N = 1;
                        break a
                    }
                    if ((e | 0) == 0) {
                        var Y = y[s >> 2];
                        e = 12
                    } else {
                        Pc(w, 0, 164);
                        y[v >> 2] = 0;
                        var X = e,
                            ba = 1;
                        e = 11
                    }
                }
            }
        } while (0);
        e == 10 && ((K | 0) == 0 ? (Y = L, e = 12) : (X = K, ba = H, e = 11));
        if (e == 12) {
            var $ = gd(b, l, y[t >> 2] + j * 216 | 0, Y, y[z >> 2]);
            if (($ | 0) != 0) {
                N = $;
                break
            }
            var ja = $ = 0
        } else {
            e == 11 && (ja = X - 1 | 0, y[i >> 2] = ja, $ = ba)
        }
        H = hd(y[t >> 2] + j * 216 | 0, l, d, B, h, j, y[y[r >> 2] + 64 >> 2], k);
        if ((H | 0) != 0) {
            N = H;
            break
        }
        L = F[t >> 2];
        G = ((y[L + j * 216 + 196 >> 2] | 0) == 1 & 1) + G | 0;
        H = y[b + 12 >> 2] << 3;
        K = y[b + 16 >> 2];
        e = H - K | 0;
        K = (ja | ((H | 0) == (K | 0) ? 0 : e >>> 0 > 8 ? 1 : (id(b) >>> ((32 - e | 0) >>> 0) | 0) != (1 << e - 1 | 0) ? 1 : 0) | 0) != 0;
        H = y[s >> 2];
        if (H == 2 || H == 7) {
            y[p >> 2] = j
        }
        H = F[u >> 2];
        j = Ic(y[D >> 2], H, j);
        if (K & (j | 0) == 0) {
            N = 1;
            break
        }
        if (K) {
            H = $, K = ja
        } else {
            b = c + 1196 | 0;
            c = y[b >> 2] + G | 0;
            if (c >>> 0 > H >>> 0) {
                N = 1;
                break
            }
            y[b >> 2] = c;
            N = 0;
            break
        }
    }
    m = g;
    return N
}
fd.X = 1;

function jd(b, c) {
    var d = F[b + 1192 >> 2],
        f = y[b + 1200 >> 2],
        g = (f | 0) == 0,
        e = b + 1212 | 0;
    a: do {
        if (g) {
            var i = c
        } else {
            for (var h = b + 16 | 0, k = f, l = 0;;) {
                for (var l = l + 1 | 0, j = k - 1 | 0, n = 0;;) {
                    var p = j - n | 0;
                    if (p >>> 0 <= c >>> 0) {
                        i = p;
                        break a
                    }
                    if ((y[y[e >> 2] + (k - n) * 216 - 212 >> 2] | 0) == (d | 0)) {
                        break
                    }
                    n = n + 1 | 0
                }
                k = F[y[h >> 2] + 52 >> 2];
                if (l >>> 0 >= (k >>> 0 > 10 ? k : 10) >>> 0) {
                    i = p;
                    break a
                }
                k = p
            }
        }
    } while (0);
    f = b + 1172 | 0;
    for (g = b + 1176 | 0;;) {
        h = y[e >> 2];
        if ((y[h + i * 216 + 4 >> 2] | 0) != (d | 0)) {
            break
        }
        h = h + i * 216 + 196 | 0;
        p = y[h >> 2];
        if ((p | 0) == 0) {
            break
        }
        y[h >> 2] = p - 1 | 0;
        i = Ic(y[f >> 2], y[g >> 2], i);
        if ((i | 0) == 0) {
            break
        }
    }
}
jd.X = 1;

function gd(b, c, d, f, g) {
    var e = m;
    m += 8;
    var i, h = e + 4;
    Pc(c, 0, 2088);
    i = T(b, e);
    var k = F[e >> 2];
    if (f == 7 || f == 2) {
        if (f = k + 6 | 0, f >>> 0 < 32 & (i | 0) == 0) {
            var l = y[c >> 2] = f;
            i = 5
        } else {
            var j = 1;
            i = 24
        }
    } else {
        f = k + 1 | 0, f >>> 0 < 32 & (i | 0) == 0 ? (l = y[c >> 2] = f, i = 5) : (j = 1, i = 24)
    }
    a: do {
        if (i == 5) {
            j = c | 0;
            f = (l | 0) == 31;
            b: do {
                if (f) {
                    for (;;) {
                        if (((y[b + 8 >> 2] | 0) == 0 & 1 | 0) != 0) {
                            var n = 0;
                            break
                        }
                        if ((S(b, 1) | 0) != 0) {
                            j = 1;
                            break a
                        }
                    }
                    for (;;) {
                        k = c + 328 + (n << 2) | 0;
                        if (n >>> 0 >= 384) {
                            break b
                        }
                        var p = S(b, 8);
                        y[e >> 2] = p;
                        if ((p | 0) == -1) {
                            j = 1;
                            break a
                        }
                        y[k >> 2] = p;
                        n = n + 1 | 0
                    }
                } else {
                    var r = dd(l);
                    if ((r | 0) == 2) {
                        if ((cd(l) | 0) != 4) {
                            i = 14
                        } else {
                            var o = kd(b, c + 176 | 0, l, g);
                            i = 15
                        }
                    } else {
                        i = 14
                    }
                    i == 14 && (o = ld(b, c + 12 | 0, l, g));
                    if ((o | 0) != 0) {
                        j = o;
                        break a
                    }
                    if (k = (r | 0) == 1) {
                        k = y[j >> 2], p = k - 7 | 0, r = p >>> 2, y[c + 4 >> 2] = (p >>> 0 > 11 ? r + 268435453 | 0 : r) << 4 | (k >>> 0 > 18 ? 15 : 0)
                    } else {
                        var t = b,
                            p = e,
                            s = (r | 0) == 0 & 1,
                            r = m;
                        m += 4;
                        (T(t, r) | 0) == 0 ? (t = F[r >> 2], t >>> 0 > 47 ? p = 1 : (y[p >> 2] = A[((s | 0) == 0 ? Q.S : Q.T) + t | 0] & 255, p = 0)) : p = 1;
                        m = r;
                        if ((p | 0) != 0) {
                            j = p;
                            break a
                        }
                        p = y[e >> 2];
                        y[c + 4 >> 2] = p;
                        if (!((p | 0) != 0 | k)) {
                            break
                        }
                    }
                    k = c + 4 | 0;
                    if ((Qc(b, h) | 0) != 0) {
                        j = 1;
                        break a
                    }
                    p = F[h >> 2];
                    if ((p + 26 | 0) >>> 0 > 51) {
                        j = 1;
                        break a
                    }
                    y[c + 8 >> 2] = p;
                    k = md(b, c + 272 | 0, d, y[j >> 2], y[k >> 2]);
                    y[b + 16 >> 2] = (y[b + 4 >> 2] - y[b >> 2] << 3) + y[b + 8 >> 2] | 0;
                    if ((k | 0) != 0) {
                        j = k;
                        break a
                    }
                }
            } while (0);
            j = 0
        }
    } while (0);
    m = e;
    return j
}
gd.X = 1;

function kd(b, c, d, f) {
    var g = m;
    m += 8;
    for (var e, i = g + 4, h = 0;;) {
        var k = c + (h << 2) | 0;
        if (h >>> 0 >= 4) {
            e = 5;
            break
        }
        if ((T(b, g) | 0) != 0) {
            var l = 1;
            e = 19;
            break
        }
        var j = F[g >> 2];
        if (j >>> 0 > 3) {
            l = 1;
            e = 19;
            break
        }
        y[k >> 2] = j;
        h = h + 1 | 0
    }
    a: do {
        if (e == 5) {
            h = f >>> 0 < 2 | (d | 0) == 5;
            b: do {
                if (h) {
                    var n = 0;
                    e = 11
                } else {
                    k = f >>> 0 > 2 & 1;
                    for (l = 0;;) {
                        j = c + 16 + (l << 2) | 0;
                        if (l >>> 0 >= 4) {
                            n = 0;
                            break b
                        }
                        if ((nd(b, g, k) | 0) != 0) {
                            l = 1;
                            break a
                        }
                        var p = F[g >> 2];
                        if (p >>> 0 >= f >>> 0) {
                            l = 1;
                            break a
                        }
                        y[j >> 2] = p;
                        l = l + 1 | 0
                    }
                }
            } while (0);
            b: for (;;) {
                if (n >>> 0 >= 4) {
                    l = 0;
                    break a
                }
                h = y[c + (n << 2) >> 2] == 0 ? 1 : y[c + (n << 2) >> 2] == 1 || y[c + (n << 2) >> 2] == 2 ? 2 : 4;
                y[g >> 2] = h;
                for (var r = h - 1 | 0, o = 0;;) {
                    l = c + 32 + (n << 4) + (o << 2) | 0;
                    k = c + 32 + (n << 4) + (o << 2) + 2 | 0;
                    if ((h | 0) == (o | 0)) {
                        break
                    }
                    j = Qc(b, i);
                    if ((j | 0) != 0) {
                        var t = j;
                        break b
                    }
                    x[l >> 1] = y[i >> 2] & 65535;
                    l = Qc(b, i);
                    if ((l | 0) != 0) {
                        t = l;
                        break b
                    }
                    x[k >> 1] = y[i >> 2] & 65535;
                    o = o + 1 | 0
                }
                y[g >> 2] = r - o | 0;
                n = n + 1 | 0
            }
            y[g >> 2] = r - o | 0;
            l = t
        }
    } while (0);
    m = g;
    return l
}
kd.X = 1;

function ld(b, c, d, f) {
    var g = m;
    m += 8;
    var e, i = g + 4,
        h = dd(d);
    a: do {
        if (h == 2) {
            var k = f >>> 0 > 1,
                l = cd(d);
            b: do {
                if (k) {
                    for (var j = f >>> 0 > 2 & 1, n = 0;;) {
                        var p = c + 132 + (n << 2) | 0;
                        if ((l | 0) == (n | 0)) {
                            var r = 0;
                            break b
                        }
                        if ((nd(b, g, j) | 0) != 0) {
                            var o = 1;
                            e = 21;
                            break a
                        }
                        var t = F[g >> 2];
                        if (t >>> 0 >= f >>> 0) {
                            o = 1;
                            e = 21;
                            break a
                        }
                        y[p >> 2] = t;
                        n = n + 1 | 0
                    }
                } else {
                    r = 0, e = 7
                }
            } while (0);
            for (;;) {
                k = c + 148 + (r << 2) + 2 | 0;
                j = c + 148 + (r << 2) | 0;
                if ((l | 0) == (r | 0)) {
                    o = 0;
                    e = 21;
                    break a
                }
                n = Qc(b, i);
                if ((n | 0) != 0) {
                    o = n;
                    e = 21;
                    break a
                }
                x[j >> 1] = y[i >> 2] & 65535;
                j = Qc(b, i);
                if ((j | 0) != 0) {
                    o = j;
                    e = 21;
                    break a
                }
                x[k >> 1] = y[i >> 2] & 65535;
                r = r + 1 | 0
            }
        } else {
            if (h == 0) {
                for (var l = 0, s = I;;) {
                    var u = l << 3,
                        w = c + 64 + (u << 2) | 0,
                        j = u | 7,
                        k = c + 64 + (j << 2) | 0,
                        j = c + (j << 2) | 0,
                        p = u | 6,
                        n = c + 64 + (p << 2) | 0,
                        p = c + (p << 2) | 0,
                        v = u | 5,
                        t = c + 64 + (v << 2) | 0,
                        v = c + (v << 2) | 0,
                        z = u | 4,
                        B = c + 64 + (z << 2) | 0,
                        z = c + (z << 2) | 0,
                        D = u | 3,
                        C = c + 64 + (D << 2) | 0,
                        D = c + (D << 2) | 0,
                        E = u | 2,
                        G = c + 64 + (E << 2) | 0,
                        E = c + (E << 2) | 0,
                        H = u | 1,
                        K = c + 64 + (H << 2) | 0,
                        H = c + (H << 2) | 0;
                    if ((l | 0) >= 2) {
                        y[i >> 2] = l;
                        y[g >> 2] = s;
                        e = 17;
                        break a
                    }
                    var s = id(b),
                        L = s >>> 31;
                    y[(c + (u << 2) | 0) >> 2] = L;
                    u = s << 1;
                    (L | 0) == 0 ? (y[w >> 2] = s >>> 28 & 7, w = 1, u = s << 4) : w = 0;
                    s = u >>> 31;
                    y[H >> 2] = s;
                    (s | 0) == 0 ? (y[K >> 2] = u >>> 28 & 7, w = w + 1 | 0, u <<= 4) : u <<= 1;
                    s = u >>> 31;
                    y[E >> 2] = s;
                    (s | 0) == 0 ? (y[G >> 2] = u >>> 28 & 7, G = w + 1 | 0, w = u << 4) : (G = w, w = u << 1);
                    E = w >>> 31;
                    y[D >> 2] = E;
                    (E | 0) == 0 ? (y[C >> 2] = w >>> 28 & 7, C = G + 1 | 0, D = w << 4) : (C = G, D = w << 1);
                    G = D >>> 31;
                    y[z >> 2] = G;
                    (G | 0) == 0 ? (y[B >> 2] = D >>> 28 & 7, B = C + 1 | 0, z = D << 4) : (B = C, z = D << 1);
                    C = z >>> 31;
                    y[v >> 2] = C;
                    (C | 0) == 0 ? (y[t >> 2] = z >>> 28 & 7, t = B + 1 | 0, v = z << 4) : (t = B, v = z << 1);
                    B = v >>> 31;
                    y[p >> 2] = B;
                    (B | 0) == 0 ? (y[n >> 2] = v >>> 28 & 7, n = t + 1 | 0, p = v << 4) : (n = t, p = v << 1);
                    t = p >>> 31;
                    y[j >> 2] = t;
                    (t | 0) == 0 ? (y[k >> 2] = p >>> 28 & 7, k = n + 1 | 0, j = p << 4) : (k = n, j = p << 1);
                    if ((od(b, k * 3 + 8 | 0) | 0) == -1) {
                        y[i >> 2] = l;
                        y[g >> 2] = j;
                        o = 1;
                        e = 21;
                        break a
                    }
                    l = l + 1 | 0;
                    s = j
                }
            } else {
                h == 1 ? e = 17 : (o = 0, e = 21)
            }
        }
    } while (0);
    e == 17 && ((T(b, g) | 0) != 0 ? o = 1 : (b = F[g >> 2], b >>> 0 > 3 ? o = 1 : (y[c + 128 >> 2] = b, o = 0)));
    m = g;
    return o
}
ld.X = 1;

function md(b, c, d, f, g) {
    var e = c | 0;
    if ((dd(f) | 0) == 1) {
        if (f = pd(b, c + 1592 | 0, qd(d, 0, e), 16), (f & 15 | 0) != 0) {
            var i = f,
                f = 22
        } else {
            x[c + 48 >> 1] = f >>> 4 & 255;
            var h = 0,
                f = 3
        }
    } else {
        h = 1, f = 3
    }
    a: do {
        if (f == 3) {
            for (var k = 0, l = g, j = 0;;) {
                if ((j | 0) == 4) {
                    break
                }
                var n = l >>> 1,
                    l = (l & 1 | 0) == 0;
                b: do {
                    if (l) {
                        var p = k + 4 | 0
                    } else {
                        for (var r = 0;;) {
                            var o = k + r | 0,
                                t = c + 1720 + (o << 2) | 0,
                                s = c + 56 + (o << 6) + 4 | 0,
                                u = c + (o << 1) | 0,
                                w = c + 56 + (o << 6) | 0;
                            if ((r | 0) == 4) {
                                p = o;
                                break b
                            }
                            o = qd(d, o, e);
                            h ? (s = w = pd(b, w, o, 16), w >>>= 16) : (s = w = pd(b, s, o, 15), w >>>= 15);
                            y[t >> 2] = w;
                            if ((s & 15 | 0) != 0) {
                                i = s;
                                break a
                            }
                            x[u >> 1] = s >>> 4 & 255;
                            r = r + 1 | 0
                        }
                    }
                } while (0);
                k = p;
                l = n;
                j = j + 1 | 0
            }
            if ((l & 3 | 0) != 0) {
                j = pd(b, c + 1656 | 0, -1, 4);
                if ((j & 15 | 0) != 0) {
                    i = j;
                    break
                }
                x[c + 50 >> 1] = j >>> 4 & 255;
                j = pd(b, c + 1672 | 0, -1, 4);
                if ((j & 15 | 0) != 0) {
                    i = j;
                    break
                }
                x[c + 52 >> 1] = j >>> 4 & 255
            }
            if ((l & 2 | 0) == 0) {
                i = 0
            } else {
                for (j = 0;;) {
                    r = k + j | 0;
                    n = c + 1720 + (r << 2) | 0;
                    l = c + (r << 1) | 0;
                    if ((j | 0) == 8) {
                        i = 0;
                        break a
                    }
                    r = pd(b, c + 56 + (r << 6) + 4 | 0, qd(d, r, e), 15);
                    if ((r & 15 | 0) != 0) {
                        i = r;
                        break a
                    }
                    x[l >> 1] = r >>> 4 & 255;
                    y[n >> 2] = r >>> 15;
                    j = j + 1 | 0
                }
            }
        }
    } while (0);
    return i
}
md.X = 1;

function hd(b, c, d, f, g, e, i, h) {
    var k = F[c >> 2];
    y[b >> 2] = k;
    var l = b + 196 | 0;
    y[l >> 2] = y[l >> 2] + 1 | 0;
    Lc(d, e);
    var j = (k | 0) == 31;
    do {
        if (j) {
            if (y[b + 20 >> 2] = 0, F[l >> 2] >>> 0 > 1) {
                x[b + 28 >> 1] = 16;
                x[b + 30 >> 1] = 16;
                x[b + 32 >> 1] = 16;
                x[b + 34 >> 1] = 16;
                x[b + 36 >> 1] = 16;
                x[b + 38 >> 1] = 16;
                x[b + 40 >> 1] = 16;
                x[b + 42 >> 1] = 16;
                x[b + 44 >> 1] = 16;
                x[b + 46 >> 1] = 16;
                x[b + 48 >> 1] = 16;
                x[b + 50 >> 1] = 16;
                x[b + 52 >> 1] = 16;
                x[b + 54 >> 1] = 16;
                x[b + 56 >> 1] = 16;
                x[b + 58 >> 1] = 16;
                x[b + 60 >> 1] = 16;
                x[b + 62 >> 1] = 16;
                x[b + 64 >> 1] = 16;
                x[b + 66 >> 1] = 16;
                x[b + 68 >> 1] = 16;
                x[b + 70 >> 1] = 16;
                x[b + 72 >> 1] = 16;
                x[b + 74 >> 1] = 16;
                var n = 0
            } else {
                for (n = 0;;) {
                    var p = n << 4;
                    x[b + 28 + (n << 1) >> 1] = 16;
                    var r = h + (p | 1) | 0,
                        o = h + (p | 2) | 0,
                        t = h + (p | 3) | 0,
                        s = h + (p | 4) | 0,
                        u = h + (p | 5) | 0,
                        w = h + (p | 6) | 0,
                        v = h + (p | 7) | 0,
                        z = h + (p | 8) | 0,
                        B = h + (p | 9) | 0,
                        D = h + (p | 10) | 0,
                        C = h + (p | 11) | 0,
                        E = h + (p | 12) | 0,
                        G = h + (p | 13) | 0,
                        H = h + (p | 14) | 0,
                        K = h + (p | 15) | 0,
                        L = c + 328 + (n << 6) + 4 | 0,
                        N = c + 328 + (n << 6) + 8 | 0,
                        O = c + 328 + (n << 6) + 12 | 0,
                        R = c + 328 + (n << 6) + 16 | 0,
                        U = c + 328 + (n << 6) + 20 | 0,
                        Y = c + 328 + (n << 6) + 24 | 0,
                        X = c + 328 + (n << 6) + 28 | 0,
                        ba = c + 328 + (n << 6) + 32 | 0,
                        $ = c + 328 + (n << 6) + 36 | 0,
                        ja = c + 328 + (n << 6) + 40 | 0,
                        sa = c + 328 + (n << 6) + 44 | 0,
                        Ea = c + 328 + (n << 6) + 48 | 0,
                        Xa = c + 328 + (n << 6) + 52 | 0,
                        ea = c + 328 + (n << 6) + 56 | 0,
                        fa = c + 328 + (n << 6) + 60 | 0;
                    q[h + p | 0] = y[c + 328 + (n << 6) >> 2] & 255;
                    q[r] = y[L >> 2] & 255;
                    q[o] = y[N >> 2] & 255;
                    q[t] = y[O >> 2] & 255;
                    q[s] = y[R >> 2] & 255;
                    q[u] = y[U >> 2] & 255;
                    q[w] = y[Y >> 2] & 255;
                    q[v] = y[X >> 2] & 255;
                    q[z] = y[ba >> 2] & 255;
                    q[B] = y[$ >> 2] & 255;
                    q[D] = y[ja >> 2] & 255;
                    q[C] = y[sa >> 2] & 255;
                    q[E] = y[Ea >> 2] & 255;
                    q[G] = y[Xa >> 2] & 255;
                    q[H] = y[ea >> 2] & 255;
                    q[K] = y[fa >> 2] & 255;
                    n = n + 1 | 0;
                    if ((n | 0) == 24) {
                        break
                    }
                }
                rd(d, h);
                n = 0
            }
        } else {
            n = b + 28 | 0;
            if ((k | 0) == 0) {
                Pc(n, 0, 54), y[b + 20 >> 2] = y[g >> 2]
            } else {
                if (sd(n, c + 272 | 0, 54), n = y[c + 8 >> 2], p = y[g >> 2], (n | 0) == 0 ? n = p : (n = p + n | 0, y[g >> 2] = n, (n | 0) < 0 ? (n = n + 52 | 0, y[g >> 2] = n) : (n | 0) > 51 && (n = n - 52 | 0, y[g >> 2] = n)), y[b + 20 >> 2] = n, n = td(b, c + 328 | 0, c + 1992 | 0), (n | 0) != 0) {
                    break
                }
            } if ((dd(k) | 0) == 2) {
                n = ud(b, c, f, e, d, h)
            } else {
                n = b;
                t = c;
                p = d;
                z = e;
                s = i;
                r = h;
                o = m;
                m += 72;
                B = aa;
                u = o + 40;
                w = o | 0;
                v = u | 0;
                vd(p, w, v, z);
                z = (dd(y[n >> 2]) | 0) == 1;
                do {
                    if (z) {
                        B = wd(n, r, t + 328 | 0, w, v, s);
                        if ((B | 0) == 0) {
                            B = 3;
                            break
                        }
                        var va = B
                    } else {
                        B = xd(n, r, t, w, v, s);
                        if ((B | 0) == 0) {
                            B = 3;
                            break
                        }
                        va = B
                    }
                    B = 6
                } while (0);
                B == 3 && (va = yd(n, r + 256 | 0, t + 1352 | 0, o + 21 | 0, u + 16 | 0, y[t + 140 >> 2], s), (va | 0) == 0 && (F[n + 196 >> 2] >>> 0 > 1 || rd(p, r), va = 0));
                m = o;
                n = va
            } if ((n | 0) != 0) {
                break
            }
            n = 0
        }
    } while (0);
    return n
}
hd.X = 1;

function td(b, c, d) {
    var f, g = (dd(y[b >> 2]) | 0) == 1;
    a: do {
        if (g) {
            if (x[b + 76 >> 1] << 16 >> 16 == 0) {
                var e = b + 20 | 0
            } else {
                f = b + 20 | 0, Gc(c + 1536 | 0, y[f >> 2]), e = f
            }
            for (var i = 0;;) {
                var h = c + (i << 6) | 0,
                    k = b + 28 + (i << 1) | 0,
                    l = d + (i << 2) | 0;
                if ((i | 0) == 16) {
                    break
                }
                f = y[c + 1536 + (y[zd + (i << 2) >> 2] << 2) >> 2];
                y[h >> 2] = f;
                (f | 0) == 0 ? x[k >> 1] << 16 >> 16 != 0 ? f = 9 : (y[h >> 2] = 16777215, f = 11) : f = 9;
                if (f == 9 && (Dc(h, y[e >> 2], 1, y[l >> 2]) | 0) != 0) {
                    var j = 1;
                    f = 27;
                    break a
                }
                i = i + 1 | 0
            }
            var n = l,
                p = k,
                r = h,
                o = b + 20 | 0;
            f = 18
        } else {
            e = b + 20 | 0;
            for (i = 0;;) {
                var t = c + (i << 6) | 0,
                    s = b + 28 + (i << 1) | 0,
                    u = d + (i << 2) | 0;
                if ((i | 0) == 16) {
                    n = u;
                    p = s;
                    r = t;
                    o = e;
                    f = 18;
                    break a
                }
                if (x[s >> 1] << 16 >> 16 == 0) {
                    y[t >> 2] = 16777215
                } else {
                    if ((Dc(t, y[e >> 2], 0, y[u >> 2]) | 0) != 0) {
                        j = 1;
                        f = 27;
                        break a
                    }
                }
                i = i + 1 | 0
            }
        }
    } while (0);
    a: do {
        if (f == 18) {
            d = r;
            g = y[Ad + (Cc(0, 51, y[b + 24 >> 2] + y[o >> 2] | 0) << 2) >> 2];
            if (x[b + 78 >> 1] << 16 >> 16 == 0) {
                if (x[b + 80 >> 1] << 16 >> 16 == 0) {
                    var w = 0;
                    f = 21
                } else {
                    f = 20
                }
            } else {
                f = 20
            }
            f == 20 && (Hc(c + 1600 | 0, g), w = 0);
            for (;;) {
                h = d + (w << 6) | 0;
                f = p + (w << 1) | 0;
                k = n + (w << 2) | 0;
                if ((w | 0) == 8) {
                    j = 0;
                    break a
                }
                l = y[c + 1600 + (w << 2) >> 2];
                y[h >> 2] = l;
                (l | 0) == 0 ? x[f >> 1] << 16 >> 16 != 0 ? f = 24 : (y[h >> 2] = 16777215, f = 26) : f = 24;
                if (f == 24 && (Dc(h, g, 1, y[k >> 2]) | 0) != 0) {
                    j = 1;
                    break a
                }
                w = w + 1 | 0
            }
        }
    } while (0);
    return j
}
td.X = 1;

function id(b) {
    var c = F[b + 4 >> 2],
        d = y[b + 12 >> 2] << 3,
        f = F[b + 16 >> 2],
        g = d - f | 0,
        e = (g | 0) > 31;
    a: do {
        if (e) {
            var i = F[b + 8 >> 2],
                h = (A[c + 1 | 0] & 255) << 16 | (A[c] & 255) << 24 | A[c + 3 | 0] & 255 | (A[c + 2 | 0] & 255) << 8,
                i = (i | 0) == 0 ? h : (A[c + 4 | 0] & 255) >>> ((8 - i | 0) >>> 0) | h << i
        } else {
            if ((g | 0) > 0) {
                var k = F[b + 8 >> 2],
                    l = (A[c] & 255) << k + 24;
                if ((g - 8 + k | 0) > 0) {
                    for (var h = k + d - 16 - f | 0, k = k + 16 | 0, j = l, n = 0;;) {
                        l = n + 1 | 0;
                        n = n * -8 | 0;
                        j |= (A[c + l | 0] & 255) << k + n;
                        if ((h + n | 0) <= 0) {
                            i = j;
                            break a
                        }
                        n = l
                    }
                } else {
                    i = l
                }
            } else {
                i = 0
            }
        }
    } while (0);
    return i
}
id.X = 1;

function od(b, c) {
    var d = b + 16 | 0,
        f = y[d >> 2] + c | 0;
    y[d >> 2] = f;
    y[b + 8 >> 2] = f & 7;
    f >>> 0 > y[b + 12 >> 2] << 3 >>> 0 ? d = -1 : (y[b + 4 >> 2] = y[b >> 2] + (f >>> 3) | 0, d = 0);
    return d
}

function Bd(b, c) {
    if (c >>> 0 < 2) {
        var d = b >>> 0 > 32767 ? 1 : b >>> 0 > 3071 ? Gb[Cd + (b >>> 10 << 1) >> 1] & 65535 : b >>> 0 > 255 ? Gb[Dd + (b >>> 6 << 1) >> 1] & 65535 : b >>> 0 > 31 ? Gb[je + ((b >>> 2) - 8 << 1) >> 1] & 65535 : Gb[ke + (b << 1) >> 1] & 65535
    } else {
        c >>> 0 < 4 ? d = b >>> 0 > 32767 ? (b & 16384 | 0) != 0 ? 2 : 2082 : b >>> 0 > 4095 ? Gb[le + (b >>> 10 << 1) >> 1] & 65535 : b >>> 0 > 511 ? Gb[me + (b >>> 7 << 1) >> 1] & 65535 : Gb[ne + (b >>> 2 << 1) >> 1] & 65535 : c >>> 0 < 8 ? (d = b >>> 10, d = (d - 8 | 0) >>> 0 < 56 ? Gb[oe + (d << 1) >> 1] & 65535 : Gb[pe + (b >>> 6 << 1) >> 1] & 65535) : c >>> 0 < 17 ? d = Gb[qe + (b >>> 10 << 1) >> 1] & 65535 : (d = b >>> 13, d = (d | 0) != 0 ? Gb[re + (d << 1) >> 1] & 65535 : Gb[se + (b >>> 8 << 1) >> 1] & 65535)
    }
    return d
}
Bd.X = 1;

function qd(b, c, d) {
    var f = te + (c << 3) | 0,
        g = ue + (c << 3) | 0,
        e = A[f + 4 | 0],
        c = A[g + 4 | 0],
        g = (y[g >> 2] | 0) == 4;
    (y[f >> 2] | 0) == 4 ? (e = x[d + ((e & 255) << 1) >> 1] << 16 >> 16, g ? b = e + 1 + (x[d + ((c & 255) << 1) >> 1] << 16 >> 16) >> 1 : (d = F[b + 204 >> 2], b = (ve(b, d) | 0) == 0 ? e : e + 1 + (x[d + 28 + ((c & 255) << 1) >> 1] << 16 >> 16) >> 1)) : g ? (c = x[d + ((c & 255) << 1) >> 1] << 16 >> 16, d = F[b + 200 >> 2], b = (ve(b, d) | 0) == 0 ? c : c + 1 + (x[d + 28 + ((e & 255) << 1) >> 1] << 16 >> 16) >> 1) : (d = F[b + 200 >> 2], (ve(b, d) | 0) == 0 ? d = e = 0 : (e = x[d + 28 + ((e & 255) << 1) >> 1] << 16 >> 16, d = 1), f = F[b + 204 >> 2], (ve(b, f) | 0) == 0 ? b = e : (b = x[f + 28 + ((c & 255) << 1) >> 1] << 16 >> 16, b = (d | 0) == 0 ? b : b + (e + 1) >> 1));
    return b
}
qd.X = 1;

function S(b, c) {
    var d = id(b);
    return (od(b, c) | 0) == 0 ? d >>> ((32 - c | 0) >>> 0) : -1
}

function T(b, c) {
    var d = id(b);
    if ((d | 0) < 0) {
        od(b, 1), d = y[c >> 2] = 0
    } else {
        if (d >>> 0 > 1073741823) {
            (od(b, 3) | 0) == -1 ? d = 1 : (y[c >> 2] = (d >>> 29 & 1) + 1 | 0, d = 0)
        } else {
            if (d >>> 0 > 536870911) {
                (od(b, 5) | 0) == -1 ? d = 1 : (y[c >> 2] = (d >>> 27 & 3) + 3 | 0, d = 0)
            } else {
                if (d >>> 0 > 268435455) {
                    (od(b, 7) | 0) == -1 ? d = 1 : (y[c >> 2] = (d >>> 25 & 7) + 7 | 0, d = 0)
                } else {
                    var f;
                    f = 134217728;
                    for (var g = 0;;) {
                        if ((f | 0) == 0) {
                            break
                        }
                        if ((f & d | 0) != 0) {
                            break
                        }
                        f >>>= 1;
                        g = g + 1 | 0
                    }
                    f = g;
                    d = f + 4 | 0;
                    (d | 0) == 32 ? (y[c >> 2] = 0, od(b, 32), (S(b, 1) | 0) != 1 ? d = 1 : (d = id(b), (od(b, 32) | 0) == -1 ? d = 1 : d == 0 ? (y[c >> 2] = -1, d = 0) : (d == 1 && (y[c >> 2] = -1), d = 1))) : (od(b, f + 5 | 0), f = S(b, d), (f | 0) == -1 ? d = 1 : (y[c >> 2] = (1 << d) - 1 + f | 0, d = 0))
                }
            }
        }
    }
    return d
}
T.X = 1;

function Qc(b, c) {
    var d = m;
    m += 4;
    y[d >> 2] = 0;
    var f = T(b, d),
        g = y[d >> 2],
        e = (g | 0) == -1,
        f = (f | 0) == 0;
    do {
        if (e) {
            if (f) {
                var i = 1;
                break
            }
            y[c >> 2] = -2147483648
        } else {
            if (!f) {
                i = 1;
                break
            }
            i = (g + 1 | 0) >>> 1;
            y[c >> 2] = (g & 1 | 0) != 0 ? i : -i | 0
        }
        i = 0
    } while (0);
    m = d;
    return i
}

function nd(b, c, d) {
    (d | 0) == 0 ? (b = S(b, 1), y[c >> 2] = b, (b | 0) == -1 ? c = 1 : (y[c >> 2] = b ^ 1, c = 0)) : c = T(b, c);
    return c
}

function pd(b, c, d, f) {
    var g = m;
    m += 128;
    var e, i = g + 64,
        h = id(b),
        d = Bd(h >>> 16, d),
        k = (d | 0) == 0;
    a: do {
        if (k) {
            var l = 1
        } else {
            var l = d & 31,
                j = h << l,
                n = 32 - l | 0,
                p = d >>> 11 & 31;
            if (p >>> 0 > f >>> 0) {
                l = 1
            } else {
                var r = d >>> 5 & 63,
                    o = (p | 0) == 0;
                b: do {
                    if (o) {
                        var t = n,
                            s = 0
                    } else {
                        if ((r | 0) == 0) {
                            var u = n,
                                w = j,
                                v = 0
                        } else {
                            if (n >>> 0 < r >>> 0) {
                                if ((od(b, l) | 0) == -1) {
                                    l = 1;
                                    break a
                                }
                                v = 32;
                                w = id(b)
                            } else {
                                v = n, w = j
                            }
                            var z = w >>> ((32 - r | 0) >>> 0);
                            w <<= r;
                            for (var B = 1 << r - 1, u = 0;;) {
                                y[g + (u << 2) >> 2] = (B & z | 0) != 0 ? -1 : 1;
                                B >>>= 1;
                                var D = u + 1 | 0;
                                if ((B | 0) == 0) {
                                    break
                                }
                                u = D
                            }
                            u = v - r | 0;
                            v = D
                        }
                        z = r >>> 0 < 3;
                        if (p >>> 0 > 10 & z) {
                            var C = u,
                                E = w,
                                G = 1
                        } else {
                            C = u, E = w, G = 0
                        }
                        for (w = 0;;) {
                            B = v + w | 0;
                            u = g + (B << 2) | 0;
                            if (B >>> 0 >= p >>> 0) {
                                break
                            }
                            if (C >>> 0 < 16) {
                                if ((od(b, 32 - C | 0) | 0) == -1) {
                                    l = 1;
                                    break a
                                }
                                var H = 32,
                                    E = id(b)
                            } else {
                                H = C
                            }
                            C = E >>> 16;
                            e = aa;
                            if (C >>> 0 > 32767) {
                                var K = 0;
                                e = 16
                            } else {
                                if (C >>> 0 > 16383) {
                                    K = 1, e = 16
                                } else {
                                    if (C >>> 0 > 8191) {
                                        K = 2, e = 16
                                    } else {
                                        if (C >>> 0 > 4095) {
                                            K = 3, e = 16
                                        } else {
                                            if (C >>> 0 > 2047) {
                                                K = 4, e = 16
                                            } else {
                                                if (C >>> 0 > 1023) {
                                                    K = 5, e = 16
                                                } else {
                                                    if (C >>> 0 > 511) {
                                                        K = 6, e = 16
                                                    } else {
                                                        if (C >>> 0 > 255) {
                                                            K = 7, e = 16
                                                        } else {
                                                            if (C >>> 0 > 127) {
                                                                K = 8, e = 16
                                                            } else {
                                                                if (C >>> 0 > 63) {
                                                                    K = 9, e = 16
                                                                } else {
                                                                    if (C >>> 0 > 31) {
                                                                        K = 10, e = 16
                                                                    } else {
                                                                        if (C >>> 0 > 15) {
                                                                            K = 11, e = 16
                                                                        } else {
                                                                            if (C >>> 0 > 7) {
                                                                                K = 12, e = 16
                                                                            } else {
                                                                                if (C >>> 0 > 3) {
                                                                                    K = 13, e = 16
                                                                                } else {
                                                                                    if (C >>> 0 > 1) {
                                                                                        K = 14, e = 16
                                                                                    } else {
                                                                                        if ((C | 0) == 0) {
                                                                                            var L = -2;
                                                                                            e = 17
                                                                                        } else {
                                                                                            K = 15, e = 16
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            e == 16 && (L = K);
                            C = L;
                            if ((C | 0) == -2) {
                                l = 1;
                                break a
                            }
                            e = C + 1 | 0;
                            E <<= e;
                            H = H - e | 0;
                            if (C >>> 0 < 14) {
                                var N = G;
                                e = 21
                            } else {
                                if (e = (G | 0) != 0, (C | 0) == 14) {
                                    N = e ? G : 4, e = 21
                                } else {
                                    var O = e ? G : 1,
                                        R = O,
                                        U = 12,
                                        Y = (O | 0) == 0,
                                        O = C << O;
                                    e = 22
                                }
                            } if (e == 21) {
                                if (e = (G | 0) == 0, C <<= G, (N | 0) == 0) {
                                    var X = H,
                                        ba = E,
                                        $ = C,
                                        ja = G,
                                        sa = e;
                                    e = 26
                                } else {
                                    R = G, U = N, Y = e, O = C, e = 22
                                }
                            }
                            if (e == 22) {
                                if (H >>> 0 < U >>> 0) {
                                    if ((od(b, 32 - H | 0) | 0) == -1) {
                                        l = 1;
                                        break a
                                    }
                                    X = 32;
                                    $ = id(b)
                                } else {
                                    X = H, $ = E
                                }
                                X = X - U | 0;
                                ba = $ << U;
                                $ = ($ >>> ((32 - U | 0) >>> 0)) + O | 0;
                                ja = R;
                                sa = Y
                            }
                            G = (B | 0) == (r | 0) & z ? $ + 2 | 0 : $;
                            E = (G + 2 | 0) >>> 1;
                            y[u >> 2] = E;
                            B = sa ? 1 : ja;
                            B = (E | 0) > (3 << B - 1 | 0) ? (B >>> 0 < 6 & 1) + B | 0 : B;
                            (G & 1 | 0) != 0 && (y[u >> 2] = -E | 0);
                            C = X;
                            E = ba;
                            G = B;
                            w = w + 1 | 0
                        }
                        if (p >>> 0 < f >>> 0) {
                            if (C >>> 0 < 9) {
                                if ((od(b, 32 - C | 0) | 0) == -1) {
                                    l = 1;
                                    break a
                                }
                                z = 32;
                                w = id(b)
                            } else {
                                z = C, w = E
                            }
                            v = we(w >>> 23, p, (f | 0) == 4 & 1);
                            if ((v | 0) == 0) {
                                l = 1;
                                break a
                            }
                            u = v & 15;
                            z = z - u | 0;
                            w <<= u;
                            u = v >>> 4 & 15
                        } else {
                            z = C, w = E, u = 0
                        }
                        v = p - 1 | 0;
                        G = w;
                        w = u;
                        for (u = 0;;) {
                            B = i + (u << 2) | 0;
                            if (u >>> 0 >= v >>> 0) {
                                break
                            }
                            if ((w | 0) == 0) {
                                y[B >> 2] = 1, B = z, E = G, w = 0
                            } else {
                                if (z >>> 0 < 11) {
                                    if ((od(b, 32 - z | 0) | 0) == -1) {
                                        l = 1;
                                        break a
                                    }
                                    E = 32;
                                    z = id(b)
                                } else {
                                    E = z, z = G
                                }
                                G = xe(z >>> 21, w);
                                if ((G | 0) == 0) {
                                    l = 1;
                                    break a
                                }
                                C = G & 15;
                                z <<= C;
                                E = E - C | 0;
                                G = G >>> 4 & 15;
                                y[B >> 2] = G + 1 | 0;
                                B = E;
                                E = z;
                                w = w - G | 0
                            }
                            z = B;
                            G = E;
                            u = u + 1 | 0
                        }
                        y[c + (w << 2) >> 2] = y[g + (v << 2) >> 2];
                        B = 1 << w;
                        if ((v | 0) == 0) {
                            t = z, s = B
                        } else {
                            u = p - 2 | 0;
                            E = w;
                            for (w = 0;;) {
                                if (G = u - w | 0, E = y[i + (G << 2) >> 2] + E | 0, B |= 1 << E, y[(c + (E << 2) | 0) >> 2] = y[g + (G << 2) >> 2], w = w + 1 | 0, (w | 0) == (v | 0)) {
                                    t = z;
                                    s = B;
                                    break b
                                }
                            }
                        }
                    }
                } while (0);
                l = (od(b, 32 - t | 0) | 0) != 0 ? 1 : s << 16 | p << 4
            }
        }
    } while (0);
    m = g;
    return l
}
pd.X = 1;

function we(b, c, d) {
    (d | 0) == 0 ? c == 1 ? (c = Q.ha + (b >>> 4) | 0, b = b >>> 0 > 31 ? A[c] & 255 : A[Q.ia + b | 0] & 255) : b = c == 2 ? A[Q.ja + (b >>> 3) | 0] & 255 : c == 3 ? A[Q.ka + (b >>> 3) | 0] & 255 : c == 4 ? A[Q.la + (b >>> 4) | 0] & 255 : c == 5 ? A[Q.ma + (b >>> 4) | 0] & 255 : c == 6 ? A[Q.na + (b >>> 3) | 0] & 255 : c == 7 ? A[Q.oa + (b >>> 3) | 0] & 255 : c == 8 ? A[Q.pa + (b >>> 3) | 0] & 255 : c == 9 ? A[Q.qa + (b >>> 3) | 0] & 255 : c == 10 ? A[Q.ca + (b >>> 4) | 0] & 255 : c == 11 ? A[Q.da + (b >>> 5) | 0] & 255 : c == 12 ? A[Q.ea + (b >>> 5) | 0] & 255 : c == 13 ? A[Q.fa + (b >>> 6) | 0] & 255 : c == 14 ? A[Q.ga + (b >>> 7) | 0] & 255 : b >>> 0 > 255 ? 17 : 1 : b = b >>> 0 > 255 ? 1 : (c | 0) == 3 ? 17 : b >>> 0 > 127 ? 18 : (c | 0) == 2 ? 34 : b >>> 0 > 63 ? 35 : 51;
    return b
}
we.X = 1;

function xe(b, c) {
    if (c == 1) {
        var d = A[Q.U + (b >>> 10) | 0] & 255
    } else {
        c == 2 ? d = A[Q.V + (b >>> 9) | 0] & 255 : c == 3 ? d = A[Q.W + (b >>> 9) | 0] & 255 : c == 4 ? d = A[Q.Y + (b >>> 8) | 0] & 255 : c == 5 ? d = A[Q.Z + (b >>> 8) | 0] & 255 : c == 6 ? d = A[Q.$ + (b >>> 8) | 0] & 255 : (d = b >>> 0 > 255 ? 7 - (b >>> 8) << 4 | 3 : b >>> 0 > 127 ? 116 : b >>> 0 > 63 ? 133 : b >>> 0 > 31 ? 150 : b >>> 0 > 15 ? 167 : b >>> 0 > 7 ? 184 : b >>> 0 > 3 ? 201 : b >>> 0 > 1 ? 218 : (b | 0) == 0 ? 0 : 235, d = (d >>> 4 & 15) >>> 0 > c >>> 0 ? 0 : d)
    }
    return d
}
xe.X = 1;

function ye(b, c) {
    return c == 0 ? y[b + 200 >> 2] : c == 1 ? y[b + 204 >> 2] : c == 2 ? y[b + 208 >> 2] : c == 3 ? y[b + 212 >> 2] : c == 4 ? b : 0
}

function ve(b, c) {
    return (c | 0) == 0 ? 0 : (y[b + 4 >> 2] | 0) != (y[c + 4 >> 2] | 0) ? 0 : 1
}

function ze(b, c) {
    var d, f = y[c + 8 >> 2],
        g = b + 20 + (f << 2) | 0,
        e = y[g >> 2],
        i = (e | 0) == 0;
    do {
        if (i) {
            if (d = jc(92), y[g >> 2] = d, (d | 0) == 0) {
                var h = 65535;
                d = 8;
                break
            }
        } else {
            d = b + 8 | 0;
            if ((f | 0) != (y[d >> 2] | 0)) {
                Ae(y[e + 40 >> 2]);
                y[(y[g >> 2] + 40 | 0) >> 2] = 0;
                Ae(y[y[g >> 2] + 84 >> 2]);
                y[(y[g >> 2] + 84 | 0) >> 2] = 0;
                d = 7;
                break
            }
            var k = b + 16 | 0;
            if ((Nc(c, y[k >> 2]) | 0) == 0) {
                f = c + 40 | 0;
                Ae(y[f >> 2]);
                y[f >> 2] = 0;
                f = c + 84 | 0;
                Ae(y[f >> 2]);
                h = y[f >> 2] = 0;
                d = 8;
                break
            }
            Ae(y[e + 40 >> 2]);
            y[(y[g >> 2] + 40 | 0) >> 2] = 0;
            Ae(y[y[g >> 2] + 84 >> 2]);
            y[(y[g >> 2] + 84 | 0) >> 2] = 0;
            y[d >> 2] = 33;
            y[b + 4 >> 2] = 257;
            y[k >> 2] = 0;
            y[b + 12 >> 2] = 0
        }
        d = 7
    } while (0);
    if (d == 7) {
        f = c >> 2;
        g = y[g >> 2] >> 2;
        for (e = f + 23; f < e; f++, g++) {
            y[g] = y[f]
        }
        h = 0
    }
    return h
}
ze.X = 1;

function Be(b, c) {
    var d, f = y[c >> 2],
        g = b + 148 + (f << 2) | 0,
        e = y[g >> 2],
        i = (e | 0) == 0;
    do {
        if (i) {
            if (d = jc(72), y[g >> 2] = d, (d | 0) == 0) {
                var h = 65535;
                d = 8;
                break
            }
        } else {
            d = b + 4 | 0;
            if ((f | 0) == (y[d >> 2] | 0)) {
                (y[c + 4 >> 2] | 0) == (y[b + 8 >> 2] | 0) ? f = e : (y[d >> 2] = 257, f = y[g >> 2]);
                Ae(y[f + 20 >> 2]);
                y[(y[g >> 2] + 20 | 0) >> 2] = 0;
                Ae(y[y[g >> 2] + 24 >> 2]);
                y[(y[g >> 2] + 24 | 0) >> 2] = 0;
                Ae(y[y[g >> 2] + 28 >> 2]);
                y[(y[g >> 2] + 28 | 0) >> 2] = 0;
                Ae(y[y[g >> 2] + 44 >> 2]);
                y[(y[g >> 2] + 44 | 0) >> 2] = 0;
                d = 7;
                break
            }
            Ae(y[e + 20 >> 2]);
            y[(y[g >> 2] + 20 | 0) >> 2] = 0;
            Ae(y[y[g >> 2] + 24 >> 2]);
            y[(y[g >> 2] + 24 | 0) >> 2] = 0;
            Ae(y[y[g >> 2] + 28 >> 2]);
            y[(y[g >> 2] + 28 | 0) >> 2] = 0;
            Ae(y[y[g >> 2] + 44 >> 2]);
            y[(y[g >> 2] + 44 | 0) >> 2] = 0
        }
        d = 7
    } while (0);
    if (d == 7) {
        h = c >> 2;
        g = y[g >> 2] >> 2;
        for (f = h + 18; h < f; h++, g++) {
            y[g] = y[h]
        }
        h = 0
    }
    return h
}
Be.X = 1;

function Ce(b, c, d) {
    var f = b + 148 + (c << 2) | 0,
        g = y[f >> 2],
        e = (g | 0) == 0;
    a: do {
        if (e) {
            var i = 1
        } else {
            var i = y[g + 4 >> 2],
                h = y[b + 20 + (i << 2) >> 2];
            if ((h | 0) == 0) {
                i = 1
            } else {
                if (h = De(g, y[h + 52 >> 2], y[h + 56 >> 2]), (h | 0) != 0) {
                    i = h
                } else {
                    var h = b + 4 | 0,
                        k = y[h >> 2],
                        l = (k | 0) == 256;
                    do {
                        if (l) {
                            y[h >> 2] = c;
                            var j = y[f >> 2];
                            y[b + 12 >> 2] = j;
                            j = y[j + 4 >> 2];
                            y[b + 8 >> 2] = j;
                            var n = y[b + 20 + (j << 2) >> 2];
                            y[b + 16 >> 2] = n;
                            j = n + 52 | 0;
                            n = n + 56 | 0;
                            y[b + 1176 >> 2] = y[n >> 2] * y[j >> 2] | 0;
                            y[b + 1340 >> 2] = y[j >> 2];
                            y[b + 1344 >> 2] = y[n >> 2];
                            y[b + 3380 >> 2] = 1
                        } else {
                            if (j = b + 3380 | 0, (y[j >> 2] | 0) == 0) {
                                if ((k | 0) != (c | 0)) {
                                    if (n = b + 8 | 0, (i | 0) == (y[n >> 2] | 0)) {
                                        y[h >> 2] = c, y[b + 12 >> 2] = y[f >> 2]
                                    } else {
                                        if ((d | 0) == 0) {
                                            i = 1;
                                            break a
                                        }
                                        y[h >> 2] = c;
                                        var p = y[f >> 2];
                                        y[b + 12 >> 2] = p;
                                        p = y[p + 4 >> 2];
                                        y[n >> 2] = p;
                                        p = y[b + 20 + (p << 2) >> 2];
                                        y[b + 16 >> 2] = p;
                                        n = p + 52 | 0;
                                        p = p + 56 | 0;
                                        y[b + 1176 >> 2] = y[p >> 2] * y[n >> 2] | 0;
                                        y[b + 1340 >> 2] = y[n >> 2];
                                        y[b + 1344 >> 2] = y[p >> 2];
                                        y[j >> 2] = 1
                                    }
                                }
                            } else {
                                y[j >> 2] = 0;
                                n = b + 1212 | 0;
                                Ae(y[n >> 2]);
                                y[n >> 2] = 0;
                                j = b + 1172 | 0;
                                Ae(y[j >> 2]);
                                y[j >> 2] = 0;
                                var r = b + 1176 | 0,
                                    p = jc(y[r >> 2] * 216 | 0);
                                y[n >> 2] = p;
                                p = jc(y[r >> 2] << 2);
                                y[j >> 2] = p;
                                j = y[n >> 2];
                                if ((j | 0) == 0 | (p | 0) == 0) {
                                    i = 65535;
                                    break a
                                }
                                Pc(j, 0, y[r >> 2] * 216 | 0);
                                var j = b + 16 | 0,
                                    n = y[n >> 2],
                                    p = y[y[j >> 2] + 52 >> 2],
                                    r = y[r >> 2],
                                    o = aa,
                                    t = (r | 0) == 0;
                                b: do {
                                    if (!t) {
                                        for (var s = p - 1 | 0, u = 1 - p | 0, w = p ^ -1, v = 0, z = 0, B = 0;;) {
                                            var o = n + v * 216 + 204 | 0,
                                                D = n + v * 216 + 208 | 0,
                                                C = n + v * 216 + 212 | 0,
                                                E = n + (v - p) * 216 | 0,
                                                G = n + (u + v) * 216 | 0,
                                                H = n + (v + w) * 216 | 0,
                                                K = (B | 0) != 0;
                                            y[n + v * 216 + 200 >> 2] = K ? n + (v - 1) * 216 | 0 : 0;
                                            var L = (z | 0) != 0;
                                            if (L) {
                                                if (y[o >> 2] = E, B >>> 0 < s >>> 0) {
                                                    var N = G,
                                                        o = 8
                                                } else {
                                                    o = 7
                                                }
                                            } else {
                                                y[o >> 2] = 0, o = 7
                                            }
                                            o == 7 && (N = 0);
                                            y[D >> 2] = N;
                                            y[C >> 2] = L & K ? H : 0;
                                            D = B + 1 | 0;
                                            D = (B = (D | 0) == (p | 0)) ? 0 : D;
                                            v = v + 1 | 0;
                                            if ((v | 0) == (r | 0)) {
                                                break b
                                            }
                                            z = (B & 1) + z | 0;
                                            B = D
                                        }
                                    }
                                } while (0);
                                p = (y[b + 1216 >> 2] | 0) == 0;
                                j = y[j >> 2];
                                b: do {
                                    if (p) {
                                        if ((y[j + 16 >> 2] | 0) == 2) {
                                            n = 1
                                        } else {
                                            n = (y[j + 80 >> 2] | 0) == 0;
                                            do {
                                                if (!n && (r = y[j + 84 >> 2], (y[r + 920 >> 2] | 0) != 0 && (y[r + 944 >> 2] | 0) == 0)) {
                                                    n = 1;
                                                    break b
                                                }
                                            } while (0);
                                            n = 0
                                        }
                                    } else {
                                        n = 1
                                    }
                                } while (0);
                                p = b + 1220 | 0;
                                r = y[j + 56 >> 2] * y[j + 52 >> 2] | 0;
                                t = y[j + 88 >> 2];
                                s = y[j + 44 >> 2];
                                j = y[j + 12 >> 2];
                                Ee(p);
                                j = Fe(p, r, t, s, j, n);
                                if ((j | 0) != 0) {
                                    i = j;
                                    break a
                                }
                            }
                        }
                    } while (0);
                    i = 0
                }
            }
        }
    } while (0);
    return i
}
Ce.X = 1;
Module._get_h264bsdClip = (function() {
    return Q.a | 0
});

function De(b, c, d) {
    var f, d = d * c | 0,
        g = F[b + 12 >> 2],
        e = g >>> 0 > 1;
    a: do {
        if (e) {
            var i = F[b + 16 >> 2];
            if (i == 0) {
                for (var i = b + 20 | 0, h = 0;;) {
                    if (h >>> 0 >= g >>> 0) {
                        f = 15;
                        break a
                    }
                    if (F[y[i >> 2] + (h << 2) >> 2] >>> 0 > d >>> 0) {
                        var k = 1;
                        f = 16;
                        break a
                    }
                    h = h + 1 | 0
                }
            } else {
                if (i == 2) {
                    for (var i = g - 1 | 0, h = b + 24 | 0, l = b + 28 | 0, j = 0;;) {
                        if (j >>> 0 >= i >>> 0) {
                            f = 15;
                            break a
                        }
                        var n = F[y[h >> 2] + (j << 2) >> 2],
                            p = F[y[l >> 2] + (j << 2) >> 2];
                        if (!(n >>> 0 <= p >>> 0 & p >>> 0 < d >>> 0)) {
                            k = 1;
                            f = 16;
                            break a
                        }
                        if ((n >>> 0) % (c >>> 0) >>> 0 > (p >>> 0) % (c >>> 0) >>> 0) {
                            k = 1;
                            f = 16;
                            break a
                        }
                        j = j + 1 | 0
                    }
                } else {
                    if ((i - 3 | 0) >>> 0 < 3) {
                        if (F[b + 36 >> 2] >>> 0 > d >>> 0) {
                            k = 1;
                            f = 16;
                            break
                        }
                    } else {
                        if ((i | 0) != 6) {
                            f = 15;
                            break
                        }
                        if (F[b + 40 >> 2] >>> 0 < d >>> 0) {
                            k = 1;
                            f = 16;
                            break
                        }
                    }
                    f = 15
                }
            }
        } else {
            f = 15
        }
    } while (0);
    f == 15 && (k = 0);
    return k
}
De.X = 1;

function Ge(b, c, d, f, g, e) {
    var i = e * g | 0,
        h = (i | 0) == 0,
        e = c - 1 | 0;
    a: do {
        if (!h) {
            for (var k = 0;;) {
                if (y[b + (k << 2) >> 2] = e, k = k + 1 | 0, (k | 0) == (i | 0)) {
                    break a
                }
            }
        }
    } while (0);
    i = (e | 0) == 0;
    a: do {
        if (!i) {
            h = c - 2 | 0;
            for (k = 0;;) {
                var l = h - k | 0,
                    j = F[d + (l << 2) >> 2],
                    n = Math.floor((j >>> 0) / (g >>> 0)),
                    j = (j >>> 0) % (g >>> 0),
                    p = F[(f + (l << 2) | 0) >> 2],
                    r = Math.floor((p >>> 0) / (g >>> 0)),
                    p = (p >>> 0) % (g >>> 0),
                    o = n >>> 0 > r >>> 0;
                b: do {
                    if (!o) {
                        for (var t = j >>> 0 > p >>> 0, s = j + n * g | 0, u = j + 1 | 0, w = n + 1 | 0, v = 0;;) {
                            var z = s + v * g | 0,
                                B = w + v | 0;
                            c: do {
                                if (!t) {
                                    for (var D = 0;;) {
                                        var C = u + D | 0;
                                        y[b + (z + D << 2) >> 2] = l;
                                        if (C >>> 0 > p >>> 0) {
                                            break c
                                        }
                                        D = D + 1 | 0
                                    }
                                }
                            } while (0);
                            if (B >>> 0 > r >>> 0) {
                                break b
                            }
                            v = v + 1 | 0
                        }
                    }
                } while (0);
                k = k + 1 | 0;
                if ((k | 0) == (e | 0)) {
                    break a
                }
            }
        }
    } while (0)
}
Ge.X = 1;

function He(b, c, d, f, g) {
    var e = g * f | 0,
        i = (e | 0) == 0;
    a: do {
        if (!i) {
            for (var h = 0;;) {
                if (y[b + (h << 2) >> 2] = 1, h = h + 1 | 0, (h | 0) == (e | 0)) {
                    break a
                }
            }
        }
    } while (0);
    e = (f - c | 0) >>> 1;
    i = (g - c | 0) >>> 1;
    h = (d | 0) == 0;
    a: do {
        if (!h) {
            for (var k = c << 1, l = k - 1 | 0, j = f - 1 | 0, k = 1 - k | 0, n = g - 1 | 0, p = i, r = e, o = c - 1 | 0, t = 0, s = c, u = e, w = i, v = e, z = i;;) {
                var B = b + (p * f + r << 2) | 0,
                    D = (y[B >> 2] | 0) == 1,
                    C = D & 1;
                D && (y[B >> 2] = 0);
                (o | 0) == -1 & (r | 0) == (u | 0) ? (r = u - 1 | 0, u = r = (r | 0) > 0 ? r : 0, B = l, D = 0) : (o | 0) == 1 & (r | 0) == (v | 0) ? (r = v + 1 | 0, v = r = (r | 0) < (j | 0) ? r : j, B = k, D = 0) : (s | 0) == -1 & (p | 0) == (w | 0) ? (p = w - 1 | 0, w = p = (p | 0) > 0 ? p : 0, B = 0, D = k) : (s | 0) == 1 & (p | 0) == (z | 0) ? (p = z + 1 | 0, z = p = (p | 0) < (n | 0) ? p : n, B = 0, D = l) : (B = s, D = o, r = o + r | 0, p = s + p | 0);
                t = C + t | 0;
                if (t >>> 0 >= d >>> 0) {
                    break a
                }
                o = D;
                s = B
            }
        }
    } while (0)
}
He.X = 1;

function Ie(b, c, d, f) {
    var g = m;
    m += 28;
    var e, i = g + 4,
        h = g + 8,
        k = g + 12,
        l = g + 16,
        j = g + 20;
    y[f >> 2] = 0;
    var n = c | 0,
        p = F[n >> 2],
        r = (p - 6 | 0) >>> 0 < 6 | (p - 13 | 0) >>> 0 < 6;
    a: do {
        if (r) {
            y[f >> 2] = 1;
            var o = 0
        } else {
            if (p == 1 || p == 5) {
                var t = d + 1332 | 0;
                (y[t >> 2] | 0) != 0 && (y[f >> 2] = 1, y[t >> 2] = 0);
                var s = Wc(b, g);
                if ((s | 0) != 0) {
                    o = s
                } else {
                    var u = F[d + 148 + (y[g >> 2] << 2) >> 2];
                    if ((u | 0) == 0) {
                        o = 65520
                    } else {
                        var w = y[u + 4 >> 2],
                            v = F[d + 20 + (w << 2) >> 2];
                        if ((v | 0) == 0) {
                            o = 65520
                        } else {
                            var z = y[d + 8 >> 2];
                            if (!((z | 0) == 32 | (w | 0) == (z | 0)) && (y[n >> 2] | 0) != 5) {
                                o = 65520
                            } else {
                                var B = d + 1300 | 0,
                                    D = y[d + 1304 >> 2],
                                    C = y[c + 4 >> 2];
                                (D | 0) != (C | 0) && (D | 0) == 0 | (C | 0) == 0 && (y[f >> 2] = 1);
                                var E = d + 1300 | 0,
                                    G = (y[n >> 2] | 0) == 5;
                                e = (y[E >> 2] | 0) == 5 ? G ? 17 : 16 : G ? 16 : 17;
                                e == 16 && (y[f >> 2] = 1);
                                var H = v + 12 | 0,
                                    K = b,
                                    L = y[H >> 2],
                                    N = i,
                                    O = m;
                                m += 24;
                                var R = O + 4,
                                    U = R | 0;
                                y[R >> 2] = y[K >> 2];
                                y[R + 4 >> 2] = y[K + 4 >> 2];
                                y[R + 8 >> 2] = y[K + 8 >> 2];
                                y[R + 12 >> 2] = y[K + 12 >> 2];
                                y[R + 16 >> 2] = y[K + 16 >> 2];
                                var Y = T(U, O),
                                    X = (Y | 0) == 0;
                                do {
                                    if (X) {
                                        var ba = T(U, O);
                                        if ((ba | 0) != 0) {
                                            var $ = ba
                                        } else {
                                            var ja = T(U, O);
                                            if ((ja | 0) != 0) {
                                                $ = ja
                                            } else {
                                                var sa = (L | 0) == 0;
                                                b: do {
                                                    if (sa) {
                                                        var Ea = -1
                                                    } else {
                                                        for (var Xa = 0;;) {
                                                            var ea = Xa + 1 | 0;
                                                            if ((L >>> (ea >>> 0) | 0) == 0) {
                                                                Ea = Xa;
                                                                break b
                                                            }
                                                            Xa = ea
                                                        }
                                                    }
                                                } while (0);
                                                var fa = S(U, Ea);
                                                (fa | 0) == -1 ? $ = 1 : (y[N >> 2] = fa, $ = 0)
                                            }
                                        }
                                    } else {
                                        $ = Y
                                    }
                                } while (0);
                                m = O;
                                if (($ | 0) != 0) {
                                    o = 1
                                } else {
                                    var va = d + 1308 | 0,
                                        ob = y[i >> 2];
                                    (y[va >> 2] | 0) != (ob | 0) && (y[va >> 2] = ob, y[f >> 2] = 1);
                                    var wa = y[n >> 2];
                                    if ((wa | 0) == 5) {
                                        var pb = b,
                                            gb = y[H >> 2],
                                            Ib = wa,
                                            Fa = h,
                                            qb = m;
                                        m += 24;
                                        var Ya = qb + 4,
                                            Na = (Ib | 0) == 5;
                                        do {
                                            if (Na) {
                                                var za = Ya | 0,
                                                    da = Ya,
                                                    Oa = pb;
                                                y[da >> 2] = y[Oa >> 2];
                                                y[da + 4 >> 2] = y[Oa + 4 >> 2];
                                                y[da + 8 >> 2] = y[Oa + 8 >> 2];
                                                y[da + 12 >> 2] = y[Oa + 12 >> 2];
                                                y[da + 16 >> 2] = y[Oa + 16 >> 2];
                                                var Za = T(za, qb);
                                                if ((Za | 0) != 0) {
                                                    var Aa = Za
                                                } else {
                                                    var hb = T(za, qb);
                                                    if ((hb | 0) != 0) {
                                                        Aa = hb
                                                    } else {
                                                        var Ga = T(za, qb);
                                                        if ((Ga | 0) != 0) {
                                                            Aa = Ga
                                                        } else {
                                                            var Pa = (gb | 0) == 0;
                                                            b: do {
                                                                if (Pa) {
                                                                    var $a = -1
                                                                } else {
                                                                    for (var Ab = 0;;) {
                                                                        var cb = Ab + 1 | 0;
                                                                        if ((gb >>> (cb >>> 0) | 0) == 0) {
                                                                            $a = Ab;
                                                                            break b
                                                                        }
                                                                        Ab = cb
                                                                    }
                                                                }
                                                            } while (0);
                                                            Aa = (S(za, $a) | 0) == -1 ? 1 : T(za, Fa)
                                                        }
                                                    }
                                                }
                                            } else {
                                                Aa = 1
                                            }
                                        } while (0);
                                        m = qb;
                                        if ((Aa | 0) != 0) {
                                            o = 1;
                                            break
                                        }
                                        if ((y[E >> 2] | 0) == 5) {
                                            var rb = d + 1312 | 0,
                                                Qa = y[h >> 2];
                                            if ((y[rb >> 2] | 0) == (Qa | 0)) {
                                                var pa = Qa,
                                                    ia = rb
                                            } else {
                                                y[f >> 2] = 1, pa = Qa, ia = rb
                                            }
                                        } else {
                                            pa = y[h >> 2], ia = d + 1312 | 0
                                        }
                                        y[ia >> 2] = pa
                                    }
                                    var qa = y[v + 16 >> 2];
                                    do {
                                        if (qa == 0) {
                                            if ((Xc(b, v, y[n >> 2], k) | 0) != 0) {
                                                o = 1;
                                                break a
                                            }
                                            var Ra = d + 1316 | 0,
                                                ra = y[k >> 2];
                                            (y[Ra >> 2] | 0) != (ra | 0) && (y[Ra >> 2] = ra, y[f >> 2] = 1);
                                            if ((y[u + 8 >> 2] | 0) != 0) {
                                                var ib = bd(b, v, y[n >> 2], l);
                                                if ((ib | 0) != 0) {
                                                    o = ib;
                                                    break a
                                                }
                                                var sb = d + 1320 | 0,
                                                    jb = y[l >> 2];
                                                (y[sb >> 2] | 0) != (jb | 0) && (y[sb >> 2] = jb, y[f >> 2] = 1)
                                            }
                                        } else {
                                            if (qa == 1 && (y[v + 24 >> 2] | 0) == 0) {
                                                var db = u + 8 | 0,
                                                    Sa = j | 0,
                                                    kb, ta = b,
                                                    Bb = v,
                                                    Ha = y[n >> 2],
                                                    ya = y[db >> 2],
                                                    xa = Sa,
                                                    Ba = m;
                                                m += 24;
                                                var Ca = Ba + 4,
                                                    Ta = Ca | 0;
                                                y[Ca >> 2] = y[ta >> 2];
                                                y[Ca + 4 >> 2] = y[ta + 4 >> 2];
                                                y[Ca + 8 >> 2] = y[ta + 8 >> 2];
                                                y[Ca + 12 >> 2] = y[ta + 12 >> 2];
                                                y[Ca + 16 >> 2] = y[ta + 16 >> 2];
                                                var lb = T(Ta, Ba),
                                                    Jb = (lb | 0) == 0;
                                                do {
                                                    if (Jb) {
                                                        var eb = T(Ta, Ba);
                                                        if ((eb | 0) != 0) {
                                                            var Da = eb
                                                        } else {
                                                            var Ia = T(Ta, Ba);
                                                            if ((Ia | 0) != 0) {
                                                                Da = Ia
                                                            } else {
                                                                var mb = F[Bb + 12 >> 2],
                                                                    Ua = (mb | 0) == 0;
                                                                b: do {
                                                                    if (Ua) {
                                                                        var Ja = -1
                                                                    } else {
                                                                        for (var Ka = 0;;) {
                                                                            var Cb = Ka + 1 | 0;
                                                                            if ((mb >>> (Cb >>> 0) | 0) == 0) {
                                                                                Ja = Ka;
                                                                                break b
                                                                            }
                                                                            Ka = Cb
                                                                        }
                                                                    }
                                                                } while (0);
                                                                if ((S(Ta, Ja) | 0) == -1) {
                                                                    Da = 1
                                                                } else {
                                                                    if ((Ha | 0) == 5) {
                                                                        var Db = T(Ta, Ba);
                                                                        if ((Db | 0) != 0) {
                                                                            Da = Db;
                                                                            break
                                                                        }
                                                                    }
                                                                    var Eb = Qc(Ta, xa);
                                                                    if ((Eb | 0) != 0) {
                                                                        Da = Eb
                                                                    } else {
                                                                        if ((ya | 0) != 0) {
                                                                            var tb = Qc(Ta, xa + 4 | 0);
                                                                            if ((tb | 0) != 0) {
                                                                                Da = tb;
                                                                                break
                                                                            }
                                                                        }
                                                                        Da = 0
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else {
                                                        Da = lb
                                                    }
                                                } while (0);
                                                m = Ba;
                                                kb = Da;
                                                if ((kb | 0) != 0) {
                                                    o = kb;
                                                    break a
                                                }
                                                var Va = d + 1324 | 0,
                                                    fb = y[Sa >> 2];
                                                (y[Va >> 2] | 0) != (fb | 0) && (y[Va >> 2] = fb, y[f >> 2] = 1);
                                                if ((y[db >> 2] | 0) != 0) {
                                                    var ub = d + 1328 | 0,
                                                        nb = y[j + 4 >> 2];
                                                    (y[ub >> 2] | 0) != (nb | 0) && (y[ub >> 2] = nb, y[f >> 2] = 1)
                                                }
                                            }
                                        }
                                    } while (0);
                                    var Fb = c,
                                        Qb = B,
                                        wb = y[Fb + 4 >> 2];
                                    y[Qb >> 2] = y[Fb >> 2];
                                    y[Qb + 4 >> 2] = wb;
                                    o = 0
                                }
                            }
                        }
                    }
                }
            } else {
                o = 0
            }
        }
    } while (0);
    m = g;
    return o
}
Ie.X = 1;

function Je(b, c, d, f, g) {
    var e = g * f | 0,
        i = F[c + 12 >> 2],
        h = (i | 0) == 1;
    a: do {
        if (h) {
            Pc(b, 0, e << 2)
        } else {
            var k = F[c + 16 >> 2];
            if ((k - 3 | 0) >>> 0 < 3) {
                var l = y[c + 36 >> 2] * d | 0,
                    l = l >>> 0 < e >>> 0 ? l : e,
                    j = (k - 4 | 0) >>> 0 < 2 ? (y[c + 32 >> 2] | 0) == 0 ? l : e - l | 0 : 0
            } else {
                l = j = 0
            } if (k == 0) {
                var k = b,
                    l = i,
                    j = y[c + 20 >> 2],
                    n = e,
                    p = 0,
                    r = 0;
                b: for (;;) {
                    for (var o = r >>> 0 < n >>> 0;;) {
                        if (p >>> 0 < l >>> 0 & o) {
                            break
                        }
                        if (!o) {
                            break b
                        }
                        p = 0
                    }
                    for (var o = j + (p << 2) | 0, t = 0;;) {
                        var s = r + t | 0,
                            u = F[o >> 2];
                        if (!(t >>> 0 < u >>> 0 & s >>> 0 < n >>> 0)) {
                            break
                        }
                        y[k + (s << 2) >> 2] = p;
                        t = t + 1 | 0
                    }
                    p = p + 1 | 0;
                    r = u + r | 0
                }
            } else {
                if (k == 1) {
                    k = b;
                    l = i;
                    j = f;
                    n = g * j | 0;
                    r = (n | 0) == 0;
                    b: do {
                        if (!r) {
                            for (p = 0;;) {
                                if (y[(k + (p << 2) | 0) >> 2] = ((((Math.floor((p >>> 0) / (j >>> 0)) * l | 0) >>> 1) + (p >>> 0) % (j >>> 0) | 0) >>> 0) % (l >>> 0), p = p + 1 | 0, (p | 0) == (n | 0)) {
                                    break b
                                }
                            }
                        }
                    } while (0)
                } else {
                    if (k == 2) {
                        Ge(b, i, y[c + 24 >> 2], y[c + 28 >> 2], f, g)
                    } else {
                        if (k == 3) {
                            He(b, y[c + 32 >> 2], l, f, g)
                        } else {
                            if (k == 4) {
                                k = b;
                                l = y[c + 32 >> 2];
                                n = e;
                                r = (n | 0) == 0;
                                b: do {
                                    if (!r) {
                                        p = 1 - l | 0;
                                        for (o = 0;;) {
                                            if (y[k + (o << 2) >> 2] = o >>> 0 < j >>> 0 ? l : p, o = o + 1 | 0, (o | 0) == (n | 0)) {
                                                break b
                                            }
                                        }
                                    }
                                } while (0)
                            } else {
                                if (k == 5) {
                                    k = b;
                                    l = y[c + 32 >> 2];
                                    n = f;
                                    r = g;
                                    p = (n | 0) == 0;
                                    b: do {
                                        if (!p) {
                                            for (var o = (r | 0) == 0, t = 1 - l | 0, w = s = 0;;) {
                                                if (!o) {
                                                    for (var v = 0;;) {
                                                        if (y[k + (s + v * n << 2) >> 2] = (w + v | 0) >>> 0 < j >>> 0 ? l : t, v = v + 1 | 0, (v | 0) == (r | 0)) {
                                                            break
                                                        }
                                                    }
                                                    w = w + r | 0
                                                }
                                                s = s + 1 | 0;
                                                if ((s | 0) == (n | 0)) {
                                                    break b
                                                }
                                            }
                                        }
                                    } while (0)
                                } else {
                                    if ((e | 0) != 0) {
                                        k = c + 44 | 0;
                                        for (l = 0;;) {
                                            if (y[b + (l << 2) >> 2] = y[y[k >> 2] + (l << 2) >> 2], l = l + 1 | 0, (l | 0) == (e | 0)) {
                                                break a
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } while (0)
}
Je.X = 1;

function vd(b, c, d, f) {
    var g = (f | 0) == 0;
    do {
        if (!g) {
            var e = F[b + 4 >> 2],
                i = y[b + 8 >> 2],
                h = Math.floor((f >>> 0) / (e >>> 0)),
                k = b | 0,
                l = F[k >> 2],
                j = (h | 0) != 0;
            if (j) {
                for (var n = e * (h * 240 - 16) + (f << 4) - 1 | 0, p = 0;;) {
                    if (q[c + p | 0] = q[l + (n + p) | 0], p = p + 1 | 0, (p | 0) == 21) {
                        break
                    }
                }
                n = c + 21 | 0
            } else {
                n = c
            } if (p = (h * e | 0) != (f | 0)) {
                var r = (f - (f >>> 0) % (e >>> 0)) * 240 + (f << 4) - 1 | 0,
                    o = e << 4;
                q[d] = q[l + r | 0];
                q[d + 1 | 0] = q[l + (r + o) | 0];
                q[d + 2 | 0] = q[l + (r + (e << 5)) | 0];
                q[d + 3 | 0] = q[l + (r + e * 48) | 0];
                q[d + 4 | 0] = q[l + (r + (e << 6)) | 0];
                q[d + 5 | 0] = q[l + (r + e * 80) | 0];
                q[d + 6 | 0] = q[l + (r + e * 96) | 0];
                q[d + 7 | 0] = q[l + (r + e * 112) | 0];
                q[d + 8 | 0] = q[l + (r + (e << 7)) | 0];
                q[d + 9 | 0] = q[l + (r + e * 144) | 0];
                q[d + 10 | 0] = q[l + (r + e * 160) | 0];
                q[d + 11 | 0] = q[l + (r + e * 176) | 0];
                q[d + 12 | 0] = q[l + (r + e * 192) | 0];
                q[d + 13 | 0] = q[l + (r + e * 208) | 0];
                q[d + 14 | 0] = q[l + (r + e * 224) | 0];
                q[d + 15 | 0] = q[l + (r + e * 240) | 0];
                l = d + 16 | 0
            } else {
                l = d
            }
            k = F[k >> 2];
            if (j) {
                var j = h * 56 | 0,
                    r = f << 3,
                    o = e << 3 & 2147483640,
                    t = e * ((i << 8) + j) + r - 1 - o | 0;
                q[n] = q[k + t | 0];
                q[n + 1 | 0] = q[t + (k + 1) | 0];
                q[n + 2 | 0] = q[t + (k + 2) | 0];
                q[n + 3 | 0] = q[t + (k + 3) | 0];
                q[n + 4 | 0] = q[t + (k + 4) | 0];
                q[n + 5 | 0] = q[t + (k + 5) | 0];
                q[n + 6 | 0] = q[t + (k + 6) | 0];
                q[n + 7 | 0] = q[t + (k + 7) | 0];
                q[n + 8 | 0] = q[t + (k + 8) | 0];
                j = e * (i * 320 + j) + r - 9 - o | 0;
                q[n + 9 | 0] = q[j + (k + 8) | 0];
                q[n + 10 | 0] = q[j + (k + 9) | 0];
                q[n + 11 | 0] = q[j + (k + 10) | 0];
                q[n + 12 | 0] = q[j + (k + 11) | 0];
                q[n + 13 | 0] = q[j + (k + 12) | 0];
                q[n + 14 | 0] = q[j + (k + 13) | 0];
                q[n + 15 | 0] = q[j + (k + 14) | 0];
                q[n + 16 | 0] = q[j + (k + 15) | 0];
                q[n + 17 | 0] = q[j + (k + 16) | 0]
            }
            if (p) {
                var n = e << 3 & 2147483640,
                    s = h * 56 | 0,
                    u = f << 3,
                    w = e * ((i << 8) + s) + u - 1 | 0;
                q[l] = q[k + w | 0];
                q[l + 1 | 0] = q[k + (w + n) | 0];
                h = e << 4;
                q[l + 2 | 0] = q[k + (w + h) | 0];
                p = n * 3 | 0;
                q[l + 3 | 0] = q[k + (w + p) | 0];
                j = e << 5;
                q[l + 4 | 0] = q[k + (w + j) | 0];
                r = n * 5 | 0;
                q[l + 5 | 0] = q[k + (w + r) | 0];
                o = n * 6 | 0;
                q[l + 6 | 0] = q[k + (w + o) | 0];
                t = n * 7 | 0;
                q[l + 7 | 0] = q[k + (w + t) | 0];
                e = t + (e * (i * 320 + s - 64) + u + n - 1) | 0;
                q[l + 8 | 0] = q[k + e | 0];
                q[l + 9 | 0] = q[k + (e + n) | 0];
                q[l + 10 | 0] = q[k + (e + h) | 0];
                q[l + 11 | 0] = q[k + (e + p) | 0];
                q[l + 12 | 0] = q[k + (e + j) | 0];
                q[l + 13 | 0] = q[k + (e + r) | 0];
                q[l + 14 | 0] = q[k + (e + o) | 0];
                q[l + 15 | 0] = q[k + (e + t) | 0]
            }
        }
    } while (0)
}
vd.X = 1;

function Ke(b, c) {
    for (var d = c + 1 | 0, f = c + 2 | 0, g = c + 3 | 0, e = c + 4 | 0, i = c + 5 | 0, h = c + 6 | 0, k = c + 7 | 0, l = c + 8 | 0, j = c + 9 | 0, n = c + 10 | 0, p = c + 11 | 0, r = c + 12 | 0, o = c + 13 | 0, t = c + 14 | 0, s = c + 15 | 0, u = 0;;) {
        var w = u << 4,
            v = b + (w | 1) | 0,
            z = b + (w | 2) | 0,
            B = b + (w | 3) | 0,
            D = b + (w | 4) | 0,
            C = b + (w | 5) | 0,
            E = b + (w | 6) | 0,
            G = b + (w | 7) | 0,
            H = b + (w | 8) | 0,
            K = b + (w | 9) | 0,
            L = b + (w | 10) | 0,
            N = b + (w | 11) | 0,
            O = b + (w | 12) | 0,
            R = b + (w | 13) | 0,
            U = b + (w | 14) | 0,
            Y = b + (w | 15) | 0;
        q[b + w | 0] = q[c];
        q[v] = q[d];
        q[z] = q[f];
        q[B] = q[g];
        q[D] = q[e];
        q[C] = q[i];
        q[E] = q[h];
        q[G] = q[k];
        q[H] = q[l];
        q[K] = q[j];
        q[L] = q[n];
        q[N] = q[p];
        q[O] = q[r];
        q[R] = q[o];
        q[U] = q[t];
        q[Y] = q[s];
        u = u + 1 | 0;
        if ((u | 0) == 16) {
            break
        }
    }
}
Ke.X = 1;

function wd(b, c, d, f, g, e) {
    var i = y[b + 200 >> 2],
        h = ve(b, i),
        e = (e | 0) == 0,
        i = (h | 0) == 0 | e ? h : (dd(y[i >> 2]) | 0) != 2 ? h : 0,
        h = y[b + 204 >> 2],
        k = ve(b, h),
        h = (k | 0) == 0 | e ? k : (dd(y[h >> 2]) | 0) != 2 ? k : 0,
        k = y[b + 212 >> 2],
        l = ve(b, k),
        e = (l | 0) == 0 | e ? l : (dd(y[k >> 2]) | 0) != 2 ? l : 0,
        k = y[b >> 2] + 1 & 3;
    do {
        if (k == 0) {
            if ((h | 0) == 0) {
                var j = 1,
                    b = 18;
                break
            }
            Ke(c, f + 1 | 0)
        } else {
            if (k == 1) {
                if ((i | 0) == 0) {
                    j = 1;
                    b = 18;
                    break
                }
                Le(c, g)
            } else {
                if (k == 2) {
                    Me(c, f + 1 | 0, g, i, h)
                } else {
                    if ((i | 0) == 0 | (h | 0) == 0 | (e | 0) == 0) {
                        j = 1;
                        b = 18;
                        break
                    }
                    Ne(c, f + 1 | 0, g)
                }
            }
        }
        b = 17
    } while (0);
    b == 17 && (Oe(c, d | 0, 0), Oe(c, d + 64 | 0, 1), Oe(c, d + 128 | 0, 2), Oe(c, d + 192 | 0, 3), Oe(c, d + 256 | 0, 4), Oe(c, d + 320 | 0, 5), Oe(c, d + 384 | 0, 6), Oe(c, d + 448 | 0, 7), Oe(c, d + 512 | 0, 8), Oe(c, d + 576 | 0, 9), Oe(c, d + 640 | 0, 10), Oe(c, d + 704 | 0, 11), Oe(c, d + 768 | 0, 12), Oe(c, d + 832 | 0, 13), Oe(c, d + 896 | 0, 14), Oe(c, d + 960 | 0, 15), j = 0);
    return j
}
wd.X = 1;

function xd(b, c, d, f, g, e) {
    var i = m;
    m += 36;
    for (var h = i + 12, e = (e | 0) == 0, k = i | 0, l = h | 0, j = i + 20, h = h + 1 | 0, n = i + 1 | 0, p = i + 4 | 0, r = i + 5 | 0, o = 0;;) {
        var t = d + 328 + (o << 6) | 0;
        if (o >>> 0 >= 16) {
            var s = 0;
            break
        }
        var u = te + (o << 3) | 0,
            w = ye(b, y[u >> 2]),
            v = ve(b, w),
            v = (v | 0) == 0 | e ? v : (dd(y[w >> 2]) | 0) != 2 ? v : 0,
            z = ue + (o << 3) | 0,
            B = z | 0,
            B = ye(b, y[B >> 2]),
            D = ve(b, B),
            D = (D | 0) == 0 | e ? D : (dd(y[B >> 2]) | 0) != 2 ? D : 0,
            C = (v | 0) != 0;
        (C & (D | 0) != 0 & 1 | 0) == 0 ? u = 2 : (u = (dd(y[w >> 2]) | 0) == 0 ? A[w + 82 + (y[u + 4 >> 2] & 255) | 0] & 255 : 2, w = (dd(y[B >> 2]) | 0) == 0 ? A[B + 82 + (y[(z + 4 | 0) >> 2] & 255) | 0] & 255 : 2, u = u >>> 0 < w >>> 0 ? u : w);
        (y[d + 12 + (o << 2) >> 2] | 0) == 0 && (w = F[d + 76 + (o << 2) >> 2], u = (w >>> 0 >= u >>> 0 & 1) + w | 0);
        q[b + (o + 82) | 0] = u & 255;
        w = ye(b, y[(Pe + (o << 3) | 0) >> 2]);
        z = ve(b, w);
        w = (z | 0) == 0 | e ? z : (dd(y[w >> 2]) | 0) != 2 ? z : 0;
        B = Qe + (o << 3) | 0;
        z = ye(b, y[B >> 2]);
        B = ve(b, z);
        z = (B | 0) == 0 | e ? B : (dd(y[z >> 2]) | 0) != 2 ? B : 0;
        Re(k, l, c, f, g, o);
        if (u == 0) {
            if ((D | 0) == 0) {
                s = 1;
                break
            }
            v = j;
            D = n;
            C = q[D];
            u = q[D + 1 | 0];
            q[v + 12 | 0] = C;
            q[v + 8 | 0] = C;
            q[v + 4 | 0] = C;
            q[v] = C;
            q[v + 13 | 0] = u;
            q[v + 9 | 0] = u;
            q[v + 5 | 0] = u;
            q[v + 1 | 0] = u;
            C = q[D + 2 | 0];
            D = q[D + 3 | 0];
            q[v + 14 | 0] = C;
            q[v + 10 | 0] = C;
            q[v + 6 | 0] = C;
            q[v + 2 | 0] = C;
            q[v + 15 | 0] = D;
            q[v + 11 | 0] = D;
            q[v + 7 | 0] = D;
            q[v + 3 | 0] = D
        } else {
            if (u == 1) {
                if (!C) {
                    s = 1;
                    break
                }
                v = j;
                C = h;
                u = q[C + 1 | 0];
                kc(v, q[C], 4);
                D = C + 2 | 0;
                kc(v + 4 | 0, u, 4);
                C = q[C + 3 | 0];
                kc(v + 8 | 0, q[D], 4);
                kc(v + 12 | 0, C, 4)
            } else {
                if (u == 2) {
                    Se(j, n, h, v, D)
                } else {
                    if (u == 3) {
                        if ((D | 0) == 0) {
                            s = 1;
                            break
                        }(w | 0) == 0 && kc(r, q[p], 4);
                        Te(j, n)
                    } else {
                        if (u == 4) {
                            if ((D | 0) == 0 | C ^ 1 | (z | 0) == 0) {
                                s = 1;
                                break
                            }
                            Ue(j, n, h)
                        } else {
                            if (u == 5) {
                                if ((D | 0) == 0 | C ^ 1 | (z | 0) == 0) {
                                    s = 1;
                                    break
                                }
                                Ve(j, n, h)
                            } else {
                                if (u == 6) {
                                    if ((D | 0) == 0 | C ^ 1 | (z | 0) == 0) {
                                        s = 1;
                                        break
                                    }
                                    We(j, n, h)
                                } else {
                                    if (u == 7) {
                                        if ((D | 0) == 0) {
                                            s = 1;
                                            break
                                        }(w | 0) == 0 && kc(r, q[p], 4);
                                        Xe(j, n)
                                    } else {
                                        if (!C) {
                                            s = 1;
                                            break
                                        }
                                        Ye(j, h)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        v = c;
        u = j;
        D = (y[Ze + (o << 2) >> 2] << 4) + y[$e + (o << 2) >> 2] | 0;
        w = u + 4 | 0;
        y[(v + D | 0) >> 2] = y[u >> 2];
        C = u + 8 | 0;
        y[(D + (v + 16) | 0) >> 2] = y[w >> 2];
        u = u + 12 | 0;
        y[(D + (v + 32) | 0) >> 2] = y[C >> 2];
        y[(D + (v + 48) | 0) >> 2] = y[u >> 2];
        Oe(c, t, o);
        o = o + 1 | 0
    }
    m = i;
    return s
}
xd.X = 1;

function yd(b, c, d, f, g, e, i) {
    for (var h = y[b + 200 >> 2], k = ve(b, h), l = (i | 0) == 0, h = (k | 0) == 0 | l ? k : (dd(y[h >> 2]) | 0) != 2 ? k : 0, k = y[b + 204 >> 2], i = ve(b, k), k = (i | 0) == 0 | l ? i : (dd(y[k >> 2]) | 0) != 2 ? i : 0, j = y[b + 212 >> 2], n = ve(b, j), b = (h | 0) == 0, i = (k | 0) == 0, l = b | i | (((n | 0) == 0 | l ? n : (dd(y[j >> 2]) | 0) != 2 ? n : 0) | 0) == 0, j = 0;;) {
        var p = j << 2,
            n = d + (p << 6) | 0,
            r = d + ((p | 3) << 6) | 0,
            o = d + ((p | 2) << 6) | 0,
            t = d + ((p | 1) << 6) | 0,
            s = p + 16 | 0,
            u = p + 19 | 0,
            w = p + 18 | 0,
            p = p + 17 | 0,
            v = g + (j << 3) | 0,
            z = f + (j * 9 + 1) | 0,
            B = c + (j << 6) | 0;
        if (j >>> 0 >= 2) {
            var D = 0;
            break
        }
        if (e == 0) {
            af(B, z, v, h, k)
        } else {
            if (e == 1) {
                if (b) {
                    D = 1;
                    break
                }
                for (var C = B, z = 0;;) {
                    var E = z << 3,
                        G = C + (E | 1) | 0,
                        H = C + (E | 2) | 0,
                        K = C + (E | 3) | 0,
                        L = C + (E | 4) | 0,
                        N = C + (E | 5) | 0,
                        O = C + (E | 6) | 0,
                        R = C + (E | 7) | 0,
                        U = v + z | 0;
                    q[C + E | 0] = q[U];
                    q[G] = q[U];
                    q[H] = q[U];
                    q[K] = q[U];
                    q[L] = q[U];
                    q[N] = q[U];
                    q[O] = q[U];
                    q[R] = q[U];
                    z = z + 1 | 0;
                    if ((z | 0) == 8) {
                        break
                    }
                }
            } else {
                if (e == 2) {
                    if (i) {
                        D = 1;
                        break
                    }
                    C = B;
                    v = z;
                    for (z = 0;;) {
                        if (E = z + (C + 8) | 0, G = z + (C + 16) | 0, H = z + (C + 24) | 0, K = z + (C + 32) | 0, L = z + (C + 40) | 0, N = z + (C + 48) | 0, O = z + (C + 56) | 0, R = v + z | 0, q[C + z | 0] = q[R], q[E] = q[R], q[G] = q[R], q[H] = q[R], q[K] = q[R], q[L] = q[R], q[N] = q[R], q[O] = q[R], z = z + 1 | 0, (z | 0) == 8) {
                            break
                        }
                    }
                } else {
                    if (l) {
                        D = 1;
                        break
                    }
                    bf(B, z, v)
                }
            }
        }
        Oe(B, n, s);
        Oe(B, t, p);
        Oe(B, o, w);
        Oe(B, r, u);
        j = j + 1 | 0
    }
    return D
}
yd.X = 1;

function Le(b, c) {
    for (var d = 0;;) {
        var f = d << 4,
            g = c + d | 0,
            e = b + (f | 1) | 0,
            i = b + (f | 2) | 0,
            h = b + (f | 3) | 0,
            k = b + (f | 4) | 0,
            l = b + (f | 5) | 0,
            j = b + (f | 6) | 0,
            n = b + (f | 7) | 0,
            p = b + (f | 8) | 0,
            r = b + (f | 9) | 0,
            o = b + (f | 10) | 0,
            t = b + (f | 11) | 0,
            s = b + (f | 12) | 0,
            u = b + (f | 13) | 0,
            w = b + (f | 14) | 0,
            v = b + (f | 15) | 0;
        q[b + f | 0] = q[g];
        q[e] = q[g];
        q[i] = q[g];
        q[h] = q[g];
        q[k] = q[g];
        q[l] = q[g];
        q[j] = q[g];
        q[n] = q[g];
        q[p] = q[g];
        q[r] = q[g];
        q[o] = q[g];
        q[t] = q[g];
        q[s] = q[g];
        q[u] = q[g];
        q[w] = q[g];
        q[v] = q[g];
        d = d + 1 | 0;
        if ((d | 0) == 16) {
            break
        }
    }
}
Le.X = 1;

function Ne(b, c, d) {
    for (var f = A[c - 1 | 0] & 255, g = A[c + 15 | 0] & 255, e = A[d + 15 | 0] & 255, c = ((g - f << 3) + (((A[c + 14 | 0] & 255) - (A[c] & 255)) * 7 + (((A[c + 13 | 0] & 255) - (A[c + 1 | 0] & 255)) * 6 + (((A[c + 12 | 0] & 255) - (A[c + 2 | 0] & 255)) * 5 + (((A[c + 11 | 0] & 255) - (A[c + 3 | 0] & 255) << 2) + (((A[c + 10 | 0] & 255) - (A[c + 4 | 0] & 255)) * 3 + (((A[c + 9 | 0] & 255) - (A[c + 5 | 0] & 255) << 1) + ((A[c + 8 | 0] & 255) - (A[c + 6 | 0] & 255))))))))) * 5 + 32 >> 6, d = ((e - f << 3) + (((A[d + 14 | 0] & 255) - (A[d] & 255)) * 7 + (((A[d + 13 | 0] & 255) - (A[d + 1 | 0] & 255)) * 6 + (((A[d + 12 | 0] & 255) - (A[d + 2 | 0] & 255)) * 5 + (((A[d + 11 | 0] & 255) - (A[d + 3 | 0] & 255) << 2) + (((A[d + 10 | 0] & 255) - (A[d + 4 | 0] & 255)) * 3 + (((A[d + 9 | 0] & 255) - (A[d + 5 | 0] & 255) << 1) + ((A[d + 8 | 0] & 255) - (A[d + 6 | 0] & 255))))))))) * 5 + 32 >> 6, g = (e + g << 4) + 16 + d * -7 + c * -7 | 0, e = 0;;) {
        for (var f = e << 4, i = g + d * e | 0, h = 0;;) {
            var k = i + c * h >> 5;
            q[b + (f + h) | 0] = (k | 0) < 0 ? 0 : (k | 0) > 255 ? -1 : k & 255;
            h = h + 1 | 0;
            if ((h | 0) == 16) {
                break
            }
        }
        e = e + 1 | 0;
        if ((e | 0) == 16) {
            break
        }
    }
}
Ne.X = 1;

function Oe(b, c, d) {
    var f = (y[c >> 2] | 0) == 16777215;
    a: do {
        if (!f) {
            for (var g = d >>> 0 < 16, e = g ? d : d & 3, g = g ? 16 : 8, e = y[$e + (e << 2) >> 2] + g * y[Ze + (e << 2) >> 2] | 0, i = e + 1 | 0, h = e + 2 | 0, k = e + 3 | 0, l = 0;;) {
                var j = g * l | 0,
                    n = b + (i + j) | 0,
                    p = b + (h + j) | 0,
                    r = b + (k + j) | 0,
                    o = b + (e + j) | 0,
                    t = l << 2,
                    s = c + ((t | 2) << 2) | 0,
                    j = c + ((t | 3) << 2) | 0,
                    u = y[c + ((t | 1) << 2) >> 2],
                    w = A[n] & 255;
                q[o] = q[Q.a + (y[c + (t << 2) >> 2] + 512 + (A[o] & 255)) | 0];
                o = y[s >> 2];
                t = A[p] & 255;
                q[n] = q[Q.a + (w + (u + 512)) | 0];
                n = q[Q.a + (y[j >> 2] + 512 + (A[r] & 255)) | 0];
                q[p] = q[Q.a + (t + (o + 512)) | 0];
                q[r] = n;
                l = l + 1 | 0;
                if ((l | 0) == 4) {
                    break a
                }
            }
        }
    } while (0)
}
Oe.X = 1;

function Re(b, c, d, f, g, e) {
    var i = F[$e + (e << 2) >> 2],
        h = F[Ze + (e << 2) >> 2],
        k = (1285 >>> (e >>> 0) & 1 | 0) != 0;
    if (k) {
        var l = q[h + (g + 1) | 0];
        q[c + 1 | 0] = q[g + h | 0];
        q[c + 2 | 0] = l;
        l = q[h + (g + 3) | 0];
        q[c + 3 | 0] = q[h + (g + 2) | 0];
        q[c + 4 | 0] = l
    } else {
        var l = (h << 4) + i | 0,
            j = q[l + (d + 15) | 0];
        q[c + 1 | 0] = q[d + (l - 1) | 0];
        q[c + 2 | 0] = j;
        j = q[l + (d + 47) | 0];
        q[c + 3 | 0] = q[l + (d + 31) | 0];
        q[c + 4 | 0] = j
    }(51 >>> (e >>> 0) & 1 | 0) == 0 ? (f = h - 1 | 0, i = (f << 4) + i | 0, e = q[i + (d + 1) | 0], q[b + 1 | 0] = q[d + i | 0], q[b + 2 | 0] = e, e = q[i + (d + 3) | 0], q[b + 3 | 0] = q[i + (d + 2) | 0], q[b + 4 | 0] = e, e = q[i + (d + 5) | 0], q[b + 5 | 0] = q[i + (d + 4) | 0], q[b + 6 | 0] = e, e = q[i + (d + 7) | 0], q[b + 7 | 0] = q[i + (d + 6) | 0], q[b + 8 | 0] = e, d = k ? q[g + f | 0] : q[d + (i - 1) | 0], q[b] = d, q[c] = d) : (d = q[f + i | 0], q[c] = d, q[b] = d, c = q[i + (f + 2) | 0], q[b + 1 | 0] = q[i + (f + 1) | 0], q[b + 2 | 0] = c, c = q[i + (f + 4) | 0], q[b + 3 | 0] = q[i + (f + 3) | 0], q[b + 4 | 0] = c, c = q[i + (f + 6) | 0], q[b + 5 | 0] = q[i + (f + 5) | 0], q[b + 6 | 0] = c, c = q[i + (f + 8) | 0], q[b + 7 | 0] = q[i + (f + 7) | 0], q[b + 8 | 0] = c)
}
Re.X = 1;

function Me(b, c, d, f, g) {
    var f = (f | 0) != 0,
        g = (g | 0) == 0,
        e = g | f ^ 1;
    do {
        if (e) {
            var i = f ? ((A[d + 15 | 0] & 255) + ((A[d + 14 | 0] & 255) + ((A[d + 13 | 0] & 255) + ((A[d + 12 | 0] & 255) + ((A[d + 11 | 0] & 255) + ((A[d + 10 | 0] & 255) + ((A[d + 9 | 0] & 255) + ((A[d + 8 | 0] & 255) + ((A[d + 7 | 0] & 255) + ((A[d + 6 | 0] & 255) + ((A[d + 5 | 0] & 255) + ((A[d + 4 | 0] & 255) + ((A[d + 3 | 0] & 255) + ((A[d + 2 | 0] & 255) + ((A[d + 1 | 0] & 255) + (A[d] & 255))))))))))))))) + 8 | 0) >>> 4 : g ? 128 : ((A[c + 15 | 0] & 255) + ((A[c + 14 | 0] & 255) + ((A[c + 13 | 0] & 255) + ((A[c + 12 | 0] & 255) + ((A[c + 11 | 0] & 255) + ((A[c + 10 | 0] & 255) + ((A[c + 9 | 0] & 255) + ((A[c + 8 | 0] & 255) + ((A[c + 7 | 0] & 255) + ((A[c + 6 | 0] & 255) + ((A[c + 5 | 0] & 255) + ((A[c + 4 | 0] & 255) + ((A[c + 3 | 0] & 255) + ((A[c + 2 | 0] & 255) + ((A[c + 1 | 0] & 255) + (A[c] & 255))))))))))))))) + 8 | 0) >>> 4
        } else {
            for (var h = i = 0;;) {
                var k = (A[c + i | 0] & 255) + h + (A[d + i | 0] & 255) | 0,
                    i = i + 1 | 0;
                if ((i | 0) == 16) {
                    break
                }
                h = k
            }
            i = (k + 16 | 0) >>> 5
        }
    } while (0);
    kc(b, i & 255, 256)
}
Me.X = 1;

function Se(b, c, d, f, g) {
    f = (f | 0) != 0;
    g = (g | 0) == 0;
    kc(b, (g | f ^ 1 ? f ? (A[d] & 255) + 2 + (A[d + 1 | 0] & 255) + (A[d + 2 | 0] & 255) + (A[d + 3 | 0] & 255) >> 2 : g ? 128 : (A[c] & 255) + 2 + (A[c + 1 | 0] & 255) + (A[c + 2 | 0] & 255) + (A[c + 3 | 0] & 255) >> 2 : ((A[c] & 255) + 4 + (A[c + 1 | 0] & 255) + (A[c + 2 | 0] & 255) + (A[c + 3 | 0] & 255) + (A[d] & 255) + (A[d + 1 | 0] & 255) + (A[d + 2 | 0] & 255) + (A[d + 3 | 0] & 255) | 0) >>> 3) & 255, 16)
}
Se.X = 1;

function Te(b, c) {
    var d = c + 1 | 0,
        f = c + 2 | 0;
    q[b] = ((A[c] & 255) + 2 + (A[f] & 255) + ((A[d] & 255) << 1) | 0) >>> 2 & 255;
    var g = c + 3 | 0;
    q[b + 1 | 0] = ((A[d] & 255) + 2 + (A[g] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 4 | 0] = ((A[d] & 255) + 2 + (A[g] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    d = c + 4 | 0;
    q[b + 2 | 0] = ((A[f] & 255) + 2 + (A[d] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 5 | 0] = ((A[f] & 255) + 2 + (A[d] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 8 | 0] = ((A[f] & 255) + 2 + (A[d] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255;
    f = c + 5 | 0;
    q[b + 3 | 0] = ((A[g] & 255) + 2 + (A[f] & 255) + ((A[d] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 6 | 0] = ((A[g] & 255) + 2 + (A[f] & 255) + ((A[d] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 9 | 0] = ((A[g] & 255) + 2 + (A[f] & 255) + ((A[d] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 12 | 0] = ((A[g] & 255) + 2 + (A[f] & 255) + ((A[d] & 255) << 1) | 0) >>> 2 & 255;
    g = c + 6 | 0;
    q[b + 7 | 0] = ((A[d] & 255) + 2 + (A[g] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 10 | 0] = ((A[d] & 255) + 2 + (A[g] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 13 | 0] = ((A[d] & 255) + 2 + (A[g] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    d = c + 7 | 0;
    q[b + 11 | 0] = ((A[f] & 255) + 2 + (A[d] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 14 | 0] = ((A[f] & 255) + 2 + (A[d] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 15 | 0] = ((A[g] & 255) + 2 + (A[d] & 255) * 3 | 0) >>> 2 & 255
}
Te.X = 1;

function Ue(b, c, d) {
    var f = c - 1 | 0;
    q[b] = ((A[c] & 255) + 2 + (A[d] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 5 | 0] = ((A[c] & 255) + 2 + (A[d] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 10 | 0] = ((A[c] & 255) + 2 + (A[d] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 15 | 0] = ((A[c] & 255) + 2 + (A[d] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    var g = c + 1 | 0;
    q[b + 1 | 0] = ((A[f] & 255) + 2 + (A[g] & 255) + ((A[c] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 6 | 0] = ((A[f] & 255) + 2 + (A[g] & 255) + ((A[c] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 11 | 0] = ((A[f] & 255) + 2 + (A[g] & 255) + ((A[c] & 255) << 1) | 0) >>> 2 & 255;
    f = c + 2 | 0;
    q[b + 2 | 0] = ((A[c] & 255) + 2 + (A[f] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 7 | 0] = ((A[c] & 255) + 2 + (A[f] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 3 | 0] = ((A[g] & 255) + 2 + (A[c + 3 | 0] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    g = d - 1 | 0;
    c = d + 1 | 0;
    q[b + 4 | 0] = ((A[g] & 255) + 2 + (A[c] & 255) + ((A[d] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 9 | 0] = ((A[g] & 255) + 2 + (A[c] & 255) + ((A[d] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 14 | 0] = ((A[g] & 255) + 2 + (A[c] & 255) + ((A[d] & 255) << 1) | 0) >>> 2 & 255;
    g = d + 2 | 0;
    q[b + 8 | 0] = ((A[d] & 255) + 2 + (A[g] & 255) + ((A[c] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 13 | 0] = ((A[d] & 255) + 2 + (A[g] & 255) + ((A[c] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 12 | 0] = ((A[c] & 255) + 2 + (A[d + 3 | 0] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255
}
Ue.X = 1;

function Ve(b, c, d) {
    var f = c - 1 | 0;
    q[b] = ((A[f] & 255) + 1 + (A[c] & 255) | 0) >>> 1 & 255;
    q[b + 9 | 0] = ((A[f] & 255) + 1 + (A[c] & 255) | 0) >>> 1 & 255;
    var g = c + 1 | 0;
    q[b + 5 | 0] = ((A[f] & 255) + 2 + (A[g] & 255) + ((A[c] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 14 | 0] = ((A[f] & 255) + 2 + (A[g] & 255) + ((A[c] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 4 | 0] = ((A[c] & 255) + 2 + (A[d] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 13 | 0] = ((A[c] & 255) + 2 + (A[d] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 1 | 0] = ((A[c] & 255) + 1 + (A[g] & 255) | 0) >>> 1 & 255;
    q[b + 10 | 0] = ((A[c] & 255) + 1 + (A[g] & 255) | 0) >>> 1 & 255;
    f = c + 2 | 0;
    q[b + 6 | 0] = ((A[c] & 255) + 2 + (A[f] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 15 | 0] = ((A[c] & 255) + 2 + (A[f] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 2 | 0] = ((A[g] & 255) + 1 + (A[f] & 255) | 0) >>> 1 & 255;
    q[b + 11 | 0] = ((A[g] & 255) + 1 + (A[f] & 255) | 0) >>> 1 & 255;
    c = c + 3 | 0;
    q[b + 7 | 0] = ((A[g] & 255) + 2 + (A[c] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 3 | 0] = ((A[f] & 255) + 1 + (A[c] & 255) | 0) >>> 1 & 255;
    g = d + 1 | 0;
    q[b + 8 | 0] = ((A[g] & 255) + 2 + (A[d - 1 | 0] & 255) + ((A[d] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 12 | 0] = ((A[d + 2 | 0] & 255) + 2 + (A[d] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255
}
Ve.X = 1;

function We(b, c, d) {
    var f = d - 1 | 0;
    q[b] = ((A[f] & 255) + 1 + (A[d] & 255) | 0) >>> 1 & 255;
    q[b + 6 | 0] = ((A[f] & 255) + 1 + (A[d] & 255) | 0) >>> 1 & 255;
    var g = d + 1 | 0;
    q[b + 5 | 0] = ((A[f] & 255) + 2 + (A[g] & 255) + ((A[d] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 11 | 0] = ((A[f] & 255) + 2 + (A[g] & 255) + ((A[d] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 4 | 0] = ((A[d] & 255) + 1 + (A[g] & 255) | 0) >>> 1 & 255;
    q[b + 10 | 0] = ((A[d] & 255) + 1 + (A[g] & 255) | 0) >>> 1 & 255;
    f = d + 2 | 0;
    q[b + 9 | 0] = ((A[d] & 255) + 2 + (A[f] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 15 | 0] = ((A[d] & 255) + 2 + (A[f] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 8 | 0] = ((A[g] & 255) + 1 + (A[f] & 255) | 0) >>> 1 & 255;
    q[b + 14 | 0] = ((A[g] & 255) + 1 + (A[f] & 255) | 0) >>> 1 & 255;
    var e = d + 3 | 0;
    q[b + 13 | 0] = ((A[g] & 255) + 2 + (A[e] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 12 | 0] = ((A[f] & 255) + 1 + (A[e] & 255) | 0) >>> 1 & 255;
    g = c - 1 | 0;
    q[b + 1 | 0] = ((A[c] & 255) + 2 + (A[d] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 7 | 0] = ((A[c] & 255) + 2 + (A[d] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255;
    d = c + 1 | 0;
    q[b + 2 | 0] = ((A[d] & 255) + 2 + (A[g] & 255) + ((A[c] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 3 | 0] = ((A[c + 2 | 0] & 255) + 2 + (A[c] & 255) + ((A[d] & 255) << 1) | 0) >>> 2 & 255
}
We.X = 1;

function Xe(b, c) {
    var d = c + 1 | 0;
    q[b] = ((A[c] & 255) + 1 + (A[d] & 255) | 0) >>> 1 & 255;
    var f = c + 2 | 0;
    q[b + 1 | 0] = ((A[d] & 255) + 1 + (A[f] & 255) | 0) >>> 1 & 255;
    var g = c + 3 | 0;
    q[b + 2 | 0] = ((A[f] & 255) + 1 + (A[g] & 255) | 0) >>> 1 & 255;
    var e = c + 4 | 0;
    q[b + 3 | 0] = ((A[g] & 255) + 1 + (A[e] & 255) | 0) >>> 1 & 255;
    q[b + 4 | 0] = ((A[c] & 255) + 2 + (A[f] & 255) + ((A[d] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 5 | 0] = ((A[d] & 255) + 2 + (A[g] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 6 | 0] = ((A[f] & 255) + 2 + (A[e] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255;
    var i = c + 5 | 0;
    q[b + 7 | 0] = ((A[g] & 255) + 2 + (A[i] & 255) + ((A[e] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 8 | 0] = ((A[d] & 255) + 1 + (A[f] & 255) | 0) >>> 1 & 255;
    q[b + 9 | 0] = ((A[f] & 255) + 1 + (A[g] & 255) | 0) >>> 1 & 255;
    q[b + 10 | 0] = ((A[g] & 255) + 1 + (A[e] & 255) | 0) >>> 1 & 255;
    q[b + 11 | 0] = ((A[e] & 255) + 1 + (A[i] & 255) | 0) >>> 1 & 255;
    q[b + 12 | 0] = ((A[d] & 255) + 2 + (A[g] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 13 | 0] = ((A[f] & 255) + 2 + (A[e] & 255) + ((A[g] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 14 | 0] = ((A[g] & 255) + 2 + (A[i] & 255) + ((A[e] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 15 | 0] = ((A[e] & 255) + 2 + (A[c + 6 | 0] & 255) + ((A[i] & 255) << 1) | 0) >>> 2 & 255
}
Xe.X = 1;

function Ye(b, c) {
    var d = c + 1 | 0;
    q[b] = ((A[c] & 255) + 1 + (A[d] & 255) | 0) >>> 1 & 255;
    var f = c + 2 | 0;
    q[b + 1 | 0] = ((A[c] & 255) + 2 + (A[f] & 255) + ((A[d] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 2 | 0] = ((A[d] & 255) + 1 + (A[f] & 255) | 0) >>> 1 & 255;
    var g = c + 3 | 0;
    q[b + 3 | 0] = ((A[d] & 255) + 2 + (A[g] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 4 | 0] = ((A[d] & 255) + 1 + (A[f] & 255) | 0) >>> 1 & 255;
    q[b + 5 | 0] = ((A[d] & 255) + 2 + (A[g] & 255) + ((A[f] & 255) << 1) | 0) >>> 2 & 255;
    q[b + 6 | 0] = ((A[f] & 255) + 1 + (A[g] & 255) | 0) >>> 1 & 255;
    q[b + 7 | 0] = ((A[f] & 255) + 2 + (A[g] & 255) * 3 | 0) >>> 2 & 255;
    q[b + 8 | 0] = ((A[f] & 255) + 1 + (A[g] & 255) | 0) >>> 1 & 255;
    q[b + 9 | 0] = ((A[f] & 255) + 2 + (A[g] & 255) * 3 | 0) >>> 2 & 255;
    q[b + 10 | 0] = q[g];
    q[b + 11 | 0] = q[g];
    q[b + 12 | 0] = q[g];
    q[b + 13 | 0] = q[g];
    q[b + 14 | 0] = q[g];
    q[b + 15 | 0] = q[g]
}
Ye.X = 1;

function bf(b, c, d) {
    for (var f = A[c + 7 | 0] & 255, g = A[d + 7 | 0] & 255, e = A[c - 1 | 0] & 255, c = ((A[c + 4 | 0] & 255) - (A[c + 2 | 0] & 255) + ((A[c + 5 | 0] & 255) - (A[c + 1 | 0] & 255) << 1) + ((A[c + 6 | 0] & 255) - (A[c] & 255)) * 3 + (f - e << 2)) * 17 + 16 | 0, i = c >> 5, d = ((g - e << 2) + (A[d + 4 | 0] & 255) - (A[d + 2 | 0] & 255) + ((A[d + 5 | 0] & 255) - (A[d + 1 | 0] & 255) << 1) + ((A[d + 6 | 0] & 255) - (A[d] & 255)) * 3) * 17 + 16 >> 5, h = g + f << 4, k = d * 3 | 0, f = h + (c >> 3 & -4) + 16 - k | 0, l = i * 3 | 0, g = l + (h + 16) - k | 0, j = c >> 4 & -2, c = j + (h + 16) - k | 0, e = h + (i + 16) - k | 0, n = h + 16 | 0, h = n - k | 0, i = n - i - k | 0, k = n - j - k | 0, l = h - l | 0, j = 0;;) {
        var n = j << 3,
            p = b + (n | 1) | 0,
            r = b + (n | 2) | 0,
            o = b + (n | 3) | 0,
            t = b + (n | 4) | 0,
            s = b + (n | 5) | 0,
            u = b + (n | 6) | 0,
            w = b + (n | 7) | 0,
            v = d * j | 0,
            z = f + v | 0,
            B = g + v | 0,
            D = c + v | 0,
            C = e + v | 0,
            E = h + v | 0,
            G = i + v | 0,
            H = k + v | 0;
        q[b + n | 0] = q[Q.a + ((l + v >> 5) + 512) | 0];
        q[p] = q[Q.a + ((H >> 5) + 512) | 0];
        q[r] = q[Q.a + ((G >> 5) + 512) | 0];
        q[o] = q[Q.a + ((E >> 5) + 512) | 0];
        q[t] = q[Q.a + ((C >> 5) + 512) | 0];
        q[s] = q[Q.a + ((D >> 5) + 512) | 0];
        q[u] = q[Q.a + ((B >> 5) + 512) | 0];
        q[w] = q[Q.a + ((z >> 5) + 512) | 0];
        j = j + 1 | 0;
        if ((j | 0) == 8) {
            break
        }
    }
}
bf.X = 1;

function af(b, c, d, f, g) {
    f = (f | 0) != 0;
    g = (g | 0) == 0;
    if (g | f ^ 1) {
        if (g) {
            if (f) {
                var e = (A[d] & 255) + 2 + (A[d + 1 | 0] & 255) + (A[d + 2 | 0] & 255) + (A[d + 3 | 0] & 255) >> 2,
                    i = e
            } else {
                var i = 128,
                    e = 128
            }
        } else {
            i = (A[c + 4 | 0] & 255) + 2 + (A[c + 5 | 0] & 255) + (A[c + 6 | 0] & 255) + (A[c + 7 | 0] & 255) >> 2, e = (A[c] & 255) + 2 + (A[c + 1 | 0] & 255) + (A[c + 2 | 0] & 255) + (A[c + 3 | 0] & 255) >> 2
        }
    } else {
        i = (A[c + 4 | 0] & 255) + 2 + (A[c + 5 | 0] & 255) + (A[c + 6 | 0] & 255) + (A[c + 7 | 0] & 255) >> 2, e = ((A[c] & 255) + 4 + (A[c + 1 | 0] & 255) + (A[c + 2 | 0] & 255) + (A[c + 3 | 0] & 255) + (A[d] & 255) + (A[d + 1 | 0] & 255) + (A[d + 2 | 0] & 255) + (A[d + 3 | 0] & 255) | 0) >>> 3
    }
    e &= 255;
    i &= 255;
    var h = b + 4 | 0;
    kc(b, e, 4);
    var k = b + 8 | 0,
        l = b + 12 | 0;
    kc(h, i, 4);
    kc(k, e, 4);
    k = b + 16 | 0;
    h = b + 20 | 0;
    kc(l, i, 4);
    kc(k, e, 4);
    l = b + 24 | 0;
    k = b + 28 | 0;
    kc(h, i, 4);
    kc(l, e, 4);
    kc(k, i, 4);
    f ? (f = A[d + 4 | 0] & 255, e = A[d + 5 | 0] & 255, i = A[d + 6 | 0] & 255, l = A[d + 7 | 0] & 255, d = l + (i + (e + (f + 2))) >> 2, g = g ? d : (l + (i + (e + (f + 4))) + (A[c + 4 | 0] & 255) + (A[c + 5 | 0] & 255) + (A[c + 6 | 0] & 255) + (A[c + 7 | 0] & 255) | 0) >>> 3, c = d) : g ? c = g = 128 : (g = (A[c + 4 | 0] & 255) + 2 + (A[c + 5 | 0] & 255) + (A[c + 6 | 0] & 255) + (A[c + 7 | 0] & 255) >> 2, c = (A[c] & 255) + 2 + (A[c + 1 | 0] & 255) + (A[c + 2 | 0] & 255) + (A[c + 3 | 0] & 255) >> 2);
    c &= 255;
    d = g & 255;
    f = b + 36 | 0;
    kc(b + 32 | 0, c, 4);
    e = b + 40 | 0;
    g = b + 44 | 0;
    kc(f, d, 4);
    kc(e, c, 4);
    e = b + 48 | 0;
    f = b + 52 | 0;
    kc(g, d, 4);
    kc(e, c, 4);
    g = b + 56 | 0;
    b = b + 60 | 0;
    kc(f, d, 4);
    kc(g, c, 4);
    kc(b, d, 4)
}
af.X = 1;

function ud(b, c, d, f, g, e) {
    var i = m;
    m += 24;
    var h, k = F[g + 4 >> 2],
        l = Math.floor((f >>> 0) / (k >>> 0)),
        j = l << 4,
        l = f - l * k << 4;
    y[i + 4 >> 2] = k;
    y[i + 8 >> 2] = y[g + 8 >> 2];
    var k = b | 0,
        n = y[k >> 2];
    a: do {
        if (n == 0 || n == 1) {
            if ((cf(b, c + 12 | 0, d) | 0) != 0) {
                var p = 1;
                h = 19
            } else {
                y[i >> 2] = y[b + 116 >> 2], df(e, b + 132 | 0, i, l, j, 0, 0, 16, 16), h = 15
            }
        } else {
            if (n == 2) {
                (ef(b, c + 12 | 0, d) | 0) != 0 ? (p = 1, h = 19) : (h = i | 0, y[h >> 2] = y[b + 116 >> 2], df(e, b + 132 | 0, i, l, j, 0, 0, 16, 8), y[h >> 2] = y[b + 124 >> 2], df(e, b + 164 | 0, i, l, j, 0, 8, 16, 8), h = 15)
            } else {
                if (n == 3) {
                    (ff(b, c + 12 | 0, d) | 0) != 0 ? (p = 1, h = 19) : (h = i | 0, y[h >> 2] = y[b + 116 >> 2], df(e, b + 132 | 0, i, l, j, 0, 0, 8, 16), y[h >> 2] = y[b + 120 >> 2], df(e, b + 148 | 0, i, l, j, 8, 0, 8, 16), h = 15)
                } else {
                    var r = b,
                        o = c + 176 | 0,
                        t = d,
                        s = 0;
                    b: for (;;) {
                        var u = o + 16 + (s << 2) | 0;
                        if (s >>> 0 >= 4) {
                            var w = 0;
                            break
                        }
                        var v = r + 116 + (s << 2) | 0,
                            z = y[o + (s << 2) >> 2] == 0 ? 1 : y[o + (s << 2) >> 2] == 1 || y[o + (s << 2) >> 2] == 2 ? 2 : 4;
                        y[(r + 100 + (s << 2) | 0) >> 2] = y[u >> 2];
                        u = gf(t, y[u >> 2]);
                        y[v >> 2] = u;
                        if ((u | 0) == 0) {
                            w = 1;
                            break
                        }
                        for (v = 0;;) {
                            if (v >>> 0 >= z >>> 0) {
                                break
                            }
                            if ((hf(r, o, s, v) | 0) != 0) {
                                w = 1;
                                break b
                            }
                            v = v + 1 | 0
                        }
                        s = s + 1 | 0
                    }
                    if ((w | 0) != 0) {
                        p = 1, h = 19
                    } else {
                        r = i | 0;
                        for (o = 0;;) {
                            var B = c + 176 + (o << 2) | 0,
                                v = o << 3,
                                u = o << 2,
                                s = b + 132 + ((u | 1) << 2) | 0,
                                z = b + 132 + (u << 2) | 0,
                                t = b + 132 + ((u | 2) << 2) | 0;
                            y[r >> 2] = y[b + 116 + (o << 2) >> 2];
                            var D = y[B >> 2];
                            v &= 8;
                            B = o >>> 0 < 2 ? 0 : 8;
                            D == 0 ? df(e, z, i, l, j, v, B, 8, 8) : D == 1 ? (df(e, z, i, l, j, v, B, 8, 4), df(e, t, i, l, j, v, B | 4, 8, 4)) : D == 2 ? (df(e, z, i, l, j, v, B, 4, 8), df(e, s, i, l, j, v | 4, B, 4, 8)) : (u = b + 132 + ((u | 3) << 2) | 0, df(e, z, i, l, j, v, B, 4, 4), z = v | 4, df(e, s, i, l, j, z, B, 4, 4), s = B | 4, df(e, t, i, l, j, v, s, 4, 4), df(e, u, i, l, j, z, s, 4, 4));
                            o = o + 1 | 0;
                            if ((o | 0) == 4) {
                                h = 15;
                                break a
                            }
                        }
                    }
                }
            }
        }
    } while (0);
    h == 15 && (F[b + 196 >> 2] >>> 0 > 1 || ((y[k >> 2] | 0) == 0 ? rd(g, e) : jf(g, f, e, c + 328 | 0)), p = 0);
    m = i;
    return p
}
ud.X = 1;

function cf(b, c, d) {
    var f = m;
    m += 40;
    var g, e = f + 4,
        i = F[c + 132 >> 2],
        h = b + 4 | 0,
        k = e | 0;
    kf(y[h >> 2], y[b + 200 >> 2], k, 5);
    kf(y[h >> 2], y[b + 204 >> 2], e + 12 | 0, 10);
    g = e + 8 | 0;
    var l = e + 20 | 0;
    if ((y[b >> 2] | 0) == 0) {
        if ((y[e >> 2] | 0) == 0) {
            var j = 0,
                n = 0;
            g = 11
        } else {
            (y[e + 12 >> 2] | 0) == 0 ? (n = j = 0, g = 11) : (y[e + 4 >> 2] | 0) == 0 && (y[g >> 2] | 0) == 0 ? (n = j = 0, g = 11) : (y[e + 16 >> 2] | 0) != 0 ? g = 7 : (y[l >> 2] | 0) == 0 ? (n = j = 0, g = 11) : g = 7
        }
    } else {
        g = 7
    } if (g == 7) {
        if (g = x[c + 148 >> 1], c = x[c + 150 >> 1], l = e + 24 | 0, kf(y[h >> 2], y[b + 208 >> 2], l, 10), (y[e + 24 >> 2] | 0) == 0 && kf(y[h >> 2], y[b + 212 >> 2], l, 15), lf(f, k, i), e = x[f >> 1] + g & 65535, h = x[f + 2 >> 1] + c & 65535, ((e << 16 >> 16) + 8192 | 0) >>> 0 > 16383) {
            var p = 1;
            g = 13
        } else {
            ((h << 16 >> 16) + 2048 | 0) >>> 0 > 4095 ? (p = 1, g = 13) : (j = e, n = h, g = 11)
        }
    }
    if (g == 11) {
        if (d = gf(d, i), (d | 0) == 0) {
            p = 1
        } else {
            p = b + 132 | 0;
            e = b + 136 | 0;
            h = b + 140 | 0;
            k = b + 144 | 0;
            c = b + 148 | 0;
            g = b + 152 | 0;
            var l = b + 156 | 0,
                r = b + 160 | 0,
                o = b + 164 | 0,
                t = b + 168 | 0,
                s = b + 172 | 0,
                u = b + 176 | 0,
                w = b + 180 | 0,
                v = b + 184 | 0,
                z = b + 188 | 0,
                B = b + 192 | 0;
            x[b + 192 >> 1] = j;
            x[b + 194 >> 1] = n;
            J = j = Gb[B >> 1] + (Gb[B + 2 >> 1] << 16);
            x[z >> 1] = J & 65535;
            x[z + 2 >> 1] = J >> 16;
            J = j;
            x[v >> 1] = J & 65535;
            x[v + 2 >> 1] = J >> 16;
            J = j;
            x[w >> 1] = J & 65535;
            x[w + 2 >> 1] = J >> 16;
            J = j;
            x[u >> 1] = J & 65535;
            x[u + 2 >> 1] = J >> 16;
            J = j;
            x[s >> 1] = J & 65535;
            x[s + 2 >> 1] = J >> 16;
            J = j;
            x[t >> 1] = J & 65535;
            x[t + 2 >> 1] = J >> 16;
            J = j;
            x[o >> 1] = J & 65535;
            x[o + 2 >> 1] = J >> 16;
            J = j;
            x[r >> 1] = J & 65535;
            x[r + 2 >> 1] = J >> 16;
            J = j;
            x[l >> 1] = J & 65535;
            x[l + 2 >> 1] = J >> 16;
            J = j;
            x[g >> 1] = J & 65535;
            x[g + 2 >> 1] = J >> 16;
            J = j;
            x[c >> 1] = J & 65535;
            x[c + 2 >> 1] = J >> 16;
            J = j;
            x[k >> 1] = J & 65535;
            x[k + 2 >> 1] = J >> 16;
            J = j;
            x[h >> 1] = J & 65535;
            x[h + 2 >> 1] = J >> 16;
            J = j;
            x[e >> 1] = J & 65535;
            x[e + 2 >> 1] = J >> 16;
            J = j;
            x[p >> 1] = J & 65535;
            x[p + 2 >> 1] = J >> 16;
            y[b + 100 >> 2] = i;
            y[b + 104 >> 2] = i;
            y[b + 108 >> 2] = i;
            y[b + 112 >> 2] = i;
            y[b + 116 >> 2] = d;
            y[b + 120 >> 2] = d;
            y[b + 124 >> 2] = d;
            y[b + 128 >> 2] = d;
            p = 0
        }
    }
    m = f;
    return p
}
cf.X = 1;

function ef(b, c, d) {
    var f = m;
    m += 4;
    var g = m;
    m += 36;
    var e = x[c + 148 >> 1],
        i = x[c + 150 >> 1],
        h = F[c + 132 >> 2],
        k = b + 4 | 0,
        l = g | 0;
    kf(y[k >> 2], y[b + 204 >> 2], g + 12 | 0, 10);
    var j = g + 16 | 0;
    if ((y[j >> 2] | 0) == (h | 0)) {
        var n = F[g + 20 >> 2];
        y[f >> 2] = n;
        var p = n & 65535,
            r = n >>> 16 & 65535,
            n = f,
            o = f + 2 | 0
    } else {
        kf(y[k >> 2], y[b + 200 >> 2], l, 5), n = g + 24 | 0, kf(y[k >> 2], y[b + 208 >> 2], n, 10), (y[g + 24 >> 2] | 0) == 0 && kf(y[k >> 2], y[b + 212 >> 2], n, 15), lf(f, l, h), o = f + 2 | 0, p = x[f >> 1], r = x[o >> 1], n = f
    }
    var e = p + e & 65535,
        t = r + i & 65535;
    if (((e << 16 >> 16) + 8192 | 0) >>> 0 > 16383) {
        b = 1
    } else {
        if (((t << 16 >> 16) + 2048 | 0) >>> 0 > 4095) {
            b = 1
        } else {
            if (p = gf(d, h), (p | 0) == 0) {
                b = 1
            } else {
                var i = b + 132 | 0,
                    r = b + 136 | 0,
                    s = b + 140 | 0,
                    u = b + 144 | 0,
                    w = b + 148 | 0,
                    v = b + 152 | 0,
                    z = b + 156 | 0,
                    B = b + 160 | 0;
                x[b + 160 >> 1] = e;
                x[b + 162 >> 1] = t;
                J = e = Gb[B >> 1] + (Gb[B + 2 >> 1] << 16);
                x[z >> 1] = J & 65535;
                x[z + 2 >> 1] = J >> 16;
                J = e;
                x[v >> 1] = J & 65535;
                x[v + 2 >> 1] = J >> 16;
                J = e;
                x[w >> 1] = J & 65535;
                x[w + 2 >> 1] = J >> 16;
                J = e;
                x[u >> 1] = J & 65535;
                x[u + 2 >> 1] = J >> 16;
                J = e;
                x[s >> 1] = J & 65535;
                x[s + 2 >> 1] = J >> 16;
                J = e;
                x[r >> 1] = J & 65535;
                x[r + 2 >> 1] = J >> 16;
                J = e;
                x[i >> 1] = J & 65535;
                x[i + 2 >> 1] = J >> 16;
                r = b + 100 | 0;
                y[r >> 2] = h;
                y[b + 104 >> 2] = h;
                y[b + 116 >> 2] = p;
                y[b + 120 >> 2] = p;
                e = x[c + 152 >> 1];
                h = x[c + 154 >> 1];
                c = F[c + 136 >> 2];
                p = b + 200 | 0;
                kf(y[k >> 2], y[p >> 2], l, 13);
                (y[g + 4 >> 2] | 0) == (c | 0) ? (k = F[g + 8 >> 2], y[f >> 2] = k, g = k & 65535, k = k >>> 16 & 65535) : (y[g + 12 >> 2] = 1, y[j >> 2] = y[r >> 2], y[g + 20 >> 2] = Gb[i >> 1] + (Gb[i + 2 >> 1] << 16), kf(y[k >> 2], y[p >> 2], g + 24 | 0, 7), lf(f, l, c), g = x[n >> 1], k = x[o >> 1]);
                g = g + e & 65535;
                k = k + h & 65535;
                ((g << 16 >> 16) + 8192 | 0) >>> 0 > 16383 ? b = 1 : ((k << 16 >> 16) + 2048 | 0) >>> 0 > 4095 ? b = 1 : (d = gf(d, c), (d | 0) == 0 ? b = 1 : (l = b + 164 | 0, j = b + 168 | 0, n = b + 172 | 0, o = b + 176 | 0, h = b + 180 | 0, i = b + 184 | 0, e = b + 188 | 0, p = b + 192 | 0, x[b + 192 >> 1] = g, x[b + 194 >> 1] = k, J = g = Gb[p >> 1] + (Gb[p + 2 >> 1] << 16), x[e >> 1] = J & 65535, x[e + 2 >> 1] = J >> 16, J = g, x[i >> 1] = J & 65535, x[i + 2 >> 1] = J >> 16, J = g, x[h >> 1] = J & 65535, x[h + 2 >> 1] = J >> 16, J = g, x[o >> 1] = J & 65535, x[o + 2 >> 1] = J >> 16, J = g, x[n >> 1] = J & 65535, x[n + 2 >> 1] = J >> 16, J = g, x[j >> 1] = J & 65535, x[j + 2 >> 1] = J >> 16, J = g, x[l >> 1] = J & 65535, x[l + 2 >> 1] = J >> 16, y[b + 108 >> 2] = c, y[b + 112 >> 2] = c, y[b + 124 >> 2] = d, y[b + 128 >> 2] = d, b = 0))
            }
        }
    }
    m = f;
    return b
}
ef.X = 1;

function ff(b, c, d) {
    var f = m;
    m += 4;
    var g = m;
    m += 36;
    var e = x[c + 148 >> 1],
        i = x[c + 150 >> 1],
        h = F[c + 132 >> 2],
        k = b + 4 | 0,
        l = g | 0;
    kf(y[k >> 2], y[b + 200 >> 2], l, 5);
    var j = g + 4 | 0;
    if ((y[j >> 2] | 0) == (h | 0)) {
        var n = F[g + 8 >> 2];
        y[f >> 2] = n;
        var p = n & 65535,
            r = n >>> 16 & 65535,
            n = f,
            o = f + 2 | 0
    } else {
        n = b + 204 | 0, kf(y[k >> 2], y[n >> 2], g + 12 | 0, 10), o = g + 24 | 0, kf(y[k >> 2], y[n >> 2], o, 14), (y[g + 24 >> 2] | 0) == 0 && kf(y[k >> 2], y[b + 212 >> 2], o, 15), lf(f, l, h), o = f + 2 | 0, p = x[f >> 1], r = x[o >> 1], n = f
    }
    var e = p + e & 65535,
        t = r + i & 65535;
    if (((e << 16 >> 16) + 8192 | 0) >>> 0 > 16383) {
        b = 1
    } else {
        if (((t << 16 >> 16) + 2048 | 0) >>> 0 > 4095) {
            b = 1
        } else {
            if (p = gf(d, h), (p | 0) == 0) {
                b = 1
            } else {
                var i = b + 132 | 0,
                    r = b + 136 | 0,
                    s = b + 140 | 0,
                    u = b + 144 | 0,
                    w = b + 164 | 0,
                    v = b + 168 | 0,
                    z = b + 172 | 0,
                    B = b + 176 | 0;
                x[b + 176 >> 1] = e;
                x[b + 178 >> 1] = t;
                J = e = Gb[B >> 1] + (Gb[B + 2 >> 1] << 16);
                x[z >> 1] = J & 65535;
                x[z + 2 >> 1] = J >> 16;
                J = e;
                x[v >> 1] = J & 65535;
                x[v + 2 >> 1] = J >> 16;
                J = e;
                x[w >> 1] = J & 65535;
                x[w + 2 >> 1] = J >> 16;
                J = e;
                x[u >> 1] = J & 65535;
                x[u + 2 >> 1] = J >> 16;
                J = e;
                x[s >> 1] = J & 65535;
                x[s + 2 >> 1] = J >> 16;
                J = e;
                x[r >> 1] = J & 65535;
                x[r + 2 >> 1] = J >> 16;
                J = e;
                x[i >> 1] = J & 65535;
                x[i + 2 >> 1] = J >> 16;
                r = b + 100 | 0;
                y[r >> 2] = h;
                y[b + 108 >> 2] = h;
                y[b + 116 >> 2] = p;
                y[b + 124 >> 2] = p;
                e = x[c + 152 >> 1];
                h = x[c + 154 >> 1];
                c = F[c + 136 >> 2];
                p = g + 24 | 0;
                kf(y[k >> 2], y[b + 208 >> 2], p, 10);
                (y[g + 24 >> 2] | 0) == 0 && kf(y[k >> 2], y[b + 204 >> 2], p, 11);
                (y[g + 28 >> 2] | 0) == (c | 0) ? (k = F[g + 32 >> 2], y[f >> 2] = k, g = k & 65535, k = k >>> 16 & 65535) : (y[g >> 2] = 1, y[j >> 2] = y[r >> 2], y[g + 8 >> 2] = Gb[i >> 1] + (Gb[i + 2 >> 1] << 16), kf(y[k >> 2], y[b + 204 >> 2], g + 12 | 0, 14), lf(f, l, c), g = x[n >> 1], k = x[o >> 1]);
                g = g + e & 65535;
                k = k + h & 65535;
                ((g << 16 >> 16) + 8192 | 0) >>> 0 > 16383 ? b = 1 : ((k << 16 >> 16) + 2048 | 0) >>> 0 > 4095 ? b = 1 : (d = gf(d, c), (d | 0) == 0 ? b = 1 : (l = b + 148 | 0, j = b + 152 | 0, n = b + 156 | 0, o = b + 160 | 0, h = b + 180 | 0, i = b + 184 | 0, e = b + 188 | 0, p = b + 192 | 0, x[b + 192 >> 1] = g, x[b + 194 >> 1] = k, J = g = Gb[p >> 1] + (Gb[p + 2 >> 1] << 16), x[e >> 1] = J & 65535, x[e + 2 >> 1] = J >> 16, J = g, x[i >> 1] = J & 65535, x[i + 2 >> 1] = J >> 16, J = g, x[h >> 1] = J & 65535, x[h + 2 >> 1] = J >> 16, J = g, x[o >> 1] = J & 65535, x[o + 2 >> 1] = J >> 16, J = g, x[n >> 1] = J & 65535, x[n + 2 >> 1] = J >> 16, J = g, x[j >> 1] = J & 65535, x[j + 2 >> 1] = J >> 16, J = g, x[l >> 1] = J & 65535, x[l + 2 >> 1] = J >> 16, y[b + 104 >> 2] = c, y[b + 112 >> 2] = c, y[b + 120 >> 2] = d, y[b + 128 >> 2] = d, b = 0))
            }
        }
    }
    m = f;
    return b
}
ff.X = 1;

function mf(b, c, d) {
    if ((c | 0) > (b | 0)) {
        var f = b,
            b = c
    } else {
        f = (c | 0) < (b | 0) ? c : b
    }
    return (b | 0) < (d | 0) ? b : (f | 0) > (d | 0) ? f : d
}

function kf(b, c, d, f) {
    var g = d | 0;
    y[g >> 2] = 0;
    var e = d + 4 | 0;
    y[e >> 2] = -1;
    var i = d + 10 | 0;
    x[i >> 1] = 0;
    d = d + 8 | 0;
    x[d >> 1] = 0;
    (c | 0) != 0 && (y[c + 4 >> 2] | 0) == (b | 0) && (b = F[c >> 2], y[g >> 2] = 1, b >>> 0 < 6 && (g = x[c + 132 + (f << 2) >> 1], b = x[c + 132 + (f << 2) + 2 >> 1], y[e >> 2] = y[c + 100 + (f >>> 2 << 2) >> 2], x[d >> 1] = g, x[i >> 1] = b))
}

function hf(b, c, d, f) {
    var g = m;
    m += 40;
    var e = g + 4,
        i = x[c + 32 + (d << 4) + (f << 2) >> 1],
        h = x[c + 32 + (d << 4) + (f << 2) + 2 >> 1],
        k = y[c + (d << 2) >> 2],
        c = y[c + 16 + (d << 2) >> 2],
        l = b + 4 | 0,
        j = e | 0;
    kf(y[l >> 2], ye(b, y[nf + (d << 7) + (k << 5) + (f << 3) >> 2]), j, A[nf + (d << 7) + (k << 5) + (f << 3) + 4 | 0] & 255);
    kf(y[l >> 2], ye(b, y[of + (d << 7) + (k << 5) + (f << 3) >> 2]), e + 12 | 0, A[of + (d << 7) + (k << 5) + (f << 3) + 4 | 0] & 255);
    var n = e + 24 | 0;
    kf(y[l >> 2], ye(b, y[pf + (d << 7) + (k << 5) + (f << 3) >> 2]), n, A[pf + (d << 7) + (k << 5) + (f << 3) + 4 | 0] & 255);
    (y[e + 24 >> 2] | 0) == 0 && kf(y[l >> 2], ye(b, y[qf + (d << 7) + (k << 5) + (f << 3) >> 2]), n, A[qf + (d << 7) + (k << 5) + (f << 3) + 4 | 0] & 255);
    lf(g, j, c);
    e = x[g >> 1] + i & 65535;
    h = x[g + 2 >> 1] + h & 65535;
    ((e << 16 >> 16) + 8192 | 0) >>> 0 > 16383 ? b = 1 : ((h << 16 >> 16) + 2048 | 0) >>> 0 > 4095 ? b = 1 : (k == 0 ? (d <<= 2, x[b + 132 + (d << 2) >> 1] = e, x[b + 132 + (d << 2) + 2 >> 1] = h, f = d | 1, x[b + 132 + (f << 2) >> 1] = e, x[b + 132 + (f << 2) + 2 >> 1] = h, f = d | 2, x[b + 132 + (f << 2) >> 1] = e, x[b + 132 + (f << 2) + 2 >> 1] = h, d |= 3, x[b + 132 + (d << 2) >> 1] = e, x[b + 132 + (d << 2) + 2 >> 1] = h) : k == 1 ? (d = (f << 1) + (d << 2) | 0, x[b + 132 + (d << 2) >> 1] = e, x[b + 132 + (d << 2) + 2 >> 1] = h, d |= 1, x[b + 132 + (d << 2) >> 1] = e, x[b + 132 + (d << 2) + 2 >> 1] = h) : k == 2 ? (d = (d << 2) + f | 0, x[b + 132 + (d << 2) >> 1] = e, x[b + 132 + (d << 2) + 2 >> 1] = h, d = d + 2 | 0, x[b + 132 + (d << 2) >> 1] = e, x[b + 132 + (d << 2) + 2 >> 1] = h) : k == 3 && (d = (d << 2) + f | 0, x[b + 132 + (d << 2) >> 1] = e, x[b + 132 + (d << 2) + 2 >> 1] = h), b = 0);
    m = g;
    return b
}
hf.X = 1;

function lf(b, c, d) {
    var f;
    (y[c + 12 >> 2] | 0) == 0 ? (y[c + 24 >> 2] | 0) != 0 ? f = 3 : (y[c >> 2] | 0) == 0 ? f = 3 : (f = c + 8 | 0, J = Gb[f >> 1] + (Gb[f + 2 >> 1] << 16), x[b >> 1] = J & 65535, x[b + 2 >> 1] = J >> 16, f = 11) : f = 3;
    if (f == 3) {
        f = (y[c + 4 >> 2] | 0) == (d | 0);
        var g = (y[c + 16 >> 2] | 0) == (d | 0);
        ((g & 1) + (f & 1) + ((y[c + 28 >> 2] | 0) == (d | 0) & 1) | 0) == 1 ? (c = f ? c + 8 | 0 : g ? c + 20 | 0 : c + 32 | 0, J = Gb[c >> 1] + (Gb[c + 2 >> 1] << 16), x[b >> 1] = J & 65535, x[b + 2 >> 1] = J >> 16) : (x[b >> 1] = mf(x[c + 8 >> 1] << 16 >> 16, x[c + 20 >> 1] << 16 >> 16, x[c + 32 >> 1] << 16 >> 16) & 65535, x[b + 2 >> 1] = mf(x[c + 10 >> 1] << 16 >> 16, x[c + 22 >> 1] << 16 >> 16, x[c + 34 >> 1] << 16 >> 16) & 65535)
    }
}
lf.X = 1;

function rf(b, c, d, f, g, e, i, h, k) {
    var l = m;
    m += 144;
    var j;
    if ((d | 0) < 0) {
        j = 3
    } else {
        if ((h + (d + 1) | 0) >>> 0 > g >>> 0 | (f | 0) < 0) {
            j = 3
        } else {
            if ((k + f | 0) >>> 0 > e >>> 0) {
                j = 3
            } else {
                var n = b,
                    p = d,
                    r = f,
                    o = g,
                    t = e;
                j = 4
            }
        }
    }
    j == 3 && (n = l | 0, o = h + 1 | 0, sf(b, n, d, f, g, e, o, k, o), sf(b + e * g | 0, l + o * k | 0, d, f, g, e, o, k, o), r = p = 0, t = k);
    b = 8 - i | 0;
    d = k >>> 0 < 2;
    f = h >>> 0 < 2;
    g = 16 - h | 0;
    e = (o << 1) - h | 0;
    j = o + 1 | 0;
    var s = o + 2 | 0,
        u = h >>> 1;
    h &= -2;
    k >>>= 1;
    t = t * o | 0;
    p = p + r * o | 0;
    for (r = 0;;) {
        a: do {
            if (!d) {
                for (var w = n + (p + t * r) | 0, v = c + (r << 6) | 0, z = 0;;) {
                    if (!f) {
                        for (var B = v + h | 0, D = 0;;) {
                            var C = D << 1,
                                E = C | 1,
                                G = A[w + C | 0] & 255,
                                H = A[w + (j + C) | 0] & 255,
                                K = A[w + E | 0] & 255;
                            q[C + (v + 8) | 0] = ((H * i + (A[w + (o + C) | 0] & 255) * b << 3) + 32 | 0) >>> 6 & 255;
                            q[v + C | 0] = ((K * i + G * b << 3) + 32 | 0) >>> 6 & 255;
                            G = A[C + (w + 2) | 0] & 255;
                            q[C + (v + 9) | 0] = (((A[w + (s + C) | 0] & 255) * i + H * b << 3) + 32 | 0) >>> 6 & 255;
                            q[v + E | 0] = ((G * i + K * b << 3) + 32 | 0) >>> 6 & 255;
                            D = D + 1 | 0;
                            if ((D | 0) == (u | 0)) {
                                break
                            }
                        }
                        w = w + h | 0;
                        v = B
                    }
                    z = z + 1 | 0;
                    if ((z | 0) == (k | 0)) {
                        break a
                    }
                    w = w + e | 0;
                    v = v + g | 0
                }
            }
        } while (0);
        r = r + 1 | 0;
        if ((r | 0) == 2) {
            break
        }
    }
    m = l
}
rf.X = 1;

function sf(b, c, d, f, g, e, i, h, k) {
    var l = i + d | 0,
        j = h + f | 0,
        n = (d | 0) < 0 | (l | 0) > (g | 0) ? 2 : 4,
        f = (j | 0) < 0 ? -h | 0 : f,
        d = (l | 0) < 0 ? -i | 0 : d,
        f = (f | 0) > (e | 0) ? e : f,
        p = (d | 0) > (g | 0) ? g : d,
        d = p + i | 0,
        r = f + h | 0,
        b = (p | 0) > 0 ? b + p | 0 : b,
        l = (f | 0) > 0 ? b + f * g | 0 : b,
        b = (p | 0) < 0 ? -p | 0 : 0,
        d = (d | 0) > (g | 0) ? d - g | 0 : 0,
        i = i - b - d | 0,
        p = (f | 0) < 0 ? -f | 0 : 0,
        f = (r | 0) > (e | 0) ? r - e | 0 : 0;
    if ((p | 0) != 0) {
        for (var r = e ^ -1, o = h - 1 - ((j | 0) > 0 ? j : 0) | 0, r = (o | 0) < (r | 0) ? r : o, o = r ^ -1, r = ((o | 0) > 0 ? o : 0) + (r + 1) | 0, o = r * k | 0, t = 0;;) {
            if (lc[n](l, c + t * k | 0, b, i, d), t = t + 1 | 0, (t | 0) == (r | 0)) {
                break
            }
        }
        c = c + o | 0
    }
    if ((h - p | 0) != (f | 0)) {
        p = h - 1 | 0;
        r = e ^ -1;
        o = p - ((j | 0) > 0 ? j : 0) | 0;
        r = (o | 0) < (r | 0) ? r : o;
        p = p - r | 0;
        o = r ^ -1;
        r = h + e - 1 - ((p | 0) < (e | 0) ? e : p) - r - ((o | 0) > 0 ? o : 0) | 0;
        o = r * k | 0;
        p = r * g | 0;
        for (t = 0;;) {
            if (lc[n](l + t * g | 0, c + t * k | 0, b, i, d), t = t + 1 | 0, (t | 0) == (r | 0)) {
                break
            }
        }
        c = c + o | 0;
        l = l + p | 0
    }
    g = l + -g | 0;
    l = (f | 0) == 0;
    a: do {
        if (!l) {
            f = h - 1 | 0;
            p = e ^ -1;
            r = f - ((j | 0) > 0 ? j : 0) | 0;
            f = f - ((r | 0) < (p | 0) ? p : r) | 0;
            f = ((f | 0) < (e | 0) ? e : f) - e | 0;
            for (p = 0;;) {
                if (lc[n](g, c + p * k | 0, b, i, d), p = p + 1 | 0, (p | 0) == (f | 0)) {
                    break a
                }
            }
        }
    } while (0)
}
sf.X = 1;

function tf(b, c, d, f, g, e, i, h, k) {
    var l = m;
    m += 144;
    var j;
    if ((d | 0) < 0) {
        j = 3
    } else {
        if ((h + d | 0) >>> 0 > g >>> 0 | (f | 0) < 0) {
            j = 3
        } else {
            if ((k + (f + 1) | 0) >>> 0 > e >>> 0) {
                j = 3
            } else {
                var n = b,
                    p = d,
                    r = f,
                    o = g,
                    t = e;
                j = 4
            }
        }
    }
    j == 3 && (n = l | 0, j = k + 1 | 0, sf(b, n, d, f, g, e, h, j, h), sf(b + e * g | 0, l + j * h | 0, d, f, g, e, h, j, h), r = p = 0, o = h, t = j);
    b = 8 - i | 0;
    d = k >>> 0 < 2;
    f = h >>> 0 < 2;
    g = 16 - h | 0;
    e = o << 1;
    j = e - h | 0;
    var s = o + 1 | 0,
        u = h >>> 1;
    h &= -2;
    var w = e | 1;
    k >>>= 1;
    t = t * o | 0;
    p = p + r * o | 0;
    for (r = 0;;) {
        a: do {
            if (!d) {
                for (var v = n + (p + t * r) | 0, z = c + (r << 6) | 0, B = 0;;) {
                    if (!f) {
                        for (var D = z + h | 0, C = 0;;) {
                            var E = C << 1,
                                G = E | 1,
                                H = A[v + (o + E) | 0] & 255,
                                K = A[v + E | 0] & 255;
                            q[E + (z + 8) | 0] = ((H * b + (A[v + (e + E) | 0] & 255) * i << 3) + 32 | 0) >>> 6 & 255;
                            q[z + E | 0] = ((K * b + H * i << 3) + 32 | 0) >>> 6 & 255;
                            H = A[v + (s + E) | 0] & 255;
                            K = A[v + G | 0] & 255;
                            q[E + (z + 9) | 0] = ((H * b + (A[v + (w + E) | 0] & 255) * i << 3) + 32 | 0) >>> 6 & 255;
                            q[z + G | 0] = ((K * b + H * i << 3) + 32 | 0) >>> 6 & 255;
                            C = C + 1 | 0;
                            if ((C | 0) == (u | 0)) {
                                break
                            }
                        }
                        v = v + h | 0;
                        z = D
                    }
                    B = B + 1 | 0;
                    if ((B | 0) == (k | 0)) {
                        break a
                    }
                    v = v + j | 0;
                    z = z + g | 0
                }
            }
        } while (0);
        r = r + 1 | 0;
        if ((r | 0) == 2) {
            break
        }
    }
    m = l
}
tf.X = 1;

function uf(b, c, d, f, g, e, i, h, k, l) {
    var j = m;
    m += 164;
    var n;
    if ((d | 0) < 0) {
        n = 3
    } else {
        if ((k + (d + 1) | 0) >>> 0 > g >>> 0 | (f | 0) < 0) {
            n = 3
        } else {
            if ((l + (f + 1) | 0) >>> 0 > e >>> 0) {
                n = 3
            } else {
                var p = b,
                    r = d,
                    o = f,
                    t = g,
                    s = e;
                n = 4
            }
        }
    }
    n == 3 && (p = j | 0, t = k + 1 | 0, n = l + 1 | 0, sf(b, p, d, f, g, e, t, n, t), sf(b + e * g | 0, j + n * t | 0, d, f, g, e, t, n, t), o = r = 0, s = n);
    b = 8 - i | 0;
    d = 8 - h | 0;
    f = l >>> 0 < 2;
    g = t << 1;
    e = k >>> 0 < 2;
    n = 16 - k | 0;
    var u = g - k | 0,
        w = t + 1 | 0,
        v = t + 2 | 0,
        z = k >>> 1;
    k &= -2;
    var B = g | 1,
        D = g + 2 | 0;
    l >>>= 1;
    s = s * t | 0;
    r = r + o * t | 0;
    for (o = 0;;) {
        a: do {
            if (!f) {
                for (var C = p + (r + s * o) | 0, E = c + (o << 6) | 0, G = 0;;) {
                    var H = A[C + t | 0] & 255;
                    if (!e) {
                        for (var K = E + k | 0, L = H * h + (A[C] & 255) * d | 0, N = (A[C + g | 0] & 255) * h + H * d | 0, H = 0;;) {
                            var O = H << 1,
                                R = O | 1,
                                U = A[C + (w + O) | 0] & 255,
                                Y = U * h + (A[C + R | 0] & 255) * d | 0,
                                U = (A[C + (B + O) | 0] & 255) * h + U * d | 0,
                                L = (L * b + 32 + Y * i | 0) >>> 6;
                            q[O + (E + 8) | 0] = (N * b + 32 + U * i | 0) >>> 6 & 255;
                            q[E + O | 0] = L & 255;
                            N = A[C + (v + O) | 0] & 255;
                            L = N * h + (A[O + (C + 2) | 0] & 255) * d | 0;
                            N = (A[C + (D + O) | 0] & 255) * h + N * d | 0;
                            Y = (Y * b + 32 + L * i | 0) >>> 6;
                            q[O + (E + 9) | 0] = (U * b + 32 + N * i | 0) >>> 6 & 255;
                            q[E + R | 0] = Y & 255;
                            H = H + 1 | 0;
                            if ((H | 0) == (z | 0)) {
                                break
                            }
                        }
                        C = C + k | 0;
                        E = K
                    }
                    G = G + 1 | 0;
                    if ((G | 0) == (l | 0)) {
                        break a
                    }
                    C = C + u | 0;
                    E = E + n | 0
                }
            }
        } while (0);
        o = o + 1 | 0;
        if ((o | 0) == 2) {
            break
        }
    }
    m = j
}
uf.X = 1;

function vf(b, c, d, f, g, e, i, h) {
    var k = m;
    m += 444;
    var l;
    if ((d | 0) < 0) {
        l = 3
    } else {
        if ((i + d | 0) >>> 0 > g >>> 0 | (f | 0) < 0) {
            l = 3
        } else {
            if ((h + (f + 5) | 0) >>> 0 > e >>> 0) {
                l = 3
            } else {
                var j = b,
                    n = d,
                    p = f,
                    r = g;
                l = 4
            }
        }
    }
    l == 3 && (sf(b, k, d, f, g, e, i, h + 5 | 0, i), j = k, p = n = 0, r = i);
    b = n + r + p * r | 0;
    d = h >>> 0 < 4;
    a: do {
        if (!d) {
            f = (i | 0) == 0;
            g = (r << 2) - i | 0;
            e = 64 - i | 0;
            l = r * -2 | 0;
            for (var n = r << 1, p = h >>> 2, o = j + b | 0, t = j + (b + r * 5) | 0, s = c, u = 0;;) {
                if (!f) {
                    for (var w = s + i | 0, v = 0;;) {
                        var z = v - r | 0,
                            B = r + v | 0,
                            D = n + v | 0,
                            C = A[t + (l + v) | 0] & 255,
                            E = A[t + z | 0] & 255,
                            G = A[t + B | 0] & 255,
                            H = A[t + v | 0] & 255,
                            K = G + C | 0,
                            L = A[o + D | 0] & 255;
                        q[v + (s + 48) | 0] = q[Q.a + ((16 - K + (A[t + D | 0] & 255) - (K << 2) + L + (H + E) * 20 >> 5) + 512) | 0];
                        D = L + H | 0;
                        B = A[o + B | 0] & 255;
                        q[v + (s + 32) | 0] = q[Q.a + ((G + 16 - D + B - (D << 2) + (E + C) * 20 >> 5) + 512) | 0];
                        G = B + E | 0;
                        D = A[o + v | 0] & 255;
                        q[v + (s + 16) | 0] = q[Q.a + ((H + 16 - G + D - (G << 2) + (L + C) * 20 >> 5) + 512) | 0];
                        C = D + C | 0;
                        q[s + v | 0] = q[Q.a + ((E + 16 - C + (A[o + z | 0] & 255) - (C << 2) + (B + L) * 20 >> 5) + 512) | 0];
                        v = v + 1 | 0;
                        if ((v | 0) == (i | 0)) {
                            break
                        }
                    }
                    o = o + i | 0;
                    t = t + i | 0;
                    s = w
                }
                u = u + 1 | 0;
                if ((u | 0) == (p | 0)) {
                    break a
                }
                o = o + g | 0;
                t = t + g | 0;
                s = s + e | 0
            }
        }
    } while (0);
    m = k
}
vf.X = 1;

function wf(b, c, d, f, g, e, i, h, k) {
    var l = m;
    m += 444;
    var j;
    if ((d | 0) < 0) {
        j = 3
    } else {
        if ((i + d | 0) >>> 0 > g >>> 0 | (f | 0) < 0) {
            j = 3
        } else {
            if ((h + (f + 5) | 0) >>> 0 > e >>> 0) {
                j = 3
            } else {
                var n = b,
                    p = d,
                    r = f,
                    o = g;
                j = 4
            }
        }
    }
    j == 3 && (sf(b, l, d, f, g, e, i, h + 5 | 0, i), n = l, r = p = 0, o = i);
    b = p + o + r * o | 0;
    d = h >>> 0 < 4;
    a: do {
        if (!d) {
            f = (i | 0) == 0;
            g = (o << 2) - i | 0;
            e = 64 - i | 0;
            j = o << 1;
            for (var p = o * -2 | 0, r = h >>> 2, t = n + b | 0, s = n + (b + o * 5) | 0, u = n + (b + o * (k + 2)) | 0, w = c, v = 0;;) {
                if (!f) {
                    for (var z = u + i | 0, B = w + i | 0, D = 0;;) {
                        var C = j + D | 0,
                            E = o + D | 0,
                            G = D - o | 0,
                            H = A[s + (p + D) | 0] & 255,
                            K = A[s + G | 0] & 255,
                            L = A[s + E | 0] & 255,
                            N = A[s + D | 0] & 255,
                            O = L + H | 0,
                            R = A[t + C | 0] & 255;
                        q[D + (w + 48) | 0] = ((A[Q.a + ((16 - O + (A[s + C | 0] & 255) - (O << 2) + R + (N + K) * 20 >> 5) + 512) | 0] & 255) + 1 + (A[u + C | 0] & 255) | 0) >>> 1 & 255;
                        O = R + N | 0;
                        C = A[t + E | 0] & 255;
                        q[D + (w + 32) | 0] = ((A[Q.a + ((L + 16 - O - (O << 2) + C + (K + H) * 20 >> 5) + 512) | 0] & 255) + 1 + (A[u + E | 0] & 255) | 0) >>> 1 & 255;
                        E = C + K | 0;
                        L = A[t + D | 0] & 255;
                        q[D + (w + 16) | 0] = ((A[Q.a + ((N + 16 - E - (E << 2) + L + (R + H) * 20 >> 5) + 512) | 0] & 255) + 1 + (A[u + D | 0] & 255) | 0) >>> 1 & 255;
                        H = L + H | 0;
                        q[w + D | 0] = ((A[Q.a + ((K + 16 - H - (H << 2) + (A[t + G | 0] & 255) + (C + R) * 20 >> 5) + 512) | 0] & 255) + 1 + (A[u + G | 0] & 255) | 0) >>> 1 & 255;
                        D = D + 1 | 0;
                        if ((D | 0) == (i | 0)) {
                            break
                        }
                    }
                    t = t + i | 0;
                    s = s + i | 0;
                    u = z;
                    w = B
                }
                v = v + 1 | 0;
                if ((v | 0) == (r | 0)) {
                    break a
                }
                t = t + g | 0;
                s = s + g | 0;
                u = u + g | 0;
                w = w + e | 0
            }
        }
    } while (0);
    m = l
}
wf.X = 1;

function xf(b, c, d, f, g, e, i, h) {
    var k = m;
    m += 444;
    var l;
    if ((d | 0) < 0) {
        l = 3
    } else {
        if ((i + (d + 5) | 0) >>> 0 > g >>> 0 | (f | 0) < 0) {
            l = 3
        } else {
            if ((h + f | 0) >>> 0 > e >>> 0) {
                l = 3
            } else {
                var j = b,
                    n = d,
                    p = f,
                    r = g;
                l = 4
            }
        }
    }
    l == 3 && (r = i + 5 | 0, sf(b, k, d, f, g, e, r, h, r), j = k, p = n = 0);
    b = (h | 0) == 0;
    a: do {
        if (!b) {
            d = i >>> 2;
            f = (d | 0) == 0;
            g = r - i | 0;
            e = 16 - i | 0;
            l = i & -4;
            for (var o = j + (n + 5 + p * r) | 0, t = c, s = 0;;) {
                if (!f) {
                    for (var u = t + l | 0, w = A[o - 1 | 0] & 255, v = A[o - 2 | 0] & 255, z = A[o - 3 | 0] & 255, B = A[o - 4 | 0] & 255, D = A[o - 5 | 0] & 255, C = 0;;) {
                        var E = C << 2,
                            G = E | 1,
                            H = E | 2,
                            K = E | 3,
                            L = B + w | 0,
                            N = A[o + E | 0] & 255;
                        q[t + E | 0] = q[Q.a + ((16 - L + D - (L << 2) + N + (z + v) * 20 >> 5) + 512) | 0];
                        L = N + z | 0;
                        E = A[o + G | 0] & 255;
                        D = N + w | 0;
                        q[t + G | 0] = q[Q.a + ((B + 16 - L + E - (L << 2) + (v + w) * 20 >> 5) + 512) | 0];
                        L = E + v | 0;
                        B = A[o + H | 0] & 255;
                        G = E + N | 0;
                        q[t + H | 0] = q[Q.a + ((z + 16 - L + B - (L << 2) + D * 20 >> 5) + 512) | 0];
                        H = B + w | 0;
                        z = A[o + K | 0] & 255;
                        q[t + K | 0] = q[Q.a + ((v + 16 - H + z - (H << 2) + G * 20 >> 5) + 512) | 0];
                        C = C + 1 | 0;
                        if ((C | 0) == (d | 0)) {
                            break
                        }
                        D = w;
                        w = z;
                        v = B;
                        z = E;
                        B = N
                    }
                    o = o + l | 0;
                    t = u
                }
                s = s + 1 | 0;
                if ((s | 0) == (h | 0)) {
                    break a
                }
                o = o + g | 0;
                t = t + e | 0
            }
        }
    } while (0);
    m = k
}
xf.X = 1;

function yf(b, c, d, f, g, e, i, h, k) {
    var l = m;
    m += 444;
    var j;
    if ((d | 0) < 0) {
        j = 3
    } else {
        if ((i + (d + 5) | 0) >>> 0 > g >>> 0 | (f | 0) < 0) {
            j = 3
        } else {
            if ((h + f | 0) >>> 0 > e >>> 0) {
                j = 3
            } else {
                var n = b,
                    p = d,
                    r = f,
                    o = g;
                j = 4
            }
        }
    }
    j == 3 && (o = i + 5 | 0, sf(b, l, d, f, g, e, o, h, o), n = l, r = p = 0);
    b = (h | 0) == 0;
    a: do {
        if (!b) {
            d = i >>> 2;
            f = (d | 0) == 0;
            g = o - i | 0;
            e = 16 - i | 0;
            j = (k | 0) != 0;
            for (var t = i & -4, s = n + (p + 5 + r * o) | 0, u = c, w = 0;;) {
                if (!f) {
                    for (var v = u + t | 0, z = A[s - 1 | 0] & 255, B = A[s - 2 | 0] & 255, D = A[s - 3 | 0] & 255, C = A[s - 4 | 0] & 255, E = A[s - 5 | 0] & 255, G = 0;;) {
                        var H = G << 2,
                            K = H | 1,
                            L = H | 2,
                            N = H | 3,
                            O = C + z | 0,
                            R = A[s + H | 0] & 255;
                        q[u + H | 0] = ((j ? B : D) + 1 + (A[Q.a + ((16 - O + E - (O << 2) + R + (D + B) * 20 >> 5) + 512) | 0] & 255) | 0) >>> 1 & 255;
                        E = R + D | 0;
                        H = A[s + K | 0] & 255;
                        q[u + K | 0] = ((j ? z : B) + 1 + (A[Q.a + ((C + 16 - E + H - (E << 2) + (B + z) * 20 >> 5) + 512) | 0] & 255) | 0) >>> 1 & 255;
                        E = H + B | 0;
                        C = A[s + L | 0] & 255;
                        q[u + L | 0] = ((j ? R : z) + 1 + (A[Q.a + ((D + 16 - E + C - (E << 2) + (R + z) * 20 >> 5) + 512) | 0] & 255) | 0) >>> 1 & 255;
                        E = C + z | 0;
                        D = A[s + N | 0] & 255;
                        q[u + N | 0] = ((j ? H : R) + 1 + (A[Q.a + ((B + 16 - E + D - (E << 2) + (H + R) * 20 >> 5) + 512) | 0] & 255) | 0) >>> 1 & 255;
                        G = G + 1 | 0;
                        if ((G | 0) == (d | 0)) {
                            break
                        }
                        E = z;
                        z = D;
                        B = C;
                        D = H;
                        C = R
                    }
                    s = s + t | 0;
                    u = v
                }
                w = w + 1 | 0;
                if ((w | 0) == (h | 0)) {
                    break a
                }
                s = s + g | 0;
                u = u + e | 0
            }
        }
    } while (0);
    m = l
}
yf.X = 1;

function zf(b, c, d, f, g, e, i, h, k) {
    var l = m;
    m += 444;
    var j;
    if ((d | 0) < 0) {
        j = 3
    } else {
        if ((i + (d + 5) | 0) >>> 0 > g >>> 0 | (f | 0) < 0) {
            j = 3
        } else {
            if ((h + (f + 5) | 0) >>> 0 > e >>> 0) {
                j = 3
            } else {
                var n = b,
                    p = d,
                    r = f,
                    o = g;
                j = 4
            }
        }
    }
    j == 3 && (o = i + 5 | 0, sf(b, l, d, f, g, e, o, h + 5 | 0, o), n = l, r = p = 0);
    b = r * o + p | 0;
    d = (k & 1 | 2) + o + b | 0;
    f = n + d | 0;
    g = (h | 0) == 0;
    a: do {
        if (!g) {
            p = i >>> 2;
            r = (p | 0) == 0;
            j = o - i | 0;
            for (var e = 16 - i | 0, t = i & -4, s = n + (o * (k >>> 1 & 1 | 2) + 5 + b) | 0, u = c, w = 0;;) {
                if (r) {
                    var v = u
                } else {
                    for (var v = u + t | 0, z = A[s - 2 | 0] & 255, B = A[s - 1 | 0] & 255, D = A[s - 3 | 0] & 255, C = A[s - 4 | 0] & 255, E = A[s - 5 | 0] & 255, G = 0;;) {
                        var H = G << 2,
                            K = H | 1,
                            L = H | 2,
                            N = H | 3,
                            O = C + B | 0,
                            R = A[s + H | 0] & 255;
                        q[u + H | 0] = q[Q.a + ((16 - O + E - (O << 2) + R + (D + z) * 20 >> 5) + 512) | 0];
                        O = R + D | 0;
                        H = A[s + K | 0] & 255;
                        E = R + B | 0;
                        q[u + K | 0] = q[Q.a + ((C + 16 - O + H - (O << 2) + (B + z) * 20 >> 5) + 512) | 0];
                        O = H + z | 0;
                        C = A[s + L | 0] & 255;
                        K = H + R | 0;
                        q[u + L | 0] = q[Q.a + ((D + 16 - O + C - (O << 2) + E * 20 >> 5) + 512) | 0];
                        L = C + B | 0;
                        D = A[s + N | 0] & 255;
                        q[u + N | 0] = q[Q.a + ((z + 16 - L + D - (L << 2) + K * 20 >> 5) + 512) | 0];
                        G = G + 1 | 0;
                        if ((G | 0) == (p | 0)) {
                            break
                        }
                        z = C;
                        E = B;
                        B = D;
                        D = H;
                        C = R
                    }
                    s = s + t | 0
                }
                w = w + 1 | 0;
                if ((w | 0) == (h | 0)) {
                    break
                }
                s = s + j | 0;
                u = v + e | 0
            }
            if (h >>> 0 >= 4) {
                p = (i | 0) == 0;
                r = (o << 2) - i | 0;
                j = 64 - i | 0;
                t = o << 1;
                u = o * -2 | 0;
                s = h >>> 2;
                w = n + (d + o * 5) | 0;
                z = f;
                e = v + (e - (h << 4)) | 0;
                for (B = 0;;) {
                    if (!p) {
                        R = e + i | 0;
                        for (G = 0;;) {
                            var U = G + (e + 48) | 0,
                                O = G + (e + 32) | 0,
                                C = G + (e + 16) | 0,
                                N = e + G | 0,
                                Y = t + G | 0,
                                X = o + G | 0,
                                D = G - o | 0,
                                E = A[w + (u + G) | 0] & 255,
                                H = A[w + D | 0] & 255,
                                ba = A[w + X | 0] & 255,
                                K = A[w + G | 0] & 255,
                                $ = ba + E | 0,
                                L = A[z + Y | 0] & 255;
                            q[U] = ((A[Q.a + ((16 - $ + (A[w + Y | 0] & 255) - ($ << 2) + L + (K + H) * 20 >> 5) + 512) | 0] & 255) + 1 + (A[U] & 255) | 0) >>> 1 & 255;
                            U = L + K | 0;
                            X = A[z + X | 0] & 255;
                            q[O] = ((A[Q.a + ((ba + 16 - U - (U << 2) + X + (H + E) * 20 >> 5) + 512) | 0] & 255) + 1 + (A[O] & 255) | 0) >>> 1 & 255;
                            O = A[z + G | 0] & 255;
                            ba = X + H | 0;
                            q[C] = ((A[Q.a + ((K + 16 - ba - (ba << 2) + O + (L + E) * 20 >> 5) + 512) | 0] & 255) + 1 + (A[C] & 255) | 0) >>> 1 & 255;
                            C = O + E | 0;
                            q[N] = ((A[Q.a + ((H + 16 - C - (C << 2) + (A[z + D | 0] & 255) + (X + L) * 20 >> 5) + 512) | 0] & 255) + 1 + (A[N] & 255) | 0) >>> 1 & 255;
                            G = G + 1 | 0;
                            if ((G | 0) == (i | 0)) {
                                break
                            }
                        }
                        w = w + i | 0;
                        z = z + i | 0;
                        e = R
                    }
                    B = B + 1 | 0;
                    if ((B | 0) == (s | 0)) {
                        break a
                    }
                    w = w + r | 0;
                    z = z + r | 0;
                    e = e + j | 0
                }
            }
        }
    } while (0);
    m = l
}
zf.X = 1;

function Af(b, c, d, f, g, e, i, h) {
    var k = m;
    m += 1788;
    var l, j = k + 444;
    if ((d | 0) < 0) {
        l = 3
    } else {
        if ((i + (d + 5) | 0) >>> 0 > g >>> 0 | (f | 0) < 0) {
            l = 3
        } else {
            if ((h + (f + 5) | 0) >>> 0 > e >>> 0) {
                l = 3
            } else {
                var n = b,
                    p = d,
                    r = f,
                    o = g;
                l = 4
            }
        }
    }
    l == 3 && (l = i + 5 | 0, sf(b, k, d, f, g, e, l, h + 5 | 0, l), n = k, r = p = 0, o = l);
    b = (h | 0) == -5;
    do {
        if (b) {
            l = 12
        } else {
            l = i >>> 2;
            for (var d = (l | 0) == 0, f = o - i | 0, g = i & -4, e = h + 5 | 0, t = j | 0, s = n + (p + 5 + r * o) | 0, u = 0;;) {
                if (!d) {
                    for (var w = t + (g << 2) | 0, v = A[s - 5 | 0] & 255, z = A[s - 4 | 0] & 255, B = A[s - 3 | 0] & 255, D = A[s - 2 | 0] & 255, C = A[s - 1 | 0] & 255, E = 0;;) {
                        var G = E << 2,
                            H = G | 1,
                            K = G | 2,
                            L = G | 3,
                            N = C + z | 0,
                            O = A[s + G | 0] & 255;
                        y[t + (G << 2) >> 2] = v - N - (N << 2) + O + (D + B) * 20 | 0;
                        v = O + B | 0;
                        G = A[s + H | 0] & 255;
                        y[t + (H << 2) >> 2] = G + z - v - (v << 2) + (C + D) * 20 | 0;
                        z = G + D | 0;
                        H = A[s + K | 0] & 255;
                        y[t + (K << 2) >> 2] = H + B - z - (z << 2) + (O + C) * 20 | 0;
                        B = H + C | 0;
                        K = A[s + L | 0] & 255;
                        y[t + (L << 2) >> 2] = K + D - B - (B << 2) + (G + O) * 20 | 0;
                        E = E + 1 | 0;
                        if ((E | 0) == (l | 0)) {
                            break
                        }
                        v = C;
                        z = O;
                        B = G;
                        D = H;
                        C = K
                    }
                    t = w;
                    s = s + g | 0
                }
                u = u + 1 | 0;
                if ((u | 0) == (e | 0)) {
                    break
                }
                s = s + f | 0
            }
            l = h >>> 0 < 4 ? 18 : 12
        }
    } while (0);
    a: do {
        if (l == 12) {
            n = (i | 0) == 0;
            p = 64 - i | 0;
            r = i * 3 | 0;
            o = i * -2 | 0;
            b = i << 1;
            d = h >>> 2;
            f = j + (i << 2) | 0;
            g = j + (i * 6 << 2) | 0;
            e = c;
            for (t = 0;;) {
                if (!n) {
                    s = e + i | 0;
                    for (u = 0;;) {
                        if (C = u - i | 0, O = u + i | 0, L = b + u | 0, E = f + (O << 2) | 0, w = f + (C << 2) | 0, D = F[g + (o + u << 2) >> 2], C = F[g + (C << 2) >> 2], z = y[g + (O << 2) >> 2], B = F[g + (u << 2) >> 2], G = z + D | 0, O = F[f + (L << 2) >> 2], q[u + (e + 48) | 0] = q[Q.a + ((512 - G + y[g + (L << 2) >> 2] - (G << 2) + O + (B + C) * 20 >> 10) + 512) | 0], L = O + B | 0, E = y[E >> 2], q[u + (e + 32) | 0] = q[Q.a + ((z + 512 - L + E - (L << 2) + (C + D) * 20 >> 10) + 512) | 0], L = y[f + (u << 2) >> 2], z = E + C | 0, q[u + (e + 16) | 0] = q[Q.a + ((B + 512 - z + L - (z << 2) + (O + D) * 20 >> 10) + 512) | 0], D = L + D | 0, q[e + u | 0] = q[Q.a + ((C + 512 - D + y[w >> 2] - (D << 2) + (E + O) * 20 >> 10) + 512) | 0], u = u + 1 | 0, (u | 0) == (i | 0)) {
                            break
                        }
                    }
                    f = f + (i << 2) | 0;
                    g = g + (i << 2) | 0;
                    e = s
                }
                t = t + 1 | 0;
                if ((t | 0) == (d | 0)) {
                    break a
                }
                f = f + (r << 2) | 0;
                g = g + (r << 2) | 0;
                e = e + p | 0
            }
        }
    } while (0);
    m = k
}
Af.X = 1;

function Bf(b, c, d, f, g, e, i, h, k) {
    var l = m;
    m += 1788;
    var j, n = l + 444;
    if ((d | 0) < 0) {
        j = 3
    } else {
        if ((i + (d + 5) | 0) >>> 0 > g >>> 0 | (f | 0) < 0) {
            j = 3
        } else {
            if ((h + (f + 5) | 0) >>> 0 > e >>> 0) {
                j = 3
            } else {
                var p = b,
                    r = d,
                    o = f,
                    t = g;
                j = 4
            }
        }
    }
    j == 3 && (j = i + 5 | 0, sf(b, l, d, f, g, e, j, h + 5 | 0, j), p = l, o = r = 0, t = j);
    b = (h | 0) == -5;
    do {
        if (b) {
            j = 12
        } else {
            j = i >>> 2;
            for (var d = (j | 0) == 0, f = t - i | 0, g = i & -4, e = h + 5 | 0, s = n | 0, u = p + (r + 5 + o * t) | 0, w = 0;;) {
                if (!d) {
                    for (var v = s + (g << 2) | 0, z = A[u - 5 | 0] & 255, B = A[u - 4 | 0] & 255, D = A[u - 3 | 0] & 255, C = A[u - 2 | 0] & 255, E = A[u - 1 | 0] & 255, G = 0;;) {
                        var H = G << 2,
                            K = H | 1,
                            L = H | 2,
                            N = H | 3,
                            O = E + B | 0,
                            R = A[u + H | 0] & 255;
                        y[s + (H << 2) >> 2] = z - O - (O << 2) + R + (C + D) * 20 | 0;
                        z = R + D | 0;
                        H = A[u + K | 0] & 255;
                        y[s + (K << 2) >> 2] = H + B - z - (z << 2) + (E + C) * 20 | 0;
                        B = H + C | 0;
                        K = A[u + L | 0] & 255;
                        y[s + (L << 2) >> 2] = K + D - B - (B << 2) + (R + E) * 20 | 0;
                        D = K + E | 0;
                        L = A[u + N | 0] & 255;
                        y[s + (N << 2) >> 2] = L + C - D - (D << 2) + (H + R) * 20 | 0;
                        G = G + 1 | 0;
                        if ((G | 0) == (j | 0)) {
                            break
                        }
                        z = E;
                        B = R;
                        D = H;
                        C = K;
                        E = L
                    }
                    s = v;
                    u = u + g | 0
                }
                w = w + 1 | 0;
                if ((w | 0) == (e | 0)) {
                    break
                }
                u = u + f | 0
            }
            j = h >>> 0 < 4 ? 18 : 12
        }
    } while (0);
    a: do {
        if (j == 12) {
            p = (i | 0) == 0;
            r = 64 - i | 0;
            o = i * 3 | 0;
            t = i << 1;
            b = i * -2 | 0;
            d = h >>> 2;
            f = n + (i << 2) | 0;
            g = n + (i * 6 << 2) | 0;
            e = n + ((k + 2) * i + i << 2) | 0;
            s = c;
            for (u = 0;;) {
                if (!p) {
                    v = e + (i << 2) | 0;
                    w = s + i | 0;
                    for (C = 0;;) {
                        if (L = t + C | 0, N = C + i | 0, B = e + (N << 2) | 0, G = C - i | 0, E = e + (G << 2) | 0, z = f + (N << 2) | 0, R = f + (G << 2) | 0, D = F[g + (b + C << 2) >> 2], G = F[g + (G << 2) >> 2], K = F[g + (N << 2) >> 2], H = F[g + (C << 2) >> 2], O = K + D | 0, N = F[f + (L << 2) >> 2], q[C + (s + 48) | 0] = ((A[Q.a + ((512 - O + y[g + (L << 2) >> 2] - (O << 2) + N + (H + G) * 20 >> 10) + 512) | 0] & 255) + 1 + (A[Q.a + ((y[e + (L << 2) >> 2] + 16 >> 5) + 512) | 0] & 255) | 0) >>> 1 & 255, L = N + H | 0, z = F[z >> 2], q[C + (s + 32) | 0] = ((A[Q.a + ((K + 512 - L - (L << 2) + z + (G + D) * 20 >> 10) + 512) | 0] & 255) + 1 + (A[Q.a + ((y[B >> 2] + 16 >> 5) + 512) | 0] & 255) | 0) >>> 1 & 255, B = F[f + (C << 2) >> 2], L = z + G | 0, q[C + (s + 16) | 0] = ((A[Q.a + ((H + 512 - L - (L << 2) + B + (N + D) * 20 >> 10) + 512) | 0] & 255) + 1 + (A[Q.a + ((y[e + (C << 2) >> 2] + 16 >> 5) + 512) | 0] & 255) | 0) >>> 1 & 255, D = B + D | 0, q[s + C | 0] = ((A[Q.a + ((G + 512 - D - (D << 2) + y[R >> 2] + (z + N) * 20 >> 10) + 512) | 0] & 255) + 1 + (A[Q.a + ((y[E >> 2] + 16 >> 5) + 512) | 0] & 255) | 0) >>> 1 & 255, C = C + 1 | 0, (C | 0) == (i | 0)) {
                            break
                        }
                    }
                    f = f + (i << 2) | 0;
                    g = g + (i << 2) | 0;
                    e = v;
                    s = w
                }
                u = u + 1 | 0;
                if ((u | 0) == (d | 0)) {
                    break a
                }
                f = f + (o << 2) | 0;
                g = g + (o << 2) | 0;
                e = e + (o << 2) | 0;
                s = s + r | 0
            }
        }
    } while (0);
    m = l
}
Bf.X = 1;

function Cf(b, c) {
    var d = b + 40 | 0,
        f = y[d >> 2],
        g = (f | 0) == 0;
    a: do {
        if (!g) {
            for (var e = b | 0, i = b + 32 | 0, h = 0, k = f;;) {
                var l = h + 1 | 0,
                    j = F[e >> 2];
                (y[j + h * 40 + 20 >> 2] - 1 | 0) >>> 0 < 2 ? (k = F[j + h * 40 + 12 >> 2], y[j + h * 40 + 8 >> 2] = k >>> 0 > c >>> 0 ? k - y[i >> 2] | 0 : k, j = y[d >> 2]) : j = k;
                if (l >>> 0 >= j >>> 0) {
                    break a
                }
                h = l;
                k = j
            }
        }
    } while (0)
}

function Df(b, c, d) {
    var d = (d | 0) == 0,
        f = F[b + 24 >> 2];
    b |= 0;
    a: do {
        if (d) {
            for (var g = 0, e = 0;;) {
                for (var i = e >>> 0 < f >>> 0;;) {
                    if (!(i & (g | 0) == 0)) {
                        var h = g,
                            k = e;
                        break a
                    }
                    var l = y[b >> 2];
                    if ((y[l + e * 40 + 20 >> 2] | 0) != 3) {
                        break
                    }
                    if ((y[l + e * 40 + 8 >> 2] | 0) != (c | 0)) {
                        break
                    }
                    g = 1
                }
                e = e + 1 | 0
            }
        } else {
            for (e = g = 0;;) {
                for (i = e >>> 0 < f >>> 0;;) {
                    if (!(i & (g | 0) == 0)) {
                        h = g;
                        k = e;
                        break a
                    }
                    l = F[b >> 2];
                    if ((y[l + e * 40 + 20 >> 2] - 1 | 0) >>> 0 >= 2) {
                        break
                    }
                    if ((y[l + e * 40 + 8 >> 2] | 0) != (c | 0)) {
                        break
                    }
                    g = 1
                }
                e = e + 1 | 0
            }
        }
    } while (0);
    return (h | 0) == 0 ? -1 : k
}

function Ef(b, c, d, f, g, e, i, h, k) {
    var l = m;
    m += 1788;
    var j, n = l + 444,
        p = i + 5 | 0;
    if ((d | 0) < 0) {
        j = 3
    } else {
        if ((i + (d + 5) | 0) >>> 0 > g >>> 0 | (f | 0) < 0) {
            j = 3
        } else {
            if ((h + (f + 5) | 0) >>> 0 > e >>> 0) {
                j = 3
            } else {
                var r = b,
                    o = d,
                    t = f,
                    s = g;
                j = 4
            }
        }
    }
    j == 3 && (sf(b, l, d, f, g, e, p, h + 5 | 0, p), r = l, t = o = 0, s = p);
    b = o + s + t * s | 0;
    d = h >>> 0 < 4;
    a: do {
        if (!d) {
            f = (p | 0) == 0;
            g = (s << 2) - i - 5 | 0;
            e = p * 3 | 0;
            j = s * -2 | 0;
            for (var o = s << 1, t = (i << 1) + 10 | 0, u = -5 - i | 0, w = h >>> 2, v = n + (p << 2) | 0, z = r + b | 0, B = r + (b + s * 5) | 0, D = 0;;) {
                if (!f) {
                    for (var C = v + (p << 2) | 0, E = 0;;) {
                        var G = E - s | 0,
                            H = s + E | 0,
                            K = o + E | 0,
                            L = v + (p + E << 2) | 0,
                            N = v + (u + E << 2) | 0,
                            O = A[B + (j + E) | 0] & 255,
                            R = A[B + G | 0] & 255,
                            U = A[B + H | 0] & 255,
                            Y = A[B + E | 0] & 255,
                            X = U + O | 0,
                            ba = A[z + K | 0] & 255;
                        y[v + (t + E << 2) >> 2] = (A[B + K | 0] & 255) - X - (X << 2) + ba + (Y + R) * 20 | 0;
                        K = ba + Y | 0;
                        H = A[z + H | 0] & 255;
                        y[L >> 2] = H + U - K - (K << 2) + (R + O) * 20 | 0;
                        L = A[z + E | 0] & 255;
                        U = H + R | 0;
                        y[v + (E << 2) >> 2] = L + Y - U - (U << 2) + (ba + O) * 20 | 0;
                        O = L + O | 0;
                        y[N >> 2] = (A[z + G | 0] & 255) + R - O - (O << 2) + (H + ba) * 20 | 0;
                        E = E + 1 | 0;
                        if ((E | 0) == (p | 0)) {
                            break
                        }
                    }
                    v = C;
                    z = z + p | 0;
                    B = B + p | 0
                }
                D = D + 1 | 0;
                if ((D | 0) == (w | 0)) {
                    break a
                }
                v = v + (e << 2) | 0;
                z = z + g | 0;
                B = B + g | 0
            }
        }
    } while (0);
    p = (h | 0) == 0;
    a: do {
        if (!p) {
            r = i >>> 2;
            s = (r | 0) == 0;
            b = 16 - i | 0;
            d = i & -4;
            f = n + 20 | 0;
            g = n + (k + 2 << 2) | 0;
            e = c;
            for (j = 0;;) {
                if (!s) {
                    o = g + (d << 2) | 0;
                    E = y[f - 20 >> 2];
                    D = y[f - 16 >> 2];
                    v = y[f - 12 >> 2];
                    t = y[f - 8 >> 2];
                    u = y[f - 4 >> 2];
                    for (z = 0;;) {
                        C = z << 2;
                        N = C | 1;
                        G = C | 2;
                        B = C | 3;
                        R = u + D | 0;
                        w = F[f + (C << 2) >> 2];
                        q[e + C | 0] = ((A[Q.a + ((E + 512 - R - (R << 2) + w + (t + v) * 20 >> 10) + 512) | 0] & 255) + 1 + (A[Q.a + ((y[g + (C << 2) >> 2] + 16 >> 5) + 512) | 0] & 255) | 0) >>> 1 & 255;
                        E = w + v | 0;
                        C = F[f + (N << 2) >> 2];
                        q[e + N | 0] = ((A[Q.a + ((D + 512 - E - (E << 2) + C + (u + t) * 20 >> 10) + 512) | 0] & 255) + 1 + (A[Q.a + ((y[g + (N << 2) >> 2] + 16 >> 5) + 512) | 0] & 255) | 0) >>> 1 & 255;
                        D = C + t | 0;
                        N = F[f + (G << 2) >> 2];
                        q[e + G | 0] = ((A[Q.a + ((v + 512 - D - (D << 2) + N + (w + u) * 20 >> 10) + 512) | 0] & 255) + 1 + (A[Q.a + ((y[g + (G << 2) >> 2] + 16 >> 5) + 512) | 0] & 255) | 0) >>> 1 & 255;
                        v = N + u | 0;
                        G = F[f + (B << 2) >> 2];
                        q[e + B | 0] = ((A[Q.a + ((t + 512 - v - (v << 2) + G + (C + w) * 20 >> 10) + 512) | 0] & 255) + 1 + (A[Q.a + ((y[g + (B << 2) >> 2] + 16 >> 5) + 512) | 0] & 255) | 0) >>> 1 & 255;
                        z = z + 1 | 0;
                        if ((z | 0) == (r | 0)) {
                            break
                        }
                        E = u;
                        D = w;
                        v = C;
                        t = N;
                        u = G
                    }
                    f = f + (d << 2) | 0;
                    g = o;
                    e = e + d | 0
                }
                j = j + 1 | 0;
                if ((j | 0) == (h | 0)) {
                    break a
                }
                f = f + 20 | 0;
                g = g + 20 | 0;
                e = e + b | 0
            }
        }
    } while (0);
    m = l
}
Ef.X = 1;

function df(b, c, d, f, g, e, i, h, k) {
    var l = b + ((i << 4) + e) | 0,
        j = c | 0,
        n = x[j >> 1] << 16 >> 16,
        c = c + 2 | 0,
        p = x[c >> 1] << 16 >> 16,
        r = d + 4 | 0,
        o = y[r >> 2] << 4,
        t = d + 8 | 0,
        s = y[t >> 2] << 4,
        f = e + f | 0,
        u = f + (n >> 2) | 0,
        g = i + g | 0,
        w = g + (p >> 2) | 0,
        n = y[Ff + ((n & 3) << 4) + ((p & 3) << 2) >> 2];
    n == 0 ? sf(y[d >> 2], l, u, w, o, s, h, k, 16) : n == 1 ? wf(y[d >> 2], l, u, w - 2 | 0, o, s, h, k, 0) : n == 2 ? vf(y[d >> 2], l, u, w - 2 | 0, o, s, h, k) : n == 3 ? wf(y[d >> 2], l, u, w - 2 | 0, o, s, h, k, 1) : n == 4 ? yf(y[d >> 2], l, u - 2 | 0, w, o, s, h, k, 0) : n == 5 ? zf(y[d >> 2], l, u - 2 | 0, w - 2 | 0, o, s, h, k, 0) : n == 6 ? Ef(y[d >> 2], l, u - 2 | 0, w - 2 | 0, o, s, h, k, 0) : n == 7 ? zf(y[d >> 2], l, u - 2 | 0, w - 2 | 0, o, s, h, k, 2) : n == 8 ? xf(y[d >> 2], l, u - 2 | 0, w, o, s, h, k) : n == 9 ? Bf(y[d >> 2], l, u - 2 | 0, w - 2 | 0, o, s, h, k, 0) : n == 10 ? Af(y[d >> 2], l, u - 2 | 0, w - 2 | 0, o, s, h, k) : n == 11 ? Bf(y[d >> 2], l, u - 2 | 0, w - 2 | 0, o, s, h, k, 1) : n == 12 ? yf(y[d >> 2], l, u - 2 | 0, w, o, s, h, k, 1) : n == 13 ? zf(y[d >> 2], l, u - 2 | 0, w - 2 | 0, o, s, h, k, 1) : n == 14 ? Ef(y[d >> 2], l, u - 2 | 0, w - 2 | 0, o, s, h, k, 1) : zf(y[d >> 2], l, u - 2 | 0, w - 2 | 0, o, s, h, k, 3);
    b = b + (((i << 2) + 256 & -8) + (e >>> 1)) | 0;
    d = y[d >> 2];
    e = y[r >> 2];
    i = y[t >> 2];
    t = e << 3;
    r = i << 3;
    l = x[j >> 1] << 16 >> 16;
    j = (l >> 3) + (f >>> 1) | 0;
    f = x[c >> 1] << 16 >> 16;
    c = (f >> 3) + (g >>> 1) | 0;
    g = l & 7;
    f &= 7;
    h >>>= 1;
    k >>>= 1;
    e = (e << 8) * i | 0;
    i = d + e | 0;
    l = (g | 0) != 0;
    n = (f | 0) == 0;
    n | l ^ 1 ? l ? rf(i, b, j, c, t, r, g, h, k) : n ? (sf(i, b, j, c, t, r, h, k, 8), sf(d + (r * t + e) | 0, b + 64 | 0, j, c, t, r, h, k, 8)) : tf(i, b, j, c, t, r, f, h, k) : uf(i, b, j, c, t, r, g, f, h, k)
}
df.X = 1;

function Gf(b, c, d, f) {
    Cf(b, d);
    var g = (y[c >> 2] | 0) == 0;
    a: do {
        if (g) {
            var e = 0
        } else {
            var i = b | 0,
                h = b + 32 | 0,
                k = b + 4 | 0,
                l = f - 1 | 0,
                j = 0,
                n = d;
            b: for (;;) {
                var p = j + 2 | 0,
                    r = j + 1 | 0,
                    o = f - j | 0,
                    t = c + 4 + j * 12 + 4 | 0,
                    s = c + 4 + j * 12 + 8 | 0,
                    u = F[c + 4 + j * 12 >> 2];
                if (u >>> 0 >= 3) {
                    e = 0;
                    break a
                }
                u >>> 0 < 2 ? (s = F[t >> 2], (u | 0) == 0 ? (s = n - s | 0, s = (s | 0) < 0 ? y[h >> 2] + s | 0 : s) : (s = s + n | 0, u = y[h >> 2], s = s - ((s | 0) < (u | 0) ? 0 : u) | 0), s >>> 0 > d >>> 0 ? (u = 1, t = s - y[h >> 2] | 0) : (u = 1, t = s)) : (u = 0, t = y[s >> 2], s = n);
                u = Df(b, t, u);
                if ((u | 0) < 0) {
                    e = 1;
                    break a
                }
                t = F[i >> 2];
                if (F[t + u * 40 + 20 >> 2] >>> 0 <= 1) {
                    e = 1;
                    break a
                }
                if (j >>> 0 < f >>> 0) {
                    for (t = 0;;) {
                        var w = y[k >> 2];
                        y[(w + (f - t << 2) | 0) >> 2] = y[w + (l - t << 2) >> 2];
                        t = t + 1 | 0;
                        if ((t | 0) == (o | 0)) {
                            break
                        }
                    }
                    o = y[i >> 2]
                } else {
                    o = t
                }
                y[(y[k >> 2] + (j << 2) | 0) >> 2] = o + u * 40 | 0;
                if (r >>> 0 > f >>> 0) {
                    j = r, n = s
                } else {
                    t = r;
                    for (o = 0;;) {
                        var w = F[k >> 2],
                            v = y[w + (r + o << 2) >> 2];
                        (v | 0) != (y[i >> 2] + u * 40 | 0) && (y[w + (t << 2) >> 2] = v, t = t + 1 | 0);
                        if ((p + o | 0) >>> 0 > f >>> 0) {
                            j = r;
                            n = s;
                            continue b
                        }
                        o = o + 1 | 0
                    }
                }
            }
        }
    } while (0);
    return e
}
Gf.X = 1;

function Hf(b, c, d, f) {
    var g = F[b + 36 >> 2],
        g = (g | 0) == 65535 | g >>> 0 < f >>> 0;
    do {
        if (g) {
            var e = 1
        } else {
            var e = b + 24 | 0,
                i = F[e >> 2],
                h = b | 0,
                k = 0;
            a: for (;;) {
                if (k >>> 0 >= i >>> 0) {
                    var l = y[b + 40 >> 2];
                    break
                }
                var j = F[h >> 2],
                    n = j + k * 40 + 20 | 0,
                    p = (y[n >> 2] | 0) == 3;
                do {
                    if (p && (y[j + k * 40 + 8 >> 2] | 0) == (f | 0)) {
                        y[n >> 2] = 0;
                        i = b + 40 | 0;
                        l = y[i >> 2] - 1 | 0;
                        y[i >> 2] = l;
                        if ((y[y[h >> 2] + k * 40 + 24 >> 2] | 0) != 0) {
                            break a
                        }
                        h = b + 44 | 0;
                        y[h >> 2] = y[h >> 2] - 1 | 0;
                        break a
                    }
                } while (0);
                k = k + 1 | 0
            }
            h = b + 40 | 0;
            l >>> 0 < F[e >> 2] >>> 0 ? (e = b + 8 | 0, y[(y[e >> 2] + 12 | 0) >> 2] = c, y[(y[e >> 2] + 8 | 0) >> 2] = f, y[(y[e >> 2] + 16 | 0) >> 2] = d, y[(y[e >> 2] + 20 | 0) >> 2] = 3, y[(y[e >> 2] + 24 | 0) >> 2] = (y[b + 56 >> 2] | 0) == 0 & 1, y[h >> 2] = y[h >> 2] + 1 | 0, e = b + 44 | 0, y[e >> 2] = y[e >> 2] + 1 | 0, e = 0) : e = 1
        }
    } while (0);
    return e
}
Hf.X = 1;

function If(b) {
    var c = b + 40 | 0,
        d = F[c >> 2],
        f = d >>> 0 < F[b + 24 >> 2] >>> 0;
    do {
        if (f) {
            var g = 0
        } else {
            if ((d | 0) == 0) {
                g = 1
            } else {
                for (var g = b | 0, e = F[g >> 2], i = d >>> 0 > 1 ? d : 1, h = 0, k = -1, l = 0;;) {
                    if ((y[e + l * 40 + 20 >> 2] - 1 | 0) >>> 0 < 2) {
                        var j = F[e + l * 40 + 8 >> 2];
                        if ((j | 0) < (h | 0) | (k | 0) == -1) {
                            n = l, h = j
                        } else {
                            var n = k
                        }
                    } else {
                        n = k
                    }
                    l = l + 1 | 0;
                    if ((l | 0) == (i | 0)) {
                        break
                    }
                    k = n
                }(n | 0) > -1 ? (y[e + n * 40 + 20 >> 2] = 0, y[c >> 2] = y[c >> 2] - 1 | 0, (y[y[g >> 2] + n * 40 + 24 >> 2] | 0) == 0 && (g = b + 44 | 0, y[g >> 2] = y[g >> 2] - 1 | 0), g = 0) : g = 1
            }
        }
    } while (0);
    return g
}
If.X = 1;

function gf(b, c) {
    if (c >>> 0 > 16) {
        var d = 0
    } else {
        d = F[y[b + 4 >> 2] + (c << 2) >> 2], d = (d | 0) == 0 ? 0 : F[d + 20 >> 2] >>> 0 > 1 ? y[d >> 2] : 0
    }
    return d
}

function Jf(b) {
    var c = y[b >> 2],
        d = y[b + 28 >> 2];
    y[b + 8 >> 2] = c + d * 40 | 0;
    return y[c + d * 40 >> 2]
}

function Kf(b, c, d, f, g, e, i, h) {
    var k, l = b + 8 | 0,
        j = F[l >> 2];
    if ((y[d >> 2] | 0) == (y[j >> 2] | 0)) {
        d = b + 52 | 0;
        y[d >> 2] = 0;
        var n = b + 56 | 0,
            p = (y[n >> 2] | 0) == 0 & 1,
            r = (c | 0) == 0;
        do {
            if (r) {
                if (y[j + 20 >> 2] = 0, y[(y[l >> 2] + 12 | 0) >> 2] = f, y[(y[l >> 2] + 8 | 0) >> 2] = f, y[(y[l >> 2] + 16 | 0) >> 2] = g, y[(y[l >> 2] + 24 | 0) >> 2] = p, (y[n >> 2] | 0) != 0) {
                    var o = 0
                } else {
                    o = b + 44 | 0, y[o >> 2] = y[o >> 2] + 1 | 0, o = 0
                }
            } else {
                if ((e | 0) == 0) {
                    if ((y[c + 8 >> 2] | 0) == 0) {
                        var t = If(b),
                            o = f
                    } else {
                        var t = o = 0,
                            s = f;
                        a: for (;;) {
                            var u = c + 12 + t * 20 + 4 | 0,
                                w = c + 12 + t * 20 + 12 | 0,
                                v = y[c + 12 + t * 20 >> 2];
                            do {
                                if (v == 0) {
                                    var z = 0;
                                    break a
                                } else {
                                    if (v == 1) {
                                        var B;
                                        B = b;
                                        k = Df(B, s - y[u >> 2] | 0, 1);
                                        if ((k | 0) < 0) {
                                            B = 1
                                        } else {
                                            var D = B | 0;
                                            y[(y[D >> 2] + k * 40 + 20 | 0) >> 2] = 0;
                                            var C = B + 40 | 0;
                                            y[C >> 2] = y[C >> 2] - 1 | 0;
                                            (y[y[D >> 2] + k * 40 + 24 >> 2] | 0) == 0 && (B = B + 44 | 0, y[B >> 2] = y[B >> 2] - 1 | 0);
                                            B = 0
                                        }
                                        k = 20
                                    } else {
                                        if (v == 2) {
                                            B = b, k = Df(B, y[c + 12 + t * 20 + 8 >> 2], 0), (k | 0) < 0 ? B = 1 : (D = B | 0, y[(y[D >> 2] + k * 40 + 20 | 0) >> 2] = 0, C = B + 40 | 0, y[C >> 2] = y[C >> 2] - 1 | 0, (y[y[D >> 2] + k * 40 + 24 >> 2] | 0) == 0 && (B = B + 44 | 0, y[B >> 2] = y[B >> 2] - 1 | 0), B = 0), k = 20
                                        } else {
                                            if (v == 3) {
                                                B = Lf(b, s, y[u >> 2], y[w >> 2]), k = 20
                                            } else {
                                                if (v == 4) {
                                                    var E = b,
                                                        G = y[c + 12 + t * 20 + 16 >> 2];
                                                    k = E + 36 | 0;
                                                    y[k >> 2] = G;
                                                    D = E + 24 | 0;
                                                    C = (y[D >> 2] | 0) == 0;
                                                    b: do {
                                                        if (!C) {
                                                            for (var H = E | 0, K = E + 40 | 0, L = E + 44 | 0, N = 0, O = y[H >> 2];;) {
                                                                var R = N + 1 | 0,
                                                                    U = O + N * 40 + 20 | 0;
                                                                if ((y[U >> 2] | 0) == 3 && (F[O + N * 40 + 8 >> 2] >>> 0 > G >>> 0 || (y[k >> 2] | 0) == 65535)) {
                                                                    y[U >> 2] = 0, y[K >> 2] = y[K >> 2] - 1 | 0, O = F[H >> 2], (y[O + N * 40 + 24 >> 2] | 0) == 0 && (y[L >> 2] = y[L >> 2] - 1 | 0)
                                                                }
                                                                if (R >>> 0 >= F[D >> 2] >>> 0) {
                                                                    break b
                                                                }
                                                                N = R
                                                            }
                                                        }
                                                    } while (0);
                                                    E = s;
                                                    G = o;
                                                    k = 21
                                                } else {
                                                    if (v == 5) {
                                                        Mf(b), y[d >> 2] = 1, E = 0, G = o, k = 21
                                                    } else {
                                                        if (v == 6) {
                                                            if (k = Hf(b, s, g, y[w >> 2]), (k | 0) == 0) {
                                                                E = s, G = 1, k = 21
                                                            } else {
                                                                var Y = k;
                                                                k = 23
                                                            }
                                                        } else {
                                                            Y = 1, k = 23
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } while (0);
                            if (k == 23) {
                                z = Y;
                                break
                            } else {
                                if (k == 20) {
                                    if ((B | 0) != 0) {
                                        z = B;
                                        break
                                    }
                                    E = s;
                                    G = o
                                }
                            }
                            o = G;
                            t = t + 1 | 0;
                            s = E
                        }
                        if ((o | 0) != 0) {
                            o = z;
                            break
                        }
                        o = s;
                        t = z
                    }
                    s = b + 40 | 0;
                    F[s >> 2] >>> 0 < F[b + 24 >> 2] >>> 0 ? (y[(y[l >> 2] + 12 | 0) >> 2] = o, y[(y[l >> 2] + 8 | 0) >> 2] = o, y[(y[l >> 2] + 16 | 0) >> 2] = g, y[(y[l >> 2] + 20 | 0) >> 2] = 2, y[(y[l >> 2] + 24 | 0) >> 2] = p, o = b + 44 | 0, y[o >> 2] = y[o >> 2] + 1 | 0, y[s >> 2] = y[s >> 2] + 1 | 0, o = t) : o = 1
                } else {
                    o = b + 20 | 0, y[o >> 2] = 0, t = b + 16 | 0, y[t >> 2] = 0, Mf(b), k = (y[c >> 2] | 0) == 0 ? (y[n >> 2] | 0) == 0 ? 8 : 7 : 7, k == 7 && (y[t >> 2] = 0, y[o >> 2] = 0), o = y[l >> 2] + 20 | 0, (y[c + 4 >> 2] | 0) == 0 ? (y[o >> 2] = 2, y[b + 36 >> 2] = 65535) : (y[o >> 2] = 3, y[b + 36 >> 2] = 0), y[(y[l >> 2] + 12 | 0) >> 2] = 0, y[(y[l >> 2] + 8 | 0) >> 2] = 0, y[(y[l >> 2] + 16 | 0) >> 2] = 0, y[(y[l >> 2] + 24 | 0) >> 2] = p, y[b + 44 >> 2] = 1, y[b + 40 >> 2] = 1, o = 0
                }
            }
        } while (0);
        y[(y[l >> 2] + 36 | 0) >> 2] = e;
        y[(y[l >> 2] + 28 | 0) >> 2] = i;
        y[(y[l >> 2] + 32 | 0) >> 2] = h;
        c = (y[n >> 2] | 0) == 0;
        a: do {
            if (c) {
                if (f = b + 44 | 0, g = b + 28 | 0, e = F[g >> 2], F[f >> 2] >>> 0 > e >>> 0) {
                    for (;;) {
                        if (Nf(b), e = F[g >> 2], F[f >> 2] >>> 0 <= e >>> 0) {
                            X = e;
                            break a
                        }
                    }
                } else {
                    var X = e
                }
            } else {
                X = b + 16 | 0, f = b + 12 | 0, y[(y[f >> 2] + (y[X >> 2] << 4) | 0) >> 2] = y[y[l >> 2] >> 2], y[(y[f >> 2] + (y[X >> 2] << 4) + 12 | 0) >> 2] = y[y[l >> 2] + 36 >> 2], y[(y[f >> 2] + (y[X >> 2] << 4) + 4 | 0) >> 2] = y[y[l >> 2] + 28 >> 2], y[(y[f >> 2] + (y[X >> 2] << 4) + 8 | 0) >> 2] = y[y[l >> 2] + 32 >> 2], y[X >> 2] = y[X >> 2] + 1 | 0, X = y[b + 28 >> 2]
            }
        } while (0);
        Of(y[b >> 2], X + 1 | 0);
        b = o
    } else {
        b = 1
    }
    return b
}
Kf.X = 1;

function Mf(b) {
    for (var c = b | 0, d = b + 44 | 0, f = 0, g = y[c >> 2];;) {
        var e = g + f * 40 + 20 | 0;
        (y[e >> 2] | 0) != 0 && (y[e >> 2] = 0, g = y[c >> 2], (y[g + f * 40 + 24 >> 2] | 0) == 0 && (y[d >> 2] = y[d >> 2] - 1 | 0));
        f = f + 1 | 0;
        if ((f | 0) == 16) {
            break
        }
    }
    for (;;) {
        if ((Nf(b) | 0) != 0) {
            break
        }
    }
    y[b + 40 >> 2] = 0;
    y[b + 36 >> 2] = 65535;
    y[b + 48 >> 2] = 0
}

function Lf(b, c, d, f) {
    var g = F[b + 36 >> 2],
        g = (g | 0) == 65535 | g >>> 0 < f >>> 0;
    do {
        if (g) {
            var e = 1
        } else {
            var i = F[b + 24 >> 2],
                e = b | 0,
                h = 0;
            a: for (;;) {
                if (h >>> 0 >= i >>> 0) {
                    break
                }
                var k = F[e >> 2],
                    l = k + h * 40 + 20 | 0,
                    j = (y[l >> 2] | 0) == 3;
                do {
                    if (j && (y[k + h * 40 + 8 >> 2] | 0) == (f | 0)) {
                        y[l >> 2] = 0;
                        i = b + 40 | 0;
                        y[i >> 2] = y[i >> 2] - 1 | 0;
                        if ((y[y[e >> 2] + h * 40 + 24 >> 2] | 0) != 0) {
                            break a
                        }
                        h = b + 44 | 0;
                        y[h >> 2] = y[h >> 2] - 1 | 0;
                        break a
                    }
                } while (0);
                h = h + 1 | 0
            }
            h = Df(b, c - d | 0, 1);
            (h | 0) < 0 ? e = 1 : (i = y[e >> 2] + h * 40 + 20 | 0, F[i >> 2] >>> 0 > 1 ? (y[i >> 2] = 3, y[(y[e >> 2] + h * 40 + 8 | 0) >> 2] = f, e = 0) : e = 1)
        }
    } while (0);
    return e
}
Lf.X = 1;

function Nf(b) {
    if ((y[b + 56 >> 2] | 0) == 0) {
        var c;
        c = y[b >> 2];
        for (var d = 2147483647, f = 0, g = 0;;) {
            var e = c + f * 40 | 0,
                i = f + 1 | 0;
            (y[c + f * 40 + 24 >> 2] | 0) == 0 ? e = g : (f = y[c + f * 40 + 16 >> 2], (f | 0) < (d | 0) ? d = f : e = g);
            if (i >>> 0 > y[b + 28 >> 2] >>> 0) {
                break
            }
            f = i;
            g = e
        }
        c = e;
        (c | 0) == 0 ? b = 1 : (i = b + 16 | 0, d = b + 12 | 0, y[(y[d >> 2] + (y[i >> 2] << 4) | 0) >> 2] = y[c >> 2], y[(y[d >> 2] + (y[i >> 2] << 4) + 12 | 0) >> 2] = y[c + 36 >> 2], y[(y[d >> 2] + (y[i >> 2] << 4) + 4 | 0) >> 2] = y[c + 28 >> 2], y[(y[d >> 2] + (y[i >> 2] << 4) + 8 | 0) >> 2] = y[c + 32 >> 2], y[i >> 2] = y[i >> 2] + 1 | 0, y[(c + 24 | 0) >> 2] = 0, (y[c + 20 >> 2] | 0) == 0 && (b = b + 44 | 0, y[b >> 2] = y[b >> 2] - 1 | 0), b = 0)
    } else {
        b = 1
    }
    return b
}
Nf.X = 1;

function Of(b, c) {
    var d = m;
    m += 40;
    for (var f = 7, g = 0;;) {
        var e = f >>> 0 < c >>> 0;
        a: do {
            if (e) {
                for (var i = c - f | 0, h = -f | 0, k = 0;;) {
                    for (var l = f + k | 0, j = (b + l * 40 | 0) >> 2, n = d >> 2, p = j + 10; j < p; j++, n++) {
                        y[n] = y[j]
                    }
                    for (var r = 0;;) {
                        var o = r * h | 0,
                            j = b + (k + o) * 40 | 0,
                            n = l + o | 0,
                            o = b + n * 40 | 0;
                        if (n >>> 0 < f >>> 0) {
                            break
                        }
                        if ((Pf(j, d) | 0) <= 0) {
                            break
                        }
                        j >>= 2;
                        n = o >> 2;
                        for (p = j + 10; j < p; j++, n++) {
                            y[n] = y[j]
                        }
                        r = r + 1 | 0
                    }
                    j = d >> 2;
                    n = o >> 2;
                    for (p = j + 10; j < p; j++, n++) {
                        y[n] = y[j]
                    }
                    k = k + 1 | 0;
                    if ((k | 0) == (i | 0)) {
                        break a
                    }
                }
            }
        } while (0);
        g = g + 1 | 0;
        if ((g | 0) == 3) {
            break
        }
        f >>>= 1
    }
    m = d
}

function Fe(b, c, d, f, g, e) {
    y[b + 36 >> 2] = 65535;
    var i = f >>> 0 > 1 ? f : 1;
    y[b + 24 >> 2] = i;
    f = b + 28 | 0;
    y[f >> 2] = (e | 0) == 0 ? d : i;
    y[b + 32 >> 2] = g;
    y[b + 56 >> 2] = e;
    y[b + 44 >> 2] = 0;
    y[b + 40 >> 2] = 0;
    y[b + 48 >> 2] = 0;
    d = jc(680);
    g = b | 0;
    y[g >> 2] = d;
    e = (d | 0) == 0;
    a: do {
        if (e) {
            i = 65535
        } else {
            Pc(d, 0, 680);
            for (var i = c * 384 | 47, h = 0;;) {
                if (h >>> 0 >= (y[f >> 2] + 1 | 0) >>> 0) {
                    break
                }
                var k = jc(i);
                y[(y[g >> 2] + h * 40 + 4 | 0) >> 2] = k;
                var k = F[g >> 2],
                    l = y[k + h * 40 + 4 >> 2];
                if ((l | 0) == 0) {
                    i = 65535;
                    break a
                }
                y[k + h * 40 >> 2] = l + (-l & 15) | 0;
                h = h + 1 | 0
            }
            h = jc(68);
            i = b + 4 | 0;
            y[i >> 2] = h;
            h = jc((y[f >> 2] << 4) + 16 | 0);
            y[b + 12 >> 2] = h;
            i = y[i >> 2];
            (i | 0) == 0 | (h | 0) == 0 ? i = 65535 : (Pc(i, 0, 68), y[b + 20 >> 2] = 0, i = y[b + 16 >> 2] = 0)
        }
    } while (0);
    return i
}
Fe.X = 1;

function Qf(b) {
    var c = b + 40 | 0,
        d = (y[c >> 2] | 0) == 0;
    a: do {
        if (!d) {
            for (var f = b | 0, g = b + 4 | 0, e = 0;;) {
                var i = e + 1 | 0;
                y[(y[g >> 2] + (e << 2) | 0) >> 2] = y[f >> 2] + e * 40 | 0;
                if (i >>> 0 >= F[c >> 2] >>> 0) {
                    break a
                }
                e = i
            }
        }
    } while (0)
}

function Pf(b, c) {
    var d = F[b + 20 >> 2],
        f = (d | 0) == 0,
        g = F[c + 20 >> 2],
        e = (g | 0) == 0;
    a: do {
        if (f) {
            if (e) {
                var i = (y[c + 24 >> 2] | 0) == 0;
                if ((y[b + 24 >> 2] | 0) == 0) {
                    if (!i) {
                        i = 1;
                        break
                    }
                } else {
                    if (i) {
                        i = -1;
                        break
                    }
                }
                i = 0
            } else {
                i = 1
            }
        } else {
            if (e) {
                i = -1
            } else {
                do {
                    if (d == 0) {
                        i = 1;
                        break a
                    } else {
                        if ((d == 1 || d == 2) && (g - 1 | 0) >>> 0 < 2) {
                            d = y[b + 8 >> 2];
                            f = y[c + 8 >> 2];
                            if ((d | 0) > (f | 0)) {
                                i = -1;
                                break a
                            }
                            i = (d | 0) < (f | 0) & 1;
                            break a
                        }
                    }
                } while (0);
                if ((d - 1 | 0) >>> 0 < 2) {
                    i = -1
                } else {
                    if ((g - 1 | 0) >>> 0 < 2) {
                        i = 1
                    } else {
                        var i = y[b + 8 >> 2],
                            h = y[c + 8 >> 2],
                            i = (i | 0) > (h | 0) ? 1 : ((i | 0) < (h | 0)) << 31 >> 31
                    }
                }
            }
        }
    } while (0);
    return i
}
Pf.X = 1;

function rd(b, c) {
    for (var d = y[b + 4 >> 2], f = y[b + 12 >> 2], g = y[b + 16 >> 2], e = y[b + 20 >> 2], i = d << 4, h = 0;;) {
        var k = i * h | 0,
            l = f + (k | 4) | 0,
            j = f + (k | 8) | 0,
            n = f + (k | 12) | 0,
            p = h << 4,
            r = c + (p | 8) | 0,
            o = c + (p | 12) | 0,
            t = y[c + (p | 4) >> 2];
        y[(f + k | 0) >> 2] = y[c + p >> 2];
        y[l >> 2] = t;
        k = y[o >> 2];
        y[j >> 2] = y[r >> 2];
        y[n >> 2] = k;
        h = h + 1 | 0;
        if ((h | 0) == 16) {
            break
        }
    }
    f = d << 3;
    h = y[c + 260 >> 2];
    y[g >> 2] = y[c + 256 >> 2];
    y[(g + 4 | 0) >> 2] = h;
    h = f | 4;
    j = y[c + 268 >> 2];
    y[(g + f | 0) >> 2] = y[c + 264 >> 2];
    y[(g + h | 0) >> 2] = j;
    j = i | 4;
    n = y[c + 276 >> 2];
    y[(g + i | 0) >> 2] = y[c + 272 >> 2];
    y[(g + j | 0) >> 2] = n;
    n = d * 24 | 0;
    r = n | 4;
    k = y[c + 284 >> 2];
    y[(g + n | 0) >> 2] = y[c + 280 >> 2];
    y[(g + r | 0) >> 2] = k;
    k = d << 5;
    l = k | 4;
    p = y[c + 292 >> 2];
    y[(g + k | 0) >> 2] = y[c + 288 >> 2];
    y[(g + l | 0) >> 2] = p;
    p = d * 40 | 0;
    o = p | 4;
    t = y[c + 300 >> 2];
    y[(g + p | 0) >> 2] = y[c + 296 >> 2];
    y[(g + o | 0) >> 2] = t;
    var t = d * 48 | 0,
        s = t | 4,
        u = y[c + 308 >> 2];
    y[(g + t | 0) >> 2] = y[c + 304 >> 2];
    y[(g + s | 0) >> 2] = u;
    var d = d * 56 | 0,
        u = d | 4,
        w = y[c + 316 >> 2];
    y[(g + d | 0) >> 2] = y[c + 312 >> 2];
    y[(g + u | 0) >> 2] = w;
    g = y[c + 324 >> 2];
    y[e >> 2] = y[c + 320 >> 2];
    y[(e + 4 | 0) >> 2] = g;
    g = y[c + 332 >> 2];
    y[(e + f | 0) >> 2] = y[c + 328 >> 2];
    y[(e + h | 0) >> 2] = g;
    g = y[c + 340 >> 2];
    y[(e + i | 0) >> 2] = y[c + 336 >> 2];
    y[(e + j | 0) >> 2] = g;
    i = y[c + 348 >> 2];
    y[(e + n | 0) >> 2] = y[c + 344 >> 2];
    y[(e + r | 0) >> 2] = i;
    i = y[c + 356 >> 2];
    y[(e + k | 0) >> 2] = y[c + 352 >> 2];
    y[(e + l | 0) >> 2] = i;
    i = y[c + 364 >> 2];
    y[(e + p | 0) >> 2] = y[c + 360 >> 2];
    y[(e + o | 0) >> 2] = i;
    i = y[c + 372 >> 2];
    y[(e + t | 0) >> 2] = y[c + 368 >> 2];
    y[(e + s | 0) >> 2] = i;
    i = y[c + 380 >> 2];
    y[(e + d | 0) >> 2] = y[c + 376 >> 2];
    y[(e + u | 0) >> 2] = i
}
rd.X = 1;

function Ee(b) {
    var c = b | 0,
        d = F[c >> 2],
        f = (d | 0) == 0;
    a: do {
        if (f) {
            var g = 0
        } else {
            var e = b + 28 | 0;
            if ((y[e >> 2] | 0) == -1) {
                g = d
            } else {
                for (var i = 0, h = d;;) {
                    var k = i + 1 | 0;
                    Ae(y[h + i * 40 + 4 >> 2]);
                    y[(y[c >> 2] + i * 40 + 4 | 0) >> 2] = 0;
                    h = y[c >> 2];
                    if (k >>> 0 >= (y[e >> 2] + 1 | 0) >>> 0) {
                        g = h;
                        break a
                    }
                    i = k
                }
            }
        }
    } while (0);
    Ae(g);
    y[c >> 2] = 0;
    c = b + 4 | 0;
    Ae(y[c >> 2]);
    y[c >> 2] = 0;
    b = b + 12 | 0;
    Ae(y[b >> 2]);
    y[b >> 2] = 0
}

function Rf(b, c, d, f) {
    var g, e = b + 16 | 0;
    y[e >> 2] = 0;
    y[b + 20 >> 2] = 0;
    f = (f | 0) == 0;
    a: do {
        if (f) {
            var i = 0
        } else {
            var h = b + 48 | 0,
                k = F[h >> 2],
                l = (k | 0) == (c | 0);
            do {
                if (l) {
                    g = 17
                } else {
                    var j = b + 32 | 0,
                        n = ((k + 1 | 0) >>> 0) % (F[j >> 2] >>> 0);
                    if ((n | 0) == (c | 0)) {
                        g = 17
                    } else {
                        g = b + 28 | 0;
                        for (var p = b | 0, r = y[y[p >> 2] + y[g >> 2] * 40 >> 2], o = b + 44 | 0, t = b + 40 | 0;;) {
                            Cf(b, n);
                            if ((If(b) | 0) != 0) {
                                i = 1;
                                break a
                            }
                            var s = F[g >> 2],
                                u = F[o >> 2] >>> 0 < s >>> 0;
                            b: do {
                                if (u) {
                                    var w = s
                                } else {
                                    for (;;) {
                                        Nf(b);
                                        var v = F[g >> 2];
                                        if (F[o >> 2] >>> 0 < v >>> 0) {
                                            w = v;
                                            break b
                                        }
                                    }
                                }
                            } while (0);
                            y[(y[p >> 2] + w * 40 + 20 | 0) >> 2] = 1;
                            y[(y[p >> 2] + y[g >> 2] * 40 + 12 | 0) >> 2] = n;
                            y[(y[p >> 2] + y[g >> 2] * 40 + 8 | 0) >> 2] = n;
                            y[(y[p >> 2] + y[g >> 2] * 40 + 16 | 0) >> 2] = 0;
                            y[(y[p >> 2] + y[g >> 2] * 40 + 24 | 0) >> 2] = 0;
                            y[o >> 2] = y[o >> 2] + 1 | 0;
                            y[t >> 2] = y[t >> 2] + 1 | 0;
                            Of(y[p >> 2], y[g >> 2] + 1 | 0);
                            n = ((n + 1 | 0) >>> 0) % (F[j >> 2] >>> 0);
                            if ((n | 0) == (c | 0)) {
                                break
                            }
                        }
                        j = F[e >> 2];
                        o = (j | 0) == 0;
                        b: do {
                            if (!o) {
                                t = b + 12 | 0;
                                for (n = 0;;) {
                                    if (n >>> 0 >= j >>> 0) {
                                        break b
                                    }
                                    var z = F[g >> 2],
                                        B = F[p >> 2],
                                        D = F[B + z * 40 >> 2];
                                    if ((y[y[t >> 2] + (n << 4) >> 2] | 0) == (D | 0)) {
                                        var C = 0;
                                        break
                                    }
                                    n = n + 1 | 0
                                }
                                for (;;) {
                                    if (C >>> 0 >= z >>> 0) {
                                        break b
                                    }
                                    var E = B + C * 40 | 0;
                                    if ((y[E >> 2] | 0) == (r | 0)) {
                                        break
                                    }
                                    C = C + 1 | 0
                                }
                                y[E >> 2] = D;
                                y[(y[p >> 2] + y[g >> 2] * 40 | 0) >> 2] = r
                            }
                        } while (0);
                        if ((d | 0) != 0) {
                            g = 21
                        } else {
                            var G = y[h >> 2];
                            g = 22
                        }
                    }
                }
            } while (0);
            do {
                if (g == 17) {
                    if ((d | 0) == 0) {
                        G = k, g = 22
                    } else {
                        if (l) {
                            i = 1;
                            break a
                        }
                        g = 21
                    }
                }
            } while (0);
            g == 22 ? ((G | 0) != (c | 0) && (i = F[b + 32 >> 2], y[h >> 2] = ((c - 1 + i | 0) >>> 0) % (i >>> 0)), i = 0) : g == 21 && (y[h >> 2] = c, i = 0)
        }
    } while (0);
    return i
}
Rf.X = 1;

function jf(b, c, d, f) {
    for (var g = F[b + 4 >> 2], e = y[b + 8 >> 2] * g | 0, i = (c >>> 0) % (g >>> 0), h = F[b >> 2], k = c - i | 0, l = e << 8, j = i << 3, n = g << 4, p = (k << 8) + (i << 4) | 0, r = g << 2 & 1073741820, o = r << 1, t = o + r | 0, s = c << 8, u = i * 240 | 0, w = (s | 1) - u | 0, v = (s | 2) - u | 0, z = (s | 3) - u | 0, B = s - u | 0, D = 0;;) {
        var C = y[$e + (D << 2) >> 2],
            E = y[Ze + (D << 2) >> 2],
            G = E << 4,
            H = G + C | 0,
            K = (y[f + (D << 6) >> 2] | 0) == 16777215;
        a: do {
            if (K) {
                var L = h + (p + C + E * n) | 0,
                    N = y[H + (d + 16) >> 2],
                    O = H + (d + 32) | 0;
                y[L >> 2] = y[d + H >> 2];
                y[(L + (r << 2) | 0) >> 2] = N;
                var R = y[H + (d + 48) >> 2];
                y[(L + (o << 2) | 0) >> 2] = y[O >> 2];
                y[(L + (t << 2) | 0) >> 2] = R
            } else {
                for (var U = n * E | 0, Y = w + C + U | 0, X = v + C + U | 0, ba = z + C + U | 0, $ = B + C + U | 0, ja = G + (C + 1) | 0, sa = G + (C + 2) | 0, Ea = G + (C + 3) | 0, Xa = C + G | 0, ea = 0;;) {
                    var fa = ea << 2,
                        va = f + (D << 6) + ((fa | 3) << 2) | 0,
                        ob = f + (D << 6) + ((fa | 2) << 2) | 0,
                        wa = n * ea | 0,
                        pb = h + (Y + wa) | 0,
                        gb = h + (X + wa) | 0,
                        Ib = h + (ba + wa) | 0,
                        Fa = ea << 4,
                        qb = d + (sa + Fa) | 0,
                        Ya = d + (Ea + Fa) | 0,
                        Na = A[d + (ja + Fa) | 0] & 255,
                        za = y[f + (D << 6) + ((fa | 1) << 2) >> 2];
                    q[h + ($ + wa) | 0] = q[Q.a + (y[f + (D << 6) + (fa << 2) >> 2] + 512 + (A[d + (Xa + Fa) | 0] & 255)) | 0];
                    var da = A[qb] & 255,
                        Oa = y[ob >> 2];
                    q[pb] = q[Q.a + ((Na | 512) + za) | 0];
                    var Za = A[Ya] & 255,
                        Aa = y[va >> 2];
                    q[gb] = q[Q.a + (da + (Oa + 512)) | 0];
                    q[Ib] = q[Q.a + (Za + (Aa + 512)) | 0];
                    var hb = ea + 1 | 0;
                    if ((hb | 0) == 4) {
                        break a
                    }
                    ea = hb
                }
            }
        } while (0);
        var Ga = D + 1 | 0;
        if ((Ga | 0) == 16) {
            break
        }
        D = Ga
    }
    for (var Pa = e << 6, $a = g << 3 & 2147483640, Ab = d + 256 | 0, cb = d + 320 | 0, rb = l + j + (k << 6) | 0, Qa = $a >>> 2, pa = $a >>> 1, ia = pa + Qa | 0, qa = l + (c << 6) | 0, Ra = i * 56 | 0, ra = (qa | 1) - Ra | 0, ib = (qa | 2) - Ra | 0, sb = (qa | 3) - Ra | 0, jb = qa - Ra | 0, db = 0;;) {
        var Sa = db + 16 | 0,
            kb = Sa & 3,
            ta = F[$e + (kb << 2) >> 2],
            Bb = F[Ze + (kb << 2) >> 2],
            Ha = Sa >>> 0 > 19,
            ya = Ha ? cb : Ab,
            xa = Ha ? Pa : 0,
            Ba = Bb << 3,
            Ca = Ba + ta | 0,
            Ta = (y[f + (Sa << 6) >> 2] | 0) == 16777215;
        a: do {
            if (Ta) {
                var lb = h + (rb + xa + ta + Bb * $a) | 0,
                    Jb = y[Ca + (ya + 8) >> 2],
                    eb = Ca + (ya + 16) | 0;
                y[lb >> 2] = y[ya + Ca >> 2];
                y[(lb + (Qa << 2) | 0) >> 2] = Jb;
                var Da = y[Ca + (ya + 24) >> 2];
                y[(lb + (pa << 2) | 0) >> 2] = y[eb >> 2];
                y[(lb + (ia << 2) | 0) >> 2] = Da
            } else {
                for (var Ia = $a * Bb | 0, mb = ra + xa + ta + Ia | 0, Ua = ib + xa + ta + Ia | 0, Ja = sb + xa + ta + Ia | 0, Ka = jb + xa + ta + Ia | 0, Cb = Ba + (ta + 1) | 0, Db = Ba + (ta + 2) | 0, Eb = Ba + (ta + 3) | 0, tb = ta + Ba | 0, Va = 0;;) {
                    var fb = Va << 2,
                        ub = f + (Sa << 6) + ((fb | 3) << 2) | 0,
                        nb = f + (Sa << 6) + ((fb | 2) << 2) | 0,
                        Fb = $a * Va | 0,
                        Qb = h + (mb + Fb) | 0,
                        wb = h + (Ua + Fb) | 0,
                        Lb = h + (Ja + Fb) | 0,
                        Rb = Va << 3,
                        Wb = ya + (Db + Rb) | 0,
                        Tb = ya + (Eb + Rb) | 0,
                        Xb = A[ya + (Cb + Rb) | 0] & 255,
                        Vb = y[f + (Sa << 6) + ((fb | 1) << 2) >> 2];
                    q[h + (Ka + Fb) | 0] = q[Q.a + (y[f + (Sa << 6) + (fb << 2) >> 2] + 512 + (A[ya + (tb + Rb) | 0] & 255)) | 0];
                    var Yb = A[Wb] & 255,
                        fc = y[nb >> 2];
                    q[Qb] = q[Q.a + ((Xb | 512) + Vb) | 0];
                    var ga = A[Tb] & 255,
                        pc = y[ub >> 2];
                    q[wb] = q[Q.a + (Yb + (fc + 512)) | 0];
                    q[Lb] = q[Q.a + (ga + (pc + 512)) | 0];
                    var Ub = Va + 1 | 0;
                    if ((Ub | 0) == 4) {
                        break a
                    }
                    Va = Ub
                }
            }
        } while (0);
        var Fc = db + 1 | 0;
        if ((Fc | 0) == 8) {
            break
        }
        db = Fc
    }
}
jf.X = 1;

function Sf(b, c) {
    var d = m;
    m += 164;
    var f = d + 128,
        g = y[b + 4 >> 2],
        e = b | 0,
        i = b + 8 | 0,
        h = y[i >> 2],
        k = h * g | 0,
        h = (h | 0) == 0;
    a: do {
        if (!h) {
            for (var l = d | 0, j = f | 0, n = g << 4, p = k << 8, r = k << 6, o = g << 3, t = 0, s = 0, u = 0;;) {
                var w = c + u * 216 | 0,
                    v = c + u * 216 + 24 | 0,
                    z, B = y[w + 8 >> 2];
                if ((B | 0) == 1) {
                    B = 0
                } else {
                    z = y[w + 200 >> 2];
                    z = (z | 0) == 0 ? 1 : (B | 0) == 2 && ((y[w + 4 >> 2] | 0) != (y[z + 4 >> 2] | 0) & 1 | 0) != 0 ? 1 : 5;
                    var D = y[w + 204 >> 2],
                        B = (D | 0) == 0 ? z : (B | 0) == 2 && ((y[w + 4 >> 2] | 0) != (y[D + 4 >> 2] | 0) & 1 | 0) != 0 ? z : z | 2
                }
                z = B;
                (z | 0) != 0 && (Tf(w, l, z) | 0) != 0 && (Uf(j, w, z), B = t * g | 0, Vf(y[e >> 2] + ((B << 8) + (s << 4)) | 0, l, j, n), Wf(j, w, z, y[v >> 2]), w = y[e >> 2], v = (s << 3) + p + (B << 6) | 0, Xf(w + v | 0, w + (v + r) | 0, l, j, o));
                s = s + 1 | 0;
                w = (s | 0) == (g | 0);
                t = (w & 1) + t | 0;
                s = w ? 0 : s;
                if (t >>> 0 >= F[i >> 2] >>> 0) {
                    break a
                }
                u = u + 1 | 0
            }
        }
    } while (0);
    m = d
}
Sf.X = 1;

function Tf(b, c, d) {
    var f = (d & 2 | 0) == 0;
    a: do {
        if (f) {
            y[c + 24 >> 2] = 0;
            y[c + 16 >> 2] = 0;
            y[c + 8 >> 2] = 0;
            var g = y[c >> 2] = 0
        } else {
            var e = F[b >> 2] >>> 0 > 5;
            do {
                if (!e) {
                    var g = b + 204 | 0,
                        i = F[g >> 2];
                    if (F[i >> 2] >>> 0 <= 5) {
                        f = Yf(b, i, 0, 10);
                        y[c >> 2] = f;
                        e = Yf(b, y[g >> 2], 1, 11);
                        y[c + 8 >> 2] = e;
                        i = Yf(b, y[g >> 2], 4, 14);
                        y[c + 16 >> 2] = i;
                        g = Yf(b, y[g >> 2], 5, 15);
                        y[c + 24 >> 2] = g;
                        if ((f | e | 0) == 0 && (i | g | 0) == 0) {
                            g = 0;
                            break a
                        }
                        g = 1;
                        break a
                    }
                }
            } while (0);
            y[c + 24 >> 2] = 4;
            y[c + 16 >> 2] = 4;
            y[c + 8 >> 2] = 4;
            y[c >> 2] = 4;
            g = 1
        }
    } while (0);
    e = (d & 4 | 0) == 0;
    a: do {
        if (e) {
            y[c + 100 >> 2] = 0, y[c + 68 >> 2] = 0, y[c + 36 >> 2] = 0, y[c + 4 >> 2] = 0, d = g, f = b | 0
        } else {
            f = b | 0;
            i = F[f >> 2] >>> 0 > 5;
            do {
                if (!i) {
                    var d = b + 200 | 0,
                        h = F[d >> 2];
                    if (F[h >> 2] >>> 0 <= 5) {
                        e = Yf(b, h, 0, 5);
                        y[c + 4 >> 2] = e;
                        i = Yf(b, y[d >> 2], 2, 7);
                        y[c + 36 >> 2] = i;
                        h = Yf(b, y[d >> 2], 8, 13);
                        y[c + 68 >> 2] = h;
                        d = Yf(b, y[d >> 2], 10, 15);
                        y[c + 100 >> 2] = d;
                        if ((g | 0) != 0) {
                            d = g;
                            break a
                        }
                        if ((e | i | 0) == 0 && (h | d | 0) == 0) {
                            d = g;
                            break a
                        }
                        d = 1;
                        break a
                    }
                }
            } while (0);
            y[c + 100 >> 2] = 4;
            y[c + 68 >> 2] = 4;
            y[c + 36 >> 2] = 4;
            y[c + 4 >> 2] = 4;
            d = 1
        }
    } while (0);
    g = F[f >> 2];
    f = g >>> 0 > 5;
    a: do {
        if (f) {
            y[c + 120 >> 2] = 3, y[c + 112 >> 2] = 3, y[c + 104 >> 2] = 3, y[c + 96 >> 2] = 3, y[c + 88 >> 2] = 3, y[c + 80 >> 2] = 3, y[c + 72 >> 2] = 3, y[c + 64 >> 2] = 3, y[c + 56 >> 2] = 3, y[c + 48 >> 2] = 3, y[c + 40 >> 2] = 3, y[c + 32 >> 2] = 3, y[c + 124 >> 2] = 3, y[c + 116 >> 2] = 3, y[c + 108 >> 2] = 3, y[c + 92 >> 2] = 3, y[c + 84 >> 2] = 3, y[c + 76 >> 2] = 3, y[c + 60 >> 2] = 3, y[c + 52 >> 2] = 3, y[c + 44 >> 2] = 3, y[c + 28 >> 2] = 3, y[c + 20 >> 2] = 3, y[c + 12 >> 2] = 3, e = 1
        } else {
            if ((cd(g) | 0) == 1) {
                Zf(b, c)
            } else {
                if (g == 2) {
                    var k = b + 32 | 0;
                    y[c + 32 >> 2] = x[k >> 1] << 16 >> 16 == 0 ? x[b + 28 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    var l = b + 34 | 0;
                    y[c + 40 >> 2] = x[l >> 1] << 16 >> 16 == 0 ? x[b + 30 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    var j = b + 40 | 0;
                    y[c + 48 >> 2] = x[j >> 1] << 16 >> 16 == 0 ? x[b + 36 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    var n = b + 42 | 0;
                    y[c + 56 >> 2] = x[n >> 1] << 16 >> 16 == 0 ? x[b + 38 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    e = b + 48 | 0;
                    y[c + 96 >> 2] = x[e >> 1] << 16 >> 16 == 0 ? x[b + 44 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    i = b + 50 | 0;
                    y[c + 104 >> 2] = x[i >> 1] << 16 >> 16 == 0 ? x[b + 46 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    h = b + 56 | 0;
                    y[c + 112 >> 2] = x[h >> 1] << 16 >> 16 == 0 ? x[b + 52 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    var p = b + 58 | 0;
                    y[c + 120 >> 2] = x[p >> 1] << 16 >> 16 == 0 ? x[b + 54 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    var r = $f(b, 8, 2);
                    y[c + 64 >> 2] = r;
                    r = $f(b, 9, 3);
                    y[c + 72 >> 2] = r;
                    r = $f(b, 12, 6);
                    y[c + 80 >> 2] = r;
                    r = $f(b, 13, 7);
                    y[c + 88 >> 2] = r;
                    r = b + 30 | 0;
                    y[c + 12 >> 2] = x[r >> 1] << 16 >> 16 == 0 ? x[b + 28 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    var o = b + 36 | 0;
                    y[c + 20 >> 2] = x[o >> 1] << 16 >> 16 == 0 ? x[r >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    y[c + 28 >> 2] = x[b + 38 >> 1] << 16 >> 16 == 0 ? x[o >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    y[c + 44 >> 2] = x[l >> 1] << 16 >> 16 == 0 ? x[k >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    y[c + 52 >> 2] = x[j >> 1] << 16 >> 16 == 0 ? x[l >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    y[c + 60 >> 2] = x[n >> 1] << 16 >> 16 == 0 ? x[j >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    k = b + 46 | 0;
                    y[c + 76 >> 2] = x[k >> 1] << 16 >> 16 == 0 ? x[b + 44 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    l = b + 52 | 0;
                    y[c + 84 >> 2] = x[l >> 1] << 16 >> 16 == 0 ? x[k >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    y[c + 92 >> 2] = x[b + 54 >> 1] << 16 >> 16 == 0 ? x[l >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    y[c + 108 >> 2] = x[i >> 1] << 16 >> 16 == 0 ? x[e >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    y[c + 116 >> 2] = x[h >> 1] << 16 >> 16 == 0 ? x[i >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                    y[c + 124 >> 2] = x[p >> 1] << 16 >> 16 == 0 ? x[h >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2
                } else {
                    if (g == 3) {
                        e = b + 32 | 0;
                        y[c + 32 >> 2] = x[e >> 1] << 16 >> 16 == 0 ? x[b + 28 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        i = b + 34 | 0;
                        y[c + 40 >> 2] = x[i >> 1] << 16 >> 16 == 0 ? x[b + 30 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        h = b + 40 | 0;
                        y[c + 48 >> 2] = x[h >> 1] << 16 >> 16 == 0 ? x[b + 36 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        p = b + 42 | 0;
                        y[c + 56 >> 2] = x[p >> 1] << 16 >> 16 == 0 ? x[b + 38 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        k = b + 44 | 0;
                        y[c + 64 >> 2] = x[k >> 1] << 16 >> 16 == 0 ? x[e >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        l = b + 46 | 0;
                        y[c + 72 >> 2] = x[l >> 1] << 16 >> 16 == 0 ? x[i >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        j = b + 52 | 0;
                        y[c + 80 >> 2] = x[j >> 1] << 16 >> 16 == 0 ? x[h >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        n = b + 54 | 0;
                        y[c + 88 >> 2] = x[n >> 1] << 16 >> 16 == 0 ? x[p >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        r = b + 48 | 0;
                        y[c + 96 >> 2] = x[r >> 1] << 16 >> 16 == 0 ? x[k >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        o = b + 50 | 0;
                        y[c + 104 >> 2] = x[o >> 1] << 16 >> 16 == 0 ? x[l >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        var t = b + 56 | 0;
                        y[c + 112 >> 2] = x[t >> 1] << 16 >> 16 == 0 ? x[j >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        var s = b + 58 | 0;
                        y[c + 120 >> 2] = x[s >> 1] << 16 >> 16 == 0 ? x[n >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        y[c + 12 >> 2] = x[b + 30 >> 1] << 16 >> 16 == 0 ? x[b + 28 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        y[c + 28 >> 2] = x[b + 38 >> 1] << 16 >> 16 == 0 ? x[b + 36 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        y[c + 44 >> 2] = x[i >> 1] << 16 >> 16 == 0 ? x[e >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        y[c + 60 >> 2] = x[p >> 1] << 16 >> 16 == 0 ? x[h >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        y[c + 76 >> 2] = x[l >> 1] << 16 >> 16 == 0 ? x[k >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        y[c + 92 >> 2] = x[n >> 1] << 16 >> 16 == 0 ? x[j >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        y[c + 108 >> 2] = x[o >> 1] << 16 >> 16 == 0 ? x[r >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        y[c + 124 >> 2] = x[s >> 1] << 16 >> 16 == 0 ? x[t >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
                        e = $f(b, 4, 1);
                        y[c + 20 >> 2] = e;
                        e = $f(b, 6, 3);
                        y[c + 52 >> 2] = e;
                        e = $f(b, 12, 9);
                        y[c + 84 >> 2] = e;
                        e = $f(b, 14, 11);
                        y[c + 116 >> 2] = e
                    } else {
                        e = $f(b, 2, 0), y[c + 32 >> 2] = e, e = $f(b, 3, 1), y[c + 40 >> 2] = e, e = $f(b, 6, 4), y[c + 48 >> 2] = e, e = $f(b, 7, 5), y[c + 56 >> 2] = e, e = $f(b, 8, 2), y[c + 64 >> 2] = e, e = $f(b, 9, 3), y[c + 72 >> 2] = e, e = $f(b, 12, 6), y[c + 80 >> 2] = e, e = $f(b, 13, 7), y[c + 88 >> 2] = e, e = $f(b, 10, 8), y[c + 96 >> 2] = e, e = $f(b, 11, 9), y[c + 104 >> 2] = e, e = $f(b, 14, 12), y[c + 112 >> 2] = e, e = $f(b, 15, 13), y[c + 120 >> 2] = e, e = $f(b, 1, 0), y[c + 12 >> 2] = e, e = $f(b, 4, 1), y[c + 20 >> 2] = e, e = $f(b, 5, 4), y[c + 28 >> 2] = e, e = $f(b, 3, 2), y[c + 44 >> 2] = e, e = $f(b, 6, 3), y[c + 52 >> 2] = e, e = $f(b, 7, 6), y[c + 60 >> 2] = e, e = $f(b, 9, 8), y[c + 76 >> 2] = e, e = $f(b, 12, 9), y[c + 84 >> 2] = e, e = $f(b, 13, 12), y[c + 92 >> 2] = e, e = $f(b, 11, 10), y[c + 108 >> 2] = e, e = $f(b, 14, 11), y[c + 116 >> 2] = e, e = $f(b, 15, 14), y[c + 124 >> 2] = e
                    }
                }
            } if ((d | 0) != 0) {
                e = d
            } else {
                e = (y[c + 32 >> 2] | 0) == 0;
                do {
                    if (e && (y[c + 40 >> 2] | 0) == 0 && (y[c + 48 >> 2] | 0) == 0 && (y[c + 56 >> 2] | 0) == 0 && (y[c + 64 >> 2] | 0) == 0 && (y[c + 72 >> 2] | 0) == 0 && (y[c + 80 >> 2] | 0) == 0 && (y[c + 88 >> 2] | 0) == 0 && (y[c + 96 >> 2] | 0) == 0 && (y[c + 104 >> 2] | 0) == 0 && (y[c + 112 >> 2] | 0) == 0 && (y[c + 120 >> 2] | 0) == 0 && (y[c + 12 >> 2] | 0) == 0 && (y[c + 20 >> 2] | 0) == 0 && (y[c + 28 >> 2] | 0) == 0 && (y[c + 44 >> 2] | 0) == 0 && (y[c + 52 >> 2] | 0) == 0 && (y[c + 60 >> 2] | 0) == 0 && (y[c + 76 >> 2] | 0) == 0 && (y[c + 84 >> 2] | 0) == 0 && (y[c + 92 >> 2] | 0) == 0 && (y[c + 108 >> 2] | 0) == 0 && (y[c + 116 >> 2] | 0) == 0 && (y[c + 124 >> 2] | 0) == 0) {
                        e = d;
                        break a
                    }
                } while (0);
                e = 1
            }
        }
    } while (0);
    return e
}
Tf.X = 1;

function Zf(b, c) {
    var d = b + 32 | 0;
    y[c + 32 >> 2] = x[d >> 1] << 16 >> 16 == 0 ? x[b + 28 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    var f = b + 34 | 0;
    y[c + 40 >> 2] = x[f >> 1] << 16 >> 16 == 0 ? x[b + 30 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    var g = b + 40 | 0;
    y[c + 48 >> 2] = x[g >> 1] << 16 >> 16 == 0 ? x[b + 36 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    var e = b + 42 | 0;
    y[c + 56 >> 2] = x[e >> 1] << 16 >> 16 == 0 ? x[b + 38 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    var i = b + 44 | 0;
    y[c + 64 >> 2] = x[i >> 1] << 16 >> 16 == 0 ? x[d >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    var h = b + 46 | 0;
    y[c + 72 >> 2] = x[h >> 1] << 16 >> 16 == 0 ? x[f >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    var k = b + 52 | 0;
    y[c + 80 >> 2] = x[k >> 1] << 16 >> 16 == 0 ? x[g >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    var l = b + 54 | 0;
    y[c + 88 >> 2] = x[l >> 1] << 16 >> 16 == 0 ? x[e >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    var j = b + 48 | 0;
    y[c + 96 >> 2] = x[j >> 1] << 16 >> 16 == 0 ? x[i >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    var n = b + 50 | 0;
    y[c + 104 >> 2] = x[n >> 1] << 16 >> 16 == 0 ? x[h >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    var p = b + 56 | 0;
    y[c + 112 >> 2] = x[p >> 1] << 16 >> 16 == 0 ? x[k >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    var r = b + 58 | 0;
    y[c + 120 >> 2] = x[r >> 1] << 16 >> 16 == 0 ? x[l >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    var o = b + 30 | 0;
    y[c + 12 >> 2] = x[o >> 1] << 16 >> 16 == 0 ? x[b + 28 >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    var t = b + 36 | 0;
    y[c + 20 >> 2] = x[t >> 1] << 16 >> 16 == 0 ? x[o >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    y[c + 28 >> 2] = x[b + 38 >> 1] << 16 >> 16 == 0 ? x[t >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    y[c + 44 >> 2] = x[f >> 1] << 16 >> 16 == 0 ? x[d >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    y[c + 52 >> 2] = x[g >> 1] << 16 >> 16 == 0 ? x[f >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    y[c + 60 >> 2] = x[e >> 1] << 16 >> 16 == 0 ? x[g >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    y[c + 76 >> 2] = x[h >> 1] << 16 >> 16 == 0 ? x[i >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    y[c + 84 >> 2] = x[k >> 1] << 16 >> 16 == 0 ? x[h >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    y[c + 92 >> 2] = x[l >> 1] << 16 >> 16 == 0 ? x[k >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    y[c + 108 >> 2] = x[n >> 1] << 16 >> 16 == 0 ? x[j >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    y[c + 116 >> 2] = x[p >> 1] << 16 >> 16 == 0 ? x[n >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2;
    y[c + 124 >> 2] = x[r >> 1] << 16 >> 16 == 0 ? x[p >> 1] << 16 >> 16 != 0 ? 2 : 0 : 2
}
Zf.X = 1;

function Uf(b, c, d) {
    var f = F[c + 20 >> 2],
        g = c + 12 | 0,
        e = Cc(0, 51, y[g >> 2] + f | 0),
        i = c + 16 | 0,
        h = Cc(0, 51, y[i >> 2] + f | 0),
        k = A[Q.f + e | 0] & 255;
    y[b + 28 >> 2] = k;
    h = A[Q.g + h | 0] & 255;
    y[b + 32 >> 2] = h;
    e = Q.h + e * 3 | 0;
    y[b + 24 >> 2] = e;
    if ((d & 2 | 0) != 0) {
        var l = y[y[c + 204 >> 2] + 20 >> 2];
        if ((l | 0) == (f | 0)) {
            y[b + 4 >> 2] = k, y[b + 8 >> 2] = h, y[b >> 2] = e
        } else {
            var j = (l + (f + 1) | 0) >>> 1,
                l = Cc(0, 51, y[g >> 2] + j | 0),
                j = Cc(0, 51, y[i >> 2] + j | 0);
            y[b + 4 >> 2] = A[Q.f + l | 0] & 255;
            y[b + 8 >> 2] = A[Q.g + j | 0] & 255;
            y[b >> 2] = Q.h + l * 3 | 0
        }
    }(d & 4 | 0) != 0 && (c = y[y[c + 200 >> 2] + 20 >> 2], (c | 0) == (f | 0) ? (y[b + 16 >> 2] = k, y[b + 20 >> 2] = h, y[b + 12 >> 2] = e) : (f = (c + (f + 1) | 0) >>> 1, g = Cc(0, 51, y[g >> 2] + f | 0), i = Cc(0, 51, y[i >> 2] + f | 0), y[b + 16 >> 2] = A[Q.f + g | 0] & 255, y[b + 20 >> 2] = A[Q.g + i | 0] & 255, y[b + 12 >> 2] = Q.h + g * 3 | 0))
}
Uf.X = 1;

function Vf(b, c, d, f) {
    for (var g, e = d + 24 | 0, i = d + 12 | 0, h = f << 2, k = 0, l = 0;;) {
        var j = h * l | 0,
            n = b + j | 0,
            p = j + (b + 4) | 0,
            r = j + (b + 8) | 0,
            j = j + (b + 12) | 0,
            o = l << 2,
            t = c + (o << 3) | 0,
            s = o | 1,
            u = c + (s << 3) + 4 | 0,
            w = o | 2;
        g = c + (w << 3) + 4 | 0;
        var v = o | 3,
            z = c + (v << 3) + 4 | 0,
            s = c + (s << 3) | 0,
            w = c + (w << 3) | 0,
            v = c + (v << 3) | 0,
            o = y[c + (o << 3) + 4 >> 2];
        (o | 0) != 0 && ag(n, o, i, f);
        u = y[u >> 2];
        (u | 0) != 0 && ag(p, u, e, f);
        g = y[g >> 2];
        (g | 0) != 0 && ag(r, g, e, f);
        z = y[z >> 2];
        (z | 0) != 0 && ag(j, z, e, f);
        t = y[t >> 2];
        z = y[s >> 2];
        (t | 0) == (z | 0) ? (g = y[w >> 2], (z | 0) != (g | 0) ? g = 14 : (g | 0) != (y[v >> 2] | 0) ? g = 14 : ((t | 0) != 0 && bg(n, t, d + k * 12 | 0, f), g = 22)) : g = 14;
        g == 14 && ((t | 0) == 0 ? n = z : (cg(n, t, d + k * 12 | 0, f), n = y[s >> 2]), (n | 0) != 0 && cg(p, n, d + k * 12 | 0, f), p = y[w >> 2], (p | 0) != 0 && cg(r, p, d + k * 12 | 0, f), r = y[v >> 2], (r | 0) != 0 && cg(j, r, d + k * 12 | 0, f));
        l = l + 1 | 0;
        if ((l | 0) == 4) {
            break
        }
        k = 2
    }
}
Vf.X = 1;

function Wf(b, c, d, f) {
    var g = c + 20 | 0,
        e = F[Ad + (Cc(0, 51, y[g >> 2] + f | 0) << 2) >> 2],
        i = c + 12 | 0,
        h = Cc(0, 51, y[i >> 2] + e | 0),
        k = c + 16 | 0,
        l = Cc(0, 51, y[k >> 2] + e | 0),
        j = A[Q.f + h | 0] & 255;
    y[b + 28 >> 2] = j;
    l = A[Q.g + l | 0] & 255;
    y[b + 32 >> 2] = l;
    h = Q.h + h * 3 | 0;
    y[b + 24 >> 2] = h;
    if ((d & 2 | 0) != 0) {
        var n = y[y[c + 204 >> 2] + 20 >> 2];
        if ((n | 0) == (y[g >> 2] | 0)) {
            y[b + 4 >> 2] = j, y[b + 8 >> 2] = l, y[b >> 2] = h
        } else {
            var p = (e + 1 + y[Ad + (Cc(0, 51, n + f | 0) << 2) >> 2] | 0) >>> 1,
                n = Cc(0, 51, p + y[i >> 2] | 0),
                p = Cc(0, 51, y[k >> 2] + p | 0);
            y[b + 4 >> 2] = A[Q.f + n | 0] & 255;
            y[b + 8 >> 2] = A[Q.g + p | 0] & 255;
            y[b >> 2] = Q.h + n * 3 | 0
        }
    }(d & 4 | 0) != 0 && (c = y[y[c + 200 >> 2] + 20 >> 2], (c | 0) == (y[g >> 2] | 0) ? (y[b + 16 >> 2] = j, y[b + 20 >> 2] = l, y[b + 12 >> 2] = h) : (f = (e + 1 + y[Ad + (Cc(0, 51, c + f | 0) << 2) >> 2] | 0) >>> 1, i = Cc(0, 51, f + y[i >> 2] | 0), k = Cc(0, 51, y[k >> 2] + f | 0), y[b + 16 >> 2] = A[Q.f + i | 0] & 255, y[b + 20 >> 2] = A[Q.g + k | 0] & 255, y[b + 12 >> 2] = Q.h + i * 3 | 0))
}
Wf.X = 1;

function Xf(b, c, d, f, g) {
    for (var e, i = f + 24 | 0, h = f + 12 | 0, k = g << 2, l = g << 1, j = l + 4 | 0, n = 0, p = 0;;) {
        var r = k * n | 0,
            o = b + r | 0,
            t = l + r | 0,
            s = b + t | 0,
            u = r + 4 | 0,
            w = b + u | 0,
            v = r | 2,
            z = b + v | 0,
            B = r + 6 | 0,
            D = b + B | 0,
            C = j + r | 0,
            E = b + C | 0,
            r = c + r | 0;
        e = c + t | 0;
        var u = c + u | 0,
            v = c + v | 0,
            B = c + B | 0,
            G = c + C | 0,
            C = n << 3,
            H = d + (C << 3) + 4 | 0,
            K = d + (C << 3) | 0,
            L = d + ((C | 4) << 3) + 4 | 0,
            t = C | 2,
            N = d + (t << 3) + 4 | 0,
            O = d + ((C | 6) << 3) + 4 | 0,
            R = d + ((C | 1) << 3) | 0,
            t = d + (t << 3) | 0,
            C = d + ((C | 3) << 3) | 0,
            U = y[H >> 2];
        (U | 0) != 0 && (dg(o, U, h, g), dg(r, y[H >> 2], h, g));
        H = y[L >> 2];
        (H | 0) != 0 && (dg(s, H, h, g), dg(e, y[L >> 2], h, g));
        s = y[N >> 2];
        (s | 0) != 0 && (dg(w, s, i, g), dg(u, y[N >> 2], i, g));
        s = y[O >> 2];
        (s | 0) != 0 && (dg(E, s, i, g), dg(G, y[O >> 2], i, g));
        E = y[K >> 2];
        s = y[R >> 2];
        (E | 0) == (s | 0) ? (e = y[t >> 2], (s | 0) != (e | 0) ? e = 14 : (e | 0) != (y[C >> 2] | 0) ? e = 14 : ((E | 0) != 0 && (e = f + p * 12 | 0, eg(o, E, e, g), eg(r, y[K >> 2], e, g)), e = 22)) : e = 14;
        e == 14 && ((E | 0) == 0 ? o = s : (s = f + p * 12 | 0, fg(o, E, s, g), fg(r, y[K >> 2], s, g), o = y[R >> 2]), (o | 0) != 0 && (r = f + p * 12 | 0, fg(z, o, r, g), fg(v, y[R >> 2], r, g)), z = y[t >> 2], (z | 0) != 0 && (o = f + p * 12 | 0, fg(w, z, o, g), fg(u, y[t >> 2], o, g)), w = y[C >> 2], (w | 0) != 0 && (p = f + p * 12 | 0, fg(D, w, p, g), fg(B, y[C >> 2], p, g)));
        n = n + 1 | 0;
        if ((n | 0) == 2) {
            break
        }
        p = 2
    }
}
Xf.X = 1;

function dg(b, c, d, f) {
    var g = b - 1 | 0,
        e = A[b + 1 | 0],
        i = A[g] & 255,
        h = A[b] & 255,
        k = Bc(i - h | 0),
        l = d + 4 | 0;
    if (k >>> 0 < F[l >> 2] >>> 0) {
        var k = A[b - 2 | 0] & 255,
            j = Bc(k - i | 0),
            n = F[d + 8 >> 2];
        j >>> 0 < n >>> 0 && (e &= 255, Bc(e - h | 0) >>> 0 < n >>> 0 && (c >>> 0 < 4 ? (n = A[y[d >> 2] + (c - 1) | 0] & 255, k = Cc(n ^ -1, n + 1 | 0, 4 - e + (h - i << 2) + k >> 3), h = q[Q.a + ((h | 512) - k) | 0], q[g] = q[Q.a + ((i | 512) + k) | 0], q[b] = h) : (q[g] = (e + (i + 2) + (k << 1) | 0) >>> 2 & 255, q[b] = (h + 2 + (e << 1) + k | 0) >>> 2 & 255)))
    }
    g = b + f | 0;
    i = b + (f - 1) | 0;
    e = A[f + (b + 1) | 0];
    h = A[i] & 255;
    k = A[g] & 255;
    Bc(h - k | 0) >>> 0 < F[l >> 2] >>> 0 && (b = A[b + (f - 2) | 0] & 255, l = Bc(b - h | 0), f = F[d + 8 >> 2], l >>> 0 < f >>> 0 && (l = e & 255, Bc(l - k | 0) >>> 0 < f >>> 0 && (c >>> 0 < 4 ? (c = A[y[d >> 2] + (c - 1) | 0] & 255, c = Cc(c ^ -1, c + 1 | 0, 4 - l + (k - h << 2) + b >> 3), d = q[Q.a + ((k | 512) - c) | 0], q[i] = q[Q.a + ((h | 512) + c) | 0], q[g] = d) : (q[i] = (l + (h + 2) + (b << 1) | 0) >>> 2 & 255, q[g] = (k + 2 + (l << 1) + b | 0) >>> 2 & 255))))
}
dg.X = 1;

function eg(b, c, d, f) {
    var g = c >>> 0 < 4;
    a: do {
        if (g) {
            var e = A[y[d >> 2] + (c - 1) | 0] & 255,
                i = e + 1 | 0,
                h = d + 4 | 0,
                k = d + 8 | 0;
            e ^= -1;
            for (var l = f * -2 | 0, j = 0;;) {
                var n = b + (j - f) | 0,
                    p = b + j | 0,
                    r = A[b + (j + f) | 0],
                    o = A[n] & 255,
                    t = A[p] & 255;
                if (Bc(o - t | 0) >>> 0 < F[h >> 2] >>> 0) {
                    var s = A[b + (l + j) | 0] & 255,
                        u = Bc(s - o | 0),
                        w = F[k >> 2];
                    u >>> 0 < w >>> 0 && (r &= 255, Bc(r - t | 0) >>> 0 < w >>> 0 && (s = Cc(e, i, 4 - r + (t - o << 2) + s >> 3), t = q[Q.a + ((t | 512) - s) | 0], q[n] = q[Q.a + ((o | 512) + s) | 0], q[p] = t))
                }
                j = j + 1 | 0;
                if ((j | 0) == 8) {
                    break a
                }
            }
        } else {
            i = d + 4 | 0;
            h = d + 8 | 0;
            k = f * -2 | 0;
            for (e = 0;;) {
                if (l = b + (e - f) | 0, j = b + e | 0, s = A[b + (e + f) | 0], n = A[l] & 255, p = A[j] & 255, Bc(n - p | 0) >>> 0 < F[i >> 2] >>> 0 && (o = A[b + (k + e) | 0] & 255, w = Bc(o - n | 0), t = F[h >> 2], w >>> 0 < t >>> 0 && (s &= 255, Bc(s - p | 0) >>> 0 < t >>> 0 && (q[l] = (s + (n + 2) + (o << 1) | 0) >>> 2 & 255, q[j] = (p + 2 + (s << 1) + o | 0) >>> 2 & 255))), e = e + 1 | 0, (e | 0) == 8) {
                    break a
                }
            }
        }
    } while (0)
}
eg.X = 1;

function fg(b, c, d, f) {
    var g = A[y[d >> 2] + (c - 1) | 0] & 255,
        c = g + 1 | 0,
        e = d + 4 | 0,
        i = d + 8 | 0,
        d = g ^ -1,
        g = f * -2 | 0,
        h = b + -f | 0,
        k = A[b + f | 0],
        l = A[h] & 255,
        j = A[b] & 255,
        n = Bc(l - j | 0),
        p = F[e >> 2];
    if (n >>> 0 < p >>> 0) {
        var n = A[b + g | 0] & 255,
            r = Bc(n - l | 0),
            o = F[i >> 2];
        r >>> 0 < o >>> 0 && (k &= 255, Bc(k - j | 0) >>> 0 < o >>> 0 && (p = Cc(d, c, 4 - k + (j - l << 2) + n >> 3), j = q[Q.a + ((j | 512) - p) | 0], q[h] = q[Q.a + ((l | 512) + p) | 0], q[b] = j, p = y[e >> 2]))
    }
    e = b + (1 - f) | 0;
    h = b + 1 | 0;
    j = A[f + (b + 1) | 0];
    f = A[e] & 255;
    l = A[h] & 255;
    Bc(f - l | 0) >>> 0 < p >>> 0 && (b = A[b + (g | 1) | 0] & 255, g = Bc(b - f | 0), i = F[i >> 2], g >>> 0 < i >>> 0 && (g = j & 255, Bc(g - l | 0) >>> 0 < i >>> 0 && (c = Cc(d, c, 4 - g + (l - f << 2) + b >> 3), d = q[Q.a + ((l | 512) - c) | 0], q[e] = q[Q.a + ((f | 512) + c) | 0], q[h] = d)))
}
fg.X = 1;

function ag(b, c, d, f) {
    var g = F[d + 4 >> 2],
        e = F[d + 8 >> 2],
        i = c >>> 0 < 4;
    a: do {
        if (i) {
            for (var h = A[y[d >> 2] + (c - 1) | 0] & 255, k = -h | 0, l = h + 1 | 0, j = 0;;) {
                var n = j * f | 0,
                    p = b + (n - 2) | 0,
                    r = b + (n - 1) | 0,
                    o = n + (b + 1) | 0,
                    t = b + (n - 3) | 0,
                    s = n + (b + 2) | 0,
                    n = b + n | 0,
                    u = A[p] & 255,
                    w = A[r] & 255,
                    v = A[n] & 255,
                    z = A[o] & 255;
                Bc(w - v | 0) >>> 0 < g >>> 0 && Bc(u - w | 0) >>> 0 < e >>> 0 && Bc(z - v | 0) >>> 0 < e >>> 0 && (t = A[t] & 255, s = A[s] & 255, Bc(t - w | 0) >>> 0 < e >>> 0 ? (q[p] = Cc(k, h, (v + (w + 1) >> 1) - (u << 1) + t >> 1) + u & 255, p = l) : p = h, Bc(s - v | 0) >>> 0 < e >>> 0 ? (q[o] = Cc(k, h, (v + (w + 1) >> 1) - (z << 1) + s >> 1) + z & 255, o = p + 1 | 0) : o = p, o = Cc(-o | 0, o, u + 4 - z + (v - w << 2) >> 3), v = q[Q.a + ((v | 512) - o) | 0], q[r] = q[Q.a + ((w | 512) + o) | 0], q[n] = v);
                j = j + 1 | 0;
                if ((j | 0) == 4) {
                    break a
                }
            }
        } else {
            h = (g >>> 2) + 2 | 0;
            for (k = 0;;) {
                var u = k * f | 0,
                    n = b + (u - 2) | 0,
                    w = b + (u - 1) | 0,
                    l = u + (b + 1) | 0,
                    v = b + (u - 3) | 0,
                    j = u + (b + 2) | 0,
                    o = b + (u - 4) | 0,
                    r = u + (b + 3) | 0,
                    u = b + u | 0,
                    z = A[n] & 255,
                    s = A[w] & 255,
                    t = A[u] & 255,
                    B = A[l] & 255,
                    D = Bc(s - t | 0),
                    C = D >>> 0 < g >>> 0;
                b: do {
                    if (C && Bc(z - s | 0) >>> 0 < e >>> 0 && Bc(B - t | 0) >>> 0 < e >>> 0) {
                        var E = D >>> 0 < h >>> 0,
                            G = A[v] & 255,
                            p = A[j] & 255;
                        do {
                            if (E) {
                                if (Bc(G - s | 0) >>> 0 < e >>> 0) {
                                    E = s + z + t | 0, q[w] = (B + 4 + (E << 1) + G | 0) >>> 3 & 255, q[n] = (G + (E + 2) | 0) >>> 2 & 255, q[v] = (E + 4 + G * 3 + ((A[o] & 255) << 1) | 0) >>> 3 & 255
                                } else {
                                    if (q[w] = (s + 2 + (z << 1) + B | 0) >>> 2 & 255, !E) {
                                        break
                                    }
                                } if (Bc(p - t | 0) >>> 0 >= e >>> 0) {
                                    break
                                }
                                n = t + s + B | 0;
                                q[u] = (z + 4 + (n << 1) + p | 0) >>> 3 & 255;
                                q[l] = (p + (n + 2) | 0) >>> 2 & 255;
                                q[j] = (n + 4 + p * 3 + ((A[r] & 255) << 1) | 0) >>> 3 & 255;
                                break b
                            }
                            q[w] = (s + 2 + (z << 1) + B | 0) >>> 2 & 255
                        } while (0);
                        q[u] = (t + (z + 2) + (B << 1) | 0) >>> 2 & 255
                    }
                } while (0);
                k = k + 1 | 0;
                if ((k | 0) == 4) {
                    break a
                }
            }
        }
    } while (0)
}
ag.X = 1;

function bg(b, c, d, f) {
    var g = F[d + 4 >> 2],
        e = F[d + 8 >> 2],
        i = c >>> 0 < 4;
    a: do {
        if (i) {
            for (var h = A[y[d >> 2] + (c - 1) | 0] & 255, k = -h | 0, l = h + 1 | 0, j = f * -2 | 0, n = f * -3 | 0, p = f << 1, r = 0;;) {
                var o = b + (j + r) | 0,
                    t = b + (r - f) | 0,
                    s = b + (r + f) | 0,
                    u = b + (n + r) | 0,
                    w = b + (p + r) | 0,
                    v = b + r | 0,
                    z = A[o] & 255,
                    B = A[t] & 255,
                    D = A[v] & 255,
                    C = A[s] & 255;
                Bc(B - D | 0) >>> 0 < g >>> 0 && Bc(z - B | 0) >>> 0 < e >>> 0 && Bc(C - D | 0) >>> 0 < e >>> 0 && (u = A[u] & 255, Bc(u - B | 0) >>> 0 < e >>> 0 ? (q[o] = Cc(k, h, (D + (B + 1) >> 1) - (z << 1) + u >> 1) + z & 255, o = l) : o = h, w = A[w] & 255, Bc(w - D | 0) >>> 0 < e >>> 0 ? (q[s] = Cc(k, h, (D + (B + 1) >> 1) - (C << 1) + w >> 1) + C & 255, s = o + 1 | 0) : s = o, z = Cc(-s | 0, s, z + 4 - C + (D - B << 2) >> 3), D = q[Q.a + ((D | 512) - z) | 0], q[t] = q[Q.a + ((B | 512) + z) | 0], q[v] = D);
                r = r + 1 | 0;
                if ((r | 0) == 16) {
                    break a
                }
            }
        } else {
            h = (g >>> 2) + 2 | 0;
            k = f * -3 | 0;
            l = f * 3 | 0;
            j = f * -2 | 0;
            n = f << 1;
            p = f * -4 | 0;
            for (r = 0;;) {
                var s = b + (j + r) | 0,
                    w = b + (r - f) | 0,
                    t = b + (r + f) | 0,
                    o = b + (k + r) | 0,
                    v = b + (n + r) | 0,
                    u = b + (p + r) | 0,
                    B = b + (l + r) | 0,
                    D = b + r | 0,
                    z = A[s] & 255,
                    E = A[w] & 255,
                    G = A[D] & 255,
                    H = A[t] & 255,
                    K = Bc(E - G | 0),
                    L = K >>> 0 < g >>> 0;
                b: do {
                    if (L && Bc(z - E | 0) >>> 0 < e >>> 0 && Bc(H - G | 0) >>> 0 < e >>> 0) {
                        var N = K >>> 0 < h >>> 0,
                            O = A[o] & 255,
                            C = A[v] & 255;
                        do {
                            if (N) {
                                if (Bc(O - E | 0) >>> 0 < e >>> 0) {
                                    N = E + z + G | 0, q[w] = (H + 4 + (N << 1) + O | 0) >>> 3 & 255, q[s] = (O + (N + 2) | 0) >>> 2 & 255, q[o] = (N + 4 + O * 3 + ((A[u] & 255) << 1) | 0) >>> 3 & 255
                                } else {
                                    if (q[w] = (E + 2 + (z << 1) + H | 0) >>> 2 & 255, !N) {
                                        break
                                    }
                                } if (Bc(C - G | 0) >>> 0 >= e >>> 0) {
                                    break
                                }
                                s = G + E + H | 0;
                                q[D] = (z + 4 + (s << 1) + C | 0) >>> 3 & 255;
                                q[t] = (C + (s + 2) | 0) >>> 2 & 255;
                                q[v] = (s + 4 + C * 3 + ((A[B] & 255) << 1) | 0) >>> 3 & 255;
                                break b
                            }
                            q[w] = (E + 2 + (z << 1) + H | 0) >>> 2 & 255
                        } while (0);
                        q[D] = (G + (z + 2) + (H << 1) | 0) >>> 2 & 255
                    }
                } while (0);
                r = r + 1 | 0;
                if ((r | 0) == 16) {
                    break a
                }
            }
        }
    } while (0)
}
bg.X = 1;

function cg(b, c, d, f) {
    for (var c = A[y[d >> 2] + (c - 1) | 0] & 255, g = d + 4 | 0, d = d + 8 | 0, e = -c | 0, i = c + 1 | 0, h = f * -2 | 0, k = f * -3 | 0, l = f << 1, j = 0;;) {
        var n = b + (h + j) | 0,
            p = b + (j - f) | 0,
            r = b + (j + f) | 0,
            o = b + (k + j) | 0,
            t = b + (l + j) | 0,
            s = b + j | 0,
            u = A[r],
            w = A[p] & 255,
            v = A[s] & 255;
        if (Bc(w - v | 0) >>> 0 < F[g >> 2] >>> 0) {
            var z = A[n] & 255,
                B = Bc(z - w | 0),
                D = F[d >> 2];
            B >>> 0 < D >>> 0 && (u &= 255, Bc(u - v | 0) >>> 0 < D >>> 0 && (o = A[o] & 255, Bc(o - w | 0) >>> 0 < D >>> 0 ? (q[n] = Cc(e, c, (v + (w + 1) >> 1) - (z << 1) + o >> 1) + z & 255, n = i, D = y[d >> 2]) : n = c, t = A[t] & 255, Bc(t - v | 0) >>> 0 < D >>> 0 ? (q[r] = Cc(e, c, (v + (w + 1) >> 1) - (u << 1) + t >> 1) + u & 255, r = n + 1 | 0) : r = n, z = Cc(-r | 0, r, 4 - u + (v - w << 2) + z >> 3), v = q[Q.a + ((v | 512) - z) | 0], q[p] = q[Q.a + ((w | 512) + z) | 0], q[s] = v))
        }
        j = j + 1 | 0;
        if ((j | 0) == 4) {
            break
        }
    }
}
cg.X = 1;

function Yf(b, c, d, f) {
    return x[b + 28 + (d << 1) >> 1] << 16 >> 16 == 0 ? x[c + 28 + (f << 1) >> 1] << 16 >> 16 != 0 ? 2 : (y[b + 116 + (d >>> 2 << 2) >> 2] | 0) != (y[c + 116 + (f >>> 2 << 2) >> 2] | 0) ? 1 : (Bc((x[b + 132 + (d << 2) >> 1] << 16 >> 16) - (x[c + 132 + (f << 2) >> 1] << 16 >> 16) | 0) | 0) > 3 ? 1 : (Bc((x[b + 132 + (d << 2) + 2 >> 1] << 16 >> 16) - (x[c + 132 + (f << 2) + 2 >> 1] << 16 >> 16) | 0) | 0) > 3 ? 1 : 0 : 2
}

function $f(b, c, d) {
    var f = x[b + 132 + (c << 2) >> 1] << 16 >> 16,
        g = x[b + 132 + (d << 2) >> 1] << 16 >> 16,
        e = x[b + 132 + (c << 2) + 2 >> 1] << 16 >> 16,
        i = x[b + 132 + (d << 2) + 2 >> 1] << 16 >> 16;
    return x[b + 28 + (c << 1) >> 1] << 16 >> 16 == 0 ? x[b + 28 + (d << 1) >> 1] << 16 >> 16 != 0 ? 2 : (Bc(f - g | 0) | 0) > 3 ? 1 : (Bc(e - i | 0) | 0) > 3 ? 1 : (y[b + 116 + (c >>> 2 << 2) >> 2] | 0) != (y[b + 116 + (d >>> 2 << 2) >> 2] | 0) ? 1 : 0 : 2
}

function gg(b, c, d) {
    var f, g = F[c + 4 >> 2],
        e = F[c + 8 >> 2];
    if (d == 5 || d == 0) {
        f = 2
    } else {
        if ((y[b + 3384 >> 2] | 0) == 0) {
            var i = 0;
            f = 4
        } else {
            f = 2
        }
    }
    a: do {
        if (f == 2) {
            for (var h = b + 1220 | 0, k = 0;;) {
                var l = k + 1 | 0,
                    k = gf(h, k);
                if (!(l >>> 0 < 16 & (k | 0) == 0)) {
                    i = k;
                    break a
                }
                k = l
            }
        }
    } while (0);
    for (var h = b + 1212 | 0, l = b + 1176 | 0, j = F[l >> 2], n = 0, k = f = 0;;) {
        if (f >>> 0 >= j >>> 0) {
            break
        }
        if ((y[y[h >> 2] + f * 216 + 196 >> 2] | 0) != 0) {
            break
        }
        f = f + 1 | 0;
        var n = n + 1 | 0,
            p = (n | 0) == (g | 0),
            k = (p & 1) + k | 0,
            n = p ? 0 : n
    }
    j = (f | 0) == (j | 0);
    a: do {
        if (j) {
            do {
                if (d == 7 || d == 2) {
                    if ((y[b + 3384 >> 2] | 0) == 0 | (i | 0) == 0) {
                        f = 13;
                        break
                    }
                } else {
                    if ((i | 0) == 0) {
                        f = 13;
                        break
                    }
                }
                f = 14
            } while (0);
            f == 13 ? Pc(y[c >> 2], 128, g * 384 * e | 0) : f == 14 && sd(y[c >> 2], i, g * 384 * e | 0);
            f = y[l >> 2];
            y[b + 1204 >> 2] = f;
            if ((f | 0) != 0) {
                for (f = 0;;) {
                    p = f + 1 | 0;
                    y[(y[h >> 2] + f * 216 + 8 | 0) >> 2] = 1;
                    if (p >>> 0 >= F[l >> 2] >>> 0) {
                        break a
                    }
                    f = p
                }
            }
        } else {
            f = F[h >> 2];
            p = (n | 0) == 0;
            b: do {
                if (!p) {
                    for (var r = b + 1204 | 0, o = g * k | 0, t = n + o | 0, s = n - 1 | 0, o = s + o | 0, u = 0;;) {
                        var w = f + (t - u) * 216 - 20 | 0;
                        hg(f + (o - u) * 216 | 0, c, k, s - u | 0, d, i);
                        y[w >> 2] = 1;
                        y[r >> 2] = y[r >> 2] + 1 | 0;
                        u = u + 1 | 0;
                        if ((u | 0) == (n | 0)) {
                            break b
                        }
                    }
                }
            } while (0);
            p = n + 1 | 0;
            r = p >>> 0 < g >>> 0;
            b: do {
                if (r) {
                    t = b + 1204 | 0;
                    s = g - 1 - n | 0;
                    o = p + g * k | 0;
                    for (u = 0;;) {
                        var w = o + u | 0,
                            v = f + w * 216 + 196 | 0;
                        (y[v >> 2] | 0) == 0 && (hg(f + w * 216 | 0, c, k, p + u | 0, d, i), y[v >> 2] = 1, y[t >> 2] = y[t >> 2] + 1 | 0);
                        u = u + 1 | 0;
                        if ((u | 0) == (s | 0)) {
                            break b
                        }
                    }
                }
            } while (0);
            f = (k | 0) == 0;
            b: do {
                if (f) {
                    var z = 0
                } else {
                    if ((g | 0) == 0) {
                        z = k
                    } else {
                        p = k - 1 | 0;
                        r = b + 1204 | 0;
                        t = -g | 0;
                        s = g * p | 0;
                        for (o = 0;;) {
                            u = y[h >> 2] + (s + o) * 216 | 0;
                            for (w = 0;;) {
                                hg(u, c, p - w | 0, o, d, i);
                                y[u + 196 >> 2] = 1;
                                y[r >> 2] = y[r >> 2] + 1 | 0;
                                w = w + 1 | 0;
                                if ((w | 0) == (k | 0)) {
                                    break
                                }
                                u = u + t * 216 | 0
                            }
                            o = o + 1 | 0;
                            if ((o | 0) == (g | 0)) {
                                z = k;
                                break b
                            }
                        }
                    }
                }
            } while (0);
            f = z + 1 | 0;
            if (f >>> 0 < e >>> 0) {
                p = (g | 0) == 0;
                r = b + 1204 | 0;
                t = e - 1 - z | 0;
                for (s = 0;;) {
                    o = f + s | 0;
                    u = g * o | 0;
                    w = y[h >> 2];
                    b: do {
                        if (!p) {
                            for (v = 0;;) {
                                var B = u + v | 0,
                                    D = w + B * 216 + 196 | 0;
                                (y[D >> 2] | 0) == 0 && (hg(w + B * 216 | 0, c, o, v, d, i), y[D >> 2] = 1, y[r >> 2] = y[r >> 2] + 1 | 0);
                                v = v + 1 | 0;
                                if ((v | 0) == (g | 0)) {
                                    break b
                                }
                            }
                        }
                    } while (0);
                    s = s + 1 | 0;
                    if ((s | 0) == (t | 0)) {
                        break a
                    }
                }
            }
        }
    } while (0);
    return 0
}
gg.X = 1;

function hg(b, c, d, f, g, e) {
    var i = m;
    m += 452;
    var h, k = i + 384,
        l = i + 448,
        j = m;
    m += 24;
    var n = F[c + 4 >> 2],
        p = F[c + 8 >> 2];
    Lc(c, n * d + f | 0);
    var r = c | 0,
        o = F[r >> 2],
        t = d << 4,
        s = f << 4,
        u = (d << 8) * n + s | 0;
    y[b + 20 >> 2] = 40;
    y[b + 8 >> 2] = 0;
    y[b >> 2] = 6;
    y[b + 12 >> 2] = 0;
    y[b + 16 >> 2] = 0;
    y[b + 24 >> 2] = 0;
    if (g == 7 || g == 2) {
        Pc(i | 0, 0, 384), h = 5
    } else {
        y[l >> 2] = 0;
        y[j + 4 >> 2] = n;
        y[j + 8 >> 2] = p;
        y[j >> 2] = e;
        var w = i | 0;
        (e | 0) == 0 ? (Pc(w, 0, 384), h = 5) : (df(w, l, j, s, t, 0, 0, 16, 16), rd(c, w), h = 70)
    } if (h == 5) {
        var v = k | 0;
        Pc(k, 0, 64);
        if ((d | 0) == 0) {
            var z = 0,
                B = I,
                D = I,
                C = I,
                E = I
        } else {
            if ((y[b + -n * 216 + 196 >> 2] | 0) == 0) {
                z = 0, E = C = D = B = I
            } else {
                var G = u - (n << 4) | 0,
                    H = G | 1,
                    K = G | 3,
                    L = (A[o + H | 0] & 255) + (A[o + G | 0] & 255) + (A[H + (o + 1) | 0] & 255) + (A[o + K | 0] & 255) | 0,
                    N = G | 7,
                    O = (A[K + (o + 2) | 0] & 255) + (A[K + (o + 1) | 0] & 255) + (A[K + (o + 3) | 0] & 255) + (A[o + N | 0] & 255) | 0,
                    R = (A[N + (o + 2) | 0] & 255) + (A[N + (o + 1) | 0] & 255) + (A[N + (o + 3) | 0] & 255) + (A[N + (o + 4) | 0] & 255) | 0,
                    U = (A[N + (o + 6) | 0] & 255) + (A[N + (o + 5) | 0] & 255) + (A[N + (o + 7) | 0] & 255) + (A[o + (G | 15) | 0] & 255) | 0,
                    Y = O + L | 0;
                y[v >> 2] = R + Y + y[v >> 2] + U | 0;
                var X = k + 4 | 0;
                y[X >> 2] = Y - R + y[X >> 2] - U | 0;
                z = 1;
                B = L;
                D = O;
                C = R;
                E = U
            }
        } if ((p - 1 | 0) == (d | 0)) {
            var ba = 0,
                $ = z,
                ja = I,
                sa = I,
                Ea = I,
                Xa = I
        } else {
            if ((y[b + n * 216 + 196 >> 2] | 0) == 0) {
                ba = 0, $ = z, Xa = Ea = sa = ja = I
            } else {
                var ea = u + (n << 8) | 0,
                    fa = ea | 1,
                    va = ea | 3,
                    ob = (A[o + fa | 0] & 255) + (A[o + ea | 0] & 255) + (A[fa + (o + 1) | 0] & 255) + (A[o + va | 0] & 255) | 0,
                    wa = ea | 7,
                    pb = (A[va + (o + 2) | 0] & 255) + (A[va + (o + 1) | 0] & 255) + (A[va + (o + 3) | 0] & 255) + (A[o + wa | 0] & 255) | 0,
                    gb = (A[wa + (o + 2) | 0] & 255) + (A[wa + (o + 1) | 0] & 255) + (A[wa + (o + 3) | 0] & 255) + (A[wa + (o + 4) | 0] & 255) | 0,
                    Ib = (A[wa + (o + 6) | 0] & 255) + (A[wa + (o + 5) | 0] & 255) + (A[wa + (o + 7) | 0] & 255) + (A[o + (ea | 15) | 0] & 255) | 0,
                    Fa = pb + ob | 0;
                y[v >> 2] = gb + Fa + y[v >> 2] + Ib | 0;
                var qb = k + 4 | 0;
                y[qb >> 2] = Fa - gb + y[qb >> 2] - Ib | 0;
                ba = 1;
                $ = z + 1 | 0;
                ja = ob;
                sa = pb;
                Ea = gb;
                Xa = Ib
            }
        } if ((f | 0) == 0) {
            var Ya = $,
                Na = 0,
                za = I,
                da = I,
                Oa = I,
                Za = I
        } else {
            if ((y[b - 216 + 196 >> 2] | 0) == 0) {
                Ya = $, Na = 0, Za = Oa = da = za = I
            } else {
                var Aa = u - 1 | 0,
                    hb = n << 4,
                    Ga = n << 5,
                    Pa = n * 48 | 0,
                    $a = (A[o + (Aa + hb) | 0] & 255) + (A[o + Aa | 0] & 255) + (A[o + (Aa + Ga) | 0] & 255) + (A[o + (Aa + Pa) | 0] & 255) | 0,
                    Ab = n << 6,
                    cb = Aa + Ab | 0,
                    rb = (A[o + (cb + hb) | 0] & 255) + (A[o + cb | 0] & 255) + (A[o + (cb + Ga) | 0] & 255) + (A[o + (cb + Pa) | 0] & 255) | 0,
                    Qa = cb + Ab | 0,
                    pa = (A[o + (Qa + hb) | 0] & 255) + (A[o + Qa | 0] & 255) + (A[o + (Qa + Ga) | 0] & 255) + (A[o + (Qa + Pa) | 0] & 255) | 0,
                    ia = Qa + Ab | 0,
                    qa = (A[o + (ia + hb) | 0] & 255) + (A[o + ia | 0] & 255) + (A[o + (ia + Ga) | 0] & 255) + (A[o + (ia + Pa) | 0] & 255) | 0,
                    Ra = rb + $a | 0;
                y[v >> 2] = pa + Ra + y[v >> 2] + qa | 0;
                var ra = k + 16 | 0;
                y[ra >> 2] = Ra - pa + y[ra >> 2] - qa | 0;
                Ya = $ + 1 | 0;
                Na = 1;
                za = $a;
                da = rb;
                Oa = pa;
                Za = qa
            }
        } if ((n - 1 | 0) == (f | 0)) {
            h = 16
        } else {
            if ((y[b + 412 >> 2] | 0) == 0) {
                h = 16
            } else {
                var ib = u + 16 | 0,
                    sb = n << 4,
                    jb = n << 5,
                    db = n * 48 | 0,
                    Sa = (A[o + (ib + sb) | 0] & 255) + (A[o + ib | 0] & 255) + (A[o + (ib + jb) | 0] & 255) + (A[o + (ib + db) | 0] & 255) | 0,
                    kb = n << 6,
                    ta = ib + kb | 0,
                    Bb = (A[o + (ta + sb) | 0] & 255) + (A[o + ta | 0] & 255) + (A[o + (ta + jb) | 0] & 255) + (A[o + (ta + db) | 0] & 255) | 0,
                    Ha = ta + kb | 0,
                    ya = (A[o + (Ha + sb) | 0] & 255) + (A[o + Ha | 0] & 255) + (A[o + (Ha + jb) | 0] & 255) + (A[o + (Ha + db) | 0] & 255) | 0,
                    xa = Ha + kb | 0,
                    Ba = (A[o + (xa + sb) | 0] & 255) + (A[o + xa | 0] & 255) + (A[o + (xa + jb) | 0] & 255) + (A[o + (xa + db) | 0] & 255) | 0,
                    Ca = Ya + 1 | 0,
                    Ta = Na + 1 | 0,
                    lb = Bb + Sa | 0;
                y[v >> 2] = ya + lb + y[v >> 2] + Ba | 0;
                var Jb = k + 16 | 0,
                    eb = lb - ya + y[Jb >> 2] - Ba | 0;
                y[Jb >> 2] = eb;
                var Da = ($ | 0) != 0;
                if (Da | (Na | 0) == 0) {
                    if (Da) {
                        var Ia = 1,
                            mb = Ca,
                            Ua = Ta;
                        h = 20
                    } else {
                        Ja = Ta, Ka = Ca, Cb = 1, Db = eb, h = 25
                    }
                } else {
                    y[k + 4 >> 2] = Oa + Za + da + za - Sa - Bb - ya - Ba >> 5;
                    var Ja = Ta,
                        Ka = Ca,
                        Cb = 1,
                        Db = eb;
                    h = 25
                }
            }
        } if (h == 16) {
            if (($ | 0) == 0) {
                var Eb = Na,
                    tb = Ya,
                    Va = 0;
                h = 21
            } else {
                Ia = 0, mb = Ya, Ua = Na, h = 20
            }
        }
        h == 20 && (y[(k + 4 | 0) >> 2] >>= $ + 3, Eb = Ua, tb = mb, Va = Ia, h = 21);
        if (h == 21) {
            var fb = (Eb | 0) != 0;
            if (fb | (z | 0) == 0 | (ba | 0) == 0) {
                if (fb) {
                    Ja = Eb, Ka = tb, Cb = Va, Db = y[k + 16 >> 2], h = 25
                } else {
                    var ub = Va,
                        nb = tb;
                    h = 26
                }
            } else {
                y[k + 16 >> 2] = C + E + D + B - Xa - Ea - sa - ja >> 5, ub = Va, nb = tb, h = 26
            }
        }
        h == 25 && (y[k + 16 >> 2] = Db >> Ja + 3, ub = Cb, nb = Ka);
        nb == 1 ? y[v >> 2] >>= 4 : nb == 2 ? y[v >> 2] >>= 5 : nb == 3 ? y[v >> 2] = y[v >> 2] * 21 >> 10 : y[v >> 2] >>= 6;
        ig(v);
        var Fb = i | 0,
            Qb = 0,
            wb = Fb,
            Lb = 0;
        a: for (;;) {
            for (var Rb = Lb << 2, Wb = Qb + 1 | 0, Tb = 0;;) {
                var Xb = Tb + 1 | 0,
                    Vb = Wb + Tb | 0,
                    Yb = Qb + Tb | 0;
                if (Yb >>> 0 >= 256) {
                    break a
                }
                var fc = F[k + ((Rb | Yb >>> 2 & 3) << 2) >> 2];
                q[wb + Tb | 0] = (fc | 0) < 0 ? 0 : (fc | 0) > 255 ? -1 : fc & 255;
                if ((Vb & 63 | 0) == 0) {
                    break
                }
                Tb = Xb
            }
            Qb = Vb;
            wb = wb + Xb | 0;
            Lb = Lb + 1 | 0
        }
        for (var ga = F[r >> 2], pc = (z | 0) != 0, Ub = k + 4 | 0, Fc = (ba | 0) != 0, Fg = (Na | 0) != 0, qc = k + 16 | 0, Gg = (ub | 0) != 0, Yh = Fg ^ 1, Zh = Gg ^ 1, $h = pc ^ 1, ai = Fc ^ 1, bi = p * n << 6, Zb = (p << 8) + (d << 6) | 0, $b = f << 3, hc = n * (Zb - 8) + $b | 0, ic = n * (Zb + 64) + $b | 0, Hg = n * Zb + $b | 0, ci = Hg - 1 | 0, di = Hg + 8 | 0, Ig = n * (Zb | 8) + $b | 0, ei = Ig + 8 | 0, Jg = n * (Zb | 16) + $b | 0, fi = Jg + 8 | 0, Kg = n * (Zb | 24) + $b | 0, gi = Kg + 8 | 0, Lg = n * (Zb | 32) + $b | 0, hi = Lg + 8 | 0, Mg = n * (Zb | 40) + $b | 0, ii = Mg + 8 | 0, Ng = n * (Zb | 48) + $b | 0, ji = Ng + 8 | 0, Og = n * (Zb | 56) + $b | 0, ki = Og + 8 | 0, li = Ig - 1 | 0, mi = Jg - 1 | 0, ni = Kg - 1 | 0, oi = Lg - 1 | 0, pi = Mg - 1 | 0, qi = Ng - 1 | 0, ri = Og - 1 | 0, si = ic | 1, ti = ic | 2, ui = ic | 3, vi = ic | 4, wi = ic | 5, xi = ic | 6, yi = ic | 7, zi = hc | 1, Ai = hc | 2, Bi = hc | 3, Ci = hc | 4, Di = hc | 5, Ei = hc | 6, Fi = hc | 7, Pg = Za, Qg = Oa, Rg = da, Sg = za, Tg = Xa, Ug = Ea, Vg = sa, Wg = ja, Xg = E, Yg = C, Zg = D, $g = B, Yc = 0;;) {
            var Gi = i + ((Yc << 6) + 256) | 0,
                la = bi * Yc | 0,
                Hi = ga + (ic + la) | 0,
                Ii = ga + (ci + la) | 0,
                Ji = ga + (di + la) | 0,
                Ki = ga + (ei + la) | 0,
                Li = ga + (fi + la) | 0,
                Mi = ga + (gi + la) | 0,
                Ni = ga + (hi + la) | 0,
                Oi = ga + (ii + la) | 0,
                Pi = ga + (ji + la) | 0,
                Qi = ga + (ki + la) | 0,
                Ri = ga + (li + la) | 0,
                Si = ga + (mi + la) | 0,
                Ti = ga + (ni + la) | 0,
                Ui = ga + (oi + la) | 0,
                Vi = ga + (pi + la) | 0,
                Wi = ga + (qi + la) | 0,
                Xi = ga + (ri + la) | 0,
                Yi = ga + (si + la) | 0,
                Zi = ga + (ti + la) | 0,
                $i = ga + (ui + la) | 0,
                aj = ga + (vi + la) | 0,
                bj = ga + (wi + la) | 0,
                cj = ga + (xi + la) | 0,
                dj = ga + (yi + la) | 0;
            Pc(k, 0, 64);
            if (pc) {
                var ah = (A[ga + (zi + la) | 0] & 255) + (A[ga + (hc + la) | 0] & 255) | 0,
                    bh = (A[ga + (Bi + la) | 0] & 255) + (A[ga + (Ai + la) | 0] & 255) | 0,
                    Ed = (A[ga + (Di + la) | 0] & 255) + (A[ga + (Ci + la) | 0] & 255) | 0,
                    Fd = (A[ga + (Fi + la) | 0] & 255) + (A[ga + (Ei + la) | 0] & 255) | 0,
                    ch = bh + ah | 0;
                y[v >> 2] = Ed + ch + y[v >> 2] + Fd | 0;
                y[Ub >> 2] = ch - Ed + y[Ub >> 2] - Fd | 0;
                var Gd = 1,
                    Hd = ah,
                    Id = bh,
                    Jd = Ed,
                    Kd = Fd
            } else {
                Gd = 0, Hd = $g, Id = Zg, Jd = Yg, Kd = Xg
            } if (Fc) {
                var dh = (A[Yi] & 255) + (A[Hi] & 255) | 0,
                    eh = (A[$i] & 255) + (A[Zi] & 255) | 0,
                    Ld = (A[bj] & 255) + (A[aj] & 255) | 0,
                    Md = (A[dj] & 255) + (A[cj] & 255) | 0,
                    fh = eh + dh | 0;
                y[v >> 2] = Ld + fh + y[v >> 2] + Md | 0;
                y[Ub >> 2] = fh - Ld + y[Ub >> 2] - Md | 0;
                var yc = Gd + 1 | 0,
                    Nd = dh,
                    Od = eh,
                    Pd = Ld,
                    Qd = Md
            } else {
                yc = Gd, Nd = Wg, Od = Vg, Pd = Ug, Qd = Tg
            } if (Fg) {
                var gh = (A[Ri] & 255) + (A[Ii] & 255) | 0,
                    hh = (A[Ti] & 255) + (A[Si] & 255) | 0,
                    Rd = (A[Vi] & 255) + (A[Ui] & 255) | 0,
                    Sd = (A[Xi] & 255) + (A[Wi] & 255) | 0,
                    ih = hh + gh | 0;
                y[v >> 2] = Rd + ih + y[v >> 2] + Sd | 0;
                y[qc >> 2] = ih - Rd + y[qc >> 2] - Sd | 0;
                var Zc = yc + 1 | 0,
                    $c = 1,
                    Td = gh,
                    Ud = hh,
                    Vd = Rd,
                    Wd = Sd
            } else {
                Zc = yc, $c = 0, Td = Sg, Ud = Rg, Vd = Qg, Wd = Pg
            } if (Gg) {
                var jh = (A[Ki] & 255) + (A[Ji] & 255) | 0,
                    kh = (A[Mi] & 255) + (A[Li] & 255) | 0,
                    Xd = (A[Oi] & 255) + (A[Ni] & 255) | 0,
                    Yd = (A[Qi] & 255) + (A[Pi] & 255) | 0,
                    Zd = Zc + 1 | 0,
                    $d = $c + 1 | 0,
                    lh = kh + jh | 0;
                y[v >> 2] = Xd + lh + y[v >> 2] + Yd | 0;
                var ae = lh - Xd + y[qc >> 2] - Yd | 0;
                y[qc >> 2] = ae;
                var mh = (yc | 0) != 0;
                if (mh | Yh | Zh) {
                    if (mh) {
                        var nh = Zd,
                            oh = $d;
                        h = 50
                    } else {
                        be = $d, ce = Zd, de = ae, h = 55
                    }
                } else {
                    y[Ub >> 2] = Vd + Wd + Ud + Td - jh - kh - Xd - Yd >> 4;
                    var be = $d,
                        ce = Zd,
                        de = ae;
                    h = 55
                }
            } else {
                if ((yc | 0) == 0) {
                    var ee = $c,
                        ad = Zc;
                    h = 51
                } else {
                    nh = Zc, oh = $c, h = 50
                }
            }
            h == 50 && (y[Ub >> 2] >>= yc + 2, ee = oh, ad = nh, h = 51);
            if (h == 51) {
                var ph = (ee | 0) != 0;
                if (ph | $h | ai) {
                    if (ph) {
                        be = ee, ce = ad, de = y[qc >> 2], h = 55
                    } else {
                        var Jc = ad;
                        h = 56
                    }
                } else {
                    y[qc >> 2] = Jd + Kd + Id + Hd - Qd - Pd - Od - Nd >> 4, Jc = ad, h = 56
                }
            }
            h == 55 && (y[qc >> 2] = de >> be + 2, Jc = ce);
            Jc == 1 ? y[v >> 2] >>= 3 : Jc == 2 ? y[v >> 2] >>= 4 : Jc == 3 ? y[v >> 2] = y[v >> 2] * 21 >> 9 : y[v >> 2] >>= 5;
            ig(v);
            var fe = 0,
                ge = Gi,
                he = 0;
            a: for (;;) {
                for (var ej = he << 2, fj = fe + 1 | 0, Kc = 0;;) {
                    var qh = Kc + 1 | 0,
                        rh = fj + Kc | 0,
                        sh = fe + Kc | 0;
                    if (sh >>> 0 >= 64) {
                        break a
                    }
                    var ie = F[k + ((ej | sh >>> 1 & 3) << 2) >> 2];
                    q[ge + Kc | 0] = (ie | 0) < 0 ? 0 : (ie | 0) > 255 ? -1 : ie & 255;
                    if ((rh & 15 | 0) == 0) {
                        break
                    }
                    Kc = qh
                }
                fe = rh;
                ge = ge + qh | 0;
                he = he + 1 | 0
            }
            var th = Yc + 1 | 0;
            if ((th | 0) == 2) {
                break
            }
            Pg = Wd;
            Qg = Vd;
            Rg = Ud;
            Sg = Td;
            Tg = Qd;
            Ug = Pd;
            Vg = Od;
            Wg = Nd;
            Xg = Kd;
            Yg = Jd;
            Zg = Id;
            $g = Hd;
            Yc = th
        }
        rd(c, Fb)
    }
    m = i
}
hg.X = 1;

function ig(b) {
    var c = b + 4 | 0,
        d = y[c >> 2],
        f = b + 16 | 0,
        g = y[f >> 2],
        e = y[b >> 2];
    if ((d | g | 0) == 0) {
        y[b + 60 >> 2] = e, y[b + 56 >> 2] = e, y[b + 52 >> 2] = e, y[b + 48 >> 2] = e, y[b + 44 >> 2] = e, y[b + 40 >> 2] = e, y[b + 36 >> 2] = e, y[b + 32 >> 2] = e, y[b + 28 >> 2] = e, y[b + 24 >> 2] = e, y[b + 20 >> 2] = e, y[f >> 2] = e, y[b + 12 >> 2] = e, y[b + 8 >> 2] = e, y[c >> 2] = e
    } else {
        var i = d + e | 0,
            h = d >> 1,
            k = h + e | 0,
            h = e - h | 0,
            d = e - d | 0;
        y[b >> 2] = g + i | 0;
        e = g >> 1;
        y[f >> 2] = e + i | 0;
        y[(b + 32 | 0) >> 2] = i - e | 0;
        y[(b + 48 | 0) >> 2] = i - g | 0;
        y[c >> 2] = g + k | 0;
        y[(b + 20 | 0) >> 2] = e + k | 0;
        y[(b + 36 | 0) >> 2] = k - e | 0;
        y[(b + 52 | 0) >> 2] = k - g | 0;
        y[(b + 8 | 0) >> 2] = g + h | 0;
        y[(b + 24 | 0) >> 2] = e + h | 0;
        y[(b + 40 | 0) >> 2] = h - e | 0;
        y[(b + 56 | 0) >> 2] = h - g | 0;
        y[(b + 12 | 0) >> 2] = g + d | 0;
        y[(b + 28 | 0) >> 2] = e + d | 0;
        y[(b + 44 | 0) >> 2] = d - e | 0;
        y[(b + 60 | 0) >> 2] = d - g | 0
    }
}
ig.X = 1;

function jg(b, c, d, f) {
    var g, e = (y[d + 284 >> 2] | 0) == 0;
    a: do {
        if (e) {
            var i = 0
        } else {
            for (i = 0;;) {
                var h = y[d + 288 + i * 20 >> 2];
                if (h == 0) {
                    i = 0;
                    break a
                } else {
                    if (h == 5) {
                        break
                    }
                }
                i = i + 1 | 0
            }
            i = 1
        }
    } while (0);
    e = y[c + 16 >> 2];
    do {
        if (e == 0) {
            if ((y[f >> 2] | 0) == 5) {
                y[b + 4 >> 2] = 0;
                var k = y[b >> 2] = 0
            } else {
                k = y[b >> 2]
            }
            var l = d + 20 | 0,
                j = F[l >> 2],
                h = b | 0;
            if (j >>> 0 < k >>> 0) {
                if (g = F[c + 20 >> 2], (k - j | 0) >>> 0 < g >>> 1 >>> 0) {
                    g = 11
                } else {
                    var n = y[b + 4 >> 2] + g | 0;
                    g = 15
                }
            } else {
                g = 11
            }
            a: do {
                if (g == 11) {
                    n = j >>> 0 > k >>> 0;
                    do {
                        if (n) {
                            var p = F[c + 20 >> 2];
                            if ((j - k | 0) >>> 0 > p >>> 1 >>> 0) {
                                n = y[b + 4 >> 2] - p | 0;
                                break a
                            }
                        }
                    } while (0);
                    n = y[b + 4 >> 2]
                }
            } while (0);
            k = f + 4 | 0;
            (y[k >> 2] | 0) == 0 ? (h = y[d + 24 >> 2], h = j + n + ((h | 0) < 0 ? h : 0) | 0) : (j = b + 4 | 0, y[j >> 2] = n, l = y[l >> 2], g = d + 24 | 0, p = y[g >> 2], p = l + n + ((p | 0) < 0 ? p : 0) | 0, (y[k >> 2] | 0) == 0 ? h = p : (i | 0) == 0 ? (y[h >> 2] = l, h = p) : (y[j >> 2] = 0, l = y[g >> 2], y[h >> 2] = (l | 0) < 0 ? -l | 0 : 0, h = 0))
        } else {
            if (e == 1) {
                (y[f >> 2] | 0) == 5 ? h = 0 : (h = y[b + 12 >> 2], h = F[b + 8 >> 2] >>> 0 > F[d + 12 >> 2] >>> 0 ? y[c + 12 >> 2] + h | 0 : h);
                var p = F[c + 36 >> 2],
                    r = (p | 0) == 0,
                    j = r ? 0 : y[d + 12 >> 2] + h | 0,
                    k = (l = (y[f + 4 >> 2] | 0) == 0) ? (((j | 0) != 0) << 31 >> 31) + j | 0 : j;
                (j = (k | 0) != 0) ? (g = k - 1 | 0, k = (g >>> 0) % (p >>> 0), g = Math.floor((g >>> 0) / (p >>> 0))) : g = k = I;
                a: do {
                    if (r) {
                        var o = 0
                    } else {
                        for (var t = y[c + 40 >> 2], s = p >>> 0 > 1 ? p : 1, u = 0, w = 0;;) {
                            if (w = y[t + (u << 2) >> 2] + w | 0, u = u + 1 | 0, (u | 0) == (s | 0)) {
                                o = w;
                                break a
                            }
                        }
                    }
                } while (0);
                a: do {
                    if (j) {
                        p = y[c + 40 >> 2];
                        t = o * g | 0;
                        for (s = 0;;) {
                            r = s + 1 | 0;
                            t = y[p + (s << 2) >> 2] + t | 0;
                            if (r >>> 0 > k >>> 0) {
                                var v = t;
                                break a
                            }
                            s = r
                        }
                    } else {
                        v = 0
                    }
                } while (0);
                j = l ? y[c + 28 >> 2] + v | 0 : v;
                k = y[d + 32 >> 2] + y[c + 32 >> 2] | 0;
                l = b + 12 | 0;
                (i | 0) == 0 ? (j = ((k | 0) < 0 ? k : 0) + j + y[d + 28 >> 2] | 0, y[l >> 2] = h, y[b + 8 >> 2] = y[d + 12 >> 2], h = j) : (y[l >> 2] = 0, h = y[b + 8 >> 2] = 0)
            } else {
                (y[f >> 2] | 0) == 5 ? (j = l = 0, h = b + 12 | 0) : (l = F[d + 12 >> 2], h = b + 12 | 0, j = y[h >> 2], j = F[b + 8 >> 2] >>> 0 > l >>> 0 ? y[c + 12 >> 2] + j | 0 : j, l = l + j << 1, l = (y[f + 4 >> 2] | 0) != 0 ? l : l - 1 | 0), (i | 0) == 0 ? (y[h >> 2] = j, y[b + 8 >> 2] = y[d + 12 >> 2], h = l) : (y[h >> 2] = 0, h = y[b + 8 >> 2] = 0)
            }
        }
    } while (0);
    return h
}
jg.X = 1;

function Rc(b, c) {
    var d;
    Pc(c, 0, 952);
    var f = S(b, 1),
        g = (f | 0) == -1;
    a: do {
        if (g) {
            d = 1
        } else {
            d = (f | 0) == 1;
            y[c >> 2] = d & 1;
            do {
                if (d) {
                    var e = S(b, 8);
                    if ((e | 0) == -1) {
                        d = 1;
                        break a
                    }
                    y[c + 4 >> 2] = e;
                    if ((e | 0) == 255) {
                        e = S(b, 16);
                        if ((e | 0) == -1) {
                            d = 1;
                            break a
                        }
                        y[c + 8 >> 2] = e;
                        e = S(b, 16);
                        if ((e | 0) == -1) {
                            d = 1;
                            break a
                        }
                        y[c + 12 >> 2] = e
                    }
                }
            } while (0);
            d = S(b, 1);
            if ((d | 0) == -1) {
                d = 1
            } else {
                d = (d | 0) == 1;
                y[c + 16 >> 2] = d & 1;
                if (d) {
                    d = S(b, 1);
                    if ((d | 0) == -1) {
                        d = 1;
                        break
                    }
                    y[c + 20 >> 2] = (d | 0) == 1 & 1
                }
                d = S(b, 1);
                if ((d | 0) == -1) {
                    d = 1
                } else {
                    d = (d | 0) == 1;
                    y[c + 24 >> 2] = d & 1;
                    if (d) {
                        d = S(b, 3);
                        if ((d | 0) == -1) {
                            d = 1;
                            break
                        }
                        y[c + 28 >> 2] = d;
                        d = S(b, 1);
                        if ((d | 0) == -1) {
                            d = 1;
                            break
                        }
                        y[c + 32 >> 2] = (d | 0) == 1 & 1;
                        d = S(b, 1);
                        if ((d | 0) == -1) {
                            d = 1;
                            break
                        }
                        d = (d | 0) == 1;
                        y[c + 36 >> 2] = d & 1;
                        if (d) {
                            d = S(b, 8);
                            if ((d | 0) == -1) {
                                d = 1;
                                break
                            }
                            y[c + 40 >> 2] = d;
                            d = S(b, 8);
                            if ((d | 0) == -1) {
                                d = 1;
                                break
                            }
                            y[c + 44 >> 2] = d;
                            d = S(b, 8);
                            if ((d | 0) == -1) {
                                d = 1;
                                break
                            }
                            y[c + 48 >> 2] = d
                        } else {
                            y[c + 40 >> 2] = 2, y[c + 44 >> 2] = 2, y[c + 48 >> 2] = 2
                        }
                    } else {
                        y[c + 28 >> 2] = 5, y[c + 40 >> 2] = 2, y[c + 44 >> 2] = 2, y[c + 48 >> 2] = 2
                    }
                    d = S(b, 1);
                    if ((d | 0) == -1) {
                        d = 1
                    } else {
                        d = (d | 0) == 1;
                        y[c + 52 >> 2] = d & 1;
                        if (d) {
                            d = c + 56 | 0;
                            e = T(b, d);
                            if ((e | 0) != 0) {
                                d = e;
                                break
                            }
                            if (F[d >> 2] >>> 0 > 5) {
                                d = 1;
                                break
                            }
                            d = c + 60 | 0;
                            e = T(b, d);
                            if ((e | 0) != 0) {
                                d = e;
                                break
                            }
                            if (F[d >> 2] >>> 0 > 5) {
                                d = 1;
                                break
                            }
                        }
                        d = S(b, 1);
                        if ((d | 0) == -1) {
                            d = 1
                        } else {
                            d = (d | 0) == 1;
                            y[c + 64 >> 2] = d & 1;
                            if (d) {
                                d = id(b);
                                if ((od(b, 32) | 0) == -1 | (d | 0) == 0) {
                                    d = 1;
                                    break
                                }
                                y[c + 68 >> 2] = d;
                                d = id(b);
                                if ((od(b, 32) | 0) == -1 | (d | 0) == 0) {
                                    d = 1;
                                    break
                                }
                                y[c + 72 >> 2] = d;
                                d = S(b, 1);
                                if ((d | 0) == -1) {
                                    d = 1;
                                    break
                                }
                                y[c + 76 >> 2] = (d | 0) == 1 & 1
                            }
                            d = S(b, 1);
                            if ((d | 0) == -1) {
                                d = 1
                            } else {
                                e = (d | 0) == 1;
                                d = c + 80 | 0;
                                y[d >> 2] = e & 1;
                                if (e) {
                                    if (e = kg(b, c + 84 | 0), (e | 0) != 0) {
                                        d = e;
                                        break
                                    }
                                } else {
                                    y[c + 84 >> 2] = 1, y[c + 96 >> 2] = 288000001, y[c + 224 >> 2] = 288000001, y[c + 480 >> 2] = 24, y[c + 484 >> 2] = 24, y[c + 488 >> 2] = 24, y[c + 492 >> 2] = 24
                                }
                                e = S(b, 1);
                                if ((e | 0) == -1) {
                                    d = 1
                                } else {
                                    var i = (e | 0) == 1,
                                        e = c + 496 | 0;
                                    y[e >> 2] = i & 1;
                                    if (i) {
                                        if (i = kg(b, c + 500 | 0), (i | 0) != 0) {
                                            d = i;
                                            break
                                        }
                                    } else {
                                        y[c + 500 >> 2] = 1, y[c + 512 >> 2] = 240000001, y[c + 640 >> 2] = 240000001, y[c + 896 >> 2] = 24, y[c + 900 >> 2] = 24, y[c + 904 >> 2] = 24, y[c + 908 >> 2] = 24
                                    }
                                    d = (y[d >> 2] | 0) == 0 ? (y[e >> 2] | 0) == 0 ? 47 : 45 : 45;
                                    if (d == 45) {
                                        d = S(b, 1);
                                        if ((d | 0) == -1) {
                                            d = 1;
                                            break
                                        }
                                        y[c + 912 >> 2] = (d | 0) == 1 & 1
                                    }
                                    d = S(b, 1);
                                    if ((d | 0) == -1) {
                                        d = 1
                                    } else {
                                        if (y[c + 916 >> 2] = (d | 0) == 1 & 1, d = S(b, 1), (d | 0) == -1) {
                                            d = 1
                                        } else {
                                            d = (d | 0) == 1;
                                            y[c + 920 >> 2] = d & 1;
                                            if (d) {
                                                d = S(b, 1);
                                                if ((d | 0) == -1) {
                                                    d = 1;
                                                    break
                                                }
                                                y[c + 924 >> 2] = (d | 0) == 1 & 1;
                                                d = c + 928 | 0;
                                                e = T(b, d);
                                                if ((e | 0) != 0) {
                                                    d = e;
                                                    break
                                                }
                                                if (F[d >> 2] >>> 0 > 16) {
                                                    d = 1;
                                                    break
                                                }
                                                d = c + 932 | 0;
                                                e = T(b, d);
                                                if ((e | 0) != 0) {
                                                    d = e;
                                                    break
                                                }
                                                if (F[d >> 2] >>> 0 > 16) {
                                                    d = 1;
                                                    break
                                                }
                                                d = c + 936 | 0;
                                                e = T(b, d);
                                                if ((e | 0) != 0) {
                                                    d = e;
                                                    break
                                                }
                                                if (F[d >> 2] >>> 0 > 16) {
                                                    d = 1;
                                                    break
                                                }
                                                d = c + 940 | 0;
                                                e = T(b, d);
                                                if ((e | 0) != 0) {
                                                    d = e;
                                                    break
                                                }
                                                if (F[d >> 2] >>> 0 > 16) {
                                                    d = 1;
                                                    break
                                                }
                                                d = T(b, c + 944 | 0);
                                                if ((d | 0) != 0) {
                                                    break
                                                }
                                                d = T(b, c + 948 | 0);
                                                if ((d | 0) != 0) {
                                                    break
                                                }
                                            } else {
                                                y[c + 924 >> 2] = 1, y[c + 928 >> 2] = 2, y[c + 932 >> 2] = 1, y[c + 936 >> 2] = 16, y[c + 940 >> 2] = 16, y[c + 944 >> 2] = 16, y[c + 948 >> 2] = 16
                                            }
                                            d = 0
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } while (0);
    return d
}
Rc.X = 1;

function kg(b, c) {
    var d = c | 0,
        f = T(b, d),
        g = (f | 0) == 0;
    a: do {
        if (g) {
            var e = y[d >> 2] + 1 | 0;
            y[d >> 2] = e;
            if (e >>> 0 > 32) {
                e = 1
            } else {
                var i = S(b, 4);
                if ((i | 0) == -1) {
                    e = 1
                } else {
                    e = c + 4 | 0;
                    y[e >> 2] = i;
                    var h = S(b, 4);
                    if ((h | 0) == -1) {
                        e = 1
                    } else {
                        i = c + 8 | 0;
                        y[i >> 2] = h;
                        for (h = 0;;) {
                            var k = c + 268 + (h << 2) | 0,
                                l = c + 140 + (h << 2) | 0,
                                j = c + 12 + (h << 2) | 0;
                            if (h >>> 0 >= F[d >> 2] >>> 0) {
                                break
                            }
                            var n = T(b, j);
                            if ((n | 0) != 0) {
                                e = n;
                                break a
                            }
                            n = y[j >> 2];
                            if ((n | 0) == -1) {
                                e = 1;
                                break a
                            }
                            n = n + 1 | 0;
                            y[j >> 2] = n;
                            y[j >> 2] = n << y[e >> 2] + 6;
                            j = T(b, l);
                            if ((j | 0) != 0) {
                                e = j;
                                break a
                            }
                            j = y[l >> 2];
                            if ((j | 0) == -1) {
                                e = 1;
                                break a
                            }
                            j = j + 1 | 0;
                            y[l >> 2] = j;
                            y[l >> 2] = j << y[i >> 2] + 4;
                            l = S(b, 1);
                            if ((l | 0) == -1) {
                                e = 1;
                                break a
                            }
                            y[k >> 2] = (l | 0) == 1 & 1;
                            h = h + 1 | 0
                        }
                        e = S(b, 5);
                        (e | 0) == -1 ? e = 1 : (y[c + 396 >> 2] = e + 1 | 0, e = S(b, 5), (e | 0) == -1 ? e = 1 : (y[c + 400 >> 2] = e + 1 | 0, e = S(b, 5), (e | 0) == -1 ? e = 1 : (y[c + 404 >> 2] = e + 1 | 0, e = S(b, 5), (e | 0) == -1 ? e = 1 : (y[c + 408 >> 2] = e, e = 0))))
                    }
                }
            }
        } else {
            e = f
        }
    } while (0);
    return e
}
kg.X = 1;

function lg(b, c, d, f, g, e) {
    var b = b + 16 | 0,
        i = y[b >> 2];
    if ((i | 0) == 0) {
        b = 3
    } else {
        if ((y[i + 60 >> 2] | 0) == 0) {
            b = 3
        } else {
            y[c >> 2] = 1;
            y[d >> 2] = y[y[b >> 2] + 64 >> 2] << 1;
            var h = y[b >> 2];
            y[f >> 2] = (y[h + 52 >> 2] << 4) - (y[h + 68 >> 2] + y[h + 64 >> 2] << 1) | 0;
            y[g >> 2] = y[y[b >> 2] + 72 >> 2] << 1;
            h = y[b >> 2];
            h = (y[h + 56 >> 2] << 4) - (y[h + 76 >> 2] + y[h + 72 >> 2] << 1) | 0;
            b = 4
        }
    }
    b == 3 && (y[c >> 2] = 0, y[d >> 2] = 0, y[f >> 2] = 0, h = y[g >> 2] = 0);
    y[e >> 2] = h
}
lg.X = 1;

function mg(b, c, d, f, g) {
    var e = m;
    m += 204;
    var i, h = e + 4,
        k = e + 12,
        l = e + 104,
        j = e + 176,
        n = e + 196,
        p = e + 200;
    y[n >> 2] = 0;
    var r = b + 3344 | 0;
    (y[r >> 2] | 0) == 0 ? i = 3 : (y[b + 3348 >> 2] | 0) != (c | 0) ? i = 3 : (i = b + 3356 | 0, y[j >> 2] = y[i >> 2], y[j + 4 >> 2] = y[i + 4 >> 2], y[j + 8 >> 2] = y[i + 8 >> 2], y[j + 12 >> 2] = y[i + 12 >> 2], y[j + 16 >> 2] = y[i + 16 >> 2], y[j + 4 >> 2] = y[j >> 2], y[j + 8 >> 2] = 0, y[j + 16 >> 2] = 0, y[g >> 2] = y[b + 3352 >> 2], i = 5);
    if (i == 3) {
        if ((Mc(c, d, j, g) | 0) != 0) {
            var o = 3;
            i = 58
        } else {
            i = b + 3356 | 0, y[i >> 2] = y[j >> 2], y[i + 4 >> 2] = y[j + 4 >> 2], y[i + 8 >> 2] = y[j + 8 >> 2], y[i + 12 >> 2] = y[j + 12 >> 2], y[i + 16 >> 2] = y[j + 16 >> 2], y[b + 3352 >> 2] = y[g >> 2], y[b + 3348 >> 2] = c, i = 5
        }
    }
    a: do {
        if (i == 5) {
            y[r >> 2] = 0;
            d = j;
            c = h;
            if ((S(d, 1) | 0) == -1) {
                c = 1
            } else {
                var t = S(d, 2),
                    o = c + 4 | 0;
                y[o >> 2] = t;
                d = S(d, 5);
                y[c >> 2] = d;
                c = (d - 2 | 0) >>> 0 < 3 ? 1 : (d - 7 | 0) >>> 0 < 2 | (d | 0) == 5 && (y[o >> 2] | 0) == 0 ? 1 : (d == 12 || d == 11 || d == 10 || d == 9 || d == 6) && (y[o >> 2] | 0) != 0 ? 1 : 0
            } if ((c | 0) != 0) {
                o = 3
            } else {
                if (c = h | 0, o = F[c >> 2], (o | 0) == 0 | o >>> 0 > 12) {
                    o = 0
                } else {
                    if (o = Ie(j, h, b, n), o == 0) {
                        o = (y[n >> 2] | 0) == 0;
                        b: do {
                            if (!o) {
                                i = (y[b + 1184 >> 2] | 0) == 0;
                                do {
                                    if (!i && (y[b + 16 >> 2] | 0) != 0) {
                                        if ((y[b + 3380 >> 2] | 0) != 0) {
                                            o = 3;
                                            break a
                                        }
                                        if ((y[b + 1188 >> 2] | 0) == 0) {
                                            i = b + 1220 | 0;
                                            var s = Jf(i),
                                                u = b + 1336 | 0;
                                            y[b + 1336 >> 2] = s;
                                            Qf(i);
                                            gg(b, u, 0)
                                        } else {
                                            gg(b, b + 1336 | 0, y[b + 1372 >> 2])
                                        }
                                        y[g >> 2] = 0;
                                        y[r >> 2] = 1;
                                        y[b + 1180 >> 2] = 0;
                                        var s = b + 1336 | 0,
                                            u = b + 1368 | 0,
                                            w = b + 1360 | 0;
                                        i = 53;
                                        break b
                                    }
                                } while (0);
                                y[b + 1188 >> 2] = 0;
                                y[b + 1180 >> 2] = 0
                            }
                            i = 18
                        } while (0);
                        if (i == 18) {
                            if (w = F[c >> 2], w == 7) {
                                if ((Oc(j, k) | 0) == 0) {
                                    ze(b, k);
                                    o = 0;
                                    break
                                }
                                b = k + 40 | 0;
                                Ae(y[b >> 2]);
                                y[b >> 2] = 0;
                                b = k + 84 | 0;
                                Ae(y[b >> 2]);
                                y[b >> 2] = 0;
                                o = 3;
                                break
                            } else {
                                if (w == 8) {
                                    if ((Sc(j, l) | 0) == 0) {
                                        Be(b, l);
                                        o = 0;
                                        break
                                    }
                                    b = l + 20 | 0;
                                    Ae(y[b >> 2]);
                                    y[b >> 2] = 0;
                                    b = l + 24 | 0;
                                    Ae(y[b >> 2]);
                                    y[b >> 2] = 0;
                                    b = l + 28 | 0;
                                    Ae(y[b >> 2]);
                                    y[b >> 2] = 0;
                                    b = l + 44 | 0;
                                    Ae(y[b >> 2]);
                                    y[b >> 2] = 0;
                                    o = 3;
                                    break
                                } else {
                                    if (w == 5 || w == 1) {
                                        s = b + 1180 | 0;
                                        if ((y[s >> 2] | 0) != 0) {
                                            o = 0;
                                            break
                                        }
                                        y[b + 1184 >> 2] = 1;
                                        u = ((y[b + 1188 >> 2] | 0) == 0 & 1 | 0) == 0;
                                        do {
                                            if (!u) {
                                                y[b + 1204 >> 2] = 0;
                                                y[b + 1208 >> 2] = f;
                                                Wc(j, e);
                                                u = b + 8 | 0;
                                                o = y[u >> 2];
                                                w = (w | 0) == 5;
                                                d = Ce(b, y[e >> 2], w & 1);
                                                if ((d | 0) == 0) {
                                                    if ((o | 0) == (y[u >> 2] | 0)) {
                                                        break
                                                    }
                                                    k = F[b + 16 >> 2];
                                                    y[p >> 2] = 1;
                                                    l = b | 0;
                                                    f = F[l >> 2];
                                                    f = f >>> 0 < 32 ? y[b + 20 + (f << 2) >> 2] : 0;
                                                    y[g >> 2] = 0;
                                                    y[r >> 2] = 1;
                                                    if (w) {
                                                        if (g = ed(p, j, k, y[b + 12 >> 2]), (y[p >> 2] | g | 0) != 0) {
                                                            i = 38
                                                        } else {
                                                            if (p = b + 1220 | 0, (y[b + 1276 >> 2] | 0) != 0 | (f | 0) == 0) {
                                                                i = 38
                                                            } else {
                                                                if ((y[f + 52 >> 2] | 0) != (y[k + 52 >> 2] | 0)) {
                                                                    i = 38
                                                                } else {
                                                                    if ((y[f + 56 >> 2] | 0) != (y[k + 56 >> 2] | 0)) {
                                                                        i = 38
                                                                    } else {
                                                                        if ((y[f + 88 >> 2] | 0) != (y[k + 88 >> 2] | 0)) {
                                                                            i = 38
                                                                        } else {
                                                                            g = (y[p >> 2] | 0) == 0;
                                                                            b: do {
                                                                                if (!g) {
                                                                                    for (y[p + 60 >> 2] = 1;;) {
                                                                                        if ((Nf(p) | 0) != 0) {
                                                                                            break b
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } while (0);
                                                                            i = 40
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else {
                                                        i = 38
                                                    }
                                                    i == 38 && (y[b + 1280 >> 2] = 0);
                                                    y[l >> 2] = y[u >> 2];
                                                    o = 2;
                                                    break a
                                                }
                                                y[b + 4 >> 2] = 256;
                                                y[b + 12 >> 2] = 0;
                                                y[u >> 2] = 32;
                                                y[b + 16 >> 2] = 0;
                                                y[b + 3380 >> 2] = 0;
                                                o = (d | 0) == 65535 ? 5 : 4;
                                                break a
                                            }
                                        } while (0);
                                        if ((y[b + 3380 >> 2] | 0) != 0) {
                                            o = 3;
                                            break
                                        }
                                        u = b + 1368 | 0;
                                        w = b + 2356 | 0;
                                        d = b + 16 | 0;
                                        if ((Uc(j, w, y[d >> 2], y[b + 12 >> 2], h) | 0) != 0) {
                                            o = 3;
                                            break
                                        }
                                        if (((y[b + 1188 >> 2] | 0) == 0 & 1 | 0) == 0) {
                                            c = b + 1220 | 0
                                        } else {
                                            o = b + 1220 | 0;
                                            if ((y[c >> 2] | 0) != 5 && (Rf(o, y[b + 2368 >> 2], (y[h + 4 >> 2] | 0) != 0 & 1, y[y[d >> 2] + 48 >> 2]) | 0) != 0) {
                                                o = 3;
                                                break
                                            }
                                            c = Jf(o);
                                            y[b + 1336 >> 2] = c;
                                            c = o
                                        }
                                        w >>= 2;
                                        o = u >> 2;
                                        for (d = w + 247; w < d; w++, o++) {
                                            y[o] = y[w]
                                        }
                                        y[b + 1188 >> 2] = 1;
                                        w = b + 1360 | 0;
                                        o = h;
                                        d = w;
                                        t = y[o + 4 >> 2];
                                        y[d >> 2] = y[o >> 2];
                                        y[d + 4 >> 2] = t;
                                        o = y[b + 16 >> 2];
                                        Je(y[b + 1172 >> 2], y[b + 12 >> 2], y[b + 1432 >> 2], y[o + 52 >> 2], y[o + 56 >> 2]);
                                        Qf(c);
                                        if ((Gf(c, b + 1436 | 0, y[b + 1380 >> 2], y[b + 1412 >> 2]) | 0) != 0) {
                                            o = 3;
                                            break
                                        }
                                        c = b + 1336 | 0;
                                        if ((fd(j, b, c, u) | 0) != 0) {
                                            jd(b, y[b + 1368 >> 2]);
                                            o = 3;
                                            break
                                        }
                                        d = aa;
                                        o = (y[b + 1404 >> 2] | 0) == 0;
                                        do {
                                            if (o) {
                                                if ((y[b + 1196 >> 2] | 0) == (y[b + 1176 >> 2] | 0)) {
                                                    var v = 1,
                                                        d = 7;
                                                    break
                                                }
                                            } else {
                                                d = F[b + 1176 >> 2];
                                                t = (d | 0) == 0;
                                                b: do {
                                                    if (t) {
                                                        var z = 0
                                                    } else {
                                                        for (var B = y[b + 1212 >> 2], D = d >>> 0 > 1 ? d : 1, C = 0, E = 0;;) {
                                                            if (E = ((y[B + C * 216 + 196 >> 2] | 0) != 0 & 1) + E | 0, C = C + 1 | 0, (C | 0) == (D | 0)) {
                                                                z = E;
                                                                break b
                                                            }
                                                        }
                                                    }
                                                } while (0);
                                                if ((z | 0) == (d | 0)) {
                                                    v = 1;
                                                    d = 7;
                                                    break
                                                }
                                            }
                                            d = 6
                                        } while (0);
                                        d == 6 && (v = 0);
                                        if ((v | 0) == 0) {
                                            o = 0;
                                            break
                                        }
                                        y[s >> 2] = 1;
                                        s = c
                                    } else {
                                        o = 0;
                                        break
                                    }
                                }
                            }
                        }
                        Sf(s, y[b + 1212 >> 2]);
                        c = b;
                        y[c + 1196 >> 2] = 0;
                        y[c + 1192 >> 2] = 0;
                        o = c + 1176 | 0;
                        d = (y[o >> 2] | 0) == 0;
                        b: do {
                            if (!d) {
                                t = c + 1212 | 0;
                                for (B = 0;;) {
                                    D = B + 1 | 0;
                                    y[(y[t >> 2] + B * 216 + 4 | 0) >> 2] = 0;
                                    y[(y[t >> 2] + B * 216 + 196 | 0) >> 2] = 0;
                                    if (D >>> 0 >= F[o >> 2] >>> 0) {
                                        break b
                                    }
                                    B = D
                                }
                            }
                        } while (0);
                        c = jg(b + 1284 | 0, y[b + 16 >> 2], u, w);
                        o = b + 1188 | 0;
                        (y[o >> 2] | 0) != 0 && (d = b + 1220 | 0, (y[b + 1364 >> 2] | 0) == 0 ? Kf(d, 0, s, y[b + 1380 >> 2], c, (y[b + 1360 >> 2] | 0) == 5 & 1, y[b + 1208 >> 2], y[b + 1204 >> 2]) : Kf(d, b + 1644 | 0, s, y[b + 1380 >> 2], c, (y[b + 1360 >> 2] | 0) == 5 & 1, y[b + 1208 >> 2], y[b + 1204 >> 2]));
                        y[b + 1184 >> 2] = 0;
                        y[o >> 2] = 0;
                        o = 1
                    } else {
                        o = o == 65520 ? 4 : 3
                    }
                }
            }
        }
    } while (0);
    m = e;
    return o
}
mg.X = 1;

function ng(b) {
    for (var c = 0;;) {
        var d = b + 20 + (c << 2) | 0,
            f = y[d >> 2];
        (f | 0) != 0 && (Ae(y[f + 40 >> 2]), y[(y[d >> 2] + 40 | 0) >> 2] = 0, Ae(y[y[d >> 2] + 84 >> 2]), y[(y[d >> 2] + 84 | 0) >> 2] = 0, Ae(y[d >> 2]), y[d >> 2] = 0);
        c = c + 1 | 0;
        if ((c | 0) == 32) {
            var g = 0;
            break
        }
    }
    for (;;) {
        if (c = b + 148 + (g << 2) | 0, d = y[c >> 2], (d | 0) != 0 && (Ae(y[d + 20 >> 2]), y[(y[c >> 2] + 20 | 0) >> 2] = 0, Ae(y[y[c >> 2] + 24 >> 2]), y[(y[c >> 2] + 24 | 0) >> 2] = 0, Ae(y[y[c >> 2] + 28 >> 2]), y[(y[c >> 2] + 28 | 0) >> 2] = 0, Ae(y[y[c >> 2] + 44 >> 2]), y[(y[c >> 2] + 44 | 0) >> 2] = 0, Ae(y[c >> 2]), y[c >> 2] = 0), g = g + 1 | 0, (g | 0) == 256) {
            break
        }
    }
    g = b + 3376 | 0;
    Ae(y[g >> 2]);
    y[g >> 2] = 0;
    g = b + 1212 | 0;
    Ae(y[g >> 2]);
    y[g >> 2] = 0;
    g = b + 1172 | 0;
    Ae(y[g >> 2]);
    y[g >> 2] = 0;
    Ee(b + 1220 | 0)
}
ng.X = 1;
Module._broadwaySetStreamLength = (function(b) {
    y[og >> 2] = b
});

function pg(b, c, d) {
    var f = m;
    m += 4;
    var g = (c | 0) == 0 | (d | 0) == 0;
    a: do {
        if (g) {
            var e = -1
        } else {
            var i = c | 0;
            if ((y[i >> 2] | 0) == 0) {
                e = -1
            } else {
                var h = c + 4 | 0;
                if ((y[h >> 2] | 0) == 0) {
                    e = -1
                } else {
                    if ((b | 0) == 0) {
                        e = -3
                    } else {
                        if (e = b, (y[e >> 2] | 0) == 0) {
                            e = -3
                        } else {
                            var k = d | 0;
                            y[k >> 2] = 0;
                            y[f >> 2] = 0;
                            var l = y[h >> 2],
                                j = y[i >> 2],
                                i = b + 8 | 0;
                            y[b + 3392 >> 2] = y[c + 12 >> 2];
                            var h = c + 8 | 0,
                                n = 1,
                                p = j,
                                r = l,
                                l = 0;
                            b: for (;;) {
                                if ((y[e >> 2] | 0) == 2) {
                                    y[e >> 2] = 1;
                                    y[k >> 2] = p + l | 0;
                                    break
                                }
                                l = mg(i, p, r, y[h >> 2], f);
                                j = y[f >> 2];
                                p = p + j | 0;
                                r = r - j | 0;
                                r = (r | 0) < 0 ? 0 : r;
                                y[k >> 2] = p;
                                do {
                                    if (l == 2) {
                                        break b
                                    } else {
                                        if (l == 1) {
                                            b = b + 4 | 0;
                                            y[b >> 2] = y[b >> 2] + 1 | 0;
                                            e = (r | 0) == 0 ? 2 : 3;
                                            break a
                                        } else {
                                            if (l == 4) {
                                                var o = 0;
                                                c: for (;;) {
                                                    if (o >>> 0 >= 256) {
                                                        var t = 1;
                                                        break
                                                    }
                                                    var s = F[i + 148 + (o << 2) >> 2],
                                                        u = (s | 0) == 0;
                                                    do {
                                                        if (!u) {
                                                            var w = y[i + 20 + (y[s + 4 >> 2] << 2) >> 2];
                                                            if ((w | 0) != 0 && (De(s, y[w + 52 >> 2], y[w + 56 >> 2]) | 0) == 0) {
                                                                t = 0;
                                                                break c
                                                            }
                                                        }
                                                    } while (0);
                                                    o = o + 1 | 0
                                                }
                                                o = ((t | 0) == 0 & 1 | r | 0) != 0 ? n : -2
                                            } else {
                                                if (l == 5) {
                                                    e = -4;
                                                    break a
                                                } else {
                                                    o = n
                                                }
                                            }
                                        }
                                    }
                                } while (0);
                                if ((r | 0) == 0) {
                                    e = o;
                                    break a
                                }
                                n = o;
                                l = j
                            }
                            k = b + 1288 | 0;
                            (y[k >> 2] | 0) == 0 ? e = 4 : (y[b + 1244 >> 2] | 0) == (y[b + 1248 >> 2] | 0) ? e = 4 : (y[k >> 2] = 0, y[e >> 2] = 2, e = 3)
                        }
                    }
                }
            }
        }
    } while (0);
    m = f;
    return e
}
pg.X = 1;

function qg() {
    var b = y[rg >> 2],
        c = sg,
        d = m;
    m += 12;
    var f = d + 4,
        g = d + 8;
    if ((b | 0) == 0 | (c | 0) == 0) {
        c = -1
    } else {
        var e = (b + 8 | 0) + 1220 | 0,
            b = e + 20 | 0,
            i = F[b >> 2];
        i >>> 0 < F[e + 16 >> 2] >>> 0 ? (e = y[e + 12 >> 2], y[b >> 2] = i + 1 | 0, b = e + (i << 4) | 0) : b = 0;
        (b | 0) == 0 ? b = 0 : (y[g >> 2] = y[b + 4 >> 2], y[f >> 2] = y[b + 12 >> 2], y[d >> 2] = y[b + 8 >> 2], b = y[b >> 2]);
        (b | 0) == 0 ? c = 0 : (y[c >> 2] = b, y[c + 4 >> 2] = y[g >> 2], y[c + 8 >> 2] = y[f >> 2], y[c + 12 >> 2] = y[d >> 2], c = 2)
    }
    m = d;
    return c
}
Module._broadwayCreateStream = (function(b) {
    var c = og,
        d = jc(b);
    y[c + 8 >> 2] = d;
    y[c + 4 >> 2] = d;
    y[c >> 2] = b;
    y[c + 12 >> 2] = d + b | 0;
    return y[og + 4 >> 2]
});
Module._broadwayPlayStream = (function() {
    var b = og;
    y[tg >> 2] = y[b + 4 >> 2];
    for (y[tg + 4 >> 2] = y[b >> 2];;) {
        if (ug(), (y[tg + 4 >> 2] | 0) == 0) {
            break
        }
    }
});
Module._broadwayInit = (function() {
    var b = rg;
    if ((b | 0) == 0) {
        b = -1
    } else {
        var c = jc(3396);
        if ((c | 0) == 0) {
            b = -4
        } else {
            var d = c + 8 | 0;
            Pc(d, 0, 3388);
            y[d + 8 >> 2] = 32;
            y[d + 4 >> 2] = 256;
            y[d + 1332 >> 2] = 1;
            var f = jc(2112);
            y[d + 3376 >> 2] = f;
            (((f | 0) == 0 ? 1 : 0) | 0) == 0 ? (y[c >> 2] = 1, y[c + 4 >> 2] = 0, y[b >> 2] = c, b = 0) : ((c | 0) != 0 && (ng(c + 8 | 0), Ae(c)), b = -4)
        }
    }(b | 0) == 0 ? (y[vg >> 2] = 1, y[wg >> 2] = 1) : (xg(Q.aa | 0), yg());
    return -1
});

function ug() {
    var b;
    y[tg + 8 >> 2] = y[wg >> 2];
    var c = pg(y[rg >> 2], tg, zg);
    if (c == 4) {
        var d = y[rg >> 2],
            f = Ag;
        if ((d | 0) == 0 | (f | 0) == 0) {
            f = -1
        } else {
            if (b = d + 8 | 0, (y[d + 24 >> 2] | 0) == 0) {
                f = -6
            } else {
                if ((y[d + 20 >> 2] | 0) == 0) {
                    f = -6
                } else {
                    d = y[b + 16 >> 2];
                    y[f + 4 >> 2] = ((d | 0) == 0 ? 0 : y[d + 52 >> 2]) << 4;
                    d = y[b + 16 >> 2];
                    y[f + 8 >> 2] = ((d | 0) == 0 ? 0 : y[d + 56 >> 2]) << 4;
                    d = y[b + 16 >> 2];
                    if ((d | 0) == 0) {
                        d = 5
                    } else {
                        if ((y[d + 80 >> 2] | 0) == 0) {
                            d = 5
                        } else {
                            if (d = y[d + 84 >> 2], (d | 0) == 0) {
                                d = 5
                            } else {
                                if ((y[d + 24 >> 2] | 0) == 0) {
                                    d = 5
                                } else {
                                    if ((y[d + 32 >> 2] | 0) == 0) {
                                        d = 5
                                    } else {
                                        var g = 1,
                                            d = 6
                                    }
                                }
                            }
                        }
                    }
                    d == 5 && (g = 0);
                    y[f + 12 >> 2] = g;
                    g = y[b + 16 >> 2];
                    (g | 0) == 0 ? g = 2 : (y[g + 80 >> 2] | 0) == 0 ? g = 2 : (g = y[g + 84 >> 2], g = (g | 0) == 0 ? 2 : (y[g + 24 >> 2] | 0) == 0 ? 2 : (y[g + 36 >> 2] | 0) == 0 ? 2 : y[g + 48 >> 2]);
                    y[f + 16 >> 2] = g;
                    lg(b, f + 28 | 0, f + 32 | 0, f + 36 | 0, f + 40 | 0, f + 44 | 0);
                    g = y[b + 16 >> 2];
                    (g | 0) == 0 ? g = d = 1 : (y[g + 80 >> 2] | 0) == 0 ? g = d = 1 : (d = y[g + 84 >> 2], (d | 0) == 0 ? g = d = 1 : (y[d >> 2] | 0) == 0 ? g = d = 1 : (g = y[d + 4 >> 2], g == 255 ? (g = y[d + 8 >> 2], d = y[d + 12 >> 2], (g | 0) == 0 | (d | 0) == 0 && (g = d = 0)) : g == 1 ? g = d = 1 : g == 2 ? (d = 11, g = 12) : g == 3 ? (d = 11, g = 10) : g == 4 ? (d = 11, g = 16) : g == 5 ? (d = 33, g = 40) : g == 6 ? (d = 11, g = 24) : g == 7 ? (d = 11, g = 20) : g == 8 ? (d = 11, g = 32) : g == 9 ? (d = 33, g = 80) : g == 10 ? (d = 11, g = 18) : g == 11 ? (d = 11, g = 15) : g == 12 ? (d = 33, g = 64) : g == 13 ? (d = 99, g = 160) : g = d = 0));
                    y[(f + 20 | 0) >> 2] = g;
                    y[(f + 24 | 0) >> 2] = d;
                    b = y[b + 16 >> 2];
                    y[f >> 2] = (b | 0) == 0 ? 0 : y[b >> 2];
                    f = 0
                }
            }
        }(f | 0) != 0 ? f = -1 : (y[Bg >> 2] = (y[Ag + 4 >> 2] * 3 * y[Ag + 8 >> 2] | 0) >>> 1, Cg((Pb = m, m += 1, m = m + 3 >> 2 << 2, y[Pb >> 2] = 0, Pb)), f = F[zg >> 2], y[tg + 4 >> 2] = y[tg + 4 >> 2] - f + y[tg >> 2] | 0, y[tg >> 2] = f, f = 0);
        b = 8
    } else {
        c == 3 ? (b = y[zg >> 2], y[tg + 4 >> 2] = y[tg + 4 >> 2] - b + y[tg >> 2] | 0, y[tg >> 2] = b, b = 5) : c == -2 || c == 1 ? (y[tg + 4 >> 2] = 0, f = c, b = 8) : c == 2 ? (y[tg + 4 >> 2] = 0, b = 5) : (f = c, b = 8)
    }
    a: do {
        if (b == 5) {
            if (y[wg >> 2] = y[wg >> 2] + 1 | 0, (qg() | 0) != 2) {
                f = c
            } else {
                for (;;) {
                    if (y[vg >> 2] = y[vg >> 2] + 1 | 0, Dg(y[sg >> 2], y[Ag + 4 >> 2], y[Ag + 8 >> 2]), (qg() | 0) != 2) {
                        f = c;
                        break a
                    }
                }
            }
        }
    } while (0);
    return f
}
ug.X = 1;

function yg() {
    var b = y[Eg >> 2];
    (b | 0) != 0 && Ae(b)
}
Module._broadwayExit = yg;
Module._broadwayGetMajorVersion = (function() {
    var b = m;
    m += 8;
    y[b >> 2] = 2;
    y[b + 4 >> 2] = 3;
    var c = y[b >> 2];
    m = b;
    return c
});
Module._broadwayGetMinorVersion = (function() {
    var b = m;
    m += 8;
    y[b >> 2] = 2;
    y[b + 4 >> 2] = 3;
    var c = y[b + 4 >> 2];
    m = b;
    return c
});

function Pc(b, c, d) {
    kc(b, c & 255, d)
}

function jc(b) {
    var c, d = b >>> 0 < 245;
    do {
        if (d) {
            var f = b >>> 0 < 11 ? 16 : b + 11 & -8,
                g = f >>> 3;
            c = F[V >> 2];
            var e = c >>> (g >>> 0);
            if ((e & 3 | 0) != 0) {
                var i = (e & 1 ^ 1) + g | 0,
                    f = i << 1,
                    h = V + 40 + (f << 2) | 0,
                    d = V + 40 + (f + 2 << 2) | 0,
                    f = F[d >> 2],
                    b = f + 8 | 0,
                    k = F[b >> 2];
                (h | 0) == (k | 0) ? y[V >> 2] = c & (1 << i ^ -1) : k >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[d >> 2] = k, y[k + 12 >> 2] = h);
                i <<= 3;
                y[f + 4 >> 2] = i | 3;
                y[(f + (i | 4) | 0) >> 2] |= 1;
                k = b;
                c = 37;
                break
            }
            if (f >>> 0 <= F[V + 8 >> 2] >>> 0) {
                var l = f;
                c = 29;
                break
            }
            if ((e | 0) != 0) {
                b = 1 << g << 1;
                b = (b | -b) & e << g;
                d = (b & -b) - 1 | 0;
                b = d >>> 12 & 16;
                k = d >>> (b >>> 0);
                d = k >>> 5 & 8;
                g = k >>> (d >>> 0);
                k = g >>> 2 & 4;
                e = g >>> (k >>> 0);
                g = e >>> 1 & 2;
                e >>>= g >>> 0;
                var j = e >>> 1 & 1,
                    k = (d | b | k | g | j) + (e >>> (j >>> 0)) | 0,
                    b = k << 1,
                    g = V + 40 + (b << 2) | 0,
                    e = V + 40 + (b + 2 << 2) | 0,
                    d = F[e >> 2],
                    b = d + 8 | 0,
                    j = F[b >> 2];
                (g | 0) == (j | 0) ? y[V >> 2] = c & (1 << k ^ -1) : j >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[e >> 2] = j, y[j + 12 >> 2] = g);
                k <<= 3;
                c = k - f | 0;
                y[d + 4 >> 2] = f | 3;
                g = d;
                d = g + f | 0;
                y[g + (f | 4) >> 2] = c | 1;
                y[g + k >> 2] = c;
                j = F[V + 8 >> 2];
                (j | 0) != 0 && (f = y[V + 20 >> 2], g = j >>> 2 & 1073741822, k = V + 40 + (g << 2) | 0, e = F[V >> 2], j = 1 << (j >>> 3), (e & j | 0) == 0 ? (y[V >> 2] = e | j, i = k, h = V + 40 + (g + 2 << 2) | 0) : (g = V + 40 + (g + 2 << 2) | 0, e = F[g >> 2], e >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (i = e, h = g)), y[h >> 2] = f, y[i + 12 >> 2] = f, y[(f + 8 | 0) >> 2] = i, y[(f + 12 | 0) >> 2] = k);
                y[V + 8 >> 2] = c;
                y[V + 20 >> 2] = d;
                k = b;
                c = 37;
                break
            }
            if ((y[V + 4 >> 2] | 0) == 0) {
                l = f;
                c = 29;
                break
            }
            c = uh(f);
            if ((c | 0) == 0) {
                l = f;
                c = 29;
                break
            }
            k = c
        } else {
            if (b >>> 0 > 4294967231) {
                l = -1;
                c = 29;
                break
            }
            c = b + 11 & -8;
            if ((y[V + 4 >> 2] | 0) == 0) {
                l = c;
                c = 29;
                break
            }
            f = vh(c);
            if ((f | 0) == 0) {
                l = c;
                c = 29;
                break
            }
            k = f
        }
        c = 37
    } while (0);
    c == 29 && (i = F[V + 8 >> 2], l >>> 0 > i >>> 0 ? (i = F[V + 12 >> 2], l >>> 0 < i >>> 0 ? (i = i - l | 0, y[V + 12 >> 2] = i, h = F[V + 24 >> 2], y[V + 24 >> 2] = h + l | 0, y[l + (h + 4) >> 2] = i | 1, y[h + 4 >> 2] = l | 3, k = h + 8 | 0) : k = wh(l)) : (h = i - l | 0, c = F[V + 20 >> 2], h >>> 0 > 15 ? (y[V + 20 >> 2] = c + l | 0, y[V + 8 >> 2] = h, y[l + (c + 4) >> 2] = h | 1, y[c + i >> 2] = h, y[c + 4 >> 2] = l | 3) : (y[V + 8 >> 2] = 0, y[V + 20 >> 2] = 0, y[c + 4 >> 2] = i | 3, y[(i + (c + 4) | 0) >> 2] |= 1), k = c + 8 | 0));
    return k
}
jc.X = 1;

function uh(b) {
    var c = y[V + 4 >> 2],
        d = (c & -c) - 1 | 0,
        c = d >>> 12 & 16,
        f = d >>> (c >>> 0),
        d = f >>> 5 & 8,
        g = f >>> (d >>> 0),
        f = g >>> 2 & 4,
        e = g >>> (f >>> 0),
        g = e >>> 1 & 2;
    e >>>= g >>> 0;
    var i = e >>> 1 & 1,
        c = d = F[V + 304 + ((d | c | f | g | i) + (e >>> (i >>> 0)) << 2) >> 2],
        d = (y[d + 4 >> 2] & -8) - b | 0;
    a: for (;;) {
        for (f = c;;) {
            g = y[f + 16 >> 2];
            if ((g | 0) == 0) {
                if (f = y[f + 20 >> 2], (f | 0) == 0) {
                    break a
                }
            } else {
                f = g
            }
            g = (y[f + 4 >> 2] & -8) - b | 0;
            if (g >>> 0 < d >>> 0) {
                c = f;
                d = g;
                continue a
            }
        }
    }
    g = c;
    i = F[V + 16 >> 2];
    e = g >>> 0 < i >>> 0;
    do {
        if (!e) {
            var h = g + b | 0,
                f = h;
            if (g >>> 0 < h >>> 0) {
                var e = F[c + 24 >> 2],
                    h = F[c + 12 >> 2],
                    k = (h | 0) == (c | 0);
                do {
                    if (k) {
                        var l = c + 20 | 0,
                            j = y[l >> 2];
                        if ((j | 0) == 0 && (l = c + 16 | 0, j = y[l >> 2], (j | 0) == 0)) {
                            var n = 0;
                            break
                        }
                        for (;;) {
                            var p = j + 20 | 0,
                                r = y[p >> 2];
                            if ((r | 0) == 0 && (p = j + 16 | 0, r = F[p >> 2], (r | 0) == 0)) {
                                break
                            }
                            l = p;
                            j = r
                        }
                        l >>> 0 < i >>> 0 ? (W(), a("Reached an unreachable!")) : (y[l >> 2] = 0, n = j)
                    } else {
                        l = F[c + 8 >> 2], l >>> 0 < i >>> 0 ? (W(), a("Reached an unreachable!")) : (y[l + 12 >> 2] = h, y[h + 8 >> 2] = l, n = h)
                    }
                } while (0);
                i = (e | 0) == 0;
                a: do {
                    if (!i) {
                        h = c + 28 | 0;
                        k = V + 304 + (y[h >> 2] << 2) | 0;
                        l = (c | 0) == (y[k >> 2] | 0);
                        do {
                            if (l) {
                                y[k >> 2] = n;
                                if ((n | 0) != 0) {
                                    break
                                }
                                y[V + 4 >> 2] &= 1 << y[h >> 2] ^ -1;
                                break a
                            }
                            if (e >>> 0 < F[V + 16 >> 2] >>> 0) {
                                W(), a("Reached an unreachable!")
                            } else {
                                if (j = e + 16 | 0, (y[j >> 2] | 0) == (c | 0) ? y[j >> 2] = n : y[e + 20 >> 2] = n, (n | 0) == 0) {
                                    break a
                                }
                            }
                        } while (0);
                        n >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[n + 24 >> 2] = e, h = F[c + 16 >> 2], (h | 0) != 0 && (h >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[n + 16 >> 2] = h, y[h + 24 >> 2] = n)), h = F[c + 20 >> 2], (h | 0) != 0 && (h >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[n + 20 >> 2] = h, y[h + 24 >> 2] = n)))
                    }
                } while (0);
                if (d >>> 0 < 16) {
                    var o = d + b | 0;
                    y[c + 4 >> 2] = o | 3;
                    y[(o + (g + 4) | 0) >> 2] |= 1
                } else {
                    y[c + 4 >> 2] = b | 3;
                    y[b + (g + 4) >> 2] = d | 1;
                    y[g + (d + b) >> 2] = d;
                    i = F[V + 8 >> 2];
                    if ((i | 0) != 0) {
                        b = F[V + 20 >> 2];
                        g = i >>> 2 & 1073741822;
                        n = V + 40 + (g << 2) | 0;
                        e = F[V >> 2];
                        i = 1 << (i >>> 3);
                        if ((e & i | 0) == 0) {
                            y[V >> 2] = e | i;
                            var o = n,
                                t = V + 40 + (g + 2 << 2) | 0
                        } else {
                            g = V + 40 + (g + 2 << 2) | 0, e = F[g >> 2], e >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (o = e, t = g)
                        }
                        y[t >> 2] = b;
                        y[o + 12 >> 2] = b;
                        y[b + 8 >> 2] = o;
                        y[b + 12 >> 2] = n
                    }
                    y[V + 8 >> 2] = d;
                    y[V + 20 >> 2] = f
                }
                return c + 8 | 0
            }
        }
    } while (0);
    W();
    a("Reached an unreachable!")
}
uh.X = 1;

function vh(b) {
    var c = -b | 0,
        d = b >>> 8;
    if ((d | 0) == 0) {
        var f = 0
    } else {
        if (b >>> 0 > 16777215) {
            f = 31
        } else {
            var g = (d + 1048320 | 0) >>> 16 & 8,
                e = d << g,
                i = (e + 520192 | 0) >>> 16 & 4,
                h = e << i,
                k = (h + 245760 | 0) >>> 16 & 2,
                l = 14 - (i | g | k) + (h << k >>> 15) | 0,
                f = b >>> ((l + 7 | 0) >>> 0) & 1 | l << 1
        }
    }
    var j = F[V + 304 + (f << 2) >> 2],
        n = (j | 0) == 0;
    a: do {
        if (n) {
            var p = 0,
                r = c,
                o = 0
        } else {
            for (var t = 0, s = c, u = j, w = b << ((f | 0) == 31 ? 0 : 25 - (f >>> 1) | 0), v = 0;;) {
                var z = y[u + 4 >> 2] & -8,
                    B = z - b | 0;
                if (B >>> 0 < s >>> 0) {
                    if ((z | 0) == (b | 0)) {
                        p = u;
                        r = B;
                        o = u;
                        break a
                    }
                    var D = u,
                        C = B
                } else {
                    D = t, C = s
                }
                var E = F[u + 20 >> 2],
                    G = F[u + 16 + (w >>> 31 << 2) >> 2],
                    H = (E | 0) == 0 | (E | 0) == (G | 0) ? v : E;
                if ((G | 0) == 0) {
                    p = D;
                    r = C;
                    o = H;
                    break a
                }
                t = D;
                s = C;
                u = G;
                w <<= 1;
                v = H
            }
        }
    } while (0);
    if ((o | 0) == 0 & (p | 0) == 0) {
        var K = 1 << f << 1,
            L = y[V + 4 >> 2] & (K | -K);
        if ((L | 0) == 0) {
            var N = o
        } else {
            var O = (L & -L) - 1 | 0,
                R = O >>> 12 & 16,
                U = O >>> (R >>> 0),
                Y = U >>> 5 & 8,
                X = U >>> (Y >>> 0),
                ba = X >>> 2 & 4,
                $ = X >>> (ba >>> 0),
                ja = $ >>> 1 & 2,
                sa = $ >>> (ja >>> 0),
                Ea = sa >>> 1 & 1,
                N = y[V + 304 + ((Y | R | ba | ja | Ea) + (sa >>> (Ea >>> 0)) << 2) >> 2]
        }
    } else {
        N = o
    }
    var Xa = (N | 0) == 0;
    a: do {
        if (Xa) {
            var ea = r,
                fa = p
        } else {
            for (var va = N, ob = r, wa = p;;) {
                var pb = (y[va + 4 >> 2] & -8) - b | 0,
                    gb = pb >>> 0 < ob >>> 0,
                    Ib = gb ? pb : ob,
                    Fa = gb ? va : wa,
                    qb = F[va + 16 >> 2];
                if ((qb | 0) != 0) {
                    va = qb
                } else {
                    var Ya = F[va + 20 >> 2];
                    if ((Ya | 0) == 0) {
                        ea = Ib;
                        fa = Fa;
                        break a
                    }
                    va = Ya
                }
                ob = Ib;
                wa = Fa
            }
        }
    } while (0);
    var Na = (fa | 0) == 0;
    a: do {
        if (Na) {
            var za = 0
        } else {
            if (ea >>> 0 < (y[V + 8 >> 2] - b | 0) >>> 0) {
                var da = fa,
                    Oa = F[V + 16 >> 2],
                    Za = da >>> 0 < Oa >>> 0;
                do {
                    if (!Za) {
                        var Aa = da + b | 0,
                            hb = Aa;
                        if (da >>> 0 < Aa >>> 0) {
                            var Ga = F[fa + 24 >> 2],
                                Pa = F[fa + 12 >> 2],
                                $a = (Pa | 0) == (fa | 0);
                            do {
                                if ($a) {
                                    var Ab = fa + 20 | 0,
                                        cb = y[Ab >> 2];
                                    if ((cb | 0) == 0) {
                                        var rb = fa + 16 | 0,
                                            Qa = y[rb >> 2];
                                        if ((Qa | 0) == 0) {
                                            var pa = 0;
                                            break
                                        }
                                        var ia = rb,
                                            qa = Qa
                                    } else {
                                        ia = Ab, qa = cb
                                    }
                                    for (;;) {
                                        var Ra = qa + 20 | 0,
                                            ra = y[Ra >> 2];
                                        if ((ra | 0) != 0) {
                                            ia = Ra, qa = ra
                                        } else {
                                            var ib = qa + 16 | 0,
                                                sb = F[ib >> 2];
                                            if ((sb | 0) == 0) {
                                                break
                                            }
                                            ia = ib;
                                            qa = sb
                                        }
                                    }
                                    ia >>> 0 < Oa >>> 0 ? (W(), a("Reached an unreachable!")) : (y[ia >> 2] = 0, pa = qa)
                                } else {
                                    var jb = F[fa + 8 >> 2];
                                    jb >>> 0 < Oa >>> 0 ? (W(), a("Reached an unreachable!")) : (y[jb + 12 >> 2] = Pa, y[Pa + 8 >> 2] = jb, pa = Pa)
                                }
                            } while (0);
                            var db = (Ga | 0) == 0;
                            b: do {
                                if (!db) {
                                    var Sa = fa + 28 | 0,
                                        kb = V + 304 + (y[Sa >> 2] << 2) | 0,
                                        ta = (fa | 0) == (y[kb >> 2] | 0);
                                    do {
                                        if (ta) {
                                            y[kb >> 2] = pa;
                                            if ((pa | 0) != 0) {
                                                break
                                            }
                                            y[V + 4 >> 2] &= 1 << y[Sa >> 2] ^ -1;
                                            break b
                                        }
                                        if (Ga >>> 0 < F[V + 16 >> 2] >>> 0) {
                                            W(), a("Reached an unreachable!")
                                        } else {
                                            var Bb = Ga + 16 | 0;
                                            (y[Bb >> 2] | 0) == (fa | 0) ? y[Bb >> 2] = pa : y[Ga + 20 >> 2] = pa;
                                            if ((pa | 0) == 0) {
                                                break b
                                            }
                                        }
                                    } while (0);
                                    if (pa >>> 0 < F[V + 16 >> 2] >>> 0) {
                                        W(), a("Reached an unreachable!")
                                    } else {
                                        y[pa + 24 >> 2] = Ga;
                                        var Ha = F[fa + 16 >> 2];
                                        (Ha | 0) != 0 && (Ha >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[pa + 16 >> 2] = Ha, y[Ha + 24 >> 2] = pa));
                                        var ya = F[fa + 20 >> 2];
                                        (ya | 0) != 0 && (ya >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[pa + 20 >> 2] = ya, y[ya + 24 >> 2] = pa))
                                    }
                                }
                            } while (0);
                            var xa = ea >>> 0 < 16;
                            b: do {
                                if (xa) {
                                    var Ba = ea + b | 0;
                                    y[fa + 4 >> 2] = Ba | 3;
                                    y[(Ba + (da + 4) | 0) >> 2] |= 1
                                } else {
                                    if (y[fa + 4 >> 2] = b | 3, y[b + (da + 4) >> 2] = ea | 1, y[da + (ea + b) >> 2] = ea, ea >>> 0 < 256) {
                                        var Ca = ea >>> 2 & 1073741822,
                                            Ta = V + 40 + (Ca << 2) | 0,
                                            lb = F[V >> 2],
                                            Jb = 1 << (ea >>> 3);
                                        if ((lb & Jb | 0) == 0) {
                                            y[V >> 2] = lb | Jb;
                                            var eb = Ta,
                                                Da = V + 40 + (Ca + 2 << 2) | 0
                                        } else {
                                            var Ia = V + 40 + (Ca + 2 << 2) | 0,
                                                mb = F[Ia >> 2];
                                            mb >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (eb = mb, Da = Ia)
                                        }
                                        y[Da >> 2] = hb;
                                        y[eb + 12 >> 2] = hb;
                                        y[b + (da + 8) >> 2] = eb;
                                        y[b + (da + 12) >> 2] = Ta
                                    } else {
                                        var Ua = Aa,
                                            Ja = ea >>> 8;
                                        if ((Ja | 0) == 0) {
                                            var Ka = 0
                                        } else {
                                            if (ea >>> 0 > 16777215) {
                                                Ka = 31
                                            } else {
                                                var Cb = (Ja + 1048320 | 0) >>> 16 & 8,
                                                    Db = Ja << Cb,
                                                    Eb = (Db + 520192 | 0) >>> 16 & 4,
                                                    tb = Db << Eb,
                                                    Va = (tb + 245760 | 0) >>> 16 & 2,
                                                    fb = 14 - (Eb | Cb | Va) + (tb << Va >>> 15) | 0,
                                                    Ka = ea >>> ((fb + 7 | 0) >>> 0) & 1 | fb << 1
                                            }
                                        }
                                        var ub = V + 304 + (Ka << 2) | 0;
                                        y[b + (da + 28) >> 2] = Ka;
                                        var nb = b + (da + 16) | 0;
                                        y[b + (da + 20) >> 2] = 0;
                                        y[nb >> 2] = 0;
                                        var Fb = y[V + 4 >> 2],
                                            Qb = 1 << Ka;
                                        if ((Fb & Qb | 0) == 0) {
                                            y[V + 4 >> 2] = Fb | Qb, y[ub >> 2] = Ua, y[b + (da + 24) >> 2] = ub, y[b + (da + 12) >> 2] = Ua, y[b + (da + 8) >> 2] = Ua
                                        } else {
                                            for (var wb = ea << ((Ka | 0) == 31 ? 0 : 25 - (Ka >>> 1) | 0), Lb = y[ub >> 2];;) {
                                                if ((y[Lb + 4 >> 2] & -8 | 0) == (ea | 0)) {
                                                    var Rb = Lb + 8 | 0,
                                                        Wb = F[Rb >> 2],
                                                        Tb = F[V + 16 >> 2],
                                                        Xb = Lb >>> 0 < Tb >>> 0;
                                                    do {
                                                        if (!Xb && Wb >>> 0 >= Tb >>> 0) {
                                                            y[Wb + 12 >> 2] = Ua;
                                                            y[Rb >> 2] = Ua;
                                                            y[b + (da + 8) >> 2] = Wb;
                                                            y[b + (da + 12) >> 2] = Lb;
                                                            y[b + (da + 24) >> 2] = 0;
                                                            break b
                                                        }
                                                    } while (0);
                                                    W();
                                                    a("Reached an unreachable!")
                                                } else {
                                                    var Vb = Lb + 16 + (wb >>> 31 << 2) | 0,
                                                        Yb = F[Vb >> 2];
                                                    if ((Yb | 0) == 0) {
                                                        if (Vb >>> 0 >= F[V + 16 >> 2] >>> 0) {
                                                            y[Vb >> 2] = Ua;
                                                            y[b + (da + 24) >> 2] = Lb;
                                                            y[b + (da + 12) >> 2] = Ua;
                                                            y[b + (da + 8) >> 2] = Ua;
                                                            break b
                                                        }
                                                        W();
                                                        a("Reached an unreachable!")
                                                    } else {
                                                        wb <<= 1, Lb = Yb
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } while (0);
                            za = fa + 8 | 0;
                            break a
                        }
                    }
                } while (0);
                W();
                a("Reached an unreachable!")
            } else {
                za = 0
            }
        }
    } while (0);
    return za
}
vh.X = 1;

function wh(b) {
    var c;
    (y[xh >> 2] | 0) == 0 && yh();
    var d = (y[V + 440 >> 2] & 4 | 0) == 0;
    do {
        if (d) {
            c = y[V + 24 >> 2];
            if ((c | 0) == 0) {
                c = 5
            } else {
                if (c = zh(c), (c | 0) == 0) {
                    c = 5
                } else {
                    var f = y[xh + 8 >> 2],
                        f = b + 47 - y[V + 12 >> 2] + f & -f;
                    if (f >>> 0 < 2147483647) {
                        var g = Ah(f);
                        if ((g | 0) == (y[c >> 2] + y[c + 4 >> 2] | 0)) {
                            var e = g,
                                i = f,
                                h = g;
                            c = 12
                        } else {
                            var k = g,
                                l = f;
                            c = 14
                        }
                    } else {
                        c = 13
                    }
                }
            } if (c == 5) {
                if (c = Ah(0), (c | 0) == -1) {
                    c = 13
                } else {
                    var f = y[xh + 8 >> 2],
                        f = f + (b + 47) & -f,
                        g = c,
                        j = y[xh + 4 >> 2],
                        n = j - 1 | 0,
                        f = (n & g | 0) == 0 ? f : f - g + (n + g & -j) | 0;
                    f >>> 0 < 2147483647 ? (g = Ah(f), (g | 0) == (c | 0) ? (e = c, i = f, h = g, c = 12) : (k = g, l = f, c = 14)) : c = 13
                }
            }
            if (c == 13) {
                y[V + 440 >> 2] |= 4, c = 22
            } else {
                if (c == 12) {
                    if ((e | 0) != -1) {
                        var p = i,
                            r = e;
                        c = 25;
                        break
                    }
                    k = h;
                    l = i
                }
                c = -l | 0;
                if ((k | 0) != -1 & l >>> 0 < 2147483647) {
                    if (l >>> 0 < (b + 48 | 0) >>> 0) {
                        f = y[xh + 8 >> 2], f = b + 47 - l + f & -f, f >>> 0 < 2147483647 ? (Ah(f) | 0) == -1 ? (Ah(c), c = 21) : (o = f + l | 0, c = 20) : (o = l, c = 20)
                    } else {
                        var o = l;
                        c = 20
                    }
                } else {
                    o = l, c = 20
                }
                c == 20 && (k | 0) != -1 ? (p = o, r = k, c = 25) : (y[V + 440 >> 2] |= 4, c = 22)
            }
        } else {
            c = 22
        }
    } while (0);
    c == 22 && (d = y[xh + 8 >> 2], d = d + (b + 47) & -d, d >>> 0 < 2147483647 ? (d = Ah(d), e = Ah(0), (e | 0) != -1 & (d | 0) != -1 & d >>> 0 < e >>> 0 ? (e = e - d | 0, e >>> 0 <= (b + 40 | 0) >>> 0 | (d | 0) == -1 ? c = 48 : (p = e, r = d, c = 25)) : c = 48) : c = 48);
    a: do {
        if (c == 25) {
            d = y[V + 432 >> 2] + p | 0;
            y[V + 432 >> 2] = d;
            d >>> 0 > F[V + 436 >> 2] >>> 0 && (y[V + 436 >> 2] = d);
            d = F[V + 24 >> 2];
            e = (d | 0) == 0;
            b: do {
                if (e) {
                    i = F[V + 16 >> 2];
                    (i | 0) == 0 | r >>> 0 < i >>> 0 && (y[V + 16 >> 2] = r);
                    y[V + 444 >> 2] = r;
                    y[V + 448 >> 2] = p;
                    y[V + 456 >> 2] = 0;
                    y[V + 36 >> 2] = y[xh >> 2];
                    y[V + 32 >> 2] = -1;
                    for (i = 0;;) {
                        if (h = i << 1, k = V + 40 + (h + 2 << 2) | 0, l = V + 40 + (h << 2) | 0, y[V + 40 + (h + 3 << 2) >> 2] = l, y[k >> 2] = l, i = i + 1 | 0, (i | 0) == 32) {
                            break
                        }
                    }
                    Bh(r, p - 40 | 0)
                } else {
                    for (o = V + 444 | 0;;) {
                        if ((o | 0) == 0) {
                            break
                        }
                        i = F[o >> 2];
                        h = o + 4 | 0;
                        k = F[h >> 2];
                        l = i + k | 0;
                        if ((r | 0) == (l | 0)) {
                            if ((y[o + 12 >> 2] & 8 | 0) != 0) {
                                break
                            }
                            o = d;
                            if (!(o >>> 0 >= i >>> 0 & o >>> 0 < l >>> 0)) {
                                break
                            }
                            y[h >> 2] = k + p | 0;
                            Bh(y[V + 24 >> 2], y[V + 12 >> 2] + p | 0);
                            break b
                        }
                        o = y[o + 8 >> 2]
                    }
                    r >>> 0 < F[V + 16 >> 2] >>> 0 && (y[V + 16 >> 2] = r);
                    h = r + p | 0;
                    for (k = V + 444 | 0;;) {
                        if ((k | 0) == 0) {
                            break
                        }
                        l = k | 0;
                        i = F[l >> 2];
                        if ((i | 0) == (h | 0)) {
                            if ((y[k + 12 >> 2] & 8 | 0) != 0) {
                                break
                            }
                            y[l >> 2] = r;
                            var t = k + 4 | 0;
                            y[t >> 2] = y[t >> 2] + p | 0;
                            t = Ch(r, i, b);
                            c = 49;
                            break a
                        }
                        k = y[k + 8 >> 2]
                    }
                    Dh(r, p)
                }
            } while (0);
            d = F[V + 12 >> 2];
            d >>> 0 > b >>> 0 ? (t = d - b | 0, y[V + 12 >> 2] = t, e = d = F[V + 24 >> 2], y[V + 24 >> 2] = e + b | 0, y[b + (e + 4) >> 2] = t | 1, y[d + 4 >> 2] = b | 3, t = d + 8 | 0, c = 49) : c = 48
        }
    } while (0);
    c == 48 && (y[Eh >> 2] = 12, t = 0);
    return t
}
wh.X = 1;

function Ae(b) {
    var c, d = (b | 0) == 0;
    a: do {
        if (!d) {
            var f = b - 8 | 0,
                g = f,
                e = F[V + 16 >> 2],
                i = f >>> 0 < e >>> 0;
            b: do {
                if (!i) {
                    var h = F[b - 4 >> 2],
                        k = h & 3;
                    if ((k | 0) != 1) {
                        var l = h & -8,
                            j = b + (l - 8) | 0,
                            n = j,
                            p = (h & 1 | 0) == 0;
                        c: do {
                            if (p) {
                                var r = F[f >> 2];
                                if ((k | 0) == 0) {
                                    break a
                                }
                                var o = -8 - r | 0,
                                    t = b + o | 0,
                                    s = t,
                                    u = r + l | 0;
                                if (t >>> 0 < e >>> 0) {
                                    break b
                                }
                                if ((s | 0) == (y[V + 20 >> 2] | 0)) {
                                    var w = b + (l - 4) | 0;
                                    if ((y[w >> 2] & 3 | 0) != 3) {
                                        var v = s,
                                            z = u;
                                        break
                                    }
                                    y[V + 8 >> 2] = u;
                                    y[w >> 2] &= -2;
                                    y[o + (b + 4) >> 2] = u | 1;
                                    y[j >> 2] = u;
                                    break a
                                }
                                if (r >>> 0 < 256) {
                                    var B = F[o + (b + 8) >> 2],
                                        D = F[o + (b + 12) >> 2];
                                    if ((B | 0) == (D | 0)) {
                                        y[V >> 2] &= 1 << (r >>> 3) ^ -1, v = s, z = u
                                    } else {
                                        var C = V + 40 + ((r >>> 2 & 1073741822) << 2) | 0,
                                            E = (B | 0) != (C | 0) & B >>> 0 < e >>> 0;
                                        do {
                                            if (!E && !((D | 0) != (C | 0) & D >>> 0 < e >>> 0)) {
                                                y[B + 12 >> 2] = D;
                                                y[D + 8 >> 2] = B;
                                                v = s;
                                                z = u;
                                                break c
                                            }
                                        } while (0);
                                        W();
                                        a("Reached an unreachable!")
                                    }
                                } else {
                                    var G = t,
                                        H = F[o + (b + 24) >> 2],
                                        K = F[o + (b + 12) >> 2],
                                        L = (K | 0) == (G | 0);
                                    do {
                                        if (L) {
                                            var N = o + (b + 20) | 0,
                                                O = y[N >> 2];
                                            if ((O | 0) == 0) {
                                                var R = o + (b + 16) | 0,
                                                    U = y[R >> 2];
                                                if ((U | 0) == 0) {
                                                    var Y = 0;
                                                    break
                                                }
                                                var X = R,
                                                    ba = U
                                            } else {
                                                X = N, ba = O, c = 20
                                            }
                                            for (;;) {
                                                var $ = ba + 20 | 0,
                                                    ja = y[$ >> 2];
                                                if ((ja | 0) != 0) {
                                                    X = $, ba = ja
                                                } else {
                                                    var sa = ba + 16 | 0,
                                                        Ea = F[sa >> 2];
                                                    if ((Ea | 0) == 0) {
                                                        break
                                                    }
                                                    X = sa;
                                                    ba = Ea
                                                }
                                            }
                                            X >>> 0 < e >>> 0 ? (W(), a("Reached an unreachable!")) : (y[X >> 2] = 0, Y = ba)
                                        } else {
                                            var Xa = F[o + (b + 8) >> 2];
                                            Xa >>> 0 < e >>> 0 ? (W(), a("Reached an unreachable!")) : (y[Xa + 12 >> 2] = K, y[K + 8 >> 2] = Xa, Y = K)
                                        }
                                    } while (0);
                                    if ((H | 0) == 0) {
                                        v = s, z = u
                                    } else {
                                        var ea = o + (b + 28) | 0,
                                            fa = V + 304 + (y[ea >> 2] << 2) | 0,
                                            va = (G | 0) == (y[fa >> 2] | 0);
                                        do {
                                            if (va) {
                                                y[fa >> 2] = Y;
                                                if ((Y | 0) != 0) {
                                                    break
                                                }
                                                y[V + 4 >> 2] &= 1 << y[ea >> 2] ^ -1;
                                                v = s;
                                                z = u;
                                                break c
                                            }
                                            if (H >>> 0 < F[V + 16 >> 2] >>> 0) {
                                                W(), a("Reached an unreachable!")
                                            } else {
                                                var ob = H + 16 | 0;
                                                (y[ob >> 2] | 0) == (G | 0) ? y[ob >> 2] = Y : y[H + 20 >> 2] = Y;
                                                if ((Y | 0) == 0) {
                                                    v = s;
                                                    z = u;
                                                    break c
                                                }
                                            }
                                        } while (0);
                                        if (Y >>> 0 < F[V + 16 >> 2] >>> 0) {
                                            W(), a("Reached an unreachable!")
                                        } else {
                                            y[Y + 24 >> 2] = H;
                                            var wa = F[o + (b + 16) >> 2];
                                            (wa | 0) != 0 && (wa >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[Y + 16 >> 2] = wa, y[wa + 24 >> 2] = Y));
                                            var pb = F[o + (b + 20) >> 2];
                                            (pb | 0) == 0 ? (v = s, z = u) : pb >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[Y + 20 >> 2] = pb, y[pb + 24 >> 2] = Y, v = s, z = u)
                                        }
                                    }
                                }
                            } else {
                                v = g, z = l
                            }
                        } while (0);
                        var gb = v;
                        if (gb >>> 0 < j >>> 0) {
                            var Ib = b + (l - 4) | 0,
                                Fa = F[Ib >> 2];
                            if ((Fa & 1 | 0) != 0) {
                                var qb = (Fa & 2 | 0) == 0;
                                do {
                                    if (qb) {
                                        if ((n | 0) == (y[V + 24 >> 2] | 0)) {
                                            var Ya = y[V + 12 >> 2] + z | 0;
                                            y[V + 12 >> 2] = Ya;
                                            y[V + 24 >> 2] = v;
                                            y[v + 4 >> 2] = Ya | 1;
                                            (v | 0) == (y[V + 20 >> 2] | 0) && (y[V + 20 >> 2] = 0, y[V + 8 >> 2] = 0);
                                            if (Ya >>> 0 <= F[V + 28 >> 2] >>> 0) {
                                                break a
                                            }
                                            Fh(0);
                                            break a
                                        }
                                        if ((n | 0) == (y[V + 20 >> 2] | 0)) {
                                            var Na = y[V + 8 >> 2] + z | 0;
                                            y[V + 8 >> 2] = Na;
                                            y[V + 20 >> 2] = v;
                                            y[v + 4 >> 2] = Na | 1;
                                            y[(gb + Na | 0) >> 2] = Na;
                                            break a
                                        }
                                        var za = (Fa & -8) + z | 0,
                                            da = Fa >>> 3,
                                            Oa = Fa >>> 0 < 256;
                                        c: do {
                                            if (Oa) {
                                                var Za = F[b + l >> 2],
                                                    Aa = F[b + (l | 4) >> 2];
                                                if ((Za | 0) == (Aa | 0)) {
                                                    y[V >> 2] &= 1 << da ^ -1
                                                } else {
                                                    var hb = V + 40 + ((Fa >>> 2 & 1073741822) << 2) | 0;
                                                    c = (Za | 0) == (hb | 0) ? 62 : Za >>> 0 < F[V + 16 >> 2] >>> 0 ? 65 : 62;
                                                    do {
                                                        if (c == 62 && !((Aa | 0) != (hb | 0) && Aa >>> 0 < F[V + 16 >> 2] >>> 0)) {
                                                            y[Za + 12 >> 2] = Aa;
                                                            y[Aa + 8 >> 2] = Za;
                                                            break c
                                                        }
                                                    } while (0);
                                                    W();
                                                    a("Reached an unreachable!")
                                                }
                                            } else {
                                                var Ga = j,
                                                    Pa = F[l + (b + 16) >> 2],
                                                    $a = F[b + (l | 4) >> 2],
                                                    Ab = ($a | 0) == (Ga | 0);
                                                do {
                                                    if (Ab) {
                                                        var cb = l + (b + 12) | 0,
                                                            rb = y[cb >> 2];
                                                        if ((rb | 0) == 0) {
                                                            var Qa = l + (b + 8) | 0,
                                                                pa = y[Qa >> 2];
                                                            if ((pa | 0) == 0) {
                                                                var ia = 0;
                                                                break
                                                            }
                                                            var qa = Qa,
                                                                Ra = pa
                                                        } else {
                                                            qa = cb, Ra = rb, c = 72
                                                        }
                                                        for (;;) {
                                                            var ra = Ra + 20 | 0,
                                                                ib = y[ra >> 2];
                                                            if ((ib | 0) != 0) {
                                                                qa = ra, Ra = ib
                                                            } else {
                                                                var sb = Ra + 16 | 0,
                                                                    jb = F[sb >> 2];
                                                                if ((jb | 0) == 0) {
                                                                    break
                                                                }
                                                                qa = sb;
                                                                Ra = jb
                                                            }
                                                        }
                                                        qa >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[qa >> 2] = 0, ia = Ra)
                                                    } else {
                                                        var db = F[b + l >> 2];
                                                        db >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[db + 12 >> 2] = $a, y[$a + 8 >> 2] = db, ia = $a)
                                                    }
                                                } while (0);
                                                if ((Pa | 0) != 0) {
                                                    var Sa = l + (b + 20) | 0,
                                                        kb = V + 304 + (y[Sa >> 2] << 2) | 0,
                                                        ta = (Ga | 0) == (y[kb >> 2] | 0);
                                                    do {
                                                        if (ta) {
                                                            y[kb >> 2] = ia;
                                                            if ((ia | 0) != 0) {
                                                                break
                                                            }
                                                            y[V + 4 >> 2] &= 1 << y[Sa >> 2] ^ -1;
                                                            break c
                                                        }
                                                        if (Pa >>> 0 < F[V + 16 >> 2] >>> 0) {
                                                            W(), a("Reached an unreachable!")
                                                        } else {
                                                            var Bb = Pa + 16 | 0;
                                                            (y[Bb >> 2] | 0) == (Ga | 0) ? y[Bb >> 2] = ia : y[Pa + 20 >> 2] = ia;
                                                            if ((ia | 0) == 0) {
                                                                break c
                                                            }
                                                        }
                                                    } while (0);
                                                    if (ia >>> 0 < F[V + 16 >> 2] >>> 0) {
                                                        W(), a("Reached an unreachable!")
                                                    } else {
                                                        y[ia + 24 >> 2] = Pa;
                                                        var Ha = F[l + (b + 8) >> 2];
                                                        (Ha | 0) != 0 && (Ha >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[ia + 16 >> 2] = Ha, y[Ha + 24 >> 2] = ia));
                                                        var ya = F[l + (b + 12) >> 2];
                                                        (ya | 0) != 0 && (ya >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[ia + 20 >> 2] = ya, y[ya + 24 >> 2] = ia))
                                                    }
                                                }
                                            }
                                        } while (0);
                                        y[v + 4 >> 2] = za | 1;
                                        y[gb + za >> 2] = za;
                                        if ((v | 0) != (y[V + 20 >> 2] | 0)) {
                                            var xa = za
                                        } else {
                                            y[V + 8 >> 2] = za;
                                            break a
                                        }
                                    } else {
                                        y[Ib >> 2] = Fa & -2, y[v + 4 >> 2] = z | 1, xa = y[gb + z >> 2] = z
                                    }
                                } while (0);
                                if (xa >>> 0 < 256) {
                                    var Ba = xa >>> 2 & 1073741822,
                                        Ca = V + 40 + (Ba << 2) | 0,
                                        Ta = F[V >> 2],
                                        lb = 1 << (xa >>> 3);
                                    if ((Ta & lb | 0) == 0) {
                                        y[V >> 2] = Ta | lb;
                                        var Jb = Ca,
                                            eb = V + 40 + (Ba + 2 << 2) | 0
                                    } else {
                                        var Da = V + 40 + (Ba + 2 << 2) | 0,
                                            Ia = F[Da >> 2];
                                        Ia >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (Jb = Ia, eb = Da)
                                    }
                                    y[eb >> 2] = v;
                                    y[Jb + 12 >> 2] = v;
                                    y[v + 8 >> 2] = Jb;
                                    y[v + 12 >> 2] = Ca;
                                    break a
                                }
                                var mb = v,
                                    Ua = xa >>> 8;
                                if ((Ua | 0) == 0) {
                                    var Ja = 0
                                } else {
                                    if (xa >>> 0 > 16777215) {
                                        Ja = 31
                                    } else {
                                        var Ka = (Ua + 1048320 | 0) >>> 16 & 8,
                                            Cb = Ua << Ka,
                                            Db = (Cb + 520192 | 0) >>> 16 & 4,
                                            Eb = Cb << Db,
                                            tb = (Eb + 245760 | 0) >>> 16 & 2,
                                            Va = 14 - (Db | Ka | tb) + (Eb << tb >>> 15) | 0,
                                            Ja = xa >>> ((Va + 7 | 0) >>> 0) & 1 | Va << 1
                                    }
                                }
                                var fb = V + 304 + (Ja << 2) | 0;
                                y[v + 28 >> 2] = Ja;
                                y[v + 20 >> 2] = 0;
                                y[v + 16 >> 2] = 0;
                                var ub = y[V + 4 >> 2],
                                    nb = 1 << Ja,
                                    Fb = (ub & nb | 0) == 0;
                                c: do {
                                    if (Fb) {
                                        y[V + 4 >> 2] = ub | nb, y[fb >> 2] = mb, y[v + 24 >> 2] = fb, y[v + 12 >> 2] = v, y[v + 8 >> 2] = v
                                    } else {
                                        for (var Qb = xa << ((Ja | 0) == 31 ? 0 : 25 - (Ja >>> 1) | 0), wb = y[fb >> 2];;) {
                                            if ((y[wb + 4 >> 2] & -8 | 0) == (xa | 0)) {
                                                var Lb = wb + 8 | 0,
                                                    Rb = F[Lb >> 2],
                                                    Wb = F[V + 16 >> 2],
                                                    Tb = wb >>> 0 < Wb >>> 0;
                                                do {
                                                    if (!Tb && Rb >>> 0 >= Wb >>> 0) {
                                                        y[Rb + 12 >> 2] = mb;
                                                        y[Lb >> 2] = mb;
                                                        y[v + 8 >> 2] = Rb;
                                                        y[v + 12 >> 2] = wb;
                                                        y[v + 24 >> 2] = 0;
                                                        break c
                                                    }
                                                } while (0);
                                                W();
                                                a("Reached an unreachable!")
                                            } else {
                                                var Xb = wb + 16 + (Qb >>> 31 << 2) | 0,
                                                    Vb = F[Xb >> 2];
                                                if ((Vb | 0) == 0) {
                                                    if (Xb >>> 0 >= F[V + 16 >> 2] >>> 0) {
                                                        y[Xb >> 2] = mb;
                                                        y[v + 24 >> 2] = wb;
                                                        y[v + 12 >> 2] = v;
                                                        y[v + 8 >> 2] = v;
                                                        break c
                                                    }
                                                    W();
                                                    a("Reached an unreachable!")
                                                } else {
                                                    Qb <<= 1, wb = Vb
                                                }
                                            }
                                        }
                                    }
                                } while (0);
                                var Yb = y[V + 32 >> 2] - 1 | 0;
                                y[V + 32 >> 2] = Yb;
                                if ((Yb | 0) != 0) {
                                    break a
                                }
                                var fc = y[V + 452 >> 2],
                                    ga = (fc | 0) == 0;
                                c: do {
                                    if (!ga) {
                                        for (var pc = fc;;) {
                                            var Ub = y[pc + 8 >> 2];
                                            if ((Ub | 0) == 0) {
                                                break c
                                            }
                                            pc = Ub
                                        }
                                    }
                                } while (0);
                                y[V + 32 >> 2] = -1;
                                break a
                            }
                        }
                    }
                }
            } while (0);
            W();
            a("Reached an unreachable!")
        }
    } while (0)
}
Ae.X = 1;

function Fh(b) {
    (y[xh >> 2] | 0) == 0 && yh();
    var c = b >>> 0 < 4294967232;
    a: do {
        if (c) {
            var d = F[V + 24 >> 2];
            if ((d | 0) == 0) {
                d = 0;
                break
            }
            var f = F[V + 12 >> 2],
                g = f >>> 0 > (b + 40 | 0) >>> 0;
            do {
                if (g) {
                    var e = F[xh + 8 >> 2],
                        i = (Math.floor(((-40 - b - 1 + f + e | 0) >>> 0) / (e >>> 0)) - 1) * e | 0,
                        h = zh(d);
                    if ((y[h + 12 >> 2] & 8 | 0) == 0) {
                        var k = Ah(0),
                            l = h + 4 | 0;
                        if ((k | 0) == (y[h >> 2] + y[l >> 2] | 0) && (i = Ah(-(i >>> 0 > 2147483646 ? -2147483648 - e | 0 : i) | 0), e = Ah(0), (i | 0) != -1 & e >>> 0 < k >>> 0 && (i = k - e | 0, (k | 0) != (e | 0)))) {
                            y[l >> 2] = y[l >> 2] - i | 0;
                            y[V + 432 >> 2] = y[V + 432 >> 2] - i | 0;
                            Bh(y[V + 24 >> 2], y[V + 12 >> 2] - i | 0);
                            d = (k | 0) != (e | 0);
                            break a
                        }
                    }
                }
            } while (0);
            if (F[V + 12 >> 2] >>> 0 <= F[V + 28 >> 2] >>> 0) {
                d = 0;
                break
            }
            y[V + 28 >> 2] = -1
        }
        d = 0
    } while (0);
    return d & 1
}
Fh.X = 1;

function yh() {
    if ((y[xh >> 2] | 0) == 0) {
        var b = Gh();
        (b - 1 & b | 0) == 0 ? (y[xh + 8 >> 2] = b, y[xh + 4 >> 2] = b, y[xh + 12 >> 2] = -1, y[xh + 16 >> 2] = 2097152, y[xh + 20 >> 2] = 0, y[V + 440 >> 2] = 0, y[xh >> 2] = Math.floor(Date.now() / 1e3) & -16 ^ 1431655768) : (W(), a("Reached an unreachable!"))
    }
}

function zh(b) {
    for (var c = V + 444 | 0;;) {
        var d = F[c >> 2];
        if (d >>> 0 <= b >>> 0 && (d + y[c + 4 >> 2] | 0) >>> 0 > b >>> 0) {
            var f = c;
            break
        }
        c = F[c + 8 >> 2];
        if ((c | 0) == 0) {
            f = 0;
            break
        }
    }
    return f
}

function Bh(b, c) {
    var d = b + 8 | 0,
        d = (d & 7 | 0) == 0 ? 0 : -d & 7,
        f = c - d | 0;
    y[V + 24 >> 2] = b + d | 0;
    y[V + 12 >> 2] = f;
    y[d + (b + 4) >> 2] = f | 1;
    y[c + (b + 4) >> 2] = 40;
    y[V + 28 >> 2] = y[xh + 16 >> 2]
}

function Ch(b, c, d) {
    var f, g = b + 8 | 0,
        g = (g & 7 | 0) == 0 ? 0 : -g & 7,
        e = c + 8 | 0,
        e = (e & 7 | 0) == 0 ? 0 : -e & 7,
        i = c + e | 0,
        h = g + d | 0,
        k = b + h | 0,
        l = i - (b + g) - d | 0;
    y[g + (b + 4) >> 2] = d | 3;
    d = (i | 0) == (y[V + 24 >> 2] | 0);
    a: do {
        if (d) {
            var j = y[V + 12 >> 2] + l | 0;
            y[V + 12 >> 2] = j;
            y[V + 24 >> 2] = k;
            y[h + (b + 4) >> 2] = j | 1
        } else {
            if ((i | 0) == (y[V + 20 >> 2] | 0)) {
                j = y[V + 8 >> 2] + l | 0, y[V + 8 >> 2] = j, y[V + 20 >> 2] = k, y[h + (b + 4) >> 2] = j | 1, y[(b + (j + h) | 0) >> 2] = j
            } else {
                var n = F[e + (c + 4) >> 2];
                if ((n & 3 | 0) == 1) {
                    var j = n & -8,
                        p = n >>> 3,
                        r = n >>> 0 < 256;
                    b: do {
                        if (r) {
                            var o = F[c + (e | 8) >> 2],
                                t = F[e + (c + 12) >> 2];
                            if ((o | 0) == (t | 0)) {
                                y[V >> 2] &= 1 << p ^ -1
                            } else {
                                var s = V + 40 + ((n >>> 2 & 1073741822) << 2) | 0;
                                f = (o | 0) == (s | 0) ? 14 : o >>> 0 < F[V + 16 >> 2] >>> 0 ? 17 : 14;
                                do {
                                    if (f == 14 && !((t | 0) != (s | 0) && t >>> 0 < F[V + 16 >> 2] >>> 0)) {
                                        y[o + 12 >> 2] = t;
                                        y[t + 8 >> 2] = o;
                                        break b
                                    }
                                } while (0);
                                W();
                                a("Reached an unreachable!")
                            }
                        } else {
                            f = i;
                            o = F[c + (e | 24) >> 2];
                            t = F[e + (c + 12) >> 2];
                            s = (t | 0) == (f | 0);
                            do {
                                if (s) {
                                    var u = e | 16,
                                        w = u + (c + 4) | 0,
                                        v = y[w >> 2];
                                    if ((v | 0) == 0) {
                                        if (u = c + u | 0, v = y[u >> 2], (v | 0) == 0) {
                                            var z = 0;
                                            break
                                        }
                                    } else {
                                        u = w
                                    }
                                    for (;;) {
                                        var w = v + 20 | 0,
                                            B = y[w >> 2];
                                        if ((B | 0) == 0 && (w = v + 16 | 0, B = F[w >> 2], (B | 0) == 0)) {
                                            break
                                        }
                                        u = w;
                                        v = B
                                    }
                                    u >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[u >> 2] = 0, z = v)
                                } else {
                                    u = F[c + (e | 8) >> 2], u >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[u + 12 >> 2] = t, y[t + 8 >> 2] = u, z = t)
                                }
                            } while (0);
                            if ((o | 0) != 0) {
                                t = e + (c + 28) | 0;
                                s = V + 304 + (y[t >> 2] << 2) | 0;
                                u = (f | 0) == (y[s >> 2] | 0);
                                do {
                                    if (u) {
                                        y[s >> 2] = z;
                                        if ((z | 0) != 0) {
                                            break
                                        }
                                        y[V + 4 >> 2] &= 1 << y[t >> 2] ^ -1;
                                        break b
                                    }
                                    if (o >>> 0 < F[V + 16 >> 2] >>> 0) {
                                        W(), a("Reached an unreachable!")
                                    } else {
                                        if (v = o + 16 | 0, (y[v >> 2] | 0) == (f | 0) ? y[v >> 2] = z : y[o + 20 >> 2] = z, (z | 0) == 0) {
                                            break b
                                        }
                                    }
                                } while (0);
                                z >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[z + 24 >> 2] = o, f = e | 16, o = F[c + f >> 2], (o | 0) != 0 && (o >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[z + 16 >> 2] = o, y[o + 24 >> 2] = z)), f = F[f + (c + 4) >> 2], (f | 0) != 0 && (f >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (y[z + 20 >> 2] = f, y[f + 24 >> 2] = z)))
                            }
                        }
                    } while (0);
                    n = c + (j | e) | 0;
                    j = j + l | 0
                } else {
                    n = i, j = l
                }
                y[(n + 4 | 0) >> 2] &= -2;
                y[h + (b + 4) >> 2] = j | 1;
                y[b + (j + h) >> 2] = j;
                if (j >>> 0 < 256) {
                    p = j >>> 2 & 1073741822;
                    n = V + 40 + (p << 2) | 0;
                    r = F[V >> 2];
                    j = 1 << (j >>> 3);
                    if ((r & j | 0) == 0) {
                        y[V >> 2] = r | j;
                        var D = n,
                            C = V + 40 + (p + 2 << 2) | 0
                    } else {
                        j = V + 40 + (p + 2 << 2) | 0, p = F[j >> 2], p >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (D = p, C = j)
                    }
                    y[C >> 2] = k;
                    y[D + 12 >> 2] = k;
                    y[h + (b + 8) >> 2] = D;
                    y[h + (b + 12) >> 2] = n
                } else {
                    if (n = k, r = j >>> 8, (r | 0) == 0 ? p = 0 : j >>> 0 > 16777215 ? p = 31 : (p = (r + 1048320 | 0) >>> 16 & 8, f = r << p, r = (f + 520192 | 0) >>> 16 & 4, f <<= r, o = (f + 245760 | 0) >>> 16 & 2, p = 14 - (r | p | o) + (f << o >>> 15) | 0, p = j >>> ((p + 7 | 0) >>> 0) & 1 | p << 1), r = V + 304 + (p << 2) | 0, y[h + (b + 28) >> 2] = p, f = h + (b + 16) | 0, y[h + (b + 20) >> 2] = 0, y[f >> 2] = 0, f = y[V + 4 >> 2], o = 1 << p, (f & o | 0) == 0) {
                        y[V + 4 >> 2] = f | o, y[r >> 2] = n, y[h + (b + 24) >> 2] = r, y[h + (b + 12) >> 2] = n, y[h + (b + 8) >> 2] = n
                    } else {
                        p = j << ((p | 0) == 31 ? 0 : 25 - (p >>> 1) | 0);
                        for (r = y[r >> 2];;) {
                            if ((y[r + 4 >> 2] & -8 | 0) == (j | 0)) {
                                f = r + 8 | 0;
                                o = F[f >> 2];
                                t = F[V + 16 >> 2];
                                s = r >>> 0 < t >>> 0;
                                do {
                                    if (!s && o >>> 0 >= t >>> 0) {
                                        y[o + 12 >> 2] = n;
                                        y[f >> 2] = n;
                                        y[h + (b + 8) >> 2] = o;
                                        y[h + (b + 12) >> 2] = r;
                                        y[h + (b + 24) >> 2] = 0;
                                        break a
                                    }
                                } while (0);
                                W();
                                a("Reached an unreachable!")
                            } else {
                                if (f = r + 16 + (p >>> 31 << 2) | 0, o = F[f >> 2], (o | 0) == 0) {
                                    if (f >>> 0 >= F[V + 16 >> 2] >>> 0) {
                                        y[f >> 2] = n;
                                        y[h + (b + 24) >> 2] = r;
                                        y[h + (b + 12) >> 2] = n;
                                        y[h + (b + 8) >> 2] = n;
                                        break a
                                    }
                                    W();
                                    a("Reached an unreachable!")
                                } else {
                                    p <<= 1, r = o
                                }
                            }
                        }
                    }
                }
            }
        }
    } while (0);
    return b + (g | 8) | 0
}
Ch.X = 1;

function Dh(b, c) {
    var d = F[V + 24 >> 2],
        f = zh(d),
        g = y[f >> 2],
        e = y[f + 4 >> 2],
        f = g + e | 0,
        i = g + (e - 39) | 0,
        g = g + (e - 47 + ((i & 7 | 0) == 0 ? 0 : -i & 7)) | 0,
        g = g >>> 0 < (d + 16 | 0) >>> 0 ? d : g,
        e = g + 8 | 0;
    Bh(b, c - 40 | 0);
    y[(g + 4 | 0) >> 2] = 27;
    y[e >> 2] = y[V + 444 >> 2];
    y[e + 4 >> 2] = y[V + 448 >> 2];
    y[e + 8 >> 2] = y[V + 452 >> 2];
    y[e + 12 >> 2] = y[V + 456 >> 2];
    y[V + 444 >> 2] = b;
    y[V + 448 >> 2] = c;
    y[V + 456 >> 2] = 0;
    y[V + 452 >> 2] = e;
    y[(g + 28 | 0) >> 2] = 7;
    e = (g + 32 | 0) >>> 0 < f >>> 0;
    a: do {
        if (e) {
            for (i = 0;;) {
                var h = i << 2,
                    k = h + (g + 36) | 0;
                y[(h + (g + 32) | 0) >> 2] = 7;
                if (k >>> 0 >= f >>> 0) {
                    break a
                }
                i = i + 1 | 0
            }
        }
    } while (0);
    f = (g | 0) == (d | 0);
    a: do {
        if (!f) {
            if (e = g - d | 0, i = d + e | 0, y[(e + (d + 4) | 0) >> 2] &= -2, y[d + 4 >> 2] = e | 1, y[i >> 2] = e, e >>> 0 < 256) {
                h = e >>> 2 & 1073741822;
                i = V + 40 + (h << 2) | 0;
                k = F[V >> 2];
                e = 1 << (e >>> 3);
                if ((k & e | 0) == 0) {
                    y[V >> 2] = k | e;
                    var l = i,
                        j = V + 40 + (h + 2 << 2) | 0
                } else {
                    e = V + 40 + (h + 2 << 2) | 0, h = F[e >> 2], h >>> 0 < F[V + 16 >> 2] >>> 0 ? (W(), a("Reached an unreachable!")) : (l = h, j = e)
                }
                y[j >> 2] = d;
                y[l + 12 >> 2] = d;
                y[d + 8 >> 2] = l;
                y[d + 12 >> 2] = i
            } else {
                i = d;
                k = e >>> 8;
                if ((k | 0) == 0) {
                    h = 0
                } else {
                    if (e >>> 0 > 16777215) {
                        h = 31
                    } else {
                        var h = (k + 1048320 | 0) >>> 16 & 8,
                            n = k << h,
                            k = (n + 520192 | 0) >>> 16 & 4;
                        n <<= k;
                        var p = (n + 245760 | 0) >>> 16 & 2,
                            h = 14 - (k | h | p) + (n << p >>> 15) | 0,
                            h = e >>> ((h + 7 | 0) >>> 0) & 1 | h << 1
                    }
                }
                k = V + 304 + (h << 2) | 0;
                y[d + 28 >> 2] = h;
                y[d + 20 >> 2] = 0;
                y[d + 16 >> 2] = 0;
                n = y[V + 4 >> 2];
                p = 1 << h;
                if ((n & p | 0) == 0) {
                    y[V + 4 >> 2] = n | p, y[k >> 2] = i, y[d + 24 >> 2] = k, y[d + 12 >> 2] = d, y[d + 8 >> 2] = d
                } else {
                    h = e << ((h | 0) == 31 ? 0 : 25 - (h >>> 1) | 0);
                    for (k = y[k >> 2];;) {
                        if ((y[k + 4 >> 2] & -8 | 0) == (e | 0)) {
                            var n = k + 8 | 0,
                                p = F[n >> 2],
                                r = F[V + 16 >> 2],
                                o = k >>> 0 < r >>> 0;
                            do {
                                if (!o && p >>> 0 >= r >>> 0) {
                                    y[p + 12 >> 2] = i;
                                    y[n >> 2] = i;
                                    y[d + 8 >> 2] = p;
                                    y[d + 12 >> 2] = k;
                                    y[d + 24 >> 2] = 0;
                                    break a
                                }
                            } while (0);
                            W();
                            a("Reached an unreachable!")
                        } else {
                            if (n = k + 16 + (h >>> 31 << 2) | 0, p = F[n >> 2], (p | 0) == 0) {
                                if (n >>> 0 >= F[V + 16 >> 2] >>> 0) {
                                    y[n >> 2] = i;
                                    y[d + 24 >> 2] = k;
                                    y[d + 12 >> 2] = d;
                                    y[d + 8 >> 2] = d;
                                    break a
                                }
                                W();
                                a("Reached an unreachable!")
                            } else {
                                h <<= 1, k = p
                            }
                        }
                    }
                }
            }
        }
    } while (0)
}
Dh.X = 1;

function Hh(b) {
    y[b >> 2] = Ih + 8 | 0;
    Jh(b)
}

function sd(b, c, d) {
    if (d >= 20 && c % 2 == b % 2) {
        if (c % 4 == b % 4) {
            for (d = c + d; c % 4;) {
                q[b++] = q[c++]
            }
            c >>= 2;
            b >>= 2;
            for (var f = d >> 2; c < f;) {
                y[b++] = y[c++]
            }
            c <<= 2;
            for (b <<= 2; c < d;) {
                q[b++] = q[c++]
            }
        } else {
            d = c + d;
            c % 2 && (q[b++] = q[c++]);
            c >>= 1;
            b >>= 1;
            for (f = d >> 1; c < f;) {
                x[b++] = x[c++]
            }
            c <<= 1;
            b <<= 1;
            c < d && (q[b++] = q[c++])
        }
    } else {
        for (; d--;) {
            q[b++] = q[c++]
        }
    }
}

function kc(b, c, d) {
    if (d >= 20) {
        for (d = b + d; b % 4;) {
            q[b++] = c
        }
        c < 0 && (c += 256);
        b >>= 2;
        for (var f = d >> 2, g = c | c << 8 | c << 16 | c << 24; b < f;) {
            y[b++] = g
        }
        for (b <<= 2; b < d;) {
            q[b++] = c
        }
    } else {
        for (; d--;) {
            q[b++] = c
        }
    }
}
var Kh = 13,
    Lh = 9,
    Mh = 22,
    Nh = 5,
    Oh = 21,
    Ph = 6;

function Qh(b) {
    Eh || (Eh = P([0], "i32", M));
    y[Eh >> 2] = b
}
var Eh, Rh = 0,
    Sh = 0,
    Th = 0,
    Z = {
        va: "/",
        ya: 2,
        b: [ha],
        D: ca,
        t: (function(b, c) {
            if (typeof b !== "string") {
                return ha
            }
            if (c === aa) {
                c = Z.va
            }
            b && b[0] == "/" && (c = "");
            for (var d = (c + "/" + b).split("/").reverse(), f = [""]; d.length;) {
                var g = d.pop();
                g == "" || g == "." || (g == ".." ? f.length > 1 && f.pop() : f.push(g))
            }
            return f.length == 1 ? "/" : f.join("/")
        }),
        u: (function(b, c, d) {
            var f = {
                    xa: ka,
                    r: ka,
                    error: 0,
                    name: ha,
                    path: ha,
                    object: ha,
                    H: ka,
                    J: ha,
                    I: ha
                },
                b = Z.t(b);
            if (b == "/") {
                f.xa = ca, f.r = f.H = ca, f.name = "/", f.path = f.J = "/", f.object = f.I = Z.root
            } else {
                if (b !== ha) {
                    for (var d = d || 0, b = b.slice(1).split("/"), g = Z.root, e = [""]; b.length;) {
                        if (b.length == 1 && g.e) {
                            f.H = ca, f.J = e.length == 1 ? "/" : e.join("/"), f.I = g, f.name = b[0]
                        }
                        var i = b.shift();
                        if (g.e) {
                            if (g.L) {
                                if (!g.c.hasOwnProperty(i)) {
                                    f.error = 2;
                                    break
                                }
                            } else {
                                f.error = Kh;
                                break
                            }
                        } else {
                            f.error = 20;
                            break
                        }
                        g = g.c[i];
                        if (g.link && !(c && b.length == 0)) {
                            if (d > 40) {
                                f.error = 40;
                                break
                            }
                            f = Z.t(g.link, e.join("/"));
                            return Z.u([f].concat(b).join("/"), c, d + 1)
                        }
                        e.push(i);
                        if (b.length == 0) {
                            f.r = ca, f.path = e.join("/"), f.object = g
                        }
                    }
                }
            }
            return f
        }),
        B: (function(b, c) {
            Z.z();
            var d = Z.u(b, c);
            return d.r ? d.object : (Qh(d.error), ha)
        }),
        w: (function(b, c, d, f, g) {
            b || (b = "/");
            typeof b === "string" && (b = Z.B(b));
            b || (Qh(Kh), a(Error("Parent path must exist.")));
            b.e || (Qh(20), a(Error("Parent must be a folder.")));
            !b.write && !Z.D && (Qh(Kh), a(Error("Parent folder must be writeable.")));
            if (!c || c == "." || c == "..") {
                Qh(2), a(Error("Name must not be empty."))
            }
            b.c.hasOwnProperty(c) && (Qh(17), a(Error("Can't overwrite object.")));
            b.c[c] = {
                L: f === aa ? ca : f,
                write: g === aa ? ka : g,
                timestamp: Date.now(),
                wa: Z.ya++
            };
            for (var e in d) {
                d.hasOwnProperty(e) && (b.c[c][e] = d[e])
            }
            return b.c[c]
        }),
        q: (function(b, c, d, f) {
            return Z.w(b, c, {
                e: ca,
                d: ka,
                c: {}
            }, d, f)
        }),
        ua: (function(b, c, d, f) {
            b = Z.B(b);
            b === ha && a(Error("Invalid parent."));
            for (c = c.split("/").reverse(); c.length;) {
                var g = c.pop();
                g && (b.c.hasOwnProperty(g) || Z.q(b, g, d, f), b = b.c[g])
            }
            return b
        }),
        l: (function(b, c, d, f, g) {
            d.e = ka;
            return Z.w(b, c, d, f, g)
        }),
        ta: (function(b, c, d, f, g) {
            if (typeof d === "string") {
                for (var e = [], i = 0; i < d.length; i++) {
                    e.push(d.charCodeAt(i))
                }
                d = e
            }
            return Z.l(b, c, {
                d: ka,
                c: d
            }, f, g)
        }),
        Ha: (function(b, c, d, f, g) {
            return Z.l(b, c, {
                d: ka,
                url: d
            }, f, g)
        }),
        Ia: (function(b, c, d, f, g) {
            return Z.l(b, c, {
                d: ka,
                link: d
            }, f, g)
        }),
        k: (function(b, c, d, f) {
            !d && !f && a(Error("A device must have at least one callback defined."));
            return Z.l(b, c, {
                d: ca,
                input: d,
                i: f
            }, Boolean(d), Boolean(f))
        }),
        Ja: (function(b) {
            if (b.d || b.e || b.link || b.c) {
                return ca
            }
            var c = ca;
            if (typeof XMLHttpRequest !== "undefined") {
                var d = new XMLHttpRequest;
                d.open("GET", b.url, ka);
                if (typeof Uint8Array != "undefined") {
                    d.responseType = "arraybuffer"
                }
                d.overrideMimeType && d.overrideMimeType("text/plain; charset=x-user-defined");
                d.send(ha);
                d.status != 200 && d.status != 0 && (c = ka);
                b.c = d.response !== aa ? new Uint8Array(d.response || []) : rc(d.responseText || "", ca)
            } else {
                if (typeof read !== "undefined") {
                    try {
                        b.c = rc(read(b.url), ca)
                    } catch (f) {
                        c = ka
                    }
                } else {
                    a(Error("Cannot load without read() or XMLHttpRequest."))
                }
            }
            c || Qh(Nh);
            return c
        }),
        z: (function() {
            if (!Z.root) {
                Z.root = {
                    L: ca,
                    write: ca,
                    e: ca,
                    d: ka,
                    timestamp: Date.now(),
                    wa: 1,
                    c: {}
                }
            }
        }),
        j: (function(b, c, d) {
            Sb(!Z.j.s, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
            Z.j.s = ca;
            Z.z();
            b || (b = (function() {
                if (!b.p || !b.p.length) {
                    var c;
                    typeof window != "undefined" && typeof window.prompt == "function" ? c = window.prompt("Input: ") : typeof readline == "function" && (c = readline());
                    c || (c = "");
                    b.p = rc(c + "\n", ca)
                }
                return b.p.shift()
            }));
            c || (c = (function(b) {
                b === ha || b === "\n".charCodeAt(0) ? (c.K(c.buffer.join("")), c.buffer = []) : c.buffer.push(String.fromCharCode(b))
            }));
            if (!c.K) {
                c.K = print
            }
            if (!c.buffer) {
                c.buffer = []
            }
            d || (d = c);
            Z.q("/", "tmp", ca, ca);
            var f = Z.q("/", "dev", ca, ca),
                g = Z.k(f, "stdin", b),
                e = Z.k(f, "stdout", ha, c),
                d = Z.k(f, "stderr", ha, d);
            Z.k(f, "tty", b, c);
            Z.b[1] = {
                path: "/dev/stdin",
                object: g,
                position: 0,
                G: ca,
                m: ka,
                F: ka,
                error: ka,
                A: ka,
                M: []
            };
            Z.b[2] = {
                path: "/dev/stdout",
                object: e,
                position: 0,
                G: ka,
                m: ca,
                F: ka,
                error: ka,
                A: ka,
                M: []
            };
            Z.b[3] = {
                path: "/dev/stderr",
                object: d,
                position: 0,
                G: ka,
                m: ca,
                F: ka,
                error: ka,
                A: ka,
                M: []
            };
            Rh = P([1], "void*", M);
            Sh = P([2], "void*", M);
            Th = P([3], "void*", M);
            Z.ua("/", "dev/shm/tmp", ca, ca);
            Z.b[Rh] = Z.b[1];
            Z.b[Sh] = Z.b[2];
            Z.b[Th] = Z.b[3];
            P([P([0, 0, 0, 0, Rh, 0, 0, 0, Sh, 0, 0, 0, Th, 0, 0, 0], "void*", M)], "void*", M)
        }),
        za: (function() {
            Z.j.s && (Z.b[2].object.i.buffer.length > 0 && Z.b[2].object.i("\n".charCodeAt(0)), Z.b[3].object.i.buffer.length > 0 && Z.b[3].object.i("\n".charCodeAt(0)))
        })
    };

function Uh(b, c, d) {
    var f = Z.b[b];
    if (f) {
        if (f.m) {
            if (d < 0) {
                return Qh(Mh), -1
            } else {
                if (f.object.d) {
                    if (f.object.i) {
                        for (var g = 0; g < d; g++) {
                            try {
                                f.object.i(q[c + g])
                            } catch (e) {
                                return Qh(Nh), -1
                            }
                        }
                        f.object.timestamp = Date.now();
                        return g
                    } else {
                        return Qh(Ph), -1
                    }
                } else {
                    g = f.position;
                    b = Z.b[b];
                    if (!b || b.object.d) {
                        Qh(Lh), c = -1
                    } else {
                        if (b.m) {
                            if (b.object.e) {
                                Qh(Oh), c = -1
                            } else {
                                if (d < 0 || g < 0) {
                                    Qh(Mh), c = -1
                                } else {
                                    for (var i = b.object.c; i.length < g;) {
                                        i.push(0)
                                    }
                                    for (var h = 0; h < d; h++) {
                                        i[g + h] = A[c + h]
                                    }
                                    b.object.timestamp = Date.now();
                                    c = h
                                }
                            }
                        } else {
                            Qh(Kh), c = -1
                        }
                    }
                    c != -1 && (f.position += c);
                    return c
                }
            }
        } else {
            return Qh(Kh), -1
        }
    } else {
        return Qh(Lh), -1
    }
}
var Cg, Dg;

function W() {
    a("ABORT: undefined, at " + Error().stack)
}

function Gh() {
    switch (8) {
        case 8:
            return zb;
        case 54:
        case 56:
        case 21:
        case 61:
        case 63:
        case 22:
        case 67:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 69:
        case 28:
        case 101:
        case 70:
        case 71:
        case 29:
        case 30:
        case 199:
        case 75:
        case 76:
        case 32:
        case 43:
        case 44:
        case 80:
        case 46:
        case 47:
        case 45:
        case 48:
        case 49:
        case 42:
        case 82:
        case 33:
        case 7:
        case 108:
        case 109:
        case 107:
        case 112:
        case 119:
        case 121:
            return 200809;
        case 13:
        case 104:
        case 94:
        case 95:
        case 34:
        case 35:
        case 77:
        case 81:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 91:
        case 94:
        case 95:
        case 110:
        case 111:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 120:
        case 40:
        case 16:
        case 79:
        case 19:
            return -1;
        case 92:
        case 93:
        case 5:
        case 72:
        case 6:
        case 74:
        case 92:
        case 93:
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103:
        case 105:
            return 1;
        case 38:
        case 66:
        case 50:
        case 51:
        case 4:
            return 1024;
        case 15:
        case 64:
        case 41:
            return 32;
        case 55:
        case 37:
        case 17:
            return 2147483647;
        case 18:
        case 1:
            return 47839;
        case 59:
        case 57:
            return 99;
        case 68:
        case 58:
            return 2048;
        case 0:
            return 2097152;
        case 3:
            return 65536;
        case 14:
            return 32768;
        case 73:
            return 32767;
        case 39:
            return 16384;
        case 60:
            return 1e3;
        case 106:
            return 700;
        case 52:
            return 256;
        case 62:
            return 255;
        case 2:
            return 100;
        case 65:
            return 64;
        case 36:
            return 20;
        case 100:
            return 16;
        case 20:
            return 6;
        case 53:
            return 4
    }
    Qh(Mh);
    return -1
}

function Ah(b) {
    Vh || (xb = Math.ceil(xb / zb) * zb, Vh = ca);
    var c = xb;
    b != 0 && vb(b);
    return c
}
var Vh, Jh;

function xg(b) {
    var c = y[Sh >> 2];
    if (Uh(c, b, Ac(b)) >= 0 && (b = "\n".charCodeAt(0) & 255, q[Wh] = b >= 0 ? b : Math.pow(2, aa) + b, Uh(c, Wh, 1) == -1 && c in Z.b)) {
        Z.b[c].error = ca
    }
}
wc.unshift({
    C: (function() {
        Z.D = ka;
        Z.j.s || Z.j()
    })
});
xc.push({
    C: (function() {
        Z.za()
    })
});
Qh(0);
P(12, "void*", M);
var Wh = P([0], "i8", M);
Module.sa = (function(b) {
    function c() {
        for (var b = 0; b < 3; b++) {
            f.push(0)
        }
    }
    var d = b.length + 1,
        f = [P(rc("/bin/this.program"), "i8", M)];
    c();
    for (var g = 0; g < d - 1; g += 1) {
        f.push(P(rc(b[g]), "i8", M)), c()
    }
    f.push(0);
    f = P(f, "i32", M);
    return _main(d, f, 0)
});
var Ec, Ad, Tc, zd, Cd, Dd, je, ke, le, me, ne, oe, pe, qe, re, se, Qe, Pe, ue, te, $e, Ze, qf, pf, of, nf, Ff, Eg, tg, og, rg, vg, wg, zg, Ag, Bg, sg, V, xh, Ih, Xh, gj, hj, ij;
Q.n = P([0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8], "i8", M);
Q.o = P([0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3], "i8", M);
Ec = P([10, 0, 0, 0, 13, 0, 0, 0, 16, 0, 0, 0, 11, 0, 0, 0, 14, 0, 0, 0, 18, 0, 0, 0, 13, 0, 0, 0, 16, 0, 0, 0, 20, 0, 0, 0, 14, 0, 0, 0, 18, 0, 0, 0, 23, 0, 0, 0, 16, 0, 0, 0, 20, 0, 0, 0, 25, 0, 0, 0, 18, 0, 0, 0, 23, 0, 0, 0, 29, 0, 0, 0], ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], M);
Ad = P([0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14, 0, 0, 0, 15, 0, 0, 0, 16, 0, 0, 0, 17, 0, 0, 0, 18, 0, 0, 0, 19, 0, 0, 0, 20, 0, 0, 0, 21, 0, 0, 0, 22, 0, 0, 0, 23, 0, 0, 0, 24, 0, 0, 0, 25, 0, 0, 0, 26, 0, 0, 0, 27, 0, 0, 0, 28, 0, 0, 0, 29, 0, 0, 0, 29, 0, 0, 0, 30, 0, 0, 0, 31, 0, 0, 0, 32, 0, 0, 0, 32, 0, 0, 0, 33, 0, 0, 0, 34, 0, 0, 0, 34, 0, 0, 0, 35, 0, 0, 0, 35, 0, 0, 0, 36, 0, 0, 0, 36, 0, 0, 0, 37, 0, 0, 0, 37, 0, 0, 0, 37, 0, 0, 0, 38, 0, 0, 0, 38, 0, 0, 0, 38, 0, 0, 0, 39, 0, 0, 0, 39, 0, 0, 0, 39, 0, 0, 0, 39, 0, 0, 0], ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], M);
P([1, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 16, 0, 0, 0, 32, 0, 0, 0, 64, 0, 0, 0, 128, 0, 0, 0], ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], M);
Tc = P([1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0], ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], M);
zd = P([0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 14, 0, 0, 0, 15, 0, 0, 0], ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], M);
Q.T = P([47, 31, 15, 0, 23, 27, 29, 30, 7, 11, 13, 14, 39, 43, 45, 46, 16, 3, 5, 10, 12, 19, 21, 26, 28, 35, 37, 42, 44, 1, 2, 4, 8, 17, 18, 20, 24, 6, 9, 22, 25, 32, 33, 34, 36, 40, 38, 41], "i8", M);
Q.S = P([0, 16, 1, 2, 4, 8, 32, 3, 5, 10, 12, 15, 47, 7, 11, 13, 14, 6, 9, 31, 35, 37, 42, 44, 33, 34, 36, 40, 39, 43, 45, 46, 17, 18, 20, 24, 19, 21, 26, 28, 23, 27, 29, 30, 22, 25, 38, 41], "i8", M);
Q.U = P([17, 1], "i8", M);
Q.V = P([34, 18, 1, 1], "i8", M);
Q.W = P([50, 34, 18, 2], "i8", M);
Q.Y = P([67, 51, 34, 34, 18, 18, 2, 2], "i8", M);
Q.Z = P([83, 67, 51, 35, 18, 18, 2, 2], "i8", M);
Q.$ = P([19, 35, 67, 51, 99, 83, 2, 2], "i8", M);
Q.ha = P([0, 0, 101, 85, 68, 68, 52, 52, 35, 35, 35, 35, 19, 19, 19, 19, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "i8", M);
Q.ia = P([0, 249, 233, 217, 200, 200, 184, 184, 167, 167, 167, 167, 151, 151, 151, 151, 134, 134, 134, 134, 134, 134, 134, 134, 118, 118, 118, 118, 118, 118, 118, 118], "i8", M);
Q.ja = P([230, 214, 198, 182, 165, 165, 149, 149, 132, 132, 132, 132, 116, 116, 116, 116, 100, 100, 100, 100, 84, 84, 84, 84, 67, 67, 67, 67, 67, 67, 67, 67, 51, 51, 51, 51, 51, 51, 51, 51, 35, 35, 35, 35, 35, 35, 35, 35, 19, 19, 19, 19, 19, 19, 19, 19, 3, 3, 3, 3, 3, 3, 3, 3], "i8", M);
Q.ka = P([214, 182, 197, 197, 165, 165, 149, 149, 132, 132, 132, 132, 84, 84, 84, 84, 68, 68, 68, 68, 4, 4, 4, 4, 115, 115, 115, 115, 115, 115, 115, 115, 99, 99, 99, 99, 99, 99, 99, 99, 51, 51, 51, 51, 51, 51, 51, 51, 35, 35, 35, 35, 35, 35, 35, 35, 19, 19, 19, 19, 19, 19, 19, 19], "i8", M);
Q.la = P([197, 181, 165, 5, 148, 148, 116, 116, 52, 52, 36, 36, 131, 131, 131, 131, 99, 99, 99, 99, 83, 83, 83, 83, 67, 67, 67, 67, 19, 19, 19, 19], "i8", M);
Q.ma = P([181, 149, 164, 164, 132, 132, 36, 36, 20, 20, 4, 4, 115, 115, 115, 115, 99, 99, 99, 99, 83, 83, 83, 83, 67, 67, 67, 67, 51, 51, 51, 51], "i8", M);
Q.na = P([166, 6, 21, 21, 132, 132, 132, 132, 147, 147, 147, 147, 147, 147, 147, 147, 115, 115, 115, 115, 115, 115, 115, 115, 99, 99, 99, 99, 99, 99, 99, 99, 83, 83, 83, 83, 83, 83, 83, 83, 67, 67, 67, 67, 67, 67, 67, 67, 51, 51, 51, 51, 51, 51, 51, 51, 35, 35, 35, 35, 35, 35, 35, 35], "i8", M);
Q.oa = P([150, 6, 21, 21, 116, 116, 116, 116, 131, 131, 131, 131, 131, 131, 131, 131, 99, 99, 99, 99, 99, 99, 99, 99, 67, 67, 67, 67, 67, 67, 67, 67, 51, 51, 51, 51, 51, 51, 51, 51, 35, 35, 35, 35, 35, 35, 35, 35, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82], "i8", M);
Q.pa = P([134, 6, 37, 37, 20, 20, 20, 20, 115, 115, 115, 115, 115, 115, 115, 115, 99, 99, 99, 99, 99, 99, 99, 99, 51, 51, 51, 51, 51, 51, 51, 51, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66], "i8", M);
Q.qa = P([22, 6, 117, 117, 36, 36, 36, 36, 83, 83, 83, 83, 83, 83, 83, 83, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], "i8", M);
Q.ca = P([21, 5, 100, 100, 35, 35, 35, 35, 82, 82, 82, 82, 82, 82, 82, 82, 66, 66, 66, 66, 66, 66, 66, 66, 50, 50, 50, 50, 50, 50, 50, 50], "i8", M);
Q.da = P([4, 20, 35, 35, 51, 51, 83, 83, 65, 65, 65, 65, 65, 65, 65, 65], "i8", M);
Q.ea = P([4, 20, 67, 67, 34, 34, 34, 34, 49, 49, 49, 49, 49, 49, 49, 49], "i8", M);
Q.fa = P([3, 19, 50, 50, 33, 33, 33, 33], "i8", M);
Q.ga = P([2, 18, 33, 33], "i8", M);
Cd = P([0, 0, 0, 0, 0, 0, 8294, 0, 4134, 0, 2054, 0, 6245, 0, 6245, 0, 4163, 0, 4163, 0, 4163, 0, 4163, 0, 4163, 0, 4163, 0, 4163, 0, 4163, 0, 2082, 0, 2082, 0, 2082, 0, 2082, 0, 2082, 0, 2082, 0, 2082, 0, 2082, 0, 2082, 0, 2082, 0, 2082, 0, 2082, 0, 2082, 0, 2082, 0, 2082, 0, 2082, 0], ["i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0], M);
Dd = P([0, 0, 0, 0, 0, 0, 0, 0, 16490, 0, 12362, 0, 10282, 0, 8202, 0, 14441, 0, 14441, 0, 10313, 0, 10313, 0, 8233, 0, 8233, 0, 6153, 0, 6153, 0, 12392, 0, 12392, 0, 12392, 0, 12392, 0, 8264, 0, 8264, 0, 8264, 0, 8264, 0, 6184, 0, 6184, 0, 6184, 0, 6184, 0, 4104, 0, 4104, 0, 4104, 0, 4104, 0, 10343, 0, 10343, 0, 10343, 0, 10343, 0, 10343, 0, 10343, 0, 10343, 0, 10343, 0, 6215, 0, 6215, 0, 6215, 0, 6215, 0, 6215, 0, 6215, 0, 6215, 0, 6215, 0], ["i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0], M);
je = P([24686, 0, 22606, 0, 20526, 0, 20494, 0, 22638, 0, 20558, 0, 18478, 0, 18446, 0, 16397, 0, 16397, 0, 18509, 0, 18509, 0, 16429, 0, 16429, 0, 14349, 0, 14349, 0, 20589, 0, 20589, 0, 16461, 0, 16461, 0, 14381, 0, 14381, 0, 12301, 0, 12301, 0, 18539, 0, 18539, 0, 18539, 0, 18539, 0, 18539, 0, 18539, 0, 18539, 0, 18539, 0, 14411, 0, 14411, 0, 14411, 0, 14411, 0, 14411, 0, 14411, 0, 14411, 0, 14411, 0, 12331, 0, 12331, 0, 12331, 0, 12331, 0, 12331, 0, 12331, 0, 12331, 0, 12331, 0, 10251, 0, 10251, 0, 10251, 0, 10251, 0, 10251, 0, 10251, 0, 10251, 0, 10251, 0], ["i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0], M);
ke = P([0, 0, 0, 0, 26671, 0, 26671, 0, -32752, 0, -32688, 0, -32720, 0, 30736, 0, -32656, 0, 30800, 0, 30768, 0, 28688, 0, 30832, 0, 28752, 0, 28720, 0, 26640, 0, 28783, 0, 28783, 0, 26703, 0, 26703, 0, 24623, 0, 24623, 0, 24591, 0, 24591, 0, 26735, 0, 26735, 0, 24655, 0, 24655, 0, 22575, 0, 22575, 0, 22543, 0, 22543, 0], ["i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0], M);
le = P([0, 0, 0, 0, 0, 0, 0, 0, 14438, 0, 8262, 0, 8230, 0, 4102, 0, 12390, 0, 6214, 0, 6182, 0, 2054, 0, 10341, 0, 10341, 0, 4133, 0, 4133, 0, 8292, 0, 8292, 0, 8292, 0, 8292, 0, 6244, 0, 6244, 0, 6244, 0, 6244, 0, 4163, 0, 4163, 0, 4163, 0, 4163, 0, 4163, 0, 4163, 0, 4163, 0, 4163, 0], ["i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0], M);
me = P([0, 0, 0, 0, 0, 0, 0, 0, 18537, 0, 14409, 0, 14377, 0, 12297, 0, 10248, 0, 10248, 0, 12360, 0, 12360, 0, 12328, 0, 12328, 0, 8200, 0, 8200, 0, 16487, 0, 16487, 0, 16487, 0, 16487, 0, 10311, 0, 10311, 0, 10311, 0, 10311, 0, 10279, 0, 10279, 0, 10279, 0, 10279, 0, 6151, 0, 6151, 0, 6151, 0, 6151, 0], ["i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0], M);
ne = P([0, 0, 0, 0, 30829, 0, 30829, 0, -32658, 0, -32690, 0, -32722, 0, -32754, 0, 30766, 0, 30734, 0, 30798, 0, 28718, 0, 28749, 0, 28749, 0, 28685, 0, 28685, 0, 28781, 0, 28781, 0, 26701, 0, 26701, 0, 26669, 0, 26669, 0, 26637, 0, 26637, 0, 26733, 0, 26733, 0, 24653, 0, 24653, 0, 24621, 0, 24621, 0, 24589, 0, 24589, 0, 22540, 0, 22540, 0, 22540, 0, 22540, 0, 22604, 0, 22604, 0, 22604, 0, 22604, 0, 22572, 0, 22572, 0, 22572, 0, 22572, 0, 20492, 0, 20492, 0, 20492, 0, 20492, 0, 24684, 0, 24684, 0, 24684, 0, 24684, 0, 20556, 0, 20556, 0, 20556, 0, 20556, 0, 20524, 0, 20524, 0, 20524, 0, 20524, 0, 18444, 0, 18444, 0, 18444, 0, 18444, 0, 22635, 0, 22635, 0, 22635, 0, 22635, 0, 22635, 0, 22635, 0, 22635, 0, 22635, 0, 18507, 0, 18507, 0, 18507, 0, 18507, 0, 18507, 0, 18507, 0, 18507, 0, 18507, 0, 18475, 0, 18475, 0, 18475, 0, 18475, 0, 18475, 0, 18475, 0, 18475, 0, 18475, 0, 16395, 0, 16395, 0, 16395, 0, 16395, 0, 16395, 0, 16395, 0, 16395, 0, 16395, 0, 20587, 0, 20587, 0, 20587, 0, 20587, 0, 20587, 0, 20587, 0, 20587, 0, 20587, 0, 16459, 0, 16459, 0, 16459, 0, 16459, 0, 16459, 0, 16459, 0, 16459, 0, 16459, 0, 16427, 0, 16427, 0, 16427, 0, 16427, 0, 16427, 0, 16427, 0, 16427, 0, 16427, 0, 14347, 0, 14347, 0, 14347, 0, 14347, 0, 14347, 0, 14347, 0, 14347, 0, 14347, 0], ["i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0], M);
oe = P([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6150, 0, 14406, 0, 14374, 0, 4102, 0, 18534, 0, 12358, 0, 12326, 0, 2054, 0, 10277, 0, 10277, 0, 10309, 0, 10309, 0, 8229, 0, 8229, 0, 8261, 0, 8261, 0, 6181, 0, 6181, 0, 16485, 0, 16485, 0, 6213, 0, 6213, 0, 4133, 0, 4133, 0, 14436, 0, 14436, 0, 14436, 0, 14436, 0, 12388, 0, 12388, 0, 12388, 0, 12388, 0, 10340, 0, 10340, 0, 10340, 0, 10340, 0, 8292, 0, 8292, 0, 8292, 0, 8292, 0, 6244, 0, 6244, 0, 6244, 0, 6244, 0, 4164, 0, 4164, 0, 4164, 0, 4164, 0, 2084, 0, 2084, 0, 2084, 0, 2084, 0, 4, 0, 4, 0, 4, 0, 4, 0], ["i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0], M);
pe = P([0, 0, -32758, 0, -32662, 0, -32694, 0, -32726, 0, 30730, 0, 30826, 0, 30794, 0, 30762, 0, 28682, 0, 28778, 0, 28746, 0, 28714, 0, 26634, 0, 26665, 0, 26665, 0, 24585, 0, 24585, 0, 26697, 0, 26697, 0, 24617, 0, 24617, 0, 22537, 0, 22537, 0, 26729, 0, 26729, 0, 24649, 0, 24649, 0, 22569, 0, 22569, 0, 20489, 0, 20489, 0, 24680, 0, 24680, 0, 24680, 0, 24680, 0, 22600, 0, 22600, 0, 22600, 0, 22600, 0, 20520, 0, 20520, 0, 20520, 0, 20520, 0, 18440, 0, 18440, 0, 18440, 0, 18440, 0, 22632, 0, 22632, 0, 22632, 0, 22632, 0, 20552, 0, 20552, 0, 20552, 0, 20552, 0, 18472, 0, 18472, 0, 18472, 0, 18472, 0, 16392, 0, 16392, 0, 16392, 0, 16392, 0, 14343, 0, 14343, 0, 14343, 0, 14343, 0, 14343, 0, 14343, 0, 14343, 0, 14343, 0, 12295, 0, 12295, 0, 12295, 0, 12295, 0, 12295, 0, 12295, 0, 12295, 0, 12295, 0, 18503, 0, 18503, 0, 18503, 0, 18503, 0, 18503, 0, 18503, 0, 18503, 0, 18503, 0, 10247, 0, 10247, 0, 10247, 0, 10247, 0, 10247, 0, 10247, 0, 10247, 0, 10247, 0, 20583, 0, 20583, 0, 20583, 0, 20583, 0, 20583, 0, 20583, 0, 20583, 0, 20583, 0, 16455, 0, 16455, 0, 16455, 0, 16455, 0, 16455, 0, 16455, 0, 16455, 0, 16455, 0, 16423, 0, 16423, 0, 16423, 0, 16423, 0, 16423, 0, 16423, 0, 16423, 0, 16423, 0, 8199, 0, 8199, 0, 8199, 0, 8199, 0, 8199, 0, 8199, 0, 8199, 0, 8199, 0], ["i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0], M);
qe = P([2054, 0, 2086, 0, 0, 0, 6, 0, 4102, 0, 4134, 0, 4166, 0, 0, 0, 6150, 0, 6182, 0, 6214, 0, 6246, 0, 8198, 0, 8230, 0, 8262, 0, 8294, 0, 10246, 0, 10278, 0, 10310, 0, 10342, 0, 12294, 0, 12326, 0, 12358, 0, 12390, 0, 14342, 0, 14374, 0, 14406, 0, 14438, 0, 16390, 0, 16422, 0, 16454, 0, 16486, 0, 18438, 0, 18470, 0, 18502, 0, 18534, 0, 20486, 0, 20518, 0, 20550, 0, 20582, 0, 22534, 0, 22566, 0, 22598, 0, 22630, 0, 24582, 0, 24614, 0, 24646, 0, 24678, 0, 26630, 0, 26662, 0, 26694, 0, 26726, 0, 28678, 0, 28710, 0, 28742, 0, 28774, 0, 30726, 0, 30758, 0, 30790, 0, 30822, 0, -32762, 0, -32730, 0, -32698, 0, -32666, 0], ["i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0], M);
re = P([0, 0, 4163, 0, 2, 0, 2, 0, 2081, 0, 2081, 0, 2081, 0, 2081, 0], ["i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0], M);
se = P([8295, 0, 8295, 0, 8264, 0, 8232, 0, 6215, 0, 6215, 0, 6183, 0, 6183, 0, 8198, 0, 8198, 0, 8198, 0, 8198, 0, 6150, 0, 6150, 0, 6150, 0, 6150, 0, 4102, 0, 4102, 0, 4102, 0, 4102, 0, 6246, 0, 6246, 0, 6246, 0, 6246, 0, 4134, 0, 4134, 0, 4134, 0, 4134, 0, 2054, 0, 2054, 0, 2054, 0, 2054, 0], ["i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0], M);
Qe = P([3, 0, 0, 0, 15, I, 0, 0, 1, 0, 0, 0, 10, I, 0, 0, 0, 0, 0, 0, 5, I, 0, 0, 4, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 11, I, 0, 0, 1, 0, 0, 0, 14, I, 0, 0, 4, 0, 0, 0, 1, I, 0, 0, 4, 0, 0, 0, 4, I, 0, 0, 0, 0, 0, 0, 7, I, 0, 0, 4, 0, 0, 0, 2, I, 0, 0, 0, 0, 0, 0, 13, I, 0, 0, 4, 0, 0, 0, 8, I, 0, 0, 4, 0, 0, 0, 3, I, 0, 0, 4, 0, 0, 0, 6, I, 0, 0, 4, 0, 0, 0, 9, I, 0, 0, 4, 0, 0, 0, 12, I, 0, 0, 3, 0, 0, 0, 19, I, 0, 0, 1, 0, 0, 0, 18, I, 0, 0, 0, 0, 0, 0, 17, I, 0, 0, 4, 0, 0, 0, 16, I, 0, 0, 3, 0, 0, 0, 23, I, 0, 0, 1, 0, 0, 0, 22, I, 0, 0, 0, 0, 0, 0, 21, I, 0, 0, 4, 0, 0, 0, 20, I, 0, 0], ["i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8"], M);
Pe = P([1, 0, 0, 0, 11, I, 0, 0, 1, 0, 0, 0, 14, I, 0, 0, 4, 0, 0, 0, 1, I, 0, 0, 255, 0, 0, 0, 4, I, 0, 0, 1, 0, 0, 0, 15, I, 0, 0, 2, 0, 0, 0, 10, I, 0, 0, 4, 0, 0, 0, 5, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 3, I, 0, 0, 4, 0, 0, 0, 6, I, 0, 0, 4, 0, 0, 0, 9, I, 0, 0, 255, 0, 0, 0, 12, I, 0, 0, 4, 0, 0, 0, 7, I, 0, 0, 255, 0, 0, 0, 2, I, 0, 0, 4, 0, 0, 0, 13, I, 0, 0, 255, 0, 0, 0, 8, I, 0, 0, 1, 0, 0, 0, 19, I, 0, 0, 2, 0, 0, 0, 18, I, 0, 0, 4, 0, 0, 0, 17, I, 0, 0, 255, 0, 0, 0, 16, I, 0, 0, 1, 0, 0, 0, 23, I, 0, 0, 2, 0, 0, 0, 22, I, 0, 0, 4, 0, 0, 0, 21, I, 0, 0, 255, 0, 0, 0, 20, I, 0, 0], ["i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8"], M);
ue = P([1, 0, 0, 0, 10, I, 0, 0, 1, 0, 0, 0, 11, I, 0, 0, 4, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 1, I, 0, 0, 1, 0, 0, 0, 14, I, 0, 0, 1, 0, 0, 0, 15, I, 0, 0, 4, 0, 0, 0, 4, I, 0, 0, 4, 0, 0, 0, 5, I, 0, 0, 4, 0, 0, 0, 2, I, 0, 0, 4, 0, 0, 0, 3, I, 0, 0, 4, 0, 0, 0, 8, I, 0, 0, 4, 0, 0, 0, 9, I, 0, 0, 4, 0, 0, 0, 6, I, 0, 0, 4, 0, 0, 0, 7, I, 0, 0, 4, 0, 0, 0, 12, I, 0, 0, 4, 0, 0, 0, 13, I, 0, 0, 1, 0, 0, 0, 18, I, 0, 0, 1, 0, 0, 0, 19, I, 0, 0, 4, 0, 0, 0, 16, I, 0, 0, 4, 0, 0, 0, 17, I, 0, 0, 1, 0, 0, 0, 22, I, 0, 0, 1, 0, 0, 0, 23, I, 0, 0, 4, 0, 0, 0, 20, I, 0, 0, 4, 0, 0, 0, 21, I, 0, 0], ["i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8"], M);
te = P([0, 0, 0, 0, 5, I, 0, 0, 4, 0, 0, 0, 0, I, 0, 0, 0, 0, 0, 0, 7, I, 0, 0, 4, 0, 0, 0, 2, I, 0, 0, 4, 0, 0, 0, 1, I, 0, 0, 4, 0, 0, 0, 4, I, 0, 0, 4, 0, 0, 0, 3, I, 0, 0, 4, 0, 0, 0, 6, I, 0, 0, 0, 0, 0, 0, 13, I, 0, 0, 4, 0, 0, 0, 8, I, 0, 0, 0, 0, 0, 0, 15, I, 0, 0, 4, 0, 0, 0, 10, I, 0, 0, 4, 0, 0, 0, 9, I, 0, 0, 4, 0, 0, 0, 12, I, 0, 0, 4, 0, 0, 0, 11, I, 0, 0, 4, 0, 0, 0, 14, I, 0, 0, 0, 0, 0, 0, 17, I, 0, 0, 4, 0, 0, 0, 16, I, 0, 0, 0, 0, 0, 0, 19, I, 0, 0, 4, 0, 0, 0, 18, I, 0, 0, 0, 0, 0, 0, 21, I, 0, 0, 4, 0, 0, 0, 20, I, 0, 0, 0, 0, 0, 0, 23, I, 0, 0, 4, 0, 0, 0, 22, I, 0, 0], ["i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8"], M);
$e = P([0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 12, 0, 0, 0, 8, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 12, 0, 0, 0, 8, 0, 0, 0, 12, 0, 0, 0], ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], M);
Ze = P([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 8, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 8, 0, 0, 0, 8, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0], ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], M);
Q.a = P([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], "i8", M);
qf = P([3, 0, 0, 0, 15, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 3, 0, 0, 0, 15, I, 0, 0, 0, 0, 0, 0, 5, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 3, 0, 0, 0, 15, I, 0, 0, 1, 0, 0, 0, 10, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 3, 0, 0, 0, 15, I, 0, 0, 1, 0, 0, 0, 10, I, 0, 0, 0, 0, 0, 0, 5, I, 0, 0, 4, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 11, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 11, I, 0, 0, 4, 0, 0, 0, 1, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 11, I, 0, 0, 1, 0, 0, 0, 14, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 11, I, 0, 0, 1, 0, 0, 0, 14, I, 0, 0, 4, 0, 0, 0, 1, I, 0, 0, 4, 0, 0, 0, 4, I, 0, 0, 0, 0, 0, 0, 7, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 0, 0, 0, 0, 7, I, 0, 0, 0, 0, 0, 0, 13, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 0, 0, 0, 0, 7, I, 0, 0, 4, 0, 0, 0, 2, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 0, 0, 0, 0, 7, I, 0, 0, 4, 0, 0, 0, 2, I, 0, 0, 0, 0, 0, 0, 13, I, 0, 0, 4, 0, 0, 0, 8, I, 0, 0, 4, 0, 0, 0, 3, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 3, I, 0, 0, 4, 0, 0, 0, 9, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 3, I, 0, 0, 4, 0, 0, 0, 6, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 3, I, 0, 0, 4, 0, 0, 0, 6, I, 0, 0, 4, 0, 0, 0, 9, I, 0, 0, 4, 0, 0, 0, 12, I, 0, 0], ["i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8"], M);
pf = P([1, 0, 0, 0, 14, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 14, I, 0, 0, 255, 0, 0, 0, 4, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 11, I, 0, 0, 1, 0, 0, 0, 14, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 11, I, 0, 0, 1, 0, 0, 0, 14, I, 0, 0, 4, 0, 0, 0, 1, I, 0, 0, 255, 0, 0, 0, 4, I, 0, 0, 2, 0, 0, 0, 10, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 2, 0, 0, 0, 10, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 15, I, 0, 0, 2, 0, 0, 0, 10, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 15, I, 0, 0, 2, 0, 0, 0, 10, I, 0, 0, 4, 0, 0, 0, 5, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 6, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 6, I, 0, 0, 255, 0, 0, 0, 12, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 3, I, 0, 0, 4, 0, 0, 0, 6, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 3, I, 0, 0, 4, 0, 0, 0, 6, I, 0, 0, 4, 0, 0, 0, 9, I, 0, 0, 255, 0, 0, 0, 12, I, 0, 0, 255, 0, 0, 0, 2, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 2, I, 0, 0, 255, 0, 0, 0, 8, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 7, I, 0, 0, 255, 0, 0, 0, 2, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 7, I, 0, 0, 255, 0, 0, 0, 2, I, 0, 0, 4, 0, 0, 0, 13, I, 0, 0, 255, 0, 0, 0, 8, I, 0, 0], ["i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8"], M);
of = P([1, 0, 0, 0, 10, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 10, I, 0, 0, 4, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 10, I, 0, 0, 1, 0, 0, 0, 11, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 10, I, 0, 0, 1, 0, 0, 0, 11, I, 0, 0, 4, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 1, I, 0, 0, 1, 0, 0, 0, 14, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 14, I, 0, 0, 4, 0, 0, 0, 4, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 14, I, 0, 0, 1, 0, 0, 0, 15, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 1, 0, 0, 0, 14, I, 0, 0, 1, 0, 0, 0, 15, I, 0, 0, 4, 0, 0, 0, 4, I, 0, 0, 4, 0, 0, 0, 5, I, 0, 0, 4, 0, 0, 0, 2, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 2, I, 0, 0, 4, 0, 0, 0, 8, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 2, I, 0, 0, 4, 0, 0, 0, 3, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 2, I, 0, 0, 4, 0, 0, 0, 3, I, 0, 0, 4, 0, 0, 0, 8, I, 0, 0, 4, 0, 0, 0, 9, I, 0, 0, 4, 0, 0, 0, 6, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 6, I, 0, 0, 4, 0, 0, 0, 12, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 6, I, 0, 0, 4, 0, 0, 0, 7, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 6, I, 0, 0, 4, 0, 0, 0, 7, I, 0, 0, 4, 0, 0, 0, 12, I, 0, 0, 4, 0, 0, 0, 13, I, 0, 0], ["i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8"], M);
nf = P([0, 0, 0, 0, 5, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 0, 0, 0, 0, 5, I, 0, 0, 0, 0, 0, 0, 7, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 0, 0, 0, 0, 5, I, 0, 0, 4, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 0, 0, 0, 0, 5, I, 0, 0, 4, 0, 0, 0, 0, I, 0, 0, 0, 0, 0, 0, 7, I, 0, 0, 4, 0, 0, 0, 2, I, 0, 0, 4, 0, 0, 0, 1, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 1, I, 0, 0, 4, 0, 0, 0, 3, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 1, I, 0, 0, 4, 0, 0, 0, 4, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 1, I, 0, 0, 4, 0, 0, 0, 4, I, 0, 0, 4, 0, 0, 0, 3, I, 0, 0, 4, 0, 0, 0, 6, I, 0, 0, 0, 0, 0, 0, 13, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 0, 0, 0, 0, 13, I, 0, 0, 0, 0, 0, 0, 15, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 0, 0, 0, 0, 13, I, 0, 0, 4, 0, 0, 0, 8, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 0, 0, 0, 0, 13, I, 0, 0, 4, 0, 0, 0, 8, I, 0, 0, 0, 0, 0, 0, 15, I, 0, 0, 4, 0, 0, 0, 10, I, 0, 0, 4, 0, 0, 0, 9, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 9, I, 0, 0, 4, 0, 0, 0, 11, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 9, I, 0, 0, 4, 0, 0, 0, 12, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 255, 0, 0, 0, 0, I, 0, 0, 4, 0, 0, 0, 9, I, 0, 0, 4, 0, 0, 0, 12, I, 0, 0, 4, 0, 0, 0, 11, I, 0, 0, 4, 0, 0, 0, 14, I, 0, 0], ["i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i32", 0, 0, 0, "i8", "i8", "i8", "i8"], M);
Ff = P([0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14, 0, 0, 0, 15, 0, 0, 0], ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], M);
P(1, "i32", M);
P(1, "i32", M);
P(1, "i32", M);
P(1, "i32", M);
P(1, "i32", M);
Q.f = P([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 17, 20, 22, 25, 28, 32, 36, 40, 45, 50, 56, 63, 71, 80, 90, 101, 113, 127, 144, 162, 182, 203, 226, 255, 255], "i8", M);
Q.g = P([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18], "i8", M);
Q.h = P([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 3, 1, 2, 3, 2, 2, 3, 2, 2, 4, 2, 3, 4, 2, 3, 4, 3, 3, 5, 3, 4, 6, 3, 4, 6, 4, 5, 7, 4, 5, 8, 4, 6, 9, 5, 7, 10, 6, 8, 11, 6, 8, 13, 7, 10, 14, 8, 11, 16, 9, 12, 18, 10, 13, 20, 11, 15, 23, 13, 17, 25], "i8", M);
P([1048576], ["i32", 0, 0, 0, 0], M);
Eg = P(1, "i8*", M);
Q.Aa = P([114, 98, 0], "i8", M);
Q.Da = P([82, 69, 65, 68, 32, 70, 73, 76, 69, 32, 37, 100, 32, 66, 89, 84, 69, 83, 10, 0], "i8", M);
tg = P(16, ["*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], M);
og = P(16, ["i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], M);
rg = P(1, "i8*", M);
vg = P(1, "i32", M);
wg = P(1, "i32", M);
zg = P(4, "*", M);
Ag = P(48, "i32", M);
Bg = P(1, "i32", M);
sg = P(16, ["*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], M);
V = P(468, ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0], M);
xh = P(24, "i32", M);
Q.Ea = P([109, 97, 120, 32, 115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 115, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0], "i8", M);
Q.Ba = P([115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0], "i8", M);
Q.Ca = P([105, 110, 32, 117, 115, 101, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0], "i8", M);
P([I], "i8", M);
P(1, "void ()*", M);
Ih = P([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 10, 0, 0, 0, 12, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], M);
P(1, "void*", M);
Q.R = P([115, 116, 100, 58, 58, 98, 97, 100, 95, 97, 108, 108, 111, 99, 0], "i8", M);
Xh = P([0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 16, 0, 0, 0, 18, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], M);
P(1, "void*", M);
Q.Q = P([98, 97, 100, 95, 97, 114, 114, 97, 121, 95, 110, 101, 119, 95, 108, 101, 110, 103, 116, 104, 0], "i8", M);
Q.P = P([83, 116, 57, 98, 97, 100, 95, 97, 108, 108, 111, 99, 0], "i8", M);
hj = P(12, "*", M);
Q.O = P([83, 116, 50, 48, 98, 97, 100, 95, 97, 114, 114, 97, 121, 95, 110, 101, 119, 95, 108, 101, 110, 103, 116, 104, 0], "i8", M);
ij = P(12, "*", M);
Q.Fa = P([85, 78, 65, 66, 76, 69, 32, 84, 79, 32, 79, 80, 69, 78, 32, 70, 73, 76, 69, 0], "i8", M);
Q.Ga = P([67, 65, 78, 78, 79, 84, 32, 82, 69, 65, 68, 32, 70, 73, 76, 69, 0], "i8", M);
Q.aa = P([68, 69, 67, 79, 68, 69, 82, 32, 73, 78, 73, 84, 73, 65, 76, 73, 90, 65, 84, 73, 79, 78, 32, 70, 65, 73, 76, 69, 68, 0], "i8", M);
Q.ba = P([85, 78, 65, 66, 76, 69, 32, 84, 79, 32, 65, 76, 76, 79, 67, 65, 84, 69, 32, 77, 69, 77, 79, 82, 89, 0], "i8", M);
y[Ih + 4 >> 2] = hj;
y[Xh + 4 >> 2] = ij;
gj = P([2, 0, 0, 0, 0], ["i8*", 0, 0, 0, 0], M);
y[hj >> 2] = gj + 8 | 0;
y[hj + 4 >> 2] = Q.P | 0;
y[hj + 8 >> 2] = aa;
y[ij >> 2] = gj + 8 | 0;
y[ij + 4 >> 2] = Q.O | 0;
y[ij + 8 >> 2] = hj;
lc = [0, 0, (function(b, c, d, f, g) {
    (d | 0) != 0 && (kc(c, q[b], d), c = c + d | 0);
    if ((f | 0) != 0) {
        for (d = 0;;) {
            if (q[c + d | 0] = q[b + d | 0], d = d + 1 | 0, (d | 0) == (f | 0)) {
                break
            }
        }
        c = c + f | 0;
        b = b + f | 0
    }(g | 0) != 0 && kc(c, q[b - 1 | 0], g)
}), 0, (function(b, c, d, f) {
    sd(c, b, f)
}), 0, (function() {}), 0, (function(b) {
    Hh(b)
}), 0, (function(b) {
    Hh(b);
    b |= 0;
    (b | 0) != 0 && Ae(b)
}), 0, (function() {
    return Q.R | 0
}), 0, (function(b) {
    y[b >> 2] = Xh + 8 | 0;
    Hh(b)
}), 0, (function(b) {
    y[b >> 2] = Xh + 8 | 0;
    Hh(b);
    b |= 0;
    (b | 0) != 0 && Ae(b)
}), 0, (function() {
    return Q.Q | 0
}), 0];
Module.FUNCTION_TABLE = lc;

function jj(b) {
    b = b || Module.arguments;
    vc(wc);
    var c = ha;
    Module._main && (c = Module.sa(b), vc(xc), Ob.print());
    return c
}
Module.run = jj;
Module.preRun && Module.preRun();
Module.noInitialRun = ca;
Module.noInitialRun || jj();
Module.postRun && Module.postRun();
Z && (Module.FS = Z);
Module.HEAPU8 = A;
Module.CorrectionsMonitor = Ob;
Z.createDataFile = Z.ta;
var kj = ka;
_runMainLoop = (function() {
    window.addEventListener("message", (function() {
        _mainLoopIteration();
        kj || window.postMessage(0, "*")
    }), ka)
});
Module.play = (function() {
    kj = ka;
    window.postMessage(0, "*")
});
Module.stop = (function() {
    kj = ca
});
Module.onFrameDecoded = (function() {});
_broadwayOnFrameDecoded = (function() {
    Module.onFrameDecoded()
});
Module.createStreamBuffer = (function(b) {
    b = jc(b);
    (b | 0) == 0 && xg(Q.ba | 0);
    return b
});
var lj = Module.patches = {};

function mj() {
    return (function() {
        return this
    }).call(ha)
}
Sb = (function(b, c) {
    b || a("Assertion: " + c)
});
Module.patch = (function(b, c, d) {
    Sb(typeof d == "function");
    b || (b = mj());
    Module.CC_VARIABLE_MAP && (c = Module.CC_VARIABLE_MAP[c]);
    Sb(c in b && (typeof b[c] === "function" || typeof b[c] === "undefined"), "Can only patch functions.");
    lj[c] = b[c];
    b[c] = d;
    return lj[c]
});
Module.unpatch = (function(b, c) {
    b || (b = mj());
    Module.CC_VARIABLE_MAP && (c = Module.CC_VARIABLE_MAP[c]);
    Sb(c in b && typeof b[c] == "function");
    c in lj && (b[c] = lj[c])
});
Bc = Math.abs;
Cc = (function(b, c, d) {
    return d < b ? b : d > c ? c : d
});
Module.CC_VARIABLE_MAP = {
    "___setErrNo": "Qh",
    "_Mmcop3": "Lf",
    "_h264bsdCheckDeltaPicOrderCntBottom": "bd",
    "_h264bsdFilterPicture": "Sf",
    "_h264bsdReorderRefPicList": "Gf",
    "_sbrk": "Ah",
    "_CheckPps": "De",
    "_Intra4x4VerticalLeftPrediction": "Xe",
    "_coeffToken4_0": "oe",
    "_DecRefPicMarking": "Vc",
    "_coeffToken4_1": "pe",
    "_h264bsdStoreSeqParamSet": "ze",
    "_Mmcop6": "Hf",
    "_Mmcop5": "Mf",
    "intArrayFromString": "rc",
    "_add_segment": "Dh",
    "_init_top": "Bh",
    "_h264bsdFillBlock": "sf",
    "ENVIRONMENT_IS_WORKER": "ua",
    "_decInfo": "Ag",
    "_h264bsdCroppingParams": "lg",
    "_h264bsdGetRefPicData": "gf",
    "_EdgeBoundaryStrength": "Yf",
    "e$$5": "ab",
    "_Intra4x4DiagonalDownLeftPrediction": "Te",
    "_sys_alloc": "wh",
    "_h264bsdConceal": "gg",
    "_DecodeCoeffToken": "Bd",
    "FS": "Z",
    "_clip": "Cc",
    "_h264bsdQpC": "Ad",
    "_h264bsdMarkSliceCorrupted": "jd",
    "_OutputPicture": "Nf",
    "i": "tc",
    "_FilterHorChromaEdge": "fg",
    "_sbrk$called": "Vh",
    "base": "sc",
    "_h264bsdNextMbAddress": "Ic",
    "_DecodeTotalZeros": "we",
    "_h264bsdDecodePicOrderCnt": "jg",
    "_DecodeHrdParameters": "kg",
    "_N_B_SUB_PART": "of",
    "_init_mparams": "yh",
    "_N_D_SUB_PART": "qf",
    "_decPicture": "sg",
    "_MvPrediction16x16": "cf",
    "_coeffToken0_1": "Dd",
    "_coeffToken0_0": "Cd",
    "_levelScale": "Ec",
    "_coeffToken0_3": "ke",
    "_h264bsdDecodeExpGolombUnsigned": "T",
    "_coeffToken0_2": "je",
    "_tmalloc_small": "uh",
    "Array_copy": "zc",
    "PAGE_SIZE": "zb",
    "Runtime": "Mb",
    "_decInput": "tg",
    "_h264bsdCheckPicOrderCntLsb": "Xc",
    "TOTAL_MEMORY": "yb",
    "__ATEXIT__": "xc",
    "_h264bsdInterPrediction": "ud",
    "_decOutput": "zg",
    "_N_C_SUB_PART": "pf",
    "__ZTVN10__cxxabiv120__si_class_type_infoE": "gj",
    "_h264bsdIntra4x4Prediction": "xd",
    "_h264bsdDecodeExpGolombTruncated": "nd",
    "_h264bsdFlushBits": "od",
    "_GetLumaEdgeThresholds": "Uf",
    "Pointer_stringify": "cc",
    "_broadwayOnHeadersDecoded": "Cg",
    "_h264bsdInterpolateHorQuarter": "yf",
    "_h264bsdInterpolateHorHalf": "xf",
    "JSCompiler_alias_NULL": "ha",
    "_stdout": "Sh",
    "_h264bsdMbPartPredMode": "dd",
    "HEAPU32": "F",
    "HEAP8": "q",
    "_mparams": "xh",
    "Runtime$QUANTUM_SIZE": "Kb",
    "_h264bsdPredictSamples": "df",
    "_h264bsdProcessChromaDc": "Hc",
    "_h264bsdDecodeSliceData": "fd",
    "_h264bsdInterpolateVerHalf": "vf",
    "_broadwayDecode": "ug",
    "CorrectionsMonitor": "Ob",
    "_stdin": "Rh",
    "JSCompiler_alias_FALSE": "ka",
    "_h264bsdDecodeMacroblockLayer": "gd",
    "_Intra16x16PlanePrediction": "Ne",
    "_N_B_4x4B": "ue",
    "_lumaFracPos": "Ff",
    "_DetermineNc": "qd",
    "_free": "Ae",
    "_h264bsdInterpolateChromaHorVer": "uf",
    "_h264bsdGetNeighbourPels": "vd",
    "__ZTISt9bad_alloc": "hj",
    "_Intra4x4HorizontalUpPrediction": "Ye",
    "_sys_trim": "Fh",
    "globalScope": "ac",
    "_h264bsdDecodeExpGolombSigned": "Qc",
    "patches": "lj",
    "Runtime$staticAlloc": "vb",
    "_memcpy": "sd",
    "_Intra16x16DcPrediction": "Me",
    "_broadwayOnPictureDecoded": "Dg",
    "ENVIRONMENT_IS_SHELL": "La",
    "_broadwayExit": "yg",
    "_MvPrediction": "hf",
    "__ZTVSt9bad_alloc": "Ih",
    "_h264bsdIntra16x16Prediction": "wd",
    "_InnerBoundaryStrength": "$f",
    "_h264bsdCheckAccessUnitBoundary": "Ie",
    "String_len": "Ac",
    "_ShellSort": "Of",
    "_h264bsdDecodeResidualBlockCavlc": "pd",
    "_H264SwDecNextPicture": "qg",
    "JSCompiler_alias_TRUE": "ca",
    "_DecodeSubMbPred": "kd",
    "buffer": "oc",
    "_Intra16x16VerticalPrediction": "Ke",
    "STACK_MAX": "mc",
    "_Intra4x4VerticalRightPrediction": "Ve",
    "_DecodeForegroundLeftOverMap": "Ge",
    "ALLOC_STATIC": "M",
    "__ATINIT__": "wc",
    "_CeilLog2NumSliceGroups": "Tc",
    "_MvPrediction16x8": "ef",
    "_GetBoundaryStrengths": "Tf",
    "_dcCoeffIndex": "zd",
    "_segment_holding": "zh",
    "_Intra4x4DcPrediction": "Se",
    "__ZTISt20bad_array_new_length": "ij",
    "_Intra16x16HorizontalPrediction": "Le",
    "tempInt": "Pb",
    "_ProcessResidual": "td",
    "_picDecodeNumber": "wg",
    "globalEval": "Wa",
    "_N_C_4x4B": "Pe",
    "___setErrNo$ret": "Eh",
    "_streamBuffer": "Eg",
    "_prepend_alloc": "Ch",
    "_coeffToken8": "qe",
    "_h264bsdInterpolateMidHorQuarter": "Ef",
    "_h264bsdGetBits": "S",
    "_h264bsdFreeDpb": "Ee",
    "_H264SwDecMemset": "Pc",
    "ERRNO_CODES$EACCES": "Kh",
    "_h264bsdMarkDecRefPic": "Kf",
    "_h264bsdInterpolateChromaVer": "tf",
    "_ComparePictures": "Pf",
    "ERRNO_CODES$EIO": "Nh",
    "_h264bsdInterpolateHorVerQuarter": "zf",
    "_h264bsdNumMbPart": "cd",
    "_sysconf": "Gh",
    "arguments_": "ma",
    "_DecodeMbPred": "ld",
    "ERRNO_CODES$EINVAL": "Mh",
    "_GetInterNeighbour": "kf",
    "_N_D_4x4B": "Qe",
    "STACKTOP": "m",
    "_DecodeBoxOutMap": "He",
    "_write": "Uh",
    "undef": "I",
    "_memset": "kc",
    "_IntraChromaPlanePrediction": "bf",
    "_h264bsdCheckPpsId": "Wc",
    "_h264bsdInterpolateMidHalf": "Af",
    "_N_A_4x4B": "te",
    "_h264bsdIntraChromaPrediction": "yd",
    "_h264bsdCompareSeqParamSets": "Nc",
    "run": "jj",
    "_GetBoundaryStrengthsA": "Zf",
    "_h264bsdAddResidual": "Oe",
    "_abs": "Bc",
    "_h264bsdActivateParamSets": "Ce",
    "allocate": "P",
    "_fputc$ret": "Wh",
    "assert": "Sb",
    "abort": "Nb",
    "_ConcealMb": "hg",
    "_h264bsdBlockY": "Ze",
    "_FilterLuma": "Vf",
    "_h264bsdBlockX": "$e",
    "_h264bsdShowBits32": "id",
    "_FindDpbPic": "Df",
    "_coeffTokenMinus1_0": "re",
    "HEAPF32": "Hb",
    "_Intra4x4DiagonalDownRightPrediction": "Ue",
    "_coeffTokenMinus1_1": "se",
    "breakLoop": "kj",
    "_h264bsdDecodeSliceGroupMap": "Je",
    "__ZNSt9bad_allocD2Ev": "Hh",
    "__ZNSt9exceptionD2Ev": "Jh",
    "_h264bsdInitRefPicList": "Qf",
    "_h264bsdGetNeighbourMb": "ye",
    "JSCompiler_alias_VOID": "aa",
    "__gm_": "V",
    "_h264bsdInterpolateMidVerQuarter": "Bf",
    "_IntraChromaDcPrediction": "af",
    "_abort": "W",
    "_Transform": "ig",
    "TOTAL_STACK": "nc",
    "_h264bsdWriteMacroblock": "rd",
    "_MedianFilter": "mf",
    "setValue": "dc",
    "_decInst": "rg",
    "_FilterHorChroma": "eg",
    "_FilterChroma": "Xf",
    "_FilterVerLumaEdge": "ag",
    "JSCompiler_alias_THROW": "a",
    "_h264bsdAllocateDpbImage": "Jf",
    "HEAP16": "x",
    "ERRNO_CODES$ENXIO": "Ph",
    "_puts": "xg",
    "_DecodeResidual": "md",
    "_h264bsdInterpolateVerQuarter": "wf",
    "FUNCTION_TABLE": "lc",
    "_h264bsdProcessBlock": "Dc",
    "_h264bsdInterpolateChromaHor": "rf",
    "tempDoublePtr": "uc",
    "callRuntimeCallbacks": "vc",
    "_picSize": "Bg",
    "_h264bsdSetCurrImageMbPointers": "Lc",
    "_FilterVerChromaEdge": "dg",
    "_h264bsdShutdown": "ng",
    "STRING_TABLE": "Q",
    "STATICTOP": "xb",
    "HEAPU8": "A",
    "_FilterHorLuma": "bg",
    "_picDisplayNumber": "vg",
    "HEAP32": "y",
    "_h264bsdCheckPriorPicsFlag": "ed",
    "getGlobalScope": "mj",
    "_malloc": "jc",
    "_coeffToken2_2": "ne",
    "_N_A_SUB_PART": "nf",
    "_h264bsdExtractNalUnit": "Mc",
    "_coeffToken2_0": "le",
    "_coeffToken2_1": "me",
    "_GetChromaEdgeThresholds": "Wf",
    "nodeFS": "Ma",
    "ERRNO_CODES$EBADF": "Lh",
    "_MvPrediction8x16": "ff",
    "_h264bsdWriteOutputBlocks": "jf",
    "_h264bsdDecodePicParamSet": "Sc",
    "ERRNO_CODES$EISDIR": "Oh",
    "_h264bsdDecodeMacroblock": "hd",
    "ENVIRONMENT_IS_NODE": "na",
    "_h264bsdDecode": "mg",
    "_SlidingWindowRefPicMarking": "If",
    "_FilterHorLumaEdge": "cg",
    "_stderr": "Th",
    "_h264bsdIsNeighbourAvailable": "ve",
    "__ZTVSt20bad_array_new_length": "Xh",
    "_tmalloc_large": "vh",
    "tempBigInt": "J",
    "tempDoubleF64": "ec",
    "tempDoubleI32": "gc",
    "_SetPicNums": "Cf",
    "_Get4x4NeighbourPels": "Re",
    "_h264bsdProcessLumaDc": "Gc",
    "_h264bsdStorePicParamSet": "Be",
    "Runtime$stackAlloc": "bb",
    "_H264SwDecDecode": "pg",
    "_DecodeRunBefore": "xe",
    "writeStringToMemory": "bc",
    "_h264bsdDecodeVuiParameters": "Rc",
    "_Intra4x4HorizontalDownPrediction": "We",
    "_h264bsdCheckGapsInFrameNum": "Rf",
    "_h264bsdInitDpb": "Fe",
    "_broadwayStream": "og",
    "_GetPredictionMv": "lf",
    "ENVIRONMENT_IS_WEB": "oa",
    "HEAPU16": "Gb",
    "_h264bsdDecodeSliceHeader": "Uc",
    "_h264bsdDecodeSeqParamSet": "Oc"
}

"use strict";

function mht(a) {
    var b = "";
    if (16 == a.length)
        for (var c = 0; 4 > c; c++) b += "<span style='font-family: monospace'>[" + a[4 * c + 0].toFixed(4) + "," + a[4 * c + 1].toFixed(4) + "," + a[4 * c + 2].toFixed(4) + "," + a[4 * c + 3].toFixed(4) + "]</span><br>";
    else {
        if (9 != a.length) return a.toString();
        for (var c = 0; 3 > c; c++) b += "<span style='font-family: monospace'>[" + a[3 * c + 0].toFixed(4) + "," + a[3 * c + 1].toFixed(4) + "," + a[3 * c + 2].toFixed(4) + "]</font><br>"
    }
    return b
}

function makeLookAt(a, b, c, d, e, f, g, h, i) {
    var j = $V([a, b, c]),
        k = $V([d, e, f]),
        l = $V([g, h, i]),
        m = j.subtract(k).toUnitVector(),
        n = l.cross(m).toUnitVector(),
        o = m.cross(n).toUnitVector(),
        p = $M([
            [n.e(1), n.e(2), n.e(3), 0],
            [o.e(1), o.e(2), o.e(3), 0],
            [m.e(1), m.e(2), m.e(3), 0],
            [0, 0, 0, 1]
        ]),
        q = $M([
            [1, 0, 0, -a],
            [0, 1, 0, -b],
            [0, 0, 1, -c],
            [0, 0, 0, 1]
        ]);
    return p.x(q)
}

function makeOrtho(a, b, c, d, e, f) {
    var g = -(b + a) / (b - a),
        h = -(d + c) / (d - c),
        i = -(f + e) / (f - e);
    return $M([
        [2 / (b - a), 0, 0, g],
        [0, 2 / (d - c), 0, h],
        [0, 0, -2 / (f - e), i],
        [0, 0, 0, 1]
    ])
}

function makePerspective(a, b, c, d) {
    var e = c * Math.tan(a * Math.PI / 360),
        f = -e,
        g = f * b,
        h = e * b;
    return makeFrustum(g, h, f, e, c, d)
}

function makeFrustum(a, b, c, d, e, f) {
    var g = 2 * e / (b - a),
        h = 2 * e / (d - c),
        i = (b + a) / (b - a),
        j = (d + c) / (d - c),
        k = -(f + e) / (f - e),
        l = -2 * f * e / (f - e);
    return $M([
        [g, 0, i, 0],
        [0, h, j, 0],
        [0, 0, k, l],
        [0, 0, -1, 0]
    ])
}

function makeOrtho(a, b, c, d, e, f) {
    var g = -(b + a) / (b - a),
        h = -(d + c) / (d - c),
        i = -(f + e) / (f - e);
    return $M([
        [2 / (b - a), 0, 0, g],
        [0, 2 / (d - c), 0, h],
        [0, 0, -2 / (f - e), i],
        [0, 0, 0, 1]
    ])
}

function error(a) {
    console.error(a), console.trace()
}

function assert(a, b) {
    a || error(b)
}

function isPowerOfTwo(a) {
    return 0 == (a & a - 1)
}

function text(a) {
    return a.join("\n")
}

function nextHighestPowerOfTwo(a) {
    --a;
    for (var b = 1; 32 > b; b <<= 1) a |= a >> b;
    return a + 1
}

function inherit(a, b) {
    var c = Object.create(a.prototype);
    for (var d in b) c[d] = b[d];
    return c
}
Matrix.Translation = function(a) {
    if (2 == a.elements.length) {
        var b = Matrix.I(3);
        return b.elements[2][0] = a.elements[0], b.elements[2][1] = a.elements[1], b
    }
    if (3 == a.elements.length) {
        var b = Matrix.I(4);
        return b.elements[0][3] = a.elements[0], b.elements[1][3] = a.elements[1], b.elements[2][3] = a.elements[2], b
    }
    throw "Invalid length for Translation"
}, Matrix.prototype.flatten = function() {
    var a = [];
    if (0 == this.elements.length) return [];
    for (var b = 0; b < this.elements[0].length; b++)
        for (var c = 0; c < this.elements.length; c++) a.push(this.elements[c][b]);
    return a
}, Matrix.prototype.ensure4x4 = function() {
    if (4 == this.elements.length && 4 == this.elements[0].length) return this;
    if (this.elements.length > 4 || this.elements[0].length > 4) return null;
    for (var a = 0; a < this.elements.length; a++)
        for (var b = this.elements[a].length; 4 > b; b++) a == b ? this.elements[a].push(1) : this.elements[a].push(0);
    for (var a = this.elements.length; 4 > a; a++) 0 == a ? this.elements.push([1, 0, 0, 0]) : 1 == a ? this.elements.push([0, 1, 0, 0]) : 2 == a ? this.elements.push([0, 0, 1, 0]) : 3 == a && this.elements.push([0, 0, 0, 1]);
    return this
}, Matrix.prototype.make3x3 = function() {
    return 4 != this.elements.length || 4 != this.elements[0].length ? null : Matrix.create([
        [this.elements[0][0], this.elements[0][1], this.elements[0][2]],
        [this.elements[1][0], this.elements[1][1], this.elements[1][2]],
        [this.elements[2][0], this.elements[2][1], this.elements[2][2]]
    ])
}, Vector.prototype.flatten = function() {
    return this.elements
};
var Size = function() {
    function a(a, b) {
        this.w = a, this.h = b
    }
    return a.prototype = {
        toString: function() {
            return "(" + this.w + ", " + this.h + ")"
        },
        getHalfSize: function() {
            return new Size(this.w >>> 1, this.h >>> 1)
        },
        length: function() {
            return this.w * this.h
        }
    }, a
}();
assert(Module);
var Avc = function() {
        function a(a, b, c) {
            return a > c ? a : c > b ? b : c
        }

        function b(a, b) {
            var c = a + 28,
                d = k[c + 0 >> 1],
                e = k[c + 2 >> 1],
                f = k[c + 4 >> 1],
                g = k[c + 6 >> 1],
                h = k[c + 8 >> 1],
                i = k[c + 10 >> 1],
                j = k[c + 12 >> 1],
                m = k[c + 14 >> 1],
                n = k[c + 16 >> 1],
                o = k[c + 18 >> 1],
                p = k[c + 20 >> 1],
                q = k[c + 22 >> 1],
                r = k[c + 24 >> 1],
                s = k[c + 26 >> 1],
                t = k[c + 28 >> 1],
                u = k[c + 30 >> 1];
            l[b + 32 >> 2] = f || d ? 2 : 0, l[b + 40 >> 2] = g || e ? 2 : 0, l[b + 48 >> 2] = j || h ? 2 : 0, l[b + 56 >> 2] = m || i ? 2 : 0, l[b + 64 >> 2] = n || f ? 2 : 0, l[b + 72 >> 2] = o || g ? 2 : 0, l[b + 80 >> 2] = r || j ? 2 : 0, l[b + 88 >> 2] = s || m ? 2 : 0, l[b + 96 >> 2] = p || n ? 2 : 0, l[b + 104 >> 2] = q || o ? 2 : 0, l[b + 112 >> 2] = t || r ? 2 : 0, l[b + 120 >> 2] = u || s ? 2 : 0, l[b + 12 >> 2] = e || d ? 2 : 0, l[b + 20 >> 2] = h || e ? 2 : 0, l[b + 28 >> 2] = i || h ? 2 : 0, l[b + 44 >> 2] = g || f ? 2 : 0, l[b + 52 >> 2] = j || g ? 2 : 0, l[b + 60 >> 2] = m || j ? 2 : 0, l[b + 76 >> 2] = o || n ? 2 : 0, l[b + 84 >> 2] = r || o ? 2 : 0, l[b + 92 >> 2] = s || r ? 2 : 0, l[b + 108 >> 2] = q || p ? 2 : 0, l[b + 116 >> 2] = t || q ? 2 : 0, l[b + 124 >> 2] = u || t ? 2 : 0
        }

        function c(b, c, d, e) {
            var f, g, h, k, n, p, q, r, s, t, u = m + 512,
                v = l[d + 4 >> 2],
                w = l[d + 8 >> 2];
            if (4 > c) {
                h = g = 255 & j[l[d >> 2] + (c - 1)];
                for (var x = 4; x > 0; x--) p = 255 & j[b + -2], k = 255 & j[b + -1], n = 255 & j[b], q = 255 & j[b + 1], Math.abs(k - n) < v && Math.abs(p - k) < w && Math.abs(q - n) < w && (r = 255 & j[b - 3], Math.abs(r - k) < w && (t = r + (k + n + 1 >> 1) - (p << 1) >> 1, i[b - 2] = p + a(-g, g, t), h++), s = 255 & j[b + 2], Math.abs(s - n) < w && (t = s + (k + n + 1 >> 1) - (q << 1) >> 1, i[b + 1] = q + a(-g, g, t), h++), t = (n - k << 2) + (p - q) + 4 >> 3, f = a(-h, h, t), k = 255 & j[u + (k + f)], n = 255 & j[u + (n - f)], h = g, i[b - 1] = k, i[b] = n, b += e)
            } else o.OriginalFilterVerLumaEdge(b, c, d, e)
        }

        function d(b, c, d, e) {
            var f, g, h, k, n, p, q, r, s, t, u = m + 512,
                v = l[d + 4 >> 2],
                w = l[d + 8 >> 2];
            if (4 > c) {
                h = g = 255 & j[l[d >> 2] + (c - 1)];
                for (var x = 16; x > 0; x--) p = 255 & j[b + (-e << 1)], k = 255 & j[b + -e], n = 255 & j[b], q = 255 & j[b + e], Math.abs(k - n) < v && Math.abs(p - k) < w && Math.abs(q - n) < w && (r = 255 & j[b + 3 * -e], Math.abs(r - k) < w && (t = r + (k + n + 1 >> 1) - (p << 1) >> 1, i[b + (-e << 1)] = p + a(-g, g, t), h++), s = 255 & j[b + (e << 2)], Math.abs(s - n) < w && (t = s + (k + n + 1 >> 1) - (q << 1) >> 1, i[b + e] = q + a(-g, g, t), h++), t = (n - k << 2) + (p - q) + 4 >> 3, f = a(-h, h, t), k = 255 & j[u + (k + f)], n = 255 & j[u + (n - f)], h = g, i[b - e] = k, i[b] = n, b++)
            } else o.OriginalFilterHorLuma(b, c, d, e)
        }

        function e(a, b) {
            for (var c in b) {
                var d = b[c];
                if (d) {
                    var e = a[c];
                    e || (e = "original"), console.info(c + ": " + e), assert(e in d.options);
                    var f = d.options[e].fn;
                    f && (o[d.original] = Module.patch(null, d.name, f), console.info("Patching: " + d.name + ", with: " + e))
                }
            }
        }

        function f() {
            Module._broadwayInit(), this.streamBuffer = g(Module._broadwayCreateStream(h), h), this.pictureBuffers = {}, this.onPictureDecoded = function() {}, Module.patch(null, "_broadwayOnHeadersDecoded", function() {}), Module.patch(null, "_broadwayOnPictureDecoded", function(a, b, c) {
                var d = this.pictureBuffers[a];
                d || (d = this.pictureBuffers[a] = g(a, 3 * b * c / 2)), this.onPictureDecoded(d, b, c)
            }.bind(this))
        }

        function g(a, b) {
            return j.subarray(a, a + b)
        }
        var h = 1048576,
            i = Module.HEAP8,
            j = Module.HEAPU8,
            k = Module.HEAP16,
            l = Module.HEAP32,
            m = Module._get_h264bsdClip(),
            n = {
                filter: {
                    name: "_h264bsdFilterPicture",
                    display: "Filter Picture",
                    original: "Original_h264bsdFilterPicture",
                    options: {
                        none: {
                            display: "None",
                            fn: function() {}
                        },
                        original: {
                            display: "Original",
                            fn: null
                        }
                    }
                },
                filterHorLuma: {
                    name: "_FilterHorLuma",
                    display: "Filter Hor Luma",
                    original: "OriginalFilterHorLuma",
                    options: {
                        none: {
                            display: "None",
                            fn: function() {}
                        },
                        original: {
                            display: "Original",
                            fn: null
                        },
                        optimized: {
                            display: "Optimized",
                            fn: d
                        }
                    }
                },
                filterVerLumaEdge: {
                    name: "_FilterVerLumaEdge",
                    display: "Filter Ver Luma Edge",
                    original: "OriginalFilterVerLumaEdge",
                    options: {
                        none: {
                            display: "None",
                            fn: function() {}
                        },
                        original: {
                            display: "Original",
                            fn: null
                        },
                        optimized: {
                            display: "Optimized",
                            fn: c
                        }
                    }
                },
                getBoundaryStrengthsA: {
                    name: "_GetBoundaryStrengthsA",
                    display: "Get Boundary Strengths",
                    original: "OriginalGetBoundaryStrengthsA",
                    options: {
                        none: {
                            display: "None",
                            fn: function() {}
                        },
                        original: {
                            display: "Original",
                            fn: null
                        },
                        optimized: {
                            display: "Optimized",
                            fn: b
                        }
                    }
                }
            },
            o = {};
        return f.prototype = {
            decode: function(a) {
                this.streamBuffer.set(a), Module._broadwaySetStreamLength(a.length), Module._broadwayPlayStream()
            },
            configure: function(a) {
                e(a, n), console.info("Broadway Configured: " + JSON.stringify(a))
            }
        }, f
    }(),
    Script = function() {
        function a() {}
        return a.createFromElementId = function(b) {
            var c = document.getElementById(b);
            assert(c, "Could not find shader with ID: " + b);
            for (var d = "", e = c.firstChild; e;) 3 == e.nodeType && (d += e.textContent), e = e.nextSibling;
            var f = new a;
            return f.type = c.type, f.source = d, f
        }, a.createFromSource = function(b, c) {
            var d = new a;
            return d.type = b, d.source = c, d
        }, a
    }(),
    Shader = function() {
        function a(a, b) {
            if ("x-shader/x-fragment" == b.type) this.shader = a.createShader(a.FRAGMENT_SHADER);
            else {
                if ("x-shader/x-vertex" != b.type) return error("Unknown shader type: " + b.type), void 0;
                this.shader = a.createShader(a.VERTEX_SHADER)
            }
            return a.shaderSource(this.shader, b.source), a.compileShader(this.shader), a.getShaderParameter(this.shader, a.COMPILE_STATUS) ? void 0 : (error("An error occurred compiling the shaders: " + a.getShaderInfoLog(this.shader)), void 0)
        }
        return a
    }(),
    Program = function() {
        function a(a) {
            this.gl = a, this.program = this.gl.createProgram()
        }
        return a.prototype = {
            attach: function(a) {
                this.gl.attachShader(this.program, a.shader)
            },
            link: function() {
                this.gl.linkProgram(this.program), assert(this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS), "Unable to initialize the shader program.")
            },
            use: function() {
                this.gl.useProgram(this.program)
            },
            getAttributeLocation: function(a) {
                return this.gl.getAttribLocation(this.program, a)
            },
            setMatrixUniform: function(a, b) {
                var c = this.gl.getUniformLocation(this.program, a);
                this.gl.uniformMatrix4fv(c, !1, b)
            }
        }, a
    }(),
    Texture = function() {
        function a(a, b, c) {
            this.gl = a, this.size = b, this.texture = a.createTexture(), a.bindTexture(a.TEXTURE_2D, this.texture), this.format = c ? c : a.LUMINANCE, a.texImage2D(a.TEXTURE_2D, 0, this.format, b.w, b.h, 0, this.format, a.UNSIGNED_BYTE, null), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE)
        }
        var b = null;
        return a.prototype = {
            fill: function(a, b) {
                var c = this.gl;
                assert(a.length >= this.size.w * this.size.h, "Texture size mismatch, data:" + a.length + ", texture: " + this.size.w * this.size.h), c.bindTexture(c.TEXTURE_2D, this.texture), b ? c.texSubImage2D(c.TEXTURE_2D, 0, 0, 0, this.size.w, this.size.h, this.format, c.UNSIGNED_BYTE, a) : c.texImage2D(c.TEXTURE_2D, 0, this.format, this.size.w, this.size.h, 0, this.format, c.UNSIGNED_BYTE, a)
            },
            bind: function(a, c, d) {
                var e = this.gl;
                b || (b = [e.TEXTURE0, e.TEXTURE1, e.TEXTURE2]), e.activeTexture(b[a]), e.bindTexture(e.TEXTURE_2D, this.texture), e.uniform1i(e.getUniformLocation(c.program, d), a)
            }
        }, a
    }(),
    WebGLCanvas = function() {
        function a(a, d, e) {
            this.canvas = a, this.size = d, this.canvas.width = d.w, this.canvas.height = d.h, this.onInitWebGL(), this.onInitShaders(), c.call(this), e && b.call(this), this.onInitTextures(), h.call(this)
        }

        function b() {
            var a = this.gl;
            this.framebuffer = a.createFramebuffer(), a.bindFramebuffer(a.FRAMEBUFFER, this.framebuffer), this.framebufferTexture = new Texture(this.gl, this.size, a.RGBA);
            var b = a.createRenderbuffer();
            a.bindRenderbuffer(a.RENDERBUFFER, b), a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, this.size.w, this.size.h), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.framebufferTexture.texture, 0), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, b)
        }

        function c() {
            var a, b = this.gl;
            this.quadVPBuffer = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, this.quadVPBuffer), a = [1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0], b.bufferData(b.ARRAY_BUFFER, new Float32Array(a), b.STATIC_DRAW), this.quadVPBuffer.itemSize = 3, this.quadVPBuffer.numItems = 4;
            var c = 1,
                d = 1;
            this.quadVTCBuffer = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, this.quadVTCBuffer), a = [c, 0, 0, 0, c, d, 0, d], b.bufferData(b.ARRAY_BUFFER, new Float32Array(a), b.STATIC_DRAW)
        }

        function d() {
            this.mvMatrix = Matrix.I(4)
        }

        function e(a) {
            this.mvMatrix = this.mvMatrix.x(a)
        }

        function f(a) {
            e.call(this, Matrix.Translation($V([a[0], a[1], a[2]])).ensure4x4())
        }

        function g() {
            this.program.setMatrixUniform("uPMatrix", new Float32Array(this.perspectiveMatrix.flatten())), this.program.setMatrixUniform("uMVMatrix", new Float32Array(this.mvMatrix.flatten()))
        }

        function h() {
            var a = this.gl;
            this.perspectiveMatrix = makePerspective(45, 1, .1, 100), d.call(this), f.call(this, [0, 0, -2.4]), a.bindBuffer(a.ARRAY_BUFFER, this.quadVPBuffer), a.vertexAttribPointer(this.vertexPositionAttribute, 3, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, this.quadVTCBuffer), a.vertexAttribPointer(this.textureCoordAttribute, 2, a.FLOAT, !1, 0, 0), this.onInitSceneTextures(), g.call(this), this.framebuffer && (console.log("Bound Frame Buffer"), a.bindFramebuffer(a.FRAMEBUFFER, this.framebuffer))
        }
        var i = Script.createFromSource("x-shader/x-vertex", text(["attribute vec3 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat4 uMVMatrix;", "uniform mat4 uPMatrix;", "varying highp vec2 vTextureCoord;", "void main(void) {", "  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);", "  vTextureCoord = aTextureCoord;", "}"])),
            j = Script.createFromSource("x-shader/x-fragment", text(["precision highp float;", "varying highp vec2 vTextureCoord;", "uniform sampler2D texture;", "void main(void) {", "  gl_FragColor = texture2D(texture, vTextureCoord);", "}"]));
        return a.prototype = {
            toString: function() {
                return "WebGLCanvas Size: " + this.size
            },
            checkLastError: function(a) {
                var b = this.gl.getError();
                if (b != this.gl.NO_ERROR) {
                    var c = this.glNames[b];
                    c = void 0 !== c ? c + "(" + b + ")" : "Unknown WebGL ENUM (0x" + value.toString(16) + ")", a ? console.log("WebGL Error: %s, %s", a, c) : console.log("WebGL Error: %s", c), console.trace()
                }
            },
            onInitWebGL: function() {
                try {
                    this.gl = this.canvas.getContext("experimental-webgl")
                } catch (a) {}
                if (this.gl || error("Unable to initialize WebGL. Your browser may not support it."), !this.glNames) {
                    this.glNames = {};
                    for (var b in this.gl) "number" == typeof this.gl[b] && (this.glNames[this.gl[b]] = b)
                }
            },
            onInitShaders: function() {
                this.program = new Program(this.gl), this.program.attach(new Shader(this.gl, i)), this.program.attach(new Shader(this.gl, j)), this.program.link(), this.program.use(), this.vertexPositionAttribute = this.program.getAttributeLocation("aVertexPosition"), this.gl.enableVertexAttribArray(this.vertexPositionAttribute), this.textureCoordAttribute = this.program.getAttributeLocation("aTextureCoord"), this.gl.enableVertexAttribArray(this.textureCoordAttribute)
            },
            onInitTextures: function() {
                var a = this.gl;
                this.texture = new Texture(a, this.size, a.RGBA)
            },
            onInitSceneTextures: function() {
                this.texture.bind(0, this.program, "texture")
            },
            drawScene: function() {
                this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4)
            },
            readPixels: function(a) {
                var b = this.gl;
                b.readPixels(0, 0, this.size.w, this.size.h, b.RGBA, b.UNSIGNED_BYTE, a)
            }
        }, a
    }(),
    YUVWebGLCanvas = function() {
        function a(a, b) {
            WebGLCanvas.call(this, a, b)
        }
        var b = Script.createFromSource("x-shader/x-vertex", text(["attribute vec3 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat4 uMVMatrix;", "uniform mat4 uPMatrix;", "varying highp vec2 vTextureCoord;", "void main(void) {", "  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);", "  vTextureCoord = aTextureCoord;", "}"]));
        Script.createFromSource("x-shader/x-fragment", text(["precision highp float;", "varying highp vec2 vTextureCoord;", "uniform sampler2D YTexture;", "uniform sampler2D UTexture;", "uniform sampler2D VTexture;", "void main(void) {", "  vec3 YUV = vec3", "  (", "    texture2D(YTexture, vTextureCoord).x * 1.1643828125,   // premultiply Y", "    texture2D(UTexture, vTextureCoord).x,", "    texture2D(VTexture, vTextureCoord).x", "  );", "  gl_FragColor = vec4", "  (", "    YUV.x + 1.59602734375 * YUV.z - 0.87078515625,", "    YUV.x - 0.39176171875 * YUV.y - 0.81296875 * YUV.z + 0.52959375,", "    YUV.x + 2.017234375   * YUV.y - 1.081390625,", "    1", "  );", "}"])), Script.createFromSource("x-shader/x-fragment", text(["precision highp float;", "varying highp vec2 vTextureCoord;", "uniform sampler2D YTexture;", "uniform sampler2D UTexture;", "uniform sampler2D VTexture;", "void main(void) {", "  gl_FragColor = texture2D(YTexture, vTextureCoord);", "}"]));
        var c = Script.createFromSource("x-shader/x-fragment", text(["precision highp float;", "varying highp vec2 vTextureCoord;", "uniform sampler2D YTexture;", "uniform sampler2D UTexture;", "uniform sampler2D VTexture;", "const mat4 YUV2RGB = mat4", "(", " 1.1643828125, 0, 1.59602734375, -.87078515625,", " 1.1643828125, -.39176171875, -.81296875, .52959375,", " 1.1643828125, 2.017234375, 0, -1.081390625,", " 0, 0, 0, 1", ");", "void main(void) {", " gl_FragColor = vec4( texture2D(YTexture,  vTextureCoord).x, texture2D(UTexture, vTextureCoord).x, texture2D(VTexture, vTextureCoord).x, 1) * YUV2RGB;", "}"]));
        return a.prototype = inherit(WebGLCanvas, {
            onInitShaders: function() {
                this.program = new Program(this.gl), this.program.attach(new Shader(this.gl, b)), this.program.attach(new Shader(this.gl, c)), this.program.link(), this.program.use(), this.vertexPositionAttribute = this.program.getAttributeLocation("aVertexPosition"), this.gl.enableVertexAttribArray(this.vertexPositionAttribute), this.textureCoordAttribute = this.program.getAttributeLocation("aTextureCoord"), this.gl.enableVertexAttribArray(this.textureCoordAttribute)
            },
            onInitTextures: function() {
                console.log("creatingTextures: size: " + this.size), this.YTexture = new Texture(this.gl, this.size), this.UTexture = new Texture(this.gl, this.size.getHalfSize()), this.VTexture = new Texture(this.gl, this.size.getHalfSize())
            },
            onInitSceneTextures: function() {
                this.YTexture.bind(0, this.program, "YTexture"), this.UTexture.bind(1, this.program, "UTexture"), this.VTexture.bind(2, this.program, "VTexture")
            },
            fillYUVTextures: function(a, b, c) {
                this.YTexture.fill(a), this.UTexture.fill(b), this.VTexture.fill(c)
            },
            toString: function() {
                return "YUVCanvas Size: " + this.size
            }
        }), a
    }(),
    FilterWebGLCanvas = function() {
        function a(a, b, c) {
            WebGLCanvas.call(this, a, b, c)
        }
        var b = Script.createFromSource("x-shader/x-vertex", text(["attribute vec3 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat4 uMVMatrix;", "uniform mat4 uPMatrix;", "varying highp vec2 vTextureCoord;", "void main(void) {", "  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);", "  vTextureCoord = aTextureCoord;", "}"])),
            c = Script.createFromSource("x-shader/x-fragment", text(["precision highp float;", "varying highp vec2 vTextureCoord;", "uniform sampler2D FTexture;", "void main(void) {", " gl_FragColor = texture2D(FTexture,  vTextureCoord);", "}"]));
        return a.prototype = inherit(WebGLCanvas, {
            onInitShaders: function() {
                this.program = new Program(this.gl), this.program.attach(new Shader(this.gl, b)), this.program.attach(new Shader(this.gl, c)), this.program.link(), this.program.use(), this.vertexPositionAttribute = this.program.getAttributeLocation("aVertexPosition"), this.gl.enableVertexAttribArray(this.vertexPositionAttribute), this.textureCoordAttribute = this.program.getAttributeLocation("aTextureCoord"), this.gl.enableVertexAttribArray(this.textureCoordAttribute)
            },
            onInitTextures: function() {
                console.log("creatingTextures: size: " + this.size), this.FTexture = new Texture(this.gl, this.size, this.gl.RGBA)
            },
            onInitSceneTextures: function() {
                this.FTexture.bind(0, this.program, "FTexture")
            },
            process: function(a, b) {
                this.FTexture.fill(a), this.drawScene(), this.readPixels(b)
            },
            toString: function() {
                return "FilterWebGLCanvas Size: " + this.size
            }
        }), a
    }();
! function(a) {
    var b, c, d, e, f = 0,
        g = ["ms", "moz", "webkit", "o"];
    for (b = 0, c = g.length; c > b && !a.requestAnimationFrame; ++b) a.requestAnimationFrame = a[g[b] + "RequestAnimationFrame"], a.cancelAnimationFrame = a[g[b] + "CancelAnimationFrame"] || a[g[b] + "CancelRequestAnimationFrame"];
    a.requestAnimationFrame || (a.requestAnimationFrame = function(b) {
        return d = (new Date).getTime(), e = Math.max(0, 16 - (d - f)), f = d + e, a.setTimeout(function() {
            b(d + e)
        }, e)
    }), a.cancelAnimationFrame || (a.cancelAnimationFrame = function(a) {
        clearTimeout(a)
    })
}(window),
function(a, b) {
    function c() {
        i = new Avc, i.configure({
            filter: "original",
            filterHorLuma: "optimized",
            filterVerLumaEdge: "optimized",
            getBoundaryStrengthsA: "optimized"
        }), i.onPictureDecoded = e
    }

    function d(a) {
        i.decode(new Uint8Array(a.data))
    }

    function e(a, b, c) {
        var d;
        requestAnimationFrame(function() {
            var d = b * c,
                e = d >> 2;
            j.YTexture.fill(a.subarray(0, d)), j.UTexture.fill(a.subarray(d, d + e)), j.VTexture.fill(a.subarray(d + e, d + 2 * e)), j.drawScene()
        }), null !== m && k && (d = m, m = null, d(a.subarray(0, k * l)))
    }

    function f(a) {
        var c = b.createElement("canvas");
        k = a.attributes.width ? a.attributes.width.value : 640, l = a.attributes.height ? a.attributes.height.value : 360, c.width = k, c.height = l, c.style.backgroundColor = "#333333", a.appendChild(c), j = new YUVWebGLCanvas(c, new Size(k, l))
    }
    var g, h, i, j, k, l, m = null;
    g = function(b, e) {
        var g, i;
        e = e || {}, g = e.hostname || a.document.location.hostname, i = e.port || a.document.location.port, f(b), c(), h = new WebSocket("ws://" + g + ":" + i + "/dronestream"), h.binaryType = "arraybuffer", h.onmessage = d
    }, g.prototype.onNextFrame = function(a) {
        m = a
    }, a.NodecopterStream = g
}(window, document, void 0);
