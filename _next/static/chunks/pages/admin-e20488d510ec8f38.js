(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6964],{994:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return eo},default:function(){return ed}});var s,n,a=r(39827),i=r(9112),l=r(73017),c=r(70917),o=r(24668),d=r(18405),u=r(99715),m=r(19816),g=r(82920),p=r(19841),f=r(61888),j=r(80483),v=r.n(j),b=r(12366),x=r(70079),h=r(1454),y=r(84692),k=r(9063),O=r(68498),w=r(21389),M=r(7557),P=r(10060),Z=r(95250),I=r(52299),R=r(13038),q=r(61236),N=r(82473),C=r(25494),E=r(65455);function S(e){let t=(0,k.Z)(),r=(0,N.NL)();return(0,C.D)({mutationFn:r=>{let{inviteId:s,role:n,acceptRequest:a}=r;return R.Z.patchWorkspaceInvite(e,s,{role:n,acceptRequest:a}).catch(e=>{E.m.danger(t.formatMessage(_.updateInviteError,{error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]}),r.invalidateQueries({queryKey:["workspace",e]})}})}function D(e){let t=(0,k.Z)(),r=(0,N.NL)();return(0,C.D)({mutationFn:r=>{let{email:s}=r;return R.Z.deleteWorkspaceInvite(e,s).catch(e=>{E.m.danger(t.formatMessage(_.deleteInviteError,{email:s,error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]})}})}let _=(0,O.vU)({updateInviteError:{id:"WorkspaceInvites.updateInviteError",defaultMessage:"Unable to update invite from workspace: {error}"},deleteInviteError:{id:"WorkspaceInvites.deleteInviteError",defaultMessage:"Unable to remove user ({email}) from workspace: {error}"},resendInviteSuccess:{id:"WorkspaceInvites.resendInviteSuccess",defaultMessage:"Sent a new invite to {email}"},resendInviteError:{id:"WorkspaceInvites.resendInviteError",defaultMessage:"Unable to resend invite to ({email}) from workspace: {error}"}});var U=r(13711),W=r(32163),T=r(35250);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function K(e){var t;let{workspaceId:r,filterInputValue:s}=e,{0:n,1:a}=(0,x.useState)(0),i=(0,W.Gk)(r),l=(0,W.bE)(r),c=i||l,{data:o}=(t=25*n,(0,q.a)({queryKey:["workspace",r,"invites",t,s],queryFn:async()=>await R.Z.getWorkspaceInvites(r,t,25,s)}));if(void 0===o)return(0,T.jsx)(U.bq,{});let d=o.items,u=Math.ceil(o.total/25);return n>=u&&0!==u&&a(Math.max(u-1,0)),(0,T.jsxs)("div",{children:[(0,T.jsxs)(Z.Z.Root,{fixed:!0,size:"normal",children:[(0,T.jsxs)(Z.Z.Header,{children:[(0,T.jsx)(Z.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,T.jsx)(y.Z,H({},z.email))}),(0,T.jsx)(Z.Z.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:(0,T.jsx)("span",{className:c?"pl-3":"",children:(0,T.jsx)(y.Z,H({},z.role))})}),c&&(0,T.jsx)(Z.Z.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),(0,T.jsxs)(Z.Z.Body,{children:[d.map(e=>(0,T.jsx)(B,{workspaceId:r,invite:e,isCurrentUserOwner:i,currentUserHasAdminRights:c},e.id)),0===d.length&&(0,T.jsx)(Z.Z.Row,{children:(0,T.jsx)(Z.Z.Cell,{children:(0,T.jsx)("div",{className:"text-token-text-tertiary",children:(0,T.jsx)(y.Z,H({},z.noResults))})})})]})]}),u>1&&(0,T.jsx)("div",{className:"mt-2 flex justify-center",children:(0,T.jsx)(I.t,{currentPage:n,onChangeIndex:a,length:u})})]})}function B(e){let{workspaceId:t,invite:r,isCurrentUserOwner:s,currentUserHasAdminRights:n}=e,a=(0,W.Ap)(),i=S(t),l=D(t),c=function(e){let t=(0,k.Z)(),r=(0,N.NL)();return(0,C.D)({mutationFn:r=>{let{role:s,email:n}=r;return R.Z.addWorkspaceUsers(e,[n],s,!0).then(e=>{let{account_invites:r,errored_emails:s}=e;if(s.length>0)throw Error(s[0].error);r.length>0&&E.m.success(t.formatMessage(_.resendInviteSuccess,{email:n}))}).catch(e=>{E.m.danger(t.formatMessage(_.resendInviteError,{email:n,error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]})}})}(t);return(0,T.jsxs)(Z.Z.Row,{disabled:i.isPending||l.isPending||l.isSuccess||c.isPending,children:[(0,T.jsx)(Z.Z.Cell,{children:r.email_address}),(0,T.jsx)(Z.Z.Cell,{children:s?(0,T.jsx)(U.mJ,{currentRole:r.role,onUpdateUserRole:e=>{i.mutate({inviteId:r.id,role:e})}}):a[r.role]}),n&&(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(Z.Z.Cell,{children:(0,T.jsx)(F,{onDeleteUser:()=>{l.mutate({email:r.email_address})},onResendInvite:()=>{c.mutate({email:r.email_address,role:r.role})}})})})]})}function F(e){let{onDeleteUser:t,onResendInvite:r}=e;return(0,T.jsxs)(c.Z.Root,{children:[(0,T.jsx)(c.Z.Trigger,{children:(0,T.jsx)(h.K9M,{className:"icon-sm"})}),(0,T.jsx)(c.Z.Portal,{children:(0,T.jsxs)(c.Z.Content,{children:[(0,T.jsx)(c.Z.Item,{onClick:r,children:(0,T.jsx)(y.Z,H({},z.resendInvite))}),(0,T.jsx)(c.Z.Item,{onClick:t,children:(0,T.jsx)(y.Z,H({},z.revokeInvite))})]})})]})}let z=(0,O.vU)({email:{id:"InviteManager.email",defaultMessage:"Email"},role:{id:"InviteManager.role",defaultMessage:"Role"},resendInvite:{id:"InviteManager.resendInvite",defaultMessage:"Resend invite"},revokeInvite:{id:"InviteManager.revokeInvite",defaultMessage:"Revoke invite"},noResults:{id:"InviteManager.noResults",defaultMessage:"No results"}});function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function G(e){var t;let{workspaceId:r,filterInputValue:s}=e,{0:n,1:a}=(0,x.useState)(0),{data:i}=(t=25*n,(0,q.a)({queryKey:["workspace",r,"invites","requests",t,s],queryFn:async()=>await R.Z.getWorkspaceInviteRequests(r,t,25,s)})),l=(0,W.Gk)(r),c=(0,W.bE)(r),o=(0,k.Z)(),d=l||c;if(void 0===i)return(0,T.jsx)(U.bq,{});let u=i.items,m=Math.ceil(i.total/25);return n>=m&&0!==m&&a(Math.max(m-1,0)),(0,T.jsxs)("div",{children:[(0,T.jsxs)(Z.Z.Root,{fixed:!0,size:"normal",children:[(0,T.jsxs)(Z.Z.Header,{children:[(0,T.jsx)(Z.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,T.jsx)(y.Z,L({},J.email))}),(0,T.jsx)(Z.Z.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:(0,T.jsx)("span",{className:d?"pl-3":"",children:(0,T.jsx)(y.Z,L({},J.role))})}),d&&(0,T.jsx)(Z.Z.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:o.formatMessage(J.actions)})]}),(0,T.jsxs)(Z.Z.Body,{children:[u.map(e=>(0,T.jsx)(V,{workspaceId:r,invite:e,isCurrentUserOwner:l,currentUserHasAdminRights:d},e.id)),0===u.length&&(0,T.jsx)(Z.Z.Row,{children:(0,T.jsx)(Z.Z.Cell,{children:(0,T.jsx)("div",{className:"text-token-text-tertiary",children:(0,T.jsx)(y.Z,L({},J.noResults))})})})]})]}),m>1&&(0,T.jsx)("div",{className:"mt-2 flex justify-center",children:(0,T.jsx)(I.t,{currentPage:n,onChangeIndex:a,length:m})})]})}function V(e){let{workspaceId:t,invite:r,isCurrentUserOwner:s,currentUserHasAdminRights:n}=e,a=(0,W.Ap)(),i=S(t),l=D(t),c=(0,k.Z)();return(0,T.jsxs)(Z.Z.Row,{disabled:i.isPending||l.isPending||l.isPending,children:[(0,T.jsx)(Z.Z.Cell,{children:r.email_address}),(0,T.jsx)(Z.Z.Cell,{children:s?(0,T.jsx)(U.mJ,{currentRole:r.role,onUpdateUserRole:e=>{i.mutate({inviteId:r.id,role:e})}}):a[r.role]}),n&&(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(Z.Z.Cell,{children:(0,T.jsxs)("div",{className:"flex gap-2",children:[(0,T.jsx)(M.z,{onClick:()=>i.mutate({inviteId:r.id,acceptRequest:!0}),children:c.formatMessage(J.accept)}),(0,T.jsx)(M.z,{color:"neutral",onClick:()=>l.mutate({email:r.email_address}),children:c.formatMessage(J.reject)})]})})})]})}let J=(0,O.vU)({email:{id:"RequestInviteManager.email",defaultMessage:"Email"},role:{id:"RequestInviteManager.role",defaultMessage:"Role"},actions:{id:"RequestInviteManager.actions",defaultMessage:"Actions"},accept:{id:"RequestInviteManager.accept",defaultMessage:"Accept"},reject:{id:"RequestInviteManager.reject",defaultMessage:"Reject"},noResults:{id:"RequestInviteManager.noResults",defaultMessage:"No results"}});var X=r(41068);function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ee=((s=ee||{}).Members="members",s.Invites="invites",s.Requests="requests",s);function et(e){let{tab:t}=e;switch(t){case ee.Members:return(0,T.jsx)(y.Z,$({},el.allMembers));case ee.Invites:return(0,T.jsx)(y.Z,$({},el.pendingInvites));case ee.Requests:return(0,T.jsx)(y.Z,$({},el.pendingRequests));default:(0,g.vE)(t)}}function er(e){let{tab:t,filterInputValue:r,workspaceId:s}=e;switch(t){case ee.Members:return(0,T.jsx)(U.ZP,{workspaceId:s,filterInputValue:r});case ee.Invites:return(0,T.jsx)(K,{workspaceId:s,filterInputValue:r});case ee.Requests:return(0,T.jsx)(G,{workspaceId:s,filterInputValue:r});default:(0,g.vE)(t)}}let es=(0,m.b)(ee);function en(e){var t;let{currentWorkspaceId:r}=e,s=(0,k.Z)(),n=(0,o.t)(),a=null!==(t=(0,U.p5)(r))&&void 0!==t?t:"?",l=(0,W.qH)(n),m=null==n?void 0:n.isTeam(),g=(0,b.useRouter)(),p="string"==typeof g.query.tab&&es(g.query.tab)?g.query.tab:ee.Members,{0:j,1:O}=(0,x.useState)(""),{0:w,1:Z}=(0,x.useState)("");(0,x.useEffect)(()=>{Z("")},[p]);let I=(0,x.useCallback)((0,f.debounce)(e=>{Z(e)},250),[]),R=(0,X.Wv)();if(!n)return null;let q=n.isAdminOfAccount(),N=n.isOwnerOfAccount(),C=m||!R?[ee.Members,ee.Invites]:[ee.Members,ee.Invites,ee.Requests];return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(v(),{children:(0,T.jsx)("title",{children:s.formatMessage(el.adminBrowserPageTitle)})}),(0,T.jsx)(i.yG,{title:s.formatMessage(el.adminPageTitle),subtitle:(0,T.jsx)(y.Z,$({values:{totalMembers:a,planName:l}},el.totalMembers))}),(0,T.jsxs)(i.hb,{children:[(0,T.jsxs)(ei,{children:[(0,T.jsx)("div",{className:"mb-6 flex gap-2",children:C.map(e=>(0,T.jsx)(ea,{onClick:()=>{g.push(null!=e?"/admin?tab=".concat(e):"/admin")},isSelected:p===e,children:(0,T.jsx)(et,{tab:e})},e))}),(0,T.jsxs)("div",{className:"flex gap-2",children:[(0,T.jsxs)("div",{className:"relative",children:[(0,T.jsx)(h.jRj,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),(0,T.jsx)("input",{type:"text",value:j,onChange:e=>{O(e.target.value),I(e.target.value)},placeholder:s.formatMessage(el.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary"})]}),(q||N||m)&&(0,T.jsxs)(M.z,{onClick:()=>{d.vm.openModal(d.B.InviteUsersToWorkspace)},children:[(0,T.jsx)(h.OvN,{className:"icon-sm"}),(0,T.jsx)(y.Z,$({},el.inviteMemberButton))]}),m?(0,T.jsxs)(c.Z.Root,{children:[(0,T.jsx)(u.xz,{asChild:!0,children:(0,T.jsx)(M.z,{color:"neutral",children:(0,T.jsx)(h.K9M,{className:"icon-sm"})})}),(0,T.jsx)(c.Z.Portal,{children:(0,T.jsx)(c.Z.Content,{children:(0,T.jsx)(c.Z.Item,{onClick:()=>{n&&d.vm.setLeaveWorkspaceData(n)},children:(0,T.jsx)(y.Z,$({},el.leaveWorkspace))})})})]}):null]})]}),(0,T.jsx)(er,{workspaceId:r,tab:p,filterInputValue:w})]}),null!=n?(0,T.jsx)(P.Z,{workspace:n}):null]})}function ea(e){let{children:t,isSelected:r,onClick:s}=e;return(0,T.jsx)(M.z,{color:"none",className:(0,p.default)(r?"bg-token-main-surface-tertiary":"hover:bg-token-main-surface-tertiary"),onClick:s,children:t})}let ei=w.Z.div(n||(n=(0,l.Z)(["mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between"]))),el=(0,O.vU)({adminBrowserPageTitle:{id:"adminPage.adminBrowserPageTitle",defaultMessage:"ChatGPT - Member admin"},adminPageTitle:{id:"adminPage.adminPageTitle.0",defaultMessage:"Members"},workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},totalMembers:{id:"adminPage.totalMembers",defaultMessage:"{planName} \xb7 {totalMembers} {totalMembers, plural, one {member} other {members}}"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},allMembers:{id:"adminPage.allMembers",defaultMessage:"All members"},pendingInvites:{id:"adminPage.pendingInvites",defaultMessage:"Pending invites"},pendingRequests:{id:"adminPage.pendingRequests",defaultMessage:"Pending requests"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},inviteMemberButton:{id:"adminPage.inviteMemberButton",defaultMessage:"Invite member"},leaveWorkspace:{id:"adminPage.leaveWorkspace",defaultMessage:"Leave workspace"},search:{id:"adminPage.search",defaultMessage:"Search"}});function ec(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}var eo=!0;function ed(e){return(0,T.jsx)(en,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ec(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ec(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))}ed.getLayout=function(e){return(0,T.jsx)(i.ZP,{mobilePageTitle:"Members",children:e})}},53835:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return r(994)}])}},function(e){e.O(0,[9112,4736,2888,9774,179],function(){return e(e.s=53835)}),_N_E=e.O()}]);
//# sourceMappingURL=admin-e20488d510ec8f38.js.map