(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{233:function(e,t,a){"use strict";a.r(t);var m=a(16),s=a(0),l=a.n(s),n=a(26);t.default=function(e){var t,a,d,i,r,c,o,g,x,N,u,p,v,y,E,f,b,h,A,w,O,F,j,S,B,C,D,M,k,P,I,G,T,J,R,U,W,q,z,H,K,L,Q,V,X=Object(s.useState)(null),Y=Object(m.a)(X,2),Z=Y[0],$=Y[1],_=Object(n.g)(),ee=_.push,te=_.location;return Object(s.useEffect)((function(){var e,t;if(void 0===(null===te||void 0===te||null===(e=te.state)||void 0===e?void 0:e.member))return ee("/admin/members");document.title=((null===(t=te.state.member.personalinformation)||void 0===t?void 0:t.othername)||"Single User")+" | Easy Will",$(te.state.member)}),[te,ee]),l.a.createElement(s.Fragment,null,l.a.createElement("div",null,l.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900"},"Summary"),l.a.createElement("div",{className:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-5"},l.a.createElement("div",{className:"bg-white overflow-hidden shadow rounded-lg"},l.a.createElement("div",{className:"px-4 py-5 sm:p-6"},l.a.createElement("dl",null,l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500 truncate"},"Personal Information"),l.a.createElement("dd",{className:"mt-1 text-1xl leading-9 font-semibold text-gray-900"},(null===Z||void 0===Z?void 0:Z.personalinformation)?"Submitted":"Not Submitted")))),l.a.createElement("div",{className:"bg-white overflow-hidden shadow rounded-lg"},l.a.createElement("div",{className:"px-4 py-5 sm:p-6"},l.a.createElement("dl",null,l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500 truncate"},"Assets"),l.a.createElement("dd",{className:"mt-1 text-1xl leading-9 font-semibold text-gray-900"},(null===Z||void 0===Z?void 0:Z.assets)&&Object.values(Z.assets).length>0?"Submitted":"Not Submitted")))),l.a.createElement("div",{className:"bg-white overflow-hidden shadow rounded-lg"},l.a.createElement("div",{className:"px-4 py-5 sm:p-6"},l.a.createElement("dl",null,l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500 truncate"},"Beneficiaries"),l.a.createElement("dd",{className:"mt-1 text-1xl leading-9 font-semibold text-gray-900"},(null===Z||void 0===Z?void 0:Z.beneficiaries)&&Object.values(Z.beneficiaries).length>0?"Submitted":"Not Submitted")))),l.a.createElement("div",{className:"bg-white overflow-hidden shadow rounded-lg"},l.a.createElement("div",{className:"px-4 py-5 sm:p-6"},l.a.createElement("dl",null,l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500 truncate"},"Distribution"),l.a.createElement("dd",{className:"mt-1 text-1xl leading-9 font-semibold text-gray-900"},(null===Z||void 0===Z?void 0:Z.distribution)?"Submitted":"Not Submitted")))),l.a.createElement("div",{className:"bg-white overflow-hidden shadow rounded-lg"},l.a.createElement("div",{className:"px-4 py-5 sm:p-6"},l.a.createElement("dl",null,l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500 truncate"},"Executor"),l.a.createElement("dd",{className:"mt-1 text-1xl leading-9 font-semibold text-gray-900"},(null===Z||void 0===Z?void 0:Z.executor)?"Submitted":"Not Submitted")))))),(null===Z||void 0===Z?void 0:Z.personalinformation)&&l.a.createElement("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg mt-3"},l.a.createElement("div",{className:"px-4 py-5 border-b border-gray-200 sm:px-6"},l.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900"},"Personal Information"),l.a.createElement("p",{className:"mt-1 max-w-2xl text-sm leading-5 text-gray-500"},"Personal details and application.")),l.a.createElement("div",null,l.a.createElement("dl",null,l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"First Name"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(t=Z.personalinformation)||void 0===t?void 0:t.firstname)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Other Names"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(a=Z.personalinformation)||void 0===a?void 0:a.othername)||"N/A")),l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Family Name"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(d=Z.personalinformation)||void 0===d?void 0:d.familyname)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Gender"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(i=Z.personalinformation)||void 0===i?void 0:i.gender)||"N/A")),l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Phone Number"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(r=Z.personalinformation)||void 0===r?void 0:r.phonenumber)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Date Of Birth"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(c=Z.personalinformation)||void 0===c?void 0:c.dateofbirth)||"N/A")),l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Birth Country"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(o=Z.personalinformation)||void 0===o?void 0:o.birthcountry)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Birth State"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(g=Z.personalinformation)||void 0===g?void 0:g.birthstate)||"N/A")),l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Birth City"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(x=Z.personalinformation)||void 0===x?void 0:x.birthcity)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Address (Country)"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(N=Z.personalinformation)||void 0===N?void 0:N.addresscountry)||"N/A")),l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Address (State)"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(u=Z.personalinformation)||void 0===u?void 0:u.addressstate)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Address (City)"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(p=Z.personalinformation)||void 0===p?void 0:p.addressscity)||"N/A")),l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Address (Apt Number)"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(v=Z.personalinformation)||void 0===v?void 0:v.aptnumber)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"ID Number Type"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(y=Z.personalinformation)||void 0===y?void 0:y.idnumtype)||"N/A")),l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"ID Number"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(E=Z.personalinformation)||void 0===E?void 0:E.idnum)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Tin Number"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(f=Z.personalinformation)||void 0===f?void 0:f.tinnumber)||"N/A")),l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Father's First Name"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(b=Z.personalinformation)||void 0===b?void 0:b.fatherfirstname)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Father's Other Names"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(h=Z.personalinformation)||void 0===h?void 0:h.fatherothername)||"N/A")),l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Father's Family Name"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(A=Z.personalinformation)||void 0===A?void 0:A.fatherfamilyname)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Father's Phone Number"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(w=Z.personalinformation)||void 0===w?void 0:w.fatherphonenumber)||"N/A")),l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Father's Date Of Birth"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(O=Z.personalinformation)||void 0===O?void 0:O.fatherdob)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Father's Birth Country"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(F=Z.personalinformation)||void 0===F?void 0:F.fatherbirthcountry)||"N/A")),l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Father's Birth State"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(j=Z.personalinformation)||void 0===j?void 0:j.fatherbirthstate)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Father's Birth City"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(S=Z.personalinformation)||void 0===S?void 0:S.fatherbirthcity)||"N/A")),l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Mother's First Name"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(B=Z.personalinformation)||void 0===B?void 0:B.motherfirstname)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Mother's Other Names"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(C=Z.personalinformation)||void 0===C?void 0:C.motherothername)||"N/A")),l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Mother's Family Name"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(D=Z.personalinformation)||void 0===D?void 0:D.mothersfamilyname)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Mother's Phone Number"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(M=Z.personalinformation)||void 0===M?void 0:M.motherphonenumber)||"N/A")),l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Mother's Date Of Birth"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(k=Z.personalinformation)||void 0===k?void 0:k.motherdob)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Mother's Birth Country"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(P=Z.personalinformation)||void 0===P?void 0:P.motherbirthcountry)||"N/A")),l.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Mother's Birth State"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(I=Z.personalinformation)||void 0===I?void 0:I.motherbirthstate)||"N/A")),l.a.createElement("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Mother's Birth City"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},(null===Z||void 0===Z||null===(G=Z.personalinformation)||void 0===G?void 0:G.motherbirthcity)||"N/A"))))),Z&&void 0!==Z.executor&&l.a.createElement("div",{className:"bg-white shadow overflow-hidden  sm:rounded-lg mt-3"},l.a.createElement("div",{className:"px-4 py-5 border-b border-gray-200 sm:px-6"},l.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900"},"Executor")),l.a.createElement("div",{className:"px-4 py-5 sm:px-6"},l.a.createElement("dl",{className:"grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2"},l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"First Name"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===(T=Z.executor)||void 0===T?void 0:T.firstname)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Other Name"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===(J=Z.executor)||void 0===J?void 0:J.othername)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Family Name"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===(R=Z.executor)||void 0===R?void 0:R.familyname)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Gender"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===(U=Z.executor)||void 0===U?void 0:U.gender)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Date Of Birth"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===(W=Z.executor)||void 0===W?void 0:W.dateofbirth)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Phone Number"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===(q=Z.executor)||void 0===q?void 0:q.phonenumber)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Address"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===(z=Z.executor)||void 0===z?void 0:z.address)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Country"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===(H=Z.executor)||void 0===H?void 0:H.country)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"State"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===(K=Z.executor)||void 0===K?void 0:K.state)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"City"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===(L=Z.executor)||void 0===L?void 0:L.city)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"ID Number Type"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===(Q=Z.executor)||void 0===Q?void 0:Q.idnumtype)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"ID Number"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===(V=Z.executor)||void 0===V?void 0:V.idnumber)||"N/A"))))),(null===Z||void 0===Z?void 0:Z.assets)&&Object.values(Z.assets).length>0&&l.a.createElement("div",{className:"bg-white shadow overflow-hidden  sm:rounded-lg mt-3"},l.a.createElement("div",{className:"px-4 py-5 border-b border-gray-200 sm:px-6"},l.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900"},"Assets"),l.a.createElement("p",{className:"mt-1 max-w-2xl text-sm leading-5 text-gray-500"},"Member assets")),(null===Z||void 0===Z?void 0:Z.assets)&&Object.entries(Z.assets).map((function(e,t){var a=Object(m.a)(e,2),n=(a[0],a[1]);return l.a.createElement("div",{className:"border-b mt-5"},Object.entries(n).map((function(e,t){var a=Object(m.a)(e,2),n=a[0],d=a[1];return l.a.createElement(s.Fragment,{key:t},l.a.createElement("div",{className:"".concat(t%2===0?"bg-gray-50":"bg-white"," px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6")},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},n),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"},d)))})))}))),(null===Z||void 0===Z?void 0:Z.assets)&&Object.values(Z.beneficiaries).length>0&&l.a.createElement("div",{className:"bg-white shadow overflow-hidden  sm:rounded-lg mt-3"},l.a.createElement("div",{className:"px-4 py-5 border-b border-gray-200 sm:px-6"},l.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900"},"Beneficiaries"),l.a.createElement("p",{className:"mt-1 max-w-2xl text-sm leading-5 text-gray-500"},"Member beneficiaries")),Object.entries(Z.beneficiaries).map((function(e,t){var a=Object(m.a)(e,2),n=a[0],d=a[1];return l.a.createElement(s.Fragment,{key:t},l.a.createElement("div",{className:"px-4 py-5 sm:px-6 border-b border-gray-200"},l.a.createElement("dl",{className:"grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2"},l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"First Name"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===d||void 0===d?void 0:d.firstname)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Other Name"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===d||void 0===d?void 0:d.othername)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Family Name"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===d||void 0===d?void 0:d.familyname)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Gender"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===d||void 0===d?void 0:d.gender)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Date Of Birth"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===d||void 0===d?void 0:d.dateofbirth)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Phone Number"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===d||void 0===d?void 0:d.phonenumber)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Relation"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===d||void 0===d?void 0:d.relation)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Country"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===d||void 0===d?void 0:d.country)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"State"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===d||void 0===d?void 0:d.state)||"N/A")),l.a.createElement("div",{className:"sm:col-span-1"},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"City"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},(null===d||void 0===d?void 0:d.city)||"N/A"))),(null===Z||void 0===Z?void 0:Z.distribution)&&Object.keys(null===Z||void 0===Z?void 0:Z.distribution).map((function(e,t){return e===n?l.a.createElement("div",{className:"sm:col-span-2 mt-2",key:t},l.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500"},"Asset(s)"),l.a.createElement("dd",{className:"mt-1 text-sm leading-5 text-gray-900"},l.a.createElement("div",{className:"bg-white shadow overflow-hidden sm:rounded-md mt-2"},l.a.createElement("ul",null,Object.values(null===Z||void 0===Z?void 0:Z.distribution[e]).map((function(e,t){if(e instanceof Object)return l.a.createElement("li",{key:t},l.a.createElement("span",{className:"block hover:bg-gray-50 border-b  focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"},l.a.createElement("div",{className:"px-4 py-4 sm:px-6"},l.a.createElement("div",{className:"flex items-center justify-between"},l.a.createElement("div",{className:"text-sm leading-5 font-medium text-indigo-600 truncate"},"Asset"),l.a.createElement("div",{className:"ml-2 flex-shrink-0 flex"},"Distribution Condition")),l.a.createElement("div",{className:"mt-2 sm:flex sm:justify-between"},e.asset,l.a.createElement("div",{className:"mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0"},l.a.createElement("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},e.distributioncondition))))))})))))):null}))))}))))}}}]);
//# sourceMappingURL=13.41e2a4a6.chunk.js.map