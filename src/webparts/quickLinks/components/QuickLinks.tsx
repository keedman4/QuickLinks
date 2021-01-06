import * as React from 'react';
import styles from './QuickLinks.module.scss';
import { IQuickLinksProps } from './IQuickLinksProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jQuery from "jquery";

const Links = () => {
  return (
    jQuery("#workbenchPageContent").prop("style", "max-width: none"), jQuery(".SPCanvas-canvas").prop("style", "max-width: none"), jQuery(".CanvasZone").prop("style", "max-width: none"),   
      <>
       <div className={styles.head}>Quick Links</div> 
      <div className={styles.grid_container}>
        {/* <div className={styles.head}>Quick Links</div>  */}
      <div className={styles.grid_item}> <a href="http://192.168.0.32/sysworkflow" target="_blank">Process Maker</a></div>
      <div className={styles.grid_item}><a href="http://fintrakapp/AxaMansardERMS/login.aspx?" target="_blank">Fintrak</a></div>
      <div className={styles.grid_item}><a href="http://aimsonline2/unitrack/" target="_blank">Unitrak</a></div>
      <div className={styles.grid_item}><a href="http://aimsonline2/HrWorkPlace" target="_blank">HR Workplace</a></div>
      <div className={styles.grid_item}><a href="http://192.168.0.210:9001/forms/frmservlet" target="_blank">AIMS Web</a></div>
      <div className={styles.grid_item}><a href="http://192.168.0.51:8888/MANSARD_WEALTH" target="_blank">CREDENCE</a></div>
         <div className={styles.grid_item}><a href="http://aimsonline2:5000" target="_blank">Workbench</a></div>
         <div className={styles.grid_item}><a href="http://crmserver/axamansard/main.aspx#398022063" target="_blank">Dynamics CRM</a></div>
         <div className={styles.grid_item}><a href="http://aimsonline2/CRM/" target="_blank">CRM</a></div>
         <div className={styles.grid_item}><a href="http://aimsonline2:8075/liquidations" target="_blank">Liquidation Workflow</a></div>
         <div className={styles.grid_item}><a href="http://aims-online/liquations" target="_blank">Liquidation Workflow</a></div>
         <div className={styles.grid_item}><a href="http://aims-online/adminmadeeasy/deletecovernote.aspx" target="_blank">ADMIN MADEEASY</a></div>
         <div className={styles.grid_item}><a href=" http://aimsonline2:8075/claimsworflow" target="_blank">Claims Workflow</a></div>
         <div className={styles.grid_item}><a  href="http://aims-online/emotor/" target="_blank">E-MOTO PORTA</a></div>
         <div className={styles.grid_item}><a  href="http://hmo-app1/axamansardlive/index.aspx" target="_blank">Toshfa</a></div>
         <div className={styles.grid_item}><a  href="https://online.axamansard.com/gsac/" target="_blank">GSAC</a></div>
         <div className={styles.grid_item}><a  href="http://aimsonline2/CaseMaker/" target="_blank">Case Maker</a></div>
         <div className={styles.grid_item}><a  href="http://aimsonline2/PharmacyBenMgt/#nbb" target="_blank">Pharmacy</a></div>
         <div className={styles.grid_item}><a  href="http://aimsonline2/AxaDMS" target="_blank">Device MAnagement</a></div>
         <div className={styles.grid_item}><a  href="http://aimsonline2/SalesForce" target="_blank">SAMS</a></div>
         <div className={styles.grid_item}><a  href="https://www.niid.org/NIA_API/SERVICE.ASMX?op=Vehicle_Policy_Push" target="_blank">NIID UPLOADER</a></div>
       <div className={styles.grid_item}><a  href="https://online.axamansard.com/QSA/QuoteSystems/Create" target="_blank">QUOTE SYSTEM</a></div>
         <div className={styles.grid_item}><a  href="http://aimsonline2:2085/Processor/login.aspx" target="_blank">QUICK CON</a></div>
       <div className={styles.grid_item}><a  href=" https://online.axamansard.com/marine/login2.aspx" target="_blank">MARINE PORTAL</a></div>
    </div>
    </>

//      <div  className={styles.links}>
//       <h4>Quick Links</h4>
//       {/* <div className={styles.grid_container}> */}
//       <a href="http://192.168.0.32/sysworkflow" target="_blank">Process Maker</a>
//       <a href="http://fintrakapp/AxaMansardERMS/login.aspx?" target="_blank">Fintrak</a>
//       <a href="http://aimsonline2/unitrack/" target="_blank">Unitrak</a>
//       <a href="http://aimsonline2/HrWorkPlace" target="_blank">HR Workplace</a>
//       <a href="http://192.168.0.210:9001/forms/frmservlet" target="_blank">AIMS Web</a>
//       <div className={styles.grid_item}><a href="http://192.168.0.51:8888/MANSARD_WEALTH" target="_blank">CREDENCE</a></div>
//       <div className={styles.grid_item}><a href="http://aimsonline2:5000" target="_blank">Workbench</a></div>
//       <div className={styles.grid_item}><a href="http://crmserver/axamansard/main.aspx#398022063" target="_blank">Dynamics CRM</a></div>
//       <div className={styles.grid_item}><a href="http://aimsonline2/CRM/" target="_blank">CRM</a></div>
//       <div className={styles.grid_item}><a href="http://aimsonline2:8075/liquidations" target="_blank">Liquidation Workflow</a></div>
//       <div className={styles.grid_item}><a href="http://aims-online/liquations" target="_blank">Liquidation Workflow</a></div>
//       <div className={styles.grid_item}><a href="http://aims-online/adminmadeeasy/deletecovernote.aspx" target="_blank">ADMIN MADEEASY</a></div>
//       <div className={styles.grid_item}><a href=" http://aimsonline2:8075/claimsworflow" target="_blank">Claims Workflow</a></div>
//       <div className={styles.grid_item}><a  href="http://aims-online/emotor/" target="_blank">E-MOTO PORTA</a></div>
//       <div className={styles.grid_item}><a  href="http://hmo-app1/axamansardlive/index.aspx" target="_blank">Toshfa</a></div>
//       <div className={styles.grid_item}><a  href="https://online.axamansard.com/gsac/" target="_blank">GSAC</a></div>
//       <div className={styles.grid_item}><a  href="http://aimsonline2/CaseMaker/" target="_blank">Case Maker</a></div>
//       <div className={styles.grid_item}><a  href="http://aimsonline2/PharmacyBenMgt/#nbb" target="_blank">Pharmacy</a></div>
//       <div className={styles.grid_item}><a  href="http://aimsonline2/AxaDMS" target="_blank">Device MAnagement</a></div>
//       <div className={styles.grid_item}><a  href="http://aimsonline2/SalesForce" target="_blank">SAMS</a></div>
//       <div className={styles.grid_item}><a  href="https://www.niid.org/NIA_API/SERVICE.ASMX?op=Vehicle_Policy_Push" target="_blank">NIID UPLOADER</a></div>
//       <div className={styles.grid_item}><a  href="https://online.axamansard.com/QSA/QuoteSystems/Create" target="_blank">QUOTE SYSTEM</a></div>
//       <div className={styles.grid_item}><a  href="http://aimsonline2:2085/Processor/login.aspx" target="_blank">QUICK CON</a></div>
//       <div className={styles.grid_item}><a  href=" https://online.axamansard.com/marine/login2.aspx" target="_blank">MARINE PORTAL</a></div>
//     </div>
   );
};
export default Links;

// export default class QuickLinks extends React.Component<IQuickLinksProps, {}> {
//   public render(): React.ReactElement<IQuickLinksProps> {
//     return (
//       <div className={ styles.quickLinks }>
//         <div className={ styles.container }>
//           <div className={ styles.row }>
//             <div className={ styles.column }>
//               <span className={ styles.title }>Welcome to SharePoint!</span>
//               <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
//               <p className={ styles.description }>{escape(this.props.description)}</p>
//               <a href="https://aka.ms/spfx" className={ styles.button }>
//                 <span className={ styles.label }>Learn more</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
