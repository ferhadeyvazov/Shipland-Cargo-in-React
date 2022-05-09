// import MainMenu from "../assets/sidebarlinksImage/MainMenu.svg";
// import Balance from "../assets/sidebarlinksImage/balance.svg";
// import Orders from "../assets/sidebarlinksImage/orders.svg";
// import Courier from "../assets/sidebarlinksImage/Coruier.svg";
// import Stock from "../assets/sidebarlinksImage/Stock.svg";
// import Invocies from "../assets/sidebarlinksImage/Invoices.svg";
// import Usage from "../assets/sidebarlinksImage/buy.svg";
// import Buy from "../assets/sidebarlinksImage/buy.svg";
// import Share from "../assets/sidebarlinksImage/shareAndEarn.svg";
// import Inventory from "../assets/sidebarlinksImage/inventory.svg";
// import Cargo from "../assets/sidebarlinksImage/cargo.svg";
// import Parachut from "../assets/sidebarlinksImage/parachut.svg";
// import MarketPlace from "../assets/sidebarlinksImage/buy.svg";
// import MarketPlace from "../assets/sidebarlinksImage/buy.svg";
import Dropdown from "../components/MainComponents/SideBar/Dropmenu.js"
export const MainSideBarLinks = [
  {
    linkName: "main-menu",
    image: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.7365 5.57977L12.8597 4.05012V1.60378C12.8597 1.3283 12.6355 1.10414 12.3601 1.10414H11.1791C10.9036 1.10414 10.6795 1.3283 10.6795 1.60378V2.27315L8.17164 0.229241C7.99023 0.0814403 7.75113 0 7.4984 0C7.24668 0 7.00872 0.0809406 6.82831 0.227969L0.263446 5.57973C-0.0348351 5.82277 -0.0169392 6.03448 0.0202607 6.13904C0.0573698 6.24338 0.176873 6.41843 0.560046 6.41843H1.45898V13.4563C1.45898 13.9586 1.8665 14.3671 2.3674 14.3671H5.20622C5.70291 14.3671 6.09194 13.967 6.09194 13.4563V10.5702C6.09194 10.3228 6.31927 10.0976 6.56886 10.0976H8.47655C8.71447 10.0976 8.90805 10.3096 8.90805 10.5702V13.4563C8.90805 13.95 9.33447 14.3671 9.83918 14.3671H12.6326C13.1335 14.3671 13.541 13.9585 13.541 13.4563V6.41843H14.4399C14.8231 6.41843 14.9426 6.24338 14.9797 6.13904C15.0169 6.03448 15.0348 5.82277 14.7365 5.57977Z"
          fill="#3B69E4"
        />
      </svg>
    ),
    id: 1,
    linkUrl: "main-menu",
  },

  {
    id: 2,
    linkName: "balance-system",
    image: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.2515 2H3.74841C3.45503 2 3.21716 2.23787 3.21716 2.53125V5.69896C3.21716 5.99234 3.45503 6.23021 3.74841 6.23021H13.2515C13.5449 6.23021 13.7827 5.99234 13.7827 5.69896V2.53125C13.7827 2.23783 13.5449 2 13.2515 2Z"
          fill="#3B69E4"
        />
        <path
          d="M16.4688 10.7698H15.4161V8.77731C15.4161 8.48393 15.1783 8.24606 14.8849 8.24606H9.03112V7.29266H7.96862V8.24606H2.11511C1.82172 8.24606 1.58386 8.48393 1.58386 8.77731V10.7698H0.53125C0.237867 10.7698 0 11.0077 0 11.3011V14.4688C0 14.7622 0.237867 15 0.53125 15H3.69896C3.99234 15 4.23021 14.7622 4.23021 14.4688V11.3011C4.23021 11.0077 3.99234 10.7698 3.69896 10.7698H2.64636V9.30856H7.96858V10.7698H6.91611C6.62273 10.7698 6.38486 11.0077 6.38486 11.3011V14.4688C6.38486 14.7622 6.62273 15 6.91611 15H10.0838C10.3772 15 10.6151 14.7622 10.6151 14.4688V11.3011C10.6151 11.0077 10.3772 10.7698 10.0838 10.7698H9.03105V9.30856H14.3536V10.7698H13.301C13.0076 10.7698 12.7697 11.0077 12.7697 11.3011V14.4688C12.7697 14.7622 13.0076 15 13.301 15H16.4688C16.7621 15 17 14.7622 17 14.4688V11.3011C17 11.0077 16.7621 10.7698 16.4688 10.7698Z"
          fill="#3B69E4"
        />
      </svg>
    ),
    linkUrl: "balance-system",
  },

  {
    id: 3,
    linkName: "orders",
    drop: <Dropdown/>,
    image: (
      <svg
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3143 7.87772H1.68524C1.12277 7.87772 0.665039 8.37012 0.665039 8.97528V9.06537L1.94303 15.0268L1.96175 15.0985C2.1138 15.5899 2.56096 15.9466 3.02481 15.9466H11.9749C12.4388 15.9466 12.8859 15.59 13.038 15.0985L14.3345 9.0654V8.97531C14.3344 8.37009 13.8768 7.87772 13.3143 7.87772ZM9.51533 14.4277L9.59695 13.4586H10.2671L10.1241 14.4277H9.51533ZM7.96447 14.4277V13.4586H8.66332L8.5817 14.4277H7.96447ZM6.41771 14.4277L6.33609 13.4586H7.03494V14.4277H6.41771ZM4.87544 14.4277L4.73235 13.4586H5.40261L5.48423 14.4277H4.87544ZM2.55809 11.41H3.48814L3.63633 12.4144H2.77345L2.55809 11.41ZM4.43001 11.41H5.23011L5.31469 12.4144H4.57828L4.43001 11.41ZM5.06057 9.39656L5.14219 10.3658H4.27605L4.13309 9.39656H5.06057ZM10.8665 9.39656L10.7235 10.3658H9.85725L9.93888 9.39656H10.8665ZM8.92365 10.3658H7.96438V9.39656H9.00536L8.92365 10.3658ZM7.96447 11.41H8.83591L8.75133 12.4144H7.96456V11.41H7.96447ZM7.03506 12.4144H6.24829L6.16371 11.41H7.03515V12.4144H7.03506ZM7.03506 10.3658H6.0757L5.99408 9.39659H7.03506V10.3658ZM9.68476 12.4144L9.76933 11.41H10.5694L10.4212 12.4144H9.68476ZM11.5114 11.41H12.4414L12.2262 12.4144H11.3633L11.5114 11.41ZM12.6652 10.3658H11.6655L11.8085 9.39659H12.873L12.6652 10.3658ZM3.1909 9.39656L3.33387 10.3658H2.3342L2.1264 9.39656H3.1909ZM2.99713 13.4586H3.7904L3.93337 14.4277H3.20493L2.99713 13.4586ZM11.7945 14.4277H11.0661L11.209 13.4586H12.0022L11.7945 14.4277Z"
          fill="#3B69E4"
        />
        <path
          d="M15 9.01394C15 9.23897 14.8289 9.42143 14.618 9.42143H0.382031C0.171064 9.42143 0 9.23897 0 9.01394V7.35156C0 7.12653 0.171064 6.94406 0.382031 6.94406H14.618C14.8289 6.94406 15 7.12653 15 7.35156V9.01394Z"
          fill="#3B69E4"
        />
        <path
          d="M8.39444 7.04088C8.39444 7.26591 8.22337 7.44838 8.0124 7.44838H6.62531C6.41435 7.44838 6.24316 7.26591 6.24316 7.04088V0.460906C6.24316 0.235875 6.41435 0.0534058 6.62531 0.0534058H8.0124C8.22337 0.0534058 8.39444 0.235875 8.39444 0.460906V7.04088Z"
          fill="#3B69E4"
        />
        <path
          d="M5.82812 6.565V7.32541C5.82812 8.20382 6.49571 8.91582 7.31901 8.91582C8.14252 8.91582 8.81002 8.20372 8.81002 7.32541V6.565H5.82812Z"
          fill="#3B69E4"
        />
        <path
          d="M7.44785 6.14416C7.44785 6.22016 7.39005 6.28191 7.31859 6.28191C7.24734 6.28191 7.18945 6.22026 7.18945 6.14416V0.753351C7.18945 0.677257 7.24726 0.615601 7.31859 0.615601C7.38993 0.615601 7.44785 0.677257 7.44785 0.753351V6.14416Z"
          fill="#3B69E4"
        />
      </svg>
    ),
    linkUrl: "orders",
  },

  {
    id: 4,
    linkName: "Courier Request",
    image: (
      <svg
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.328627 7.61059H8.61226C8.73605 7.61059 8.83736 7.50928 8.83736 7.38552V0.675294C8.83736 0.302327 8.53503 0 8.16207 0H0.77885C0.405882 0 0.103556 0.302327 0.103556 0.675294V7.38546C0.103529 7.50928 0.204837 7.61059 0.328627 7.61059ZM1.99783 3.08886C1.99783 2.93456 2.1229 2.80946 2.27723 2.80946H4.48711V2.02207C4.48711 1.77315 4.78813 1.6485 4.9641 1.82458L6.86837 3.72975C6.97741 3.83885 6.97741 4.01571 6.86837 4.12478L4.9641 6.02965C4.7881 6.2057 4.48711 6.08107 4.48711 5.83213V5.04455H2.2772C2.1229 5.04455 1.9978 4.91945 1.9978 4.76515V3.08886H1.99783ZM2.9668 9.41809H0.225098C0.101281 9.41809 0 9.31684 0 9.19302V8.50873C0 8.38491 0.101281 8.28361 0.225098 8.28361H3.58808C3.25942 8.56949 3.03208 8.96792 2.9668 9.41809ZM15.7749 8.28363H15.2279V5.22452C15.2279 4.86664 15.1199 4.51548 14.9195 4.21835L13.5487 2.18795C13.2133 1.69273 12.655 1.39561 12.0563 1.39561H9.93137C9.68149 1.39561 9.48115 1.5982 9.48115 1.8458V8.28363H6.00112C6.33203 8.56949 6.55937 8.96792 6.62465 9.41814H10.2938C10.4243 8.5245 11.1941 7.83344 12.1238 7.83344C13.0535 7.83344 13.821 8.52452 13.9516 9.41814H15.7749C15.8987 9.41814 16 9.31684 16 9.19302V8.50873C16 8.38494 15.8987 8.28363 15.7749 8.28363ZM13.5329 4.6235H10.7282C10.6044 4.6235 10.5031 4.52444 10.5031 4.3984V2.84298C10.5031 2.71919 10.6044 2.61788 10.7282 2.61788H12.4367C12.511 2.61788 12.5785 2.65388 12.6213 2.71242L13.7175 4.27012C13.821 4.41869 13.7152 4.6235 13.5329 4.6235ZM4.79461 8.28363C4.02254 8.28363 3.39448 8.91163 3.39448 9.68601C3.39448 10.4581 4.02251 11.0861 4.79461 11.0861C5.56894 11.0861 6.19472 10.4581 6.19472 9.68601C6.19469 8.91166 5.56894 8.28363 4.79461 8.28363ZM4.79461 10.3861C4.40742 10.3861 4.09456 10.0709 4.09456 9.68601C4.09456 9.2988 4.40745 8.98596 4.79461 8.98596C5.18178 8.98596 5.49467 9.29882 5.49467 9.68601C5.49467 10.0709 5.18175 10.3861 4.79461 10.3861ZM12.1238 8.28363C11.3495 8.28363 10.7237 8.91163 10.7237 9.68601C10.7237 10.4581 11.3495 11.0861 12.1238 11.0861C12.8959 11.0861 13.5239 10.4581 13.5239 9.68601C13.5239 8.91166 12.8959 8.28363 12.1238 8.28363ZM12.1238 10.3861C11.7366 10.3861 11.4237 10.0709 11.4237 9.68601C11.4237 9.2988 11.7366 8.98596 12.1238 8.98596C12.511 8.98596 12.8238 9.29882 12.8238 9.68601C12.8239 10.0709 12.511 10.3861 12.1238 10.3861Z"
          fill="#3B69E4"
        />
      </svg>
    ),
    linkUrl: "courier-request",
  },
  {
    id: 5,
    linkName: "Stock",
    image: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.4375 0V7.76086H12.568V0H4.4375ZM10.7201 3.32609H6.28535V2.2174H10.7201V3.32609Z"
          fill="#3B69E4"
        />
        <path
          d="M0 8.86955V17H7.76087V8.86955H0ZM5.91304 12.1956H1.84782V11.087H5.91304V12.1956Z"
          fill="#3B69E4"
        />
        <path
          d="M8.87109 8.86955V17H16.632V8.86955H8.87109ZM14.7841 12.1956H10.7189V11.087H14.7841V12.1956Z"
          fill="#3B69E4"
        />
      </svg>
    ),
    linkUrl: "stock",
  },

  {
    id: 6,
    linkName: "invoices",
    image: (
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0685 0.273839C11.9925 0.24233 11.9049 0.259216 11.8466 0.317731L11.1774 0.986955L10.5082 0.317731C10.4289 0.238472 10.3001 0.238472 10.2208 0.317731L9.55159 0.986955L8.88236 0.317731C8.8031 0.238472 8.67426 0.238472 8.595 0.317731L7.92578 0.986955L7.25655 0.317731C7.17729 0.238472 7.04845 0.238472 6.96919 0.317731L6.29997 0.986955L5.63074 0.317731C5.57242 0.259621 5.48504 0.241925 5.40923 0.273624C5.33342 0.304918 5.28384 0.379104 5.28384 0.461412C5.28384 4.87179 4.92393 7.40072 4.18438 8.18395H0.203259C0.14453 8.18395 0.0886339 8.20936 0.0500285 8.25366C0.0114231 8.29817 -0.00605774 8.3569 0.00187293 8.41501C0.275207 10.3885 0.80218 12.4114 2.64197 12.4517H9.14517C9.14579 12.4517 9.1466 12.4517 9.14741 12.4517C11.9287 12.4301 12.1822 3.26937 12.1935 0.462222C12.1939 0.379724 12.1445 0.305347 12.0685 0.273839ZM7.67928 12.0452H2.64643C1.48622 12.02 0.822685 11.0175 0.456469 8.7099C0.446705 8.64812 0.49467 8.59039 0.557258 8.59039H4.26712C4.26733 8.59018 4.26793 8.59018 4.26833 8.59039H6.44284C6.49304 8.59039 6.53531 8.62697 6.54282 8.67656C6.73222 9.9327 7.04335 11.1724 7.74937 11.8721C7.81403 11.9363 7.77033 12.0452 7.67928 12.0452ZM10.771 4.72916H6.50323C6.39106 4.72916 6.30001 4.63811 6.30001 4.52594C6.30001 4.41377 6.39106 4.32272 6.50323 4.32272H10.771C10.8831 4.32272 10.9742 4.41377 10.9742 4.52594C10.9742 4.63811 10.8831 4.72916 10.771 4.72916ZM10.771 3.71303H6.50323C6.39106 3.71303 6.30001 3.62198 6.30001 3.50981C6.30001 3.39764 6.39106 3.30659 6.50323 3.30659H10.771C10.8831 3.30659 10.9742 3.39764 10.9742 3.50981C10.9742 3.62198 10.8831 3.71303 10.771 3.71303ZM10.771 2.69691H6.50323C6.39106 2.69691 6.30001 2.60586 6.30001 2.49369C6.30001 2.38151 6.39106 2.29047 6.50323 2.29047H10.771C10.8831 2.29047 10.9742 2.38151 10.9742 2.49369C10.9742 2.60586 10.8831 2.69691 10.771 2.69691Z"
          fill="#3B69E4"
        />
      </svg>
    ),
    linkUrl: "invoices",
  },

  {
    id: 7,
    linkName: "site-usage",
    image: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0882 14.7848L14.7842 14.0886L11.9848 11.29L11.2888 11.9862L14.0882 14.7848Z"
          fill="#3B69E4"
        />
        <path
          d="M6.8835 0C3.08175 0 0 3.08175 0 6.8835C0 10.6853 3.08175 13.767 6.8835 13.767C10.6852 13.767 13.767 10.6853 13.767 6.8835C13.7674 3.08175 10.6852 0 6.8835 0Z"
          fill="#3B69E4"
        />
        <path
          d="M2.65609 5.99363L2.82334 6.85088C2.86609 7.0695 2.90921 7.30088 2.94334 7.54125H2.95196C2.99509 7.30125 3.05509 7.06088 3.10646 6.85538L3.32921 5.99363H3.84371L4.05371 6.8295C4.10921 7.06538 4.16509 7.30088 4.20784 7.54125H4.21646C4.24646 7.30125 4.28921 7.06538 4.33646 6.82538L4.51646 5.994H5.15509L4.51196 8.09025H3.89884L3.70159 7.353C3.65021 7.1475 3.61159 6.95888 3.56884 6.70125H3.56021C3.52196 6.96263 3.47884 7.15575 3.42296 7.353L3.21296 8.09025H2.59984L1.99121 5.994L2.65609 5.99363Z"
          fill="white"
        />
        <path
          d="M5.99177 5.99363L6.15902 6.85088C6.20177 7.0695 6.2449 7.30088 6.27902 7.54125H6.28765C6.33077 7.30125 6.39077 7.06088 6.44215 6.85538L6.6649 5.99363H7.1794L7.3894 6.8295C7.4449 7.06538 7.50077 7.30088 7.54352 7.54125H7.55215C7.58215 7.30125 7.6249 7.06538 7.67215 6.82538L7.85215 5.994H8.49077L7.84765 8.09025H7.23452L7.03727 7.353C6.9859 7.1475 6.94727 6.95888 6.90452 6.70125H6.89627C6.85802 6.96263 6.8149 7.15575 6.75902 7.353L6.54902 8.09025H5.9359L5.32727 5.994L5.99177 5.99363Z"
          fill="white"
        />
        <path
          d="M9.32735 5.99363L9.4946 6.85088C9.53735 7.0695 9.58048 7.30088 9.6146 7.54125H9.62323C9.66635 7.30125 9.72635 7.06088 9.77773 6.85538L10.0005 5.99363H10.515L10.725 6.8295C10.7805 7.06538 10.8364 7.30088 10.8791 7.54125H10.8877C10.9177 7.30125 10.9605 7.06538 11.0077 6.82538L11.1877 5.994H11.8263L11.1832 8.09025H10.5701L10.3729 7.353C10.3215 7.1475 10.2829 6.95888 10.2401 6.70125H10.2315C10.1932 6.96263 10.1501 7.15575 10.0942 7.353L9.88423 8.09025H9.2711L8.66248 5.994L9.32735 5.99363Z"
          fill="white"
        />
      </svg>
    ),
    linkUrl: "site-usage",
  },
  {
    id: 8,
    linkName: "buy-for-me",
    image: (
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0.130781C0.372938 0.0556877 1.13063 0 1.84106 0C2.71013 0 3.24338 0.084375 3.70153 0.355219C4.14113 0.588937 4.45838 1.01925 4.45838 1.58878C4.45838 2.14987 4.131 2.673 3.42141 2.93456V2.95313C4.14113 3.14972 4.67353 3.69141 4.67353 4.50478C4.67353 5.07516 4.41112 5.52319 4.01962 5.84128C3.56147 6.20578 2.7945 6.41166 1.54153 6.41166C0.841219 6.41166 0.31725 6.36441 0 6.318C0 6.318 0 0.130781 0 0.130781ZM1.41075 2.54222H1.87819C2.62575 2.54222 3.02738 2.23341 3.02738 1.76681C3.02738 1.29009 2.66288 1.03781 2.01825 1.03781C1.71028 1.03781 1.53225 1.05638 1.41075 1.07494V2.54222ZM1.41075 5.33756C1.55081 5.35612 1.71872 5.35612 1.96172 5.35612C2.60719 5.35612 3.17672 5.11312 3.17672 4.44909C3.17672 3.81375 2.60634 3.56147 1.89506 3.56147H1.41075V5.33756Z"
          fill="#3B69E4"
        />
        <path
          d="M9.90487 4.87941C9.90487 5.47762 9.92344 5.96362 9.94284 6.34669H8.70844L8.64347 5.70206H8.61562C8.43759 5.98219 8.00813 6.44962 7.18547 6.44962C6.25987 6.44962 5.57812 5.86997 5.57812 4.45837V1.77609H7.00828V4.23478C7.00828 4.89797 7.22344 5.30044 7.71872 5.30044C8.11106 5.30044 8.3355 5.02959 8.42916 4.80516C8.46712 4.72078 8.47641 4.60856 8.47641 4.49634V1.77609H9.90572V4.87941H9.90487Z"
          fill="#3B69E4"
        />
        <path
          d="M12.106 1.77609L12.7886 4.01963C12.8637 4.29047 12.9565 4.62712 13.0139 4.87012H13.0417C13.1067 4.62712 13.1818 4.28119 13.2468 4.01963L13.8078 1.77609H15.3317L14.266 4.78575C13.6121 6.59897 13.1717 7.32797 12.6578 7.78613C12.1625 8.21559 11.6394 8.36578 11.2842 8.41219L10.9855 7.20647C11.1627 7.17863 11.388 7.09425 11.6023 6.96347C11.8174 6.85125 12.0503 6.62766 12.1904 6.39309C12.2376 6.32812 12.2655 6.25303 12.2655 6.18722C12.2655 6.14081 12.2562 6.06572 12.2005 5.9535L10.5273 1.77525H12.106V1.77609Z"
          fill="#3B69E4"
        />
        <path
          d="M9.60302 13.5961L10.6484 12.5506L8.20385 10.1061L7.15844 11.1515L9.60302 13.5961Z"
          fill="#3B69E4"
        />
        <path
          d="M6.67133 12.86L9.86002 9.67133L6 9L6.67133 12.86Z"
          fill="#3B69E4"
        />
      </svg>
    ),

    linkUrl: "buy-for-me",
  },
  {
    id: 9,
    linkName: "share-and-earn",
    image: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.00004 4.81212C5.1133 4.79896 5.22916 4.79106 5.35032 4.79106C7.10699 4.79106 8.53974 6.36863 8.53974 8.3044C8.53974 8.34917 8.53709 8.39129 8.53709 8.43607H14.8V0.993271H5V4.81212H5.00004Z"
          fill="white"
        />
        <path
          d="M15.5496 0H4.86467C4.61974 0 4.41959 0.197508 4.41959 0.445085V4.96189C3.27394 5.49392 2.46802 6.74753 2.46802 8.20134C2.46802 8.87554 2.64446 9.50502 2.94737 10.0397C2.01768 10.3452 1.41456 10.6638 1.11431 11.0062C0.353161 11.8754 0.055555 14.9067 0.00552625 15.5046C-0.0392471 15.7285 0.195171 15.9866 0.450611 15.9866H10.8669C11.1566 15.9866 11.3304 15.7285 11.312 15.5046C11.262 14.9067 10.9617 11.8727 10.2032 11.0062C9.90296 10.6639 9.29723 10.3478 8.37015 10.0423C8.51238 9.78682 8.62824 9.51027 8.70988 9.21796H15.5549C15.7998 9.21796 15.9999 9.02046 15.9999 8.77288V0.445085C15.9921 0.197508 15.7945 0 15.5496 0ZM5.65479 5.57291C6.60819 5.57291 7.42991 6.23926 7.77755 7.18736C6.06826 7.28481 5.62843 6.42361 5.61266 6.38669C5.54418 6.22341 5.38354 6.11805 5.20445 6.11805C5.2018 6.11805 5.19919 6.11805 5.19919 6.11805C5.0201 6.1207 4.85946 6.23131 4.79358 6.4025C4.77778 6.44728 4.41959 7.32693 3.482 7.3638C3.78486 6.32086 4.64346 5.57291 5.65479 5.57291ZM5.25712 7.33749C5.70221 7.74045 6.52658 8.17763 7.94878 8.06437C7.95143 8.10914 7.95403 8.15127 7.95403 8.19604C7.95403 9.64459 6.92164 10.8219 5.65483 10.8219C4.40117 10.8219 3.38194 9.67091 3.35562 8.24611C4.22208 8.29353 4.88838 7.80363 5.25712 7.33749ZM3.51361 10.7929C4.07986 11.3618 4.8331 11.7121 5.65743 11.7121C6.48177 11.7121 7.23501 11.3618 7.80126 10.7929C9.06017 11.1774 9.4289 11.475 9.53161 11.5936C9.90296 12.0176 10.2243 13.7584 10.3744 15.1016H0.937822C1.08795 13.7584 1.40927 12.0176 1.78061 11.5936C1.88336 11.475 2.25206 11.1748 3.51361 10.7929ZM15.1045 8.3304H8.83895C8.83895 8.28563 8.8416 8.2435 8.8416 8.19873C8.8416 6.26032 7.4115 4.68539 5.65218 4.68539C5.53631 4.68539 5.42041 4.69594 5.3019 4.70645V0.887563H15.0993V8.3304H15.1045Z"
          fill="#3B69E4"
        />
        <path
          d="M14.2195 1.76982H6.19727V4.73802C7.47198 4.9803 8.48857 6.05486 8.76511 7.43493H14.2143V1.76982H14.2195Z"
          fill="white"
        />
        <path
          d="M11.8079 4.15862H11.3549C11.2153 4.15862 11.1021 4.04536 11.1021 3.90579C11.1021 3.76621 11.2153 3.65295 11.3549 3.65295H12.5032C12.7481 3.65295 12.9483 3.45545 12.9483 3.20787C12.9483 2.96029 12.7508 2.76278 12.5032 2.76278H12.1977V2.67845C12.1977 2.43352 12.0002 2.23337 11.7526 2.23337C11.5077 2.23337 11.3075 2.43088 11.3075 2.67845V2.76535C10.6992 2.79167 10.2119 3.28682 10.2119 3.9031C10.2119 4.53257 10.7255 5.04349 11.3523 5.04349H11.8053C11.9449 5.04349 12.0581 5.15675 12.0581 5.29633C12.0581 5.4359 11.9449 5.54916 11.8053 5.54916H10.657C10.4121 5.54916 10.2119 5.74667 10.2119 5.99424C10.2119 6.23917 10.4094 6.43933 10.657 6.43933H11.3075V6.52362C11.3075 6.76855 11.505 6.96871 11.7526 6.96871C11.9975 6.96871 12.1977 6.7712 12.1977 6.52362V6.36298C12.6323 6.20234 12.9457 5.78618 12.9457 5.29633C12.9457 4.66954 12.4374 4.15862 11.8079 4.15862Z"
          fill="#3B69E4"
        />
        <path
          d="M10.3714 15.099C10.2213 13.7558 9.89999 12.0149 9.52864 11.5909C9.42854 11.475 9.05984 11.1748 7.79829 10.7903C7.23204 11.3592 6.4788 11.7095 5.65446 11.7095C4.83013 11.7095 4.07689 11.3592 3.51064 10.7903C2.25173 11.1748 1.883 11.4724 1.78029 11.5909C1.40894 12.0149 1.08763 13.7558 0.9375 15.099H10.3714Z"
          fill="#3B69E4"
        />
        <path
          d="M4.78758 6.4025C4.85342 6.23656 5.0141 6.1233 5.19319 6.11805C5.19584 6.11805 5.19845 6.11805 5.19845 6.11805C5.37489 6.11805 5.53557 6.22075 5.60666 6.38669C5.62247 6.42091 6.0623 7.28476 7.77155 7.18735C7.42652 6.23921 6.60483 5.57291 5.64879 5.57291C4.63746 5.57291 3.77886 6.32615 3.4707 7.36384C4.41359 7.32958 4.77178 6.44466 4.78758 6.4025Z"
          fill="white"
        />
        <path
          d="M5.65695 10.8245C6.92641 10.8245 7.95615 9.64724 7.95615 8.19869C7.95615 8.15392 7.95351 8.11179 7.9509 8.06702C6.5287 8.17763 5.70437 7.74045 5.25924 7.34013C4.89055 7.80628 4.2242 8.29353 3.36035 8.24876C3.38406 9.67095 4.40334 10.8245 5.65695 10.8245Z"
          fill="white"
        />
      </svg>
    ),
    linkUrl: "share-and-earn",
  },
  {
    id: 10,
    linkName: "inventory",
    image: (
      <svg
        width="11"
        height="15"
        viewBox="0 0 11 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.58956 9.84989C7.58917 9.97128 7.49095 10.0695 7.36956 10.0699H5.82956C5.70817 10.0695 5.60996 9.97128 5.60956 9.84989V8.19989H4.17957V11.9399H9.01956V8.19989H7.58956V9.84989Z"
          fill="#3B69E4"
        />
        <path
          d="M1.97925 10.5056L3.73925 11.7376V8.11655L1.97925 7.23655V10.5056Z"
          fill="#3B69E4"
        />
        <path
          d="M6.04968 8.20002H7.14968V9.63003H6.04968V8.20002Z"
          fill="#3B69E4"
        />
        <path
          d="M6.98843 7.10003H2.69177L4.01177 7.76003H8.30843L6.98843 7.10003Z"
          fill="#3B69E4"
        />
        <path d="M4.17957 12.38H9.01956V13.04H4.17957V12.38Z" fill="#3B69E4" />
        <path
          d="M1.97925 11.6056L3.73925 12.8376V12.2745L1.97925 11.0425V11.6056Z"
          fill="#3B69E4"
        />
        <path
          d="M2.42053 4.56991H3.08053V5.22991H2.42053V4.56991Z"
          fill="#3B69E4"
        />
        <path
          d="M11 13.7V0.940036C10.9999 0.765019 10.9303 0.597264 10.8065 0.473511C10.6828 0.34976 10.515 0.280127 10.34 0.280029H0.660006C0.48499 0.280128 0.317234 0.34976 0.193481 0.473511C0.069731 0.597261 9.8057e-05 0.765017 0 0.940036V13.7C9.82079e-05 13.875 0.069731 14.0428 0.193481 14.1665C0.317232 14.2903 0.484987 14.3599 0.660006 14.36H10.34C10.515 14.3599 10.6828 14.2903 10.8065 14.1665C10.9303 14.0428 10.9999 13.875 11 13.7ZM4.18001 2.48003H8.58C8.70149 2.48003 8.8 2.57854 8.8 2.70003C8.8 2.82152 8.70149 2.92003 8.58 2.92003H4.18001C4.05852 2.92003 3.96001 2.82152 3.96001 2.70003C3.96001 2.57854 4.05852 2.48003 4.18001 2.48003ZM4.18001 4.68003H8.58C8.70149 4.68003 8.8 4.77854 8.8 4.90003C8.8 5.02152 8.70149 5.12003 8.58 5.12003H4.18001C4.05852 5.12003 3.96001 5.02152 3.96001 4.90003C3.96001 4.77854 4.05852 4.68003 4.18001 4.68003ZM1.98001 2.37003C1.98001 2.25336 2.02637 2.14139 2.10887 2.05889C2.19137 1.97639 2.30333 1.93003 2.42001 1.93003H3.08001C3.19669 1.93003 3.30865 1.97639 3.39115 2.05889C3.47365 2.14139 3.52001 2.25336 3.52001 2.37003V3.03003C3.52001 3.14671 3.47365 3.25868 3.39115 3.34118C3.30865 3.42367 3.19669 3.47003 3.08001 3.47003H2.42001C2.30333 3.47003 2.19137 3.42367 2.10887 3.34118C2.02637 3.25868 1.98001 3.14671 1.98001 3.03003V2.37003ZM1.98001 4.57003C1.98001 4.45335 2.02637 4.34139 2.10887 4.25889C2.19137 4.17639 2.30333 4.13003 2.42001 4.13003H3.08001C3.19669 4.13003 3.30865 4.17639 3.39115 4.25889C3.47365 4.34139 3.52001 4.45335 3.52001 4.57003V5.23003C3.52001 5.34671 3.47365 5.45867 3.39115 5.54117C3.30865 5.62367 3.19669 5.67003 3.08001 5.67003H2.42001C2.30333 5.67003 2.19137 5.62367 2.10887 5.54117C2.02637 5.45867 1.98001 5.34671 1.98001 5.23003V4.57003ZM9.46 13.2599C9.45961 13.3813 9.36139 13.4795 9.24 13.4799H3.96001C3.91512 13.4801 3.87122 13.4662 3.83459 13.4403H3.83351L1.63351 11.9003C1.62909 11.897 1.62693 11.8937 1.62359 11.8915C1.57115 11.8499 1.54031 11.7869 1.54001 11.7199V6.8799C1.54041 6.75851 1.63862 6.6603 1.76001 6.6599H7.04001C7.07399 6.65971 7.10758 6.66766 7.13792 6.68298L9.33792 7.78298C9.34195 7.78446 9.34568 7.78672 9.34892 7.78956C9.41728 7.82865 9.45961 7.90123 9.46 7.9799V13.2599Z"
          fill="#3B69E4"
        />
        <path
          d="M2.42053 2.37003H3.08053V3.03003H2.42053V2.37003Z"
          fill="#3B69E4"
        />
      </svg>
    ),

    linkUrl: "inventory",
  },
  {
    id: 11,
    linkName: "cargo-companies",
    image: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.74988 13.75C6.74988 14.4404 6.19028 15 5.49988 15C4.80948 15 4.24988 14.4404 4.24988 13.75C4.24988 13.0596 4.80948 12.5 5.49988 12.5C6.19028 12.5 6.74988 13.0596 6.74988 13.75Z"
          fill="#3B69E4"
        />
        <path
          d="M2.99988 13.75C2.99988 14.4404 2.44028 15 1.74988 15C1.05948 15 0.499878 14.4404 0.499878 13.75C0.499878 13.0596 1.05948 12.5 1.74988 12.5C2.44028 12.5 2.99988 13.0596 2.99988 13.75Z"
          fill="#3B69E4"
        />
        <path
          d="M12.9996 7.62939e-06H8.99963V4.00001H12.9996V7.62939e-06ZM11.2496 1.50001H10.7496V0.250008H11.2496V1.50001Z"
          fill="#3B69E4"
        />
        <path
          d="M13.9996 4.50001H8.99963V8.50001H13.9996V4.50001ZM11.7496 6.00001H11.2496V4.75001H11.7496V6.00001Z"
          fill="#3B69E4"
        />
        <path
          d="M8.99963 13H14.9996V9.00001H8.99963V13ZM11.7496 9.25001H12.2496V10.75H11.7496V9.25001Z"
          fill="#3B69E4"
        />
        <path
          d="M8.5 0H8V11.25H7.25V8.25L4.25 2.25H0V13.5H0.272546C0.351451 13.0302 0.649003 12.6261 1.074 12.4112C1.499 12.1963 2.001 12.1963 2.426 12.4112C2.851 12.6261 3.14854 13.0302 3.22746 13.5H4.02266H4.02255C4.10145 13.0302 4.399 12.6261 4.824 12.4112C5.249 12.1963 5.751 12.1963 6.176 12.4112C6.601 12.6261 6.89854 13.0302 6.97746 13.5H7.25V13H8V13.75C8 13.8163 8.02634 13.8799 8.07322 13.9268C8.12009 13.9737 8.18371 14 8.25 14H15V13.5H8.5L8.5 0ZM0.999999 7.5V3.25H3.75L5.75 7.5H0.999999ZM8 12.5H7.25V11.75H8V12.5Z"
          fill="#3B69E4"
        />
      </svg>
    ),
    linkUrl: "cargo-companies",
  },
  {
    id: 12,
    linkName: "get-special-offer",

    image: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.4333 7.13999C15.6778 6.3845 15.0733 4.91118 15.0733 3.8533C15.0733 2.79556 14.2044 1.92661 13.1466 1.92661C12.0889 1.92661 10.6156 1.3221 9.85995 0.566614C9.10447 -0.188871 7.87661 -0.188871 7.13995 0.566614C6.38447 1.3221 4.91115 1.92661 3.85328 1.92661C2.79554 1.92661 1.9266 2.79556 1.9266 3.8533C1.9266 4.91104 1.32209 6.38437 0.56661 7.13999C-0.18887 7.89547 -0.18887 9.12335 0.56661 9.86001C1.32209 10.6155 1.9266 12.0888 1.9266 13.1467C1.9266 14.2044 2.79554 15.0734 3.85328 15.0734C4.91101 15.0734 6.38433 15.6779 7.13995 16.4334C7.89543 17.1889 9.12329 17.1889 9.85995 16.4334C10.6154 15.6779 12.0888 15.0734 13.1466 15.0734C14.2044 15.0734 15.0733 14.2044 15.0733 13.1467C15.0733 12.089 15.6778 10.6156 16.4333 9.86001C17.1889 9.10453 17.1889 7.89551 16.4333 7.13999ZM5.28896 5.94996C5.28896 5.06219 6.00676 4.34434 6.89456 4.34434C7.78233 4.34434 8.50017 5.06215 8.50017 5.94996C8.50004 6.83773 7.78223 7.55558 6.89446 7.55558C6.00669 7.55558 5.28899 6.83777 5.28899 5.94996H5.28896ZM6.44117 11.7488C6.36567 11.8433 6.25223 11.9 6.13892 11.9C6.06342 11.9 5.98779 11.8811 5.91229 11.8245C5.74232 11.6922 5.72335 11.4655 5.83679 11.2956L10.729 4.87337C10.8613 4.7034 11.0879 4.68443 11.2579 4.79787C11.4278 4.93016 11.4468 5.15679 11.3334 5.32676L6.44117 11.7488ZM10.1056 12.4666C9.2178 12.4666 8.49997 11.7488 8.49997 10.861C8.49997 9.97321 9.21777 9.2554 10.1056 9.2554C10.9933 9.2554 11.7112 9.97321 11.7112 10.861C11.711 11.7488 10.9934 12.4666 10.1056 12.4666Z"
          fill="#3B69E4"
        />
      </svg>
    ),
    linkUrl: "get-special-offer",
  },
];

export const sideBarIntegrations = [
  {
    id: 13,
    linkName: "parachute-integrations",

    image: (
      <svg
        width="11"
        height="14"
        viewBox="0 0 11 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.36306 13.4258C3.36306 13.69 3.57927 13.9302 3.86746 13.9302H7.10973C7.37393 13.9302 7.61412 13.714 7.61412 13.4258V11.8646H3.36292L3.36306 13.4258Z"
          fill="#3B69E4"
        />
        <path
          d="M7.73397 10.3275H3.21859C2.93038 10.3275 2.69019 10.5677 2.69019 10.8559C2.69019 11.1441 2.93039 11.3843 3.21859 11.3843H7.75785C8.04606 11.3843 8.28626 11.1441 8.28626 10.8559C8.26216 10.5677 8.02196 10.3275 7.73375 10.3275H7.73397Z"
          fill="#3B69E4"
        />
        <path
          d="M5.47607 0C2.44973 0 0 2.44983 0 5.47607C0 5.64418 9.34095e-08 5.78828 0.0240009 5.95639C0.50432 5.57209 1.12882 5.33197 1.80132 5.33197C2.49784 5.33197 3.14634 5.59617 3.65066 6.02848C4.15506 5.59617 4.77948 5.33197 5.5 5.33197C6.19651 5.33197 6.84501 5.59617 7.34934 6.02848C7.85374 5.59617 8.47816 5.33197 9.19868 5.33197C9.87118 5.33197 10.4716 5.57217 10.976 5.95639C11 5.78829 11 5.64418 11 5.47607C10.952 2.44998 8.50226 0 5.47592 0H5.47607Z"
          fill="#3B69E4"
        />
        <path
          d="M3.21809 9.8233H3.2661L0.528059 6.2206C0.45596 6.2686 0.407958 6.3167 0.335953 6.3647L0.119751 6.5328L2.71376 9.96735C2.85786 9.87125 3.02597 9.82325 3.21816 9.82325L3.21809 9.8233Z"
          fill="#3B69E4"
        />
        <path
          d="M10.4233 6.2206L7.6853 9.8233H7.7093C7.87741 9.8233 8.04552 9.8713 8.18962 9.9434L10.7836 6.50886L10.5674 6.34075C10.5675 6.29265 10.4954 6.24465 10.4234 6.22065L10.4233 6.2206Z"
          fill="#3B69E4"
        />
        <path
          d="M3.96254 6.38875L3.62633 6.67695L3.50623 6.55685L4.25075 9.82324L4.75515 9.82334L3.96254 6.38875Z"
          fill="#3B69E4"
        />
        <path
          d="M7.32523 6.67682L7.01302 6.38861L6.98902 6.36461L6.19641 9.82329H6.70081L7.44533 6.5569L7.32523 6.67682Z"
          fill="#3B69E4"
        />
      </svg>
    ),
    linkUrl: "parachute-integrations",
  },
  {
    id: 14,
    linkName: "marketplace-integration",

    image: (
      <svg
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.67772 4.18796L8.87171 1.2044C8.84695 1.11326 8.80877 1.02718 8.76281 0.946123C8.83104 0.848513 8.87171 0.730248 8.87171 0.602139C8.87171 0.269515 8.60197 0 8.26957 0H1.37184C1.03927 0 0.769852 0.269639 0.769852 0.602139C0.769852 0.768551 0.837162 0.919105 0.946504 1.0282C0.901614 1.10769 0.864504 1.19235 0.840319 1.28166L0.0344088 4.26521C-0.0746847 4.66915 0.083798 5.01007 0.394301 5.09128V11H9.36828V4.99441C9.64359 4.89007 9.78027 4.56845 9.67772 4.18796ZM7.09253 1.70436L7.77354 4.22517C7.784 4.26441 7.79966 4.30202 7.8146 4.33975C7.51046 4.8377 7.06857 5.05394 6.58708 4.93419C6.1644 4.82932 5.86948 4.50495 5.8631 4.27488V1.82054C5.8631 1.78082 5.85711 1.74251 5.85124 1.70438H7.09253V1.70436ZM1.93861 4.30254L2.6404 1.70436H3.82208C3.81609 1.74251 3.81025 1.78079 3.81025 1.82051V4.32099L3.80874 4.32024C3.52776 4.85172 3.09348 5.08892 2.61781 4.97073C2.22351 4.87294 1.94863 4.56848 1.94863 4.35663H1.91898C1.92526 4.33839 1.93357 4.32111 1.93861 4.30254ZM6.83139 10.3867H1.98987V8.45018H2.85871C2.94198 8.26225 3.12942 8.13081 3.34835 8.13081C3.56694 8.13081 3.75463 8.26225 3.83774 8.45018H5.60603C5.63089 8.17734 5.85778 7.96298 6.13714 7.96298C6.41624 7.96298 6.64323 8.17734 6.66796 8.45018H6.83147V10.3867H6.83139ZM2.98674 7.753C2.98674 7.5446 3.15594 7.37548 3.36443 7.37548C3.57293 7.37548 3.74197 7.54463 3.74197 7.753C3.74197 7.96169 3.57293 8.13081 3.36443 8.13081C3.15594 8.13081 2.98674 7.96169 2.98674 7.753ZM5.7755 7.58517C5.7755 7.37677 5.94457 7.20758 6.15304 7.20758C6.36159 7.20758 6.53066 7.3768 6.53066 7.58517C6.53066 7.79378 6.36156 7.96298 6.15304 7.96298C5.94457 7.96298 5.7755 7.79378 5.7755 7.58517ZM8.90357 10.5353H8.30968V6.61702H1.49292V10.5353H0.859085V5.11666L0.995521 5.11929C1.3184 5.12583 1.65518 4.88321 1.83757 4.54601C1.94177 4.7981 2.23368 5.03518 2.58074 5.1213C2.6485 5.13808 2.74316 5.15454 2.85416 5.15454C3.12765 5.15454 3.49992 5.05394 3.8114 4.613C3.81726 5.03321 4.16068 5.22247 4.58492 5.22247H5.08841C5.45429 5.22247 5.75882 4.96807 5.84015 4.62709C5.99001 4.8332 6.25172 5.01077 6.54999 5.08464C6.6225 5.10271 6.72409 5.12029 6.84282 5.12029C7.14329 5.12029 7.55458 5.00649 7.89357 4.50341C8.07957 4.82236 8.40466 5.048 8.7165 5.04191L8.90357 5.03829V10.5353Z"
          fill="#3B69E4"
        />
      </svg>
    ),
    linkUrl: "marketplace-integration",
  },
];

//for changing side bar active item  when we click to each item

// export const sideBarList = [
//   {
//     linkName: "Main Menu",
//     id: 1,
//   },

//   {
//     id: 2,
//     linkName: "Balance System",
//   },

//   {
//     id: 3,
//     linkName: "Orders",
//   },
//   {
//     id: 4,
//     linkName: "Courier Request",
//   },
//   {
//     id: 5,
//     linkName: "Stock",
//   },

//   {
//     id: 6,
//     linkName: "Invoices",
//   },

//   {
//     id: 7,
//     linkName: "Site Usage",
//   },
//   {
//     id: 8,
//     linkName: "Buy for me ",
//   },
//   {
//     id: 9,
//     linkName: "Share and Earn",
//   },
//   {
//     id: 10,
//     linkName: "Inventory",
//   },
//   {
//     id: 11,
//     linkName: "Cargo Companies",
//   },
//   {
//     id: 12,
//     linkName: "Get Special Offer",
//   },
//   ,
//   {
//     id: 13,
//     linkName: "Parachute Integrations",
//   },
//   {
//     id: 14,
//     linkName: "Markterplace Integration",
//   }
// ];
