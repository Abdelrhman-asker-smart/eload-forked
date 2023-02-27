import React from 'react'
import {  NavLink } from "react-router-dom";
import { ReactComponent as EditIcon } from '../../../icons/editicon.svg';
import { ReactComponent as DeleteIcon } from '../../../icons/deleteicon.svg';

import "./TruckList.css"

const Truck = () => {
  return (
    <div className='Trucklist'>
        <div className="container-fluid px-5 py-5">
          <div className="head-input container-fluid mb-4">
              <div className="box-left">
                  <div className="head-text">
                      <h2>Truck LIST</h2>
                  </div>
              </div>
          </div>
          <div className="Truck-table">
          <table class="table">
            <thead>
              <tr className='head-tr'>
              <th scope="col" className='taple-head'>#</th>
                <th scope="col" className='taple-head'>Name</th>
                <th scope="col" className='taple-head'></th>
                <th scope="col" className='taple-head'></th>
                <th scope="col" className='taple-head'>Edit / remove</th>
              </tr>
            </thead>
            <tbody>
              <tr className='body-tr'>
                <td>1</td>
                <td style={{width: "20%"}} >Flatbed 
                </td>
                <td>
                <svg  width="51" height="22" viewBox="0 0 51 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.70321 8.0324C4.80033 8.19689 4.98069 8.30654 5.17492 8.30654H12.417C12.7084 8.30654 12.9581 8.07352 12.9581 7.77196V3.33084C12.9581 3.04299 12.7223 2.79626 12.417 2.79626H8.11616C7.9358 2.79626 7.76931 2.89221 7.6722 3.04299L4.71708 7.49782C4.60609 7.66231 4.60609 7.86791 4.70321 8.0324ZM8.39363 3.85171H11.876V7.25109H6.15996L8.39363 3.85171ZM50.4589 9.9514H16.9954V0.534579C16.9954 0.246729 16.7595 0 16.4543 0H6.61779C6.43743 0 6.27095 0.0959501 6.15996 0.246729L1.23477 7.77196C1.17927 7.85421 1.15152 7.96386 1.15152 8.05981V13.9265H0.541077C0.249728 13.9265 0 14.1595 0 14.4611V17.2162C0 17.504 0.235854 17.7508 0.541077 17.7508H4.21763C4.48123 20.1358 6.54842 22 9.03183 22C11.5152 22 13.5824 20.1358 13.846 17.7508H16.4543H34.8648C35.1284 20.1358 37.1956 22 39.679 22C42.1624 22 44.2296 20.1358 44.4932 17.7508H50.4589C50.7503 17.7508 51 17.5178 51 17.2162V10.4723C51 10.1844 50.7503 9.9514 50.4589 9.9514ZM9.03183 20.9308C6.95076 20.9308 5.25816 19.2586 5.25816 17.2025C5.25816 15.1464 6.95076 13.4741 9.03183 13.4741C11.1129 13.4741 12.8055 15.1464 12.8055 17.2025C12.8055 19.2586 11.1129 20.9308 9.03183 20.9308ZM15.9271 16.6816H13.846C13.5824 14.2829 11.5152 12.4187 9.03183 12.4187C6.54842 12.4187 4.48123 14.2829 4.21763 16.6816H1.06828V14.9819H1.6926C1.99782 14.9819 2.23368 14.7489 2.23368 14.4474V8.21059L6.92301 1.05545H15.9271V16.6816ZM39.679 20.9308C37.5979 20.9308 35.9053 19.2586 35.9053 17.2025C35.9053 15.1464 37.5979 13.4879 39.679 13.4879C41.7601 13.4879 43.4527 15.1601 43.4527 17.2162C43.4527 19.2723 41.7601 20.9308 39.679 20.9308ZM49.9178 16.6816H44.4932C44.2296 14.2829 42.1624 12.4187 39.679 12.4187C37.1956 12.4187 35.1284 14.2829 34.8648 16.6816H16.9954V11.0069H49.9178V16.6816Z" fill="#244664"/>
                </svg>
                </td>
                <td></td>
                <td>
                  <NavLink to="/edittruck">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>2</td>
                <td style={{width: "20%"}}>Container
                </td>
                <td>
                <svg  width="35" height="17" viewBox="0 0 35 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.82403 10.9178C6.15889 10.9178 4.81397 12.2826 4.81397 13.9589C4.81397 14.0341 4.81397 14.1201 4.82464 14.2061C4.9634 15.7642 6.2763 16.9893 7.82403 16.9893C9.38243 16.9893 10.706 15.7642 10.8341 14.1738C10.8448 14.0986 10.8448 14.0234 10.8448 13.9589C10.8448 12.2826 9.48917 10.9178 7.82403 10.9178ZM10.0015 14.1416C9.90546 15.2699 8.9448 16.1618 7.81336 16.1618C6.69259 16.1618 5.73193 15.2699 5.63586 14.1416C5.63586 14.0771 5.63586 14.0234 5.63586 13.9589C5.63586 12.7446 6.61787 11.7453 7.82403 11.7453C9.03019 11.7453 10.0229 12.7339 10.0229 13.9589C10.0122 14.0126 10.0122 14.0664 10.0015 14.1416ZM28.5102 10.9178C26.8451 10.9178 25.4895 12.2826 25.4895 13.9589C25.4895 14.0341 25.4895 14.0986 25.5002 14.2061C25.6176 15.7642 26.9411 16.9893 28.4995 16.9893C30.0579 16.9893 31.3708 15.7642 31.4989 14.2061C31.5096 14.1201 31.5096 14.0449 31.5096 13.9589C31.5203 12.2826 30.1754 10.9178 28.5102 10.9178ZM30.6984 14.1416C30.6023 15.2699 29.6523 16.1618 28.5209 16.1618C27.3895 16.1618 26.4288 15.2807 26.3434 14.1201C26.3434 14.0664 26.3327 14.0126 26.3327 13.9589C26.3327 12.7446 27.3147 11.7453 28.5209 11.7453C29.7271 11.7453 30.7091 12.7339 30.7091 13.9589C30.6984 14.0234 30.6984 14.0879 30.6984 14.1416ZM11.8054 7.71555L11.8268 3.07332C11.8268 2.96587 11.7841 2.85841 11.7094 2.78319C11.6346 2.70796 11.5279 2.66498 11.4212 2.66498H8.18695C8.06953 2.66498 7.96279 2.70796 7.88808 2.79393L4.50442 6.35082C4.38701 6.46903 4.35499 6.65171 4.41903 6.80215C4.48307 6.95259 4.63251 7.06005 4.79262 7.06005L7.53583 7.09229L7.94145 7.88748C8.01616 8.02718 8.15493 8.11315 8.31504 8.11315H11.3998C11.6133 8.12389 11.8054 7.94121 11.8054 7.71555ZM10.9729 7.29646H8.56054L8.15493 6.50126C8.08021 6.36157 7.94145 6.2756 7.79201 6.2756L5.76395 6.24336L8.36841 3.48167H10.9942L10.9729 7.29646ZM35 11.1113V13.9589C35 14.1846 34.8185 14.378 34.5837 14.378H32.2034V13.5506H34.1781V11.5303H34.082C33.8579 11.5303 33.6658 11.3477 33.6658 11.1113V3.40645L33.6124 1.88053V0.827434H13.4065V1.4507V13.5398H24.817V14.3673H11.5493V13.5398H12.5846V1.86978H7.35438L1.49436 8.28508V11.1113C1.49436 11.3369 1.3129 11.5303 1.07807 11.5303H0.821897V13.5506H4.15218V14.378H0.416285C0.192132 14.378 0 14.1953 0 13.9589V11.1113C0 10.8856 0.181458 10.6922 0.416285 10.6922H0.672461V8.12389C0.672461 8.01643 0.715157 7.91972 0.779201 7.8445L6.87405 1.18205C6.94877 1.09608 7.06618 1.0531 7.17292 1.0531H12.574V0.41909C12.574 0.193426 12.7554 0 12.9902 0H34.018C34.2421 0 34.4343 0.18268 34.4343 0.41909V1.86978L34.4877 3.3957V10.7029H34.5837C34.8185 10.7029 35 10.8856 35 11.1113Z" fill="#244664"/>
                </svg>
                </td>
                <td></td>
                <td>
                <NavLink to="/edittruck">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>3</td>
                <td style={{width: "20%"}}>Dry Van
                </td>
                <td>
                <svg width="36" height="18" viewBox="0 0 36 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5468 12.282C5.94089 12.282 4.64039 13.5656 4.64039 15.141C4.64039 15.2285 4.65025 15.3063 4.65025 15.3744C4.77833 16.872 6.02956 18 7.5468 18C9.04433 18 10.3153 16.8428 10.4335 15.3744C10.4433 15.3063 10.4433 15.2188 10.4433 15.141C10.4433 13.5656 9.14286 12.282 7.5468 12.282ZM9.67488 15.3063C9.58621 16.3955 8.65025 17.2415 7.5468 17.2415C6.42365 17.2415 5.50739 16.4052 5.40887 15.3063C5.40887 15.2577 5.39901 15.1994 5.39901 15.1313C5.39901 13.9741 6.36453 13.0308 7.5468 13.0308C8.71921 13.0308 9.67488 13.9741 9.67488 15.1313C9.68473 15.1994 9.68473 15.2577 9.67488 15.3063ZM27.5567 12.282C25.9606 12.282 24.6601 13.5656 24.6601 15.141C24.6601 15.2285 24.6699 15.3063 24.6699 15.3744C24.7882 16.8525 26.0591 18 27.5567 18C29.0542 18 30.3251 16.8428 30.4532 15.3744C30.4631 15.3063 30.4631 15.2188 30.4631 15.1313C30.4631 13.5656 29.1626 12.282 27.5567 12.282ZM29.6946 15.3063C29.6059 16.3955 28.6699 17.2415 27.5665 17.2415C26.4631 17.2415 25.5271 16.3955 25.4384 15.2966C25.4384 15.248 25.4286 15.1896 25.4286 15.1313C25.4286 13.9741 26.3842 13.0308 27.5665 13.0308C28.7488 13.0308 29.7044 13.9741 29.7044 15.1313C29.7044 15.1994 29.6946 15.2577 29.6946 15.3063ZM11.1527 14.7618H23.9803V15.5105H11.1527V14.7618ZM10.6305 4.5705H7.96059C7.86207 4.5705 7.76355 4.6094 7.69458 4.67747L4.40394 7.92545C4.29557 8.03241 4.26601 8.19773 4.32512 8.33387C4.38424 8.47002 4.52217 8.56726 4.6798 8.56726H6.76847L7.34975 9.41329C7.41872 9.52026 7.53695 9.57861 7.66502 9.57861H10.6404C10.8473 9.57861 11.0246 9.41329 11.0246 9.19935V4.94976C11.0148 4.73582 10.8473 4.5705 10.6305 4.5705ZM10.2562 8.82982H7.86207L7.28079 7.98379C7.21182 7.87682 7.0936 7.81848 6.96552 7.81848H5.59606L8.12808 5.31929H10.2562V8.82982ZM35.9704 10.4635C35.9803 10.4246 35.9901 10.3857 35.9901 10.3566C35.9901 10.3468 35.9901 10.3468 35.9901 10.3371V0.379254C35.9901 0.175041 35.8227 0 35.6059 0H12.601C12.3941 0 12.2167 0.165316 12.2167 0.379254V2.90762H6.91626C6.80788 2.90762 6.70936 2.95624 6.64039 3.02431L0.748768 9.34522C0.679803 9.41329 0.650246 9.51053 0.650246 9.59805V12.0583H0.384236C0.17734 12.0583 0 12.2237 0 12.4376V15.1313C0 15.3355 0.167488 15.5105 0.384236 15.5105H4.00985V14.7618H0.758621V12.8169H1.02463C1.23153 12.8169 1.40887 12.6515 1.40887 12.4376V9.74392L7.08374 3.6564H12.2167V10.1912V10.3274C12.2167 10.5316 12.3842 10.7066 12.601 10.7066H34.532L32.7094 12.1459C32.5813 12.2431 32.532 12.4182 32.5911 12.564C32.6404 12.7196 32.7882 12.8169 32.9557 12.8169H33.0739V14.7618H31.133V15.5105H33.4483C33.6552 15.5105 33.8325 15.3452 33.8325 15.1313V12.4376C33.8325 12.3695 33.8128 12.3112 33.7832 12.2626L35.8621 10.6191C35.8719 10.6094 35.8719 10.6094 35.8818 10.5997C35.8916 10.59 35.9015 10.5802 35.9113 10.5705C35.931 10.5511 35.9507 10.5219 35.9606 10.4927C35.9606 10.483 35.9704 10.4733 35.9704 10.4635ZM12.9852 0.748784H35.2414V9.94814L12.9852 9.82172V3.28687V0.748784ZM30.5517 8.84927H29.7931V1.85737H30.5517V8.84927ZM28.1281 8.84927H27.3695V1.85737H28.1281V8.84927ZM16 8.84927H15.2414V1.85737H16V8.84927ZM18.4236 8.84927H17.665V1.85737H18.4236V8.84927ZM25.7044 8.84927H24.9458V1.85737H25.7044V8.84927ZM32.9754 8.84927H32.2167V1.85737H32.9754V8.84927ZM23.2808 8.84927H22.5222V1.85737H23.2808V8.84927ZM20.8571 8.84927H20.0985V1.85737H20.8571V8.84927Z" fill="#244664"/>
                </svg>
                </td>
                <td></td>
                <td>
                <NavLink to="/edittruck">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>4</td>
                <td style={{width: "20%"}}>Lowboy trailer
                </td>
                <td>
                <svg  width="42" height="17" viewBox="0 0 42 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.72331 4.81497H6.18155C6.06972 4.81497 5.95788 4.86587 5.88671 4.95748L3.08061 8.24551C2.97894 8.35748 2.95861 8.53054 3.01961 8.66287C3.08061 8.80539 3.22295 8.88683 3.37545 8.88683H8.71314C8.92665 8.88683 9.10966 8.71377 9.10966 8.48982V5.21198C9.10966 4.98802 8.93682 4.81497 8.72331 4.81497ZM8.3268 8.10299H4.23965L6.36456 5.5988H8.3268V8.10299ZM42 10.8006V10.0168H41.0341V0.397006C41.0341 0.183234 40.8613 0 40.6376 0H13.8475C13.634 0 13.451 0.173054 13.451 0.397006V10.0168H12.8816V6.26048H12.0988V10.4036C12.0988 10.6174 12.2716 10.8006 12.4953 10.8006H16.1961L14.9659 11.4725H11.0007V3.56287C11.0007 3.3491 10.8279 3.16587 10.6042 3.16587H5.21569C5.09368 3.16587 4.99201 3.21677 4.91068 3.30838L0.559187 8.57126C0.498184 8.64251 0.467683 8.73413 0.467683 8.82575V11.9H0.396514C0.183007 11.9 0 12.0731 0 12.297V14.3126C0 14.5263 0.17284 14.7096 0.396514 14.7096H3.02977C3.22295 16.0228 4.33115 17 5.6732 17C7.04575 17 8.16412 16.0024 8.3268 14.6485V14.7096H15.7284C15.9216 16.0228 17.0298 17 18.3718 17C19.724 17 20.8322 16.0329 21.0254 14.7096H22.337C22.5505 14.7096 22.7335 14.5365 22.7335 14.3126V10.7904H31.6195V14.109C31.6195 14.3228 31.7923 14.506 32.016 14.506H33.3682C33.5309 15.8395 34.6696 16.8677 36.0218 16.8677C37.3638 16.8677 38.5025 15.8497 38.6754 14.506H41.5323C41.7458 14.506 41.9288 14.3329 41.9288 14.109V12.2665C41.9288 12.0527 41.756 11.8695 41.5323 11.8695H40.0581V10.7904H42V10.8006ZM14.2338 0.783832H40.2411V10.0066H14.2338V0.783832ZM7.5541 14.4754C7.47277 15.4629 6.6594 16.206 5.6732 16.206C4.67683 16.206 3.87364 15.4629 3.7923 14.4754C3.7923 14.4246 3.78214 14.3635 3.78214 14.3126C3.78214 13.2641 4.63617 12.409 5.6732 12.409C6.71024 12.409 7.56427 13.2641 7.56427 14.3126C7.56427 14.3737 7.56427 14.4246 7.5541 14.4754ZM20.2731 14.4754C20.1917 15.4629 19.3784 16.206 18.382 16.206C17.3856 16.206 16.5824 15.4629 16.5011 14.4754C16.5011 14.4246 16.4909 14.3635 16.4909 14.3126C16.4909 13.2641 17.345 12.409 18.382 12.409C19.4292 12.409 20.2731 13.2641 20.2731 14.3126C20.2731 14.3737 20.2731 14.4246 20.2731 14.4754ZM21.9506 13.9257H21.0254C20.8322 12.6329 19.724 11.6353 18.382 11.6353C17.0399 11.6353 15.9216 12.6329 15.7386 13.9257H8.3268V13.9766C8.15396 12.6533 7.03558 11.6353 5.6732 11.6353C4.33115 11.6353 3.21278 12.6329 3.02977 13.9257H0.793028V12.694H0.874365C1.08787 12.694 1.27088 12.521 1.27088 12.297V8.96826L5.40886 3.95988H10.2179V11.6048V11.8695C10.2179 11.9713 10.2585 12.0731 10.3297 12.1545C10.4009 12.2257 10.5025 12.2665 10.6042 12.2665H15.0675C15.1387 12.2665 15.1997 12.2461 15.2607 12.2156L17.7923 10.821L17.7821 10.8006H21.9608V13.9257H21.9506ZM37.923 14.3431C37.8417 15.3204 37.008 16.0838 36.032 16.0838C35.0559 16.0838 34.2222 15.3204 34.1409 14.3126C34.1307 14.2719 34.1409 14.2311 34.1409 14.1802C34.1409 13.1317 34.9949 12.2868 36.032 12.2868C37.0792 12.2868 37.923 13.1317 37.923 14.1802V14.3431ZM39.6718 12.6635H41.1561V13.7222H38.6754C38.4517 12.4599 37.3537 11.503 36.0421 11.503C34.7204 11.503 33.6224 12.4599 33.4089 13.7222H32.4227V10.7904H39.2854V12.2665C39.2752 12.4904 39.4481 12.6635 39.6718 12.6635ZM17.467 7.66527H18.077V8.4491H17.0806C16.8671 8.4491 16.6841 8.27605 16.6841 8.0521V2.50419H17.467V7.66527V7.66527ZM19.9782 7.66527H20.5882V8.4491H19.5817C19.3682 8.4491 19.1852 8.27605 19.1852 8.0521V2.50419H19.968V7.66527H19.9782ZM22.4793 7.66527H23.0893V8.4491H22.0828C21.8693 8.4491 21.6863 8.27605 21.6863 8.0521V2.50419H22.4691V7.66527H22.4793ZM24.9804 7.66527H25.5904V8.4491H24.5839C24.3704 8.4491 24.1874 8.27605 24.1874 8.0521V2.50419H24.9702V7.66527H24.9804ZM27.4815 7.66527H28.0915V8.4491H27.085C26.8715 8.4491 26.6885 8.27605 26.6885 8.0521V2.50419H27.4713V7.66527H27.4815ZM29.9826 7.66527H30.5926V8.4491H29.5861C29.3725 8.4491 29.1895 8.27605 29.1895 8.0521V2.50419H29.9724V7.66527H29.9826ZM32.4938 7.66527H33.1038V8.4491H32.0973C31.8838 8.4491 31.7008 8.27605 31.7008 8.0521V2.50419H32.4837V7.66527H32.4938ZM34.9949 7.66527H35.6049V8.4491H34.5984C34.3849 8.4491 34.2019 8.27605 34.2019 8.0521V2.50419H34.9847V7.66527H34.9949ZM38.106 7.66527V8.4491H37.1097C36.8962 8.4491 36.7131 8.27605 36.7131 8.0521V2.50419H37.496V7.66527H38.106V7.66527Z" fill="#244664"/>
                </svg>
                </td>
                <td></td>
                <td>
                <NavLink to="/edittruck">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>5</td>
                <td style={{width: "20%"}}>Freelance Driver
                </td>
                <td>
                <svg  width="42" height="17" viewBox="0 0 42 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.72331 4.81497H6.18155C6.06972 4.81497 5.95788 4.86587 5.88671 4.95748L3.08061 8.24551C2.97894 8.35748 2.95861 8.53054 3.01961 8.66287C3.08061 8.80539 3.22295 8.88683 3.37545 8.88683H8.71314C8.92665 8.88683 9.10966 8.71377 9.10966 8.48982V5.21198C9.10966 4.98802 8.93682 4.81497 8.72331 4.81497ZM8.3268 8.10299H4.23965L6.36456 5.5988H8.3268V8.10299ZM42 10.8006V10.0168H41.0341V0.397006C41.0341 0.183234 40.8613 0 40.6376 0H13.8475C13.634 0 13.451 0.173054 13.451 0.397006V10.0168H12.8816V6.26048H12.0988V10.4036C12.0988 10.6174 12.2716 10.8006 12.4953 10.8006H16.1961L14.9659 11.4725H11.0007V3.56287C11.0007 3.3491 10.8279 3.16587 10.6042 3.16587H5.21569C5.09368 3.16587 4.99201 3.21677 4.91068 3.30838L0.559187 8.57126C0.498184 8.64251 0.467683 8.73413 0.467683 8.82575V11.9H0.396514C0.183007 11.9 0 12.0731 0 12.297V14.3126C0 14.5263 0.17284 14.7096 0.396514 14.7096H3.02977C3.22295 16.0228 4.33115 17 5.6732 17C7.04575 17 8.16412 16.0024 8.3268 14.6485V14.7096H15.7284C15.9216 16.0228 17.0298 17 18.3718 17C19.724 17 20.8322 16.0329 21.0254 14.7096H22.337C22.5505 14.7096 22.7335 14.5365 22.7335 14.3126V10.7904H31.6195V14.109C31.6195 14.3228 31.7923 14.506 32.016 14.506H33.3682C33.5309 15.8395 34.6696 16.8677 36.0218 16.8677C37.3638 16.8677 38.5025 15.8497 38.6754 14.506H41.5323C41.7458 14.506 41.9288 14.3329 41.9288 14.109V12.2665C41.9288 12.0527 41.756 11.8695 41.5323 11.8695H40.0581V10.7904H42V10.8006ZM14.2338 0.783832H40.2411V10.0066H14.2338V0.783832ZM7.5541 14.4754C7.47277 15.4629 6.6594 16.206 5.6732 16.206C4.67683 16.206 3.87364 15.4629 3.7923 14.4754C3.7923 14.4246 3.78214 14.3635 3.78214 14.3126C3.78214 13.2641 4.63617 12.409 5.6732 12.409C6.71024 12.409 7.56427 13.2641 7.56427 14.3126C7.56427 14.3737 7.56427 14.4246 7.5541 14.4754ZM20.2731 14.4754C20.1917 15.4629 19.3784 16.206 18.382 16.206C17.3856 16.206 16.5824 15.4629 16.5011 14.4754C16.5011 14.4246 16.4909 14.3635 16.4909 14.3126C16.4909 13.2641 17.345 12.409 18.382 12.409C19.4292 12.409 20.2731 13.2641 20.2731 14.3126C20.2731 14.3737 20.2731 14.4246 20.2731 14.4754ZM21.9506 13.9257H21.0254C20.8322 12.6329 19.724 11.6353 18.382 11.6353C17.0399 11.6353 15.9216 12.6329 15.7386 13.9257H8.3268V13.9766C8.15396 12.6533 7.03558 11.6353 5.6732 11.6353C4.33115 11.6353 3.21278 12.6329 3.02977 13.9257H0.793028V12.694H0.874365C1.08787 12.694 1.27088 12.521 1.27088 12.297V8.96826L5.40886 3.95988H10.2179V11.6048V11.8695C10.2179 11.9713 10.2585 12.0731 10.3297 12.1545C10.4009 12.2257 10.5025 12.2665 10.6042 12.2665H15.0675C15.1387 12.2665 15.1997 12.2461 15.2607 12.2156L17.7923 10.821L17.7821 10.8006H21.9608V13.9257H21.9506ZM37.923 14.3431C37.8417 15.3204 37.008 16.0838 36.032 16.0838C35.0559 16.0838 34.2222 15.3204 34.1409 14.3126C34.1307 14.2719 34.1409 14.2311 34.1409 14.1802C34.1409 13.1317 34.9949 12.2868 36.032 12.2868C37.0792 12.2868 37.923 13.1317 37.923 14.1802V14.3431ZM39.6717 12.6635H41.1561V13.7222H38.6754C38.4517 12.4599 37.3537 11.503 36.0421 11.503C34.7204 11.503 33.6224 12.4599 33.4089 13.7222H32.4227V10.7904H39.2854V12.2665C39.2752 12.4904 39.4481 12.6635 39.6717 12.6635ZM17.467 7.66527H18.077V8.4491H17.0806C16.8671 8.4491 16.6841 8.27605 16.6841 8.0521V2.50419H17.467V7.66527ZM19.9782 7.66527H20.5882V8.4491H19.5817C19.3682 8.4491 19.1852 8.27605 19.1852 8.0521V2.50419H19.968V7.66527H19.9782ZM22.4793 7.66527H23.0893V8.4491H22.0828C21.8693 8.4491 21.6863 8.27605 21.6863 8.0521V2.50419H22.4691V7.66527H22.4793ZM24.9804 7.66527H25.5904V8.4491H24.5839C24.3704 8.4491 24.1874 8.27605 24.1874 8.0521V2.50419H24.9702V7.66527H24.9804ZM27.4815 7.66527H28.0915V8.4491H27.085C26.8715 8.4491 26.6885 8.27605 26.6885 8.0521V2.50419H27.4713V7.66527H27.4815ZM29.9826 7.66527H30.5926V8.4491H29.5861C29.3725 8.4491 29.1895 8.27605 29.1895 8.0521V2.50419H29.9724V7.66527H29.9826ZM32.4938 7.66527H33.1038V8.4491H32.0973C31.8838 8.4491 31.7008 8.27605 31.7008 8.0521V2.50419H32.4837V7.66527H32.4938ZM34.9949 7.66527H35.6049V8.4491H34.5984C34.3849 8.4491 34.2019 8.27605 34.2019 8.0521V2.50419H34.9847V7.66527H34.9949ZM38.106 7.66527V8.4491H37.1097C36.8961 8.4491 36.7131 8.27605 36.7131 8.0521V2.50419H37.496V7.66527H38.106Z" fill="#244664"/>
                </svg>
                </td>
                <td></td>
                <td>
                <NavLink to="/edittruck">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>6</td>
              <td style={{width: "20%"}}>Freelance Driver
                </td>
                <td>
                <svg  width="42" height="17" viewBox="0 0 42 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.72331 4.81497H6.18155C6.06972 4.81497 5.95788 4.86587 5.88671 4.95748L3.08061 8.24551C2.97894 8.35748 2.95861 8.53054 3.01961 8.66287C3.08061 8.80539 3.22295 8.88683 3.37545 8.88683H8.71314C8.92665 8.88683 9.10966 8.71377 9.10966 8.48982V5.21198C9.10966 4.98802 8.93682 4.81497 8.72331 4.81497ZM8.3268 8.10299H4.23965L6.36456 5.5988H8.3268V8.10299ZM42 10.8006V10.0168H41.0341V0.397006C41.0341 0.183234 40.8613 0 40.6376 0H13.8475C13.634 0 13.451 0.173054 13.451 0.397006V10.0168H12.8816V6.26048H12.0988V10.4036C12.0988 10.6174 12.2716 10.8006 12.4953 10.8006H16.1961L14.9659 11.4725H11.0007V3.56287C11.0007 3.3491 10.8279 3.16587 10.6042 3.16587H5.21569C5.09368 3.16587 4.99201 3.21677 4.91068 3.30838L0.559187 8.57126C0.498184 8.64251 0.467683 8.73413 0.467683 8.82575V11.9H0.396514C0.183007 11.9 0 12.0731 0 12.297V14.3126C0 14.5263 0.17284 14.7096 0.396514 14.7096H3.02977C3.22295 16.0228 4.33115 17 5.6732 17C7.04575 17 8.16412 16.0024 8.3268 14.6485V14.7096H15.7284C15.9216 16.0228 17.0298 17 18.3718 17C19.724 17 20.8322 16.0329 21.0254 14.7096H22.337C22.5505 14.7096 22.7335 14.5365 22.7335 14.3126V10.7904H31.6195V14.109C31.6195 14.3228 31.7923 14.506 32.016 14.506H33.3682C33.5309 15.8395 34.6696 16.8677 36.0218 16.8677C37.3638 16.8677 38.5025 15.8497 38.6754 14.506H41.5323C41.7458 14.506 41.9288 14.3329 41.9288 14.109V12.2665C41.9288 12.0527 41.756 11.8695 41.5323 11.8695H40.0581V10.7904H42V10.8006ZM14.2338 0.783832H40.2411V10.0066H14.2338V0.783832ZM7.5541 14.4754C7.47277 15.4629 6.6594 16.206 5.6732 16.206C4.67683 16.206 3.87364 15.4629 3.7923 14.4754C3.7923 14.4246 3.78214 14.3635 3.78214 14.3126C3.78214 13.2641 4.63617 12.409 5.6732 12.409C6.71024 12.409 7.56427 13.2641 7.56427 14.3126C7.56427 14.3737 7.56427 14.4246 7.5541 14.4754ZM20.2731 14.4754C20.1917 15.4629 19.3784 16.206 18.382 16.206C17.3856 16.206 16.5824 15.4629 16.5011 14.4754C16.5011 14.4246 16.4909 14.3635 16.4909 14.3126C16.4909 13.2641 17.345 12.409 18.382 12.409C19.4292 12.409 20.2731 13.2641 20.2731 14.3126C20.2731 14.3737 20.2731 14.4246 20.2731 14.4754ZM21.9506 13.9257H21.0254C20.8322 12.6329 19.724 11.6353 18.382 11.6353C17.0399 11.6353 15.9216 12.6329 15.7386 13.9257H8.3268V13.9766C8.15396 12.6533 7.03558 11.6353 5.6732 11.6353C4.33115 11.6353 3.21278 12.6329 3.02977 13.9257H0.793028V12.694H0.874365C1.08787 12.694 1.27088 12.521 1.27088 12.297V8.96826L5.40886 3.95988H10.2179V11.6048V11.8695C10.2179 11.9713 10.2585 12.0731 10.3297 12.1545C10.4009 12.2257 10.5025 12.2665 10.6042 12.2665H15.0675C15.1387 12.2665 15.1997 12.2461 15.2607 12.2156L17.7923 10.821L17.7821 10.8006H21.9608V13.9257H21.9506ZM37.923 14.3431C37.8417 15.3204 37.008 16.0838 36.032 16.0838C35.0559 16.0838 34.2222 15.3204 34.1409 14.3126C34.1307 14.2719 34.1409 14.2311 34.1409 14.1802C34.1409 13.1317 34.9949 12.2868 36.032 12.2868C37.0792 12.2868 37.923 13.1317 37.923 14.1802V14.3431ZM39.6717 12.6635H41.1561V13.7222H38.6754C38.4517 12.4599 37.3537 11.503 36.0421 11.503C34.7204 11.503 33.6224 12.4599 33.4089 13.7222H32.4227V10.7904H39.2854V12.2665C39.2752 12.4904 39.4481 12.6635 39.6717 12.6635ZM17.467 7.66527H18.077V8.4491H17.0806C16.8671 8.4491 16.6841 8.27605 16.6841 8.0521V2.50419H17.467V7.66527ZM19.9782 7.66527H20.5882V8.4491H19.5817C19.3682 8.4491 19.1852 8.27605 19.1852 8.0521V2.50419H19.968V7.66527H19.9782ZM22.4793 7.66527H23.0893V8.4491H22.0828C21.8693 8.4491 21.6863 8.27605 21.6863 8.0521V2.50419H22.4691V7.66527H22.4793ZM24.9804 7.66527H25.5904V8.4491H24.5839C24.3704 8.4491 24.1874 8.27605 24.1874 8.0521V2.50419H24.9702V7.66527H24.9804ZM27.4815 7.66527H28.0915V8.4491H27.085C26.8715 8.4491 26.6885 8.27605 26.6885 8.0521V2.50419H27.4713V7.66527H27.4815ZM29.9826 7.66527H30.5926V8.4491H29.5861C29.3725 8.4491 29.1895 8.27605 29.1895 8.0521V2.50419H29.9724V7.66527H29.9826ZM32.4938 7.66527H33.1038V8.4491H32.0973C31.8838 8.4491 31.7008 8.27605 31.7008 8.0521V2.50419H32.4837V7.66527H32.4938ZM34.9949 7.66527H35.6049V8.4491H34.5984C34.3849 8.4491 34.2019 8.27605 34.2019 8.0521V2.50419H34.9847V7.66527H34.9949ZM38.106 7.66527V8.4491H37.1097C36.8961 8.4491 36.7131 8.27605 36.7131 8.0521V2.50419H37.496V7.66527H38.106Z" fill="#244664"/>
                </svg>
                </td>
                <td></td>
                <td>
                <NavLink to="/edittruck">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>7</td>
              <td style={{width: "20%"}}>Freelance Driver
                </td>
                <td>
                <svg  width="42" height="17" viewBox="0 0 42 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.72331 4.81497H6.18155C6.06972 4.81497 5.95788 4.86587 5.88671 4.95748L3.08061 8.24551C2.97894 8.35748 2.95861 8.53054 3.01961 8.66287C3.08061 8.80539 3.22295 8.88683 3.37545 8.88683H8.71314C8.92665 8.88683 9.10966 8.71377 9.10966 8.48982V5.21198C9.10966 4.98802 8.93682 4.81497 8.72331 4.81497ZM8.3268 8.10299H4.23965L6.36456 5.5988H8.3268V8.10299ZM42 10.8006V10.0168H41.0341V0.397006C41.0341 0.183234 40.8613 0 40.6376 0H13.8475C13.634 0 13.451 0.173054 13.451 0.397006V10.0168H12.8816V6.26048H12.0988V10.4036C12.0988 10.6174 12.2716 10.8006 12.4953 10.8006H16.1961L14.9659 11.4725H11.0007V3.56287C11.0007 3.3491 10.8279 3.16587 10.6042 3.16587H5.21569C5.09368 3.16587 4.99201 3.21677 4.91068 3.30838L0.559187 8.57126C0.498184 8.64251 0.467683 8.73413 0.467683 8.82575V11.9H0.396514C0.183007 11.9 0 12.0731 0 12.297V14.3126C0 14.5263 0.17284 14.7096 0.396514 14.7096H3.02977C3.22295 16.0228 4.33115 17 5.6732 17C7.04575 17 8.16412 16.0024 8.3268 14.6485V14.7096H15.7284C15.9216 16.0228 17.0298 17 18.3718 17C19.724 17 20.8322 16.0329 21.0254 14.7096H22.337C22.5505 14.7096 22.7335 14.5365 22.7335 14.3126V10.7904H31.6195V14.109C31.6195 14.3228 31.7923 14.506 32.016 14.506H33.3682C33.5309 15.8395 34.6696 16.8677 36.0218 16.8677C37.3638 16.8677 38.5025 15.8497 38.6754 14.506H41.5323C41.7458 14.506 41.9288 14.3329 41.9288 14.109V12.2665C41.9288 12.0527 41.756 11.8695 41.5323 11.8695H40.0581V10.7904H42V10.8006ZM14.2338 0.783832H40.2411V10.0066H14.2338V0.783832ZM7.5541 14.4754C7.47277 15.4629 6.6594 16.206 5.6732 16.206C4.67683 16.206 3.87364 15.4629 3.7923 14.4754C3.7923 14.4246 3.78214 14.3635 3.78214 14.3126C3.78214 13.2641 4.63617 12.409 5.6732 12.409C6.71024 12.409 7.56427 13.2641 7.56427 14.3126C7.56427 14.3737 7.56427 14.4246 7.5541 14.4754ZM20.2731 14.4754C20.1917 15.4629 19.3784 16.206 18.382 16.206C17.3856 16.206 16.5824 15.4629 16.5011 14.4754C16.5011 14.4246 16.4909 14.3635 16.4909 14.3126C16.4909 13.2641 17.345 12.409 18.382 12.409C19.4292 12.409 20.2731 13.2641 20.2731 14.3126C20.2731 14.3737 20.2731 14.4246 20.2731 14.4754ZM21.9506 13.9257H21.0254C20.8322 12.6329 19.724 11.6353 18.382 11.6353C17.0399 11.6353 15.9216 12.6329 15.7386 13.9257H8.3268V13.9766C8.15396 12.6533 7.03558 11.6353 5.6732 11.6353C4.33115 11.6353 3.21278 12.6329 3.02977 13.9257H0.793028V12.694H0.874365C1.08787 12.694 1.27088 12.521 1.27088 12.297V8.96826L5.40886 3.95988H10.2179V11.6048V11.8695C10.2179 11.9713 10.2585 12.0731 10.3297 12.1545C10.4009 12.2257 10.5025 12.2665 10.6042 12.2665H15.0675C15.1387 12.2665 15.1997 12.2461 15.2607 12.2156L17.7923 10.821L17.7821 10.8006H21.9608V13.9257H21.9506ZM37.923 14.3431C37.8417 15.3204 37.008 16.0838 36.032 16.0838C35.0559 16.0838 34.2222 15.3204 34.1409 14.3126C34.1307 14.2719 34.1409 14.2311 34.1409 14.1802C34.1409 13.1317 34.9949 12.2868 36.032 12.2868C37.0792 12.2868 37.923 13.1317 37.923 14.1802V14.3431ZM39.6717 12.6635H41.1561V13.7222H38.6754C38.4517 12.4599 37.3537 11.503 36.0421 11.503C34.7204 11.503 33.6224 12.4599 33.4089 13.7222H32.4227V10.7904H39.2854V12.2665C39.2752 12.4904 39.4481 12.6635 39.6717 12.6635ZM17.467 7.66527H18.077V8.4491H17.0806C16.8671 8.4491 16.6841 8.27605 16.6841 8.0521V2.50419H17.467V7.66527ZM19.9782 7.66527H20.5882V8.4491H19.5817C19.3682 8.4491 19.1852 8.27605 19.1852 8.0521V2.50419H19.968V7.66527H19.9782ZM22.4793 7.66527H23.0893V8.4491H22.0828C21.8693 8.4491 21.6863 8.27605 21.6863 8.0521V2.50419H22.4691V7.66527H22.4793ZM24.9804 7.66527H25.5904V8.4491H24.5839C24.3704 8.4491 24.1874 8.27605 24.1874 8.0521V2.50419H24.9702V7.66527H24.9804ZM27.4815 7.66527H28.0915V8.4491H27.085C26.8715 8.4491 26.6885 8.27605 26.6885 8.0521V2.50419H27.4713V7.66527H27.4815ZM29.9826 7.66527H30.5926V8.4491H29.5861C29.3725 8.4491 29.1895 8.27605 29.1895 8.0521V2.50419H29.9724V7.66527H29.9826ZM32.4938 7.66527H33.1038V8.4491H32.0973C31.8838 8.4491 31.7008 8.27605 31.7008 8.0521V2.50419H32.4837V7.66527H32.4938ZM34.9949 7.66527H35.6049V8.4491H34.5984C34.3849 8.4491 34.2019 8.27605 34.2019 8.0521V2.50419H34.9847V7.66527H34.9949ZM38.106 7.66527V8.4491H37.1097C36.8961 8.4491 36.7131 8.27605 36.7131 8.0521V2.50419H37.496V7.66527H38.106Z" fill="#244664"/>
                </svg>
                </td>
                <td></td>
                <td>
                <NavLink to="/edittruck">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
    </div>
  )
}

export default Truck