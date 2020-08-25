import React from "react";

const getViewBox = (name) => {
  switch (name) {
    case "phone":
      return "0 0 513.64 513.64";

    case "mail":
      return "0 0 24 24";

    case "location":
      return "0 0 24 24";

    case "facebook":
      return "0 0 24 24";

    case "instagram":
      return "0 0 24 24";

    case "shareIcon":
      return "0 0 24 24";

    case "clock":
      return "0 0 32 32";

    case "copyright":
      return "0 0 16 16";

    case "passwordIcon":
      return "0 0 512 512";

    case "users":
      return "0 0 512 512";

    case "right-arrow":
      return "0 0 24 24";

    case "down-arrow":
      return "0 0 24 24";

    case "calendar":
      return "0 0 50 50";

    case "luggage":
      return "0 0 60 52";

    case "info":
      return "0 0 32 32";

    case "quotes":
      return "0 0 32 32";

    case "quotes-1":
      return "0 0 32 32";

    case "safety":
      return "0 0 512 512";

    case "star":
      return "0 0 512 512";

    case "dollarSign":
      return "0 0 477.867 477.867";

    case "rightCheck":
      return "0 0 512 512";

    case "cancel":
      return "0 0 512.001 512.001";

    case "satisfaction":
      return "0 0 40 40";

    case "wifi":
      return "0 0 502.181 502.181";

    case "qualityPhone":
      return "0 0 30 30";

    case "handWash":
      return "0 0 512 512";

    case "chauffeur":
      return "0 0 512 512";

    case "sedan":
      return "0 0 98.967 98.967";

    case "charger":
      return "0 0 512 512";

    default:
      return "0 0 24 24";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "chauffeur":
      return (
        <path
          {...props}
          d="m464.383 480.435-4.402-49.178c-3.033-33.897-27.398-61.72-60.63-69.234l-77.656-17.559-14.346-13.845c-.804-8.031-.61-16.133.583-24.12l1.98-13.249c24.118-22.494 35.898-42.536 35.898-60.935 0-2.333-.095-4.616-.289-6.874-.088-.895-.168-1.842-.24-2.837 14.707-2.913 25.959-15.878 26.148-31.384.107-8.727-3.213-16.953-9.35-23.163-2.19-2.216-4.643-4.077-7.287-5.554 6.548-7.054 10.208-14.922 10.208-23.212 0-3.822-.753-7.774-2.143-11.488 22.898-14.398 34.946-31.746 34.946-50.467 0-15.788-8.655-30.982-25.029-43.94-3.245-2.57-7.963-2.022-10.535 1.224-2.571 3.246-2.023 7.961 1.225 10.531 8.822 6.983 19.34 18.234 19.34 32.186 0 14.008-11.27 28.202-31.787 40.101h-189.367c-19.384-11.629-30.455-26.171-30.455-40.101 0-33.21 58.845-62.342 125.929-62.342 29.312 0 58.066 5.467 80.967 15.394 3.802 1.646 8.217-.097 9.865-3.895 1.648-3.799-.097-8.213-3.896-9.86-24.744-10.728-55.618-16.634-86.936-16.634-77.708 0-140.929 34.693-140.929 77.335 0 18.394 11.763 36.021 33.31 50.18-1.665 3.835-2.505 7.774-2.505 11.775 0 8.578 3.925 16.703 10.918 23.944-2.156 1.339-4.17 2.944-6.001 4.797-6.137 6.209-9.457 14.435-9.349 23.162.19 15.508 11.445 28.474 26.155 31.385-.075 1.048-.159 2.046-.251 2.986-.188 2.125-.282 4.395-.282 6.749 0 18.317 11.669 38.256 35.55 60.61l1.99 13.314c1.234 8.256 1.4 16.634.498 24.928l-13.766 12.783-79.827 18.066c-33.223 7.52-57.581 35.341-60.614 69.23l-4.403 49.191c-.724 8.079 2.004 16.147 7.482 22.135 5.483 5.993 13.289 9.43 21.416 9.43h87.175c4.143 0 7.5-3.356 7.5-7.497 0-4.14-3.357-7.497-7.5-7.497h-15.853v-58.541c0-4.14-3.357-7.497-7.5-7.497s-7.5 3.356-7.5 7.497v58.541h-56.322c-3.984 0-7.659-1.617-10.347-4.555-2.684-2.932-3.966-6.725-3.612-10.681l4.403-49.19c2.451-27.385 22.138-49.866 48.987-55.943l74.817-16.932 12.958 45.579c.669 2.351 2.442 4.23 4.753 5.032.802.279 1.634.415 2.461.415 1.556 0 3.094-.483 4.389-1.417l16.637-11.995 5.529 14.467-22.777 85.219h-16.11c-4.143 0-7.5 3.356-7.5 7.497 0 4.14 3.357 7.497 7.5 7.497h236.881c8.127 0 15.933-3.437 21.416-9.43 5.478-5.986 8.205-14.054 7.482-22.134zm-195.091-110.977 30.207-25.574 10.022 9.672-10.513 37.326zm-12.163-9.351-35.71-30.233c.604-7.333.488-14.709-.349-22.021 10.227 7.907 22.89 12.243 35.812 12.243h.23c12.802 0 25.329-4.242 35.479-11.976-.844 7.384-.954 14.835-.328 22.241zm-93.36-227.677h184.798c.919 2.216 1.434 4.619 1.434 6.861 0 18.854-40.159 39.941-93.904 39.941-25.744 0-50.107-4.838-68.601-13.621-15.965-7.583-25.496-17.422-25.496-26.32 0-2.247.594-4.545 1.769-6.861zm192.663 58.607c-.092 7.472-4.966 13.846-11.672 16.208-.057-10.074.311-21.645 1.068-32.449 2.063.875 3.956 2.155 5.58 3.799 3.297 3.334 5.08 7.753 5.024 12.442zm-198.866-.028c-.058-4.688 1.726-9.106 5.022-12.442 1.625-1.644 3.517-2.924 5.581-3.799.757 10.795 1.127 22.36 1.07 32.45-6.706-2.361-11.581-8.736-11.673-16.209zm25.623 41.304c0-1.917.075-3.746.217-5.361 1.099-11.203 1.108-29.238.142-46.668 19.293 8.666 44.72 13.94 72.548 13.94 28.745 0 54.924-5.647 74.408-14.857-1.016 17.693-1.029 36.133.082 47.445.149 1.743.226 3.595.226 5.502 0 16.774-15.987 38.569-46.246 63.042-7.736 6.287-17.48 9.746-27.481 9.746-.057 0-.115 0-.172 0-9.987 0-19.748-3.467-27.51-9.781-30.234-24.447-46.214-46.235-46.214-63.008zm32.038 158.586-10.712-37.679 10.145-9.421 30.307 25.658zm41.902-11.724 12.538 9.04-6.144 15.669h-12.998l-5.977-15.638zm-26.89 117.832 20.883-78.13h11.772l21.101 78.13zm215.592-4.555c-2.688 2.937-6.362 4.555-10.347 4.555h-56.322v-58.541c0-4.14-3.357-7.497-7.5-7.497s-7.5 3.356-7.5 7.497v58.541h-64.63l-23.008-85.195 5.702-14.542 16.707 12.046c1.295.934 2.833 1.417 4.389 1.417.83 0 1.665-.138 2.47-.419 2.313-.806 4.085-2.69 4.749-5.047l12.697-45.082 72.803 16.462c26.857 6.072 46.549 28.555 49 55.946l4.402 49.178c.354 3.955-.928 7.749-3.612 10.681z m236.814 271.858h40.372c4.143 0 7.5-3.356 7.5-7.497 0-4.14-3.357-7.497-7.5-7.497h-40.372c-4.143 0-7.5 3.356-7.5 7.497 0 4.14 3.358 7.497 7.5 7.497z m223.5 73.969v14c0 4.14 3.357 7.497 7.5 7.497s7.5-3.356 7.5-7.497v-14c0-4.14-3.357-7.497-7.5-7.497s-7.5 3.357-7.5 7.497z m248.5 48.981v14c0 4.14 3.357 7.497 7.5 7.497s7.5-3.356 7.5-7.497v-14c0-4.14-3.357-7.497-7.5-7.497s-7.5 3.356-7.5 7.497z m273.5 73.969v14c0 4.14 3.357 7.497 7.5 7.497s7.5-3.356 7.5-7.497v-14c0-4.14-3.357-7.497-7.5-7.497s-7.5 3.357-7.5 7.497z m298.5 48.981v14c0 4.14 3.357 7.497 7.5 7.497s7.5-3.356 7.5-7.497v-14c0-4.14-3.357-7.497-7.5-7.497s-7.5 3.356-7.5 7.497z m198.5 48.981v14c0 4.14 3.357 7.497 7.5 7.497s7.5-3.356 7.5-7.497v-14c0-4.14-3.357-7.497-7.5-7.497s-7.5 3.356-7.5 7.497z"
        />
      );

    case "charger":
      return (
        <path
          {...props}
          d="m422.755 269.116v-38.655c28.2-.759 50.911-23.951 50.911-52.37v-32.382c9.001-.049 16.31-7.385 16.31-16.402v-38.89c0-9.047-7.356-16.406-16.399-16.406h-15.512v-64.011c0-5.522-4.478-10-10-10s-10 4.478-10 10v64.011h-50.619v-64.011c0-5.522-4.478-10-10-10s-10 4.478-10 10v64.011h-15.484c-9.059 0-16.428 7.359-16.428 16.406v38.891c0 9.007 7.306 16.336 16.311 16.4v32.383c0 28.42 22.711 51.612 50.911 52.37v38.655c-44.228 4.989-78.718 42.653-78.718 88.234 0 45.596 34.49 83.271 78.718 88.262v7.887c0 21.229-17.248 38.5-38.448 38.5h-178.559c-21.2 0-38.448-17.271-38.448-38.5v-28.295h89.416c15.116 0 27.415-12.307 27.415-27.433v-118.09c0-5.522-4.478-10-10-10s-10 4.478-10 10v118.09c0 4.029-3.395 7.433-7.414 7.433h-198.804c-4.019 0-7.414-3.403-7.414-7.433v-326.005c0-4.029 3.395-7.433 7.414-7.433h28.882 141.011 28.91c4.019 0 7.414 3.403 7.414 7.433v118.117c0 5.522 4.477 10 10 10s10-4.478 10-10v-118.117c0-15.126-12.298-27.433-27.415-27.433h-18.91v-12.167c.001-17.736-14.418-32.166-32.142-32.166h-96.726c-17.723 0-32.142 14.43-32.142 32.166v12.167h-18.882c-15.116 0-27.414 12.307-27.414 27.433v326.007c0 15.126 12.298 27.433 27.414 27.433h89.387v28.294c0 32.257 26.22 58.5 58.448 58.5h178.558c32.229 0 58.448-26.243 58.448-58.5v-7.887c44.244-4.989 78.745-42.666 78.745-88.263 0-45.582-34.501-83.246-78.745-88.234zm-345.959-236.95c0-6.708 5.447-12.166 12.142-12.166h96.726c6.696 0 12.143 5.458 12.143 12.166v12.167h-121.011zm278.737 61.845h114.442v31.703h-114.442zm16.311 84.08v-32.377h81.822v32.377c0 17.869-14.504 32.406-32.332 32.406h-17.159c-17.827 0-32.331-14.537-32.331-32.406zm40.911 248.09c-37.891 0-68.718-30.877-68.718-68.83 0-37.938 30.827-68.802 68.718-68.802 37.906 0 68.745 30.864 68.745 68.802 0 37.953-30.839 68.83-68.745 68.83z m429.263 347.351h-16.874l13.339-26.818c2.46-4.944.445-10.947-4.5-13.406-4.945-2.461-10.948-.445-13.406 4.5l-20.528 41.271c-3.242 6.532 1.679 14.453 8.974 14.453h16.867l-13.33 26.854c-2.456 4.947-.437 10.948 4.511 13.403 1.429.709 2.945 1.045 4.438 1.045 3.679 0 7.219-2.037 8.965-5.556l20.501-41.3c.186-.375.343-.77.481-1.165 2.214-6.371-2.672-13.281-9.438-13.281z m62.463 86.342c-5.523 0-10 4.478-10 10v276.854c0 5.522 4.477 10 10 10h149.704c5.523 0 10-4.478 10-10v-276.854c0-5.522-4.477-10-10-10zm139.704 276.854h-129.704v-47.974h129.704zm0-67.973h-129.704v-44.573h129.704zm0-64.573h-129.704v-50.468h129.704zm0-70.467h-129.704v-53.841h129.704z m254.131 224.783c-5.523 0-10 4.478-10 10v.028c0 5.522 4.477 9.986 10 9.986s10-4.492 10-10.015-4.477-9.999-10-9.999z"
        />
      );

    case "sedan":
      return (
        <path
          {...props}
          d="M17.275,52.156c-4.124,0-7.468,3.343-7.468,7.468c0,0.318,0.026,0.631,0.066,0.938c0.463,3.681,3.596,6.528,7.401,6.528
			c3.908,0,7.112-3.004,7.437-6.83c0.017-0.209,0.031-0.422,0.031-0.637C24.743,55.499,21.4,52.156,17.275,52.156z M13.537,56.81
			l1.522,1.523c-0.118,0.203-0.211,0.422-0.271,0.656h-2.146C12.752,58.177,13.063,57.435,13.537,56.81z M12.632,60.282h2.163
			c0.061,0.23,0.151,0.448,0.271,0.648l-1.526,1.525C13.067,61.835,12.749,61.093,12.632,60.282z M16.629,64.263
			c-0.809-0.113-1.544-0.43-2.166-0.899l1.518-1.519c0.2,0.117,0.419,0.203,0.648,0.263V64.263z M16.629,57.14
			c-0.235,0.062-0.455,0.154-0.66,0.275l-1.521-1.521c0.625-0.475,1.367-0.789,2.181-0.902V57.14z M17.922,54.99
			c0.814,0.113,1.557,0.429,2.181,0.903l-1.52,1.521c-0.204-0.121-0.426-0.213-0.66-0.275L17.922,54.99L17.922,54.99z
			 M17.922,64.261v-2.152c0.23-0.061,0.447-0.146,0.647-0.264l1.519,1.519C19.466,63.833,18.73,64.148,17.922,64.261z
			 M21.014,62.462l-1.531-1.533c0.12-0.201,0.217-0.416,0.278-0.646h2.146C21.793,61.091,21.488,61.839,21.014,62.462z
			 M19.764,58.989c-0.061-0.234-0.153-0.453-0.271-0.656l1.524-1.523c0.471,0.625,0.782,1.367,0.894,2.18H19.764z M79.284,52.156c-4.124,0-7.468,3.343-7.468,7.468c0,0.318,0.026,0.631,0.066,0.938c0.463,3.681,3.596,6.528,7.4,6.528
			c3.908,0,7.112-3.004,7.438-6.83c0.017-0.209,0.031-0.422,0.031-0.637C86.753,55.499,83.409,52.156,79.284,52.156z M75.546,56.81
			l1.521,1.523c-0.118,0.203-0.211,0.422-0.271,0.656H74.65C74.761,58.177,75.072,57.435,75.546,56.81z M74.642,60.282h2.163
			c0.061,0.23,0.151,0.448,0.271,0.648l-1.525,1.525C75.076,61.835,74.757,61.093,74.642,60.282z M78.638,64.263
			c-0.809-0.113-1.544-0.43-2.166-0.899l1.518-1.519c0.2,0.117,0.419,0.203,0.648,0.263V64.263z M78.638,57.14
			c-0.235,0.062-0.455,0.154-0.66,0.275l-1.521-1.521c0.625-0.475,1.366-0.789,2.181-0.902V57.14z M79.932,54.99
			c0.814,0.113,1.557,0.429,2.181,0.903l-1.521,1.521c-0.204-0.121-0.426-0.215-0.66-0.275V54.99z M79.932,64.261v-2.152
			c0.23-0.061,0.447-0.146,0.647-0.264l1.519,1.519C81.476,63.833,80.739,64.148,79.932,64.261z M83.023,62.462l-1.531-1.531
			c0.12-0.202,0.218-0.416,0.278-0.647h2.146C83.802,61.091,83.498,61.839,83.023,62.462z M81.773,58.989
			c-0.061-0.234-0.152-0.453-0.271-0.656l1.523-1.523c0.472,0.625,0.782,1.367,0.895,2.18H81.773z M97.216,48.29v-5.526c0-0.889-0.646-1.642-1.524-1.779c-2.107-0.33-5.842-0.953-7.52-1.47
			c-2.406-0.742-11.702-4.678-14.921-5.417c-3.22-0.739-17.738-4.685-31.643,0.135c-2.353,0.815-12.938,5.875-19.162,8.506
			c-1.833,0.04-19.976,3.822-20.942,6.414c-0.966,2.593-1.269,3.851-1.447,4.509c-0.178,0.658,0,3.807,1.348,6
			c1.374,0.777,4.019,1.299,7.077,1.649c-0.035-0.187-0.073-0.371-0.097-0.56c-0.053-0.404-0.078-0.773-0.078-1.125
			c0-4.945,4.022-8.969,8.968-8.969s8.968,4.023,8.968,8.969c0,0.254-0.017,0.506-0.036,0.754c-0.047,0.555-0.147,1.094-0.292,1.613
			c0.007,0,0.024,0,0.024,0l44.516-0.896c-0.02-0.115-0.046-0.229-0.061-0.346c-0.053-0.402-0.078-0.772-0.078-1.125
			c0-4.945,4.022-8.968,8.968-8.968c4.946,0,8.969,4.022,8.969,8.968c0,0.019-0.002,0.035-0.003,0.053l0.19-0.016l7.611-1.433
			c0,0,2.915-1.552,2.915-5.822C98.967,49.56,97.216,48.29,97.216,48.29z M53.057,43.051L36.432,43.56
			c0.306-2.491-1.169-3.05-1.169-3.05c6.609-5.999,19.929-6.202,19.929-6.202L53.057,43.051z M71.715,42.29l-15.15,0.509l1.373-8.49
			c7.83-0.102,12.303,1.626,12.303,1.626l2.237,3.61L71.715,42.29z M80.256,42.238h-4.221l-4.22-5.795
			c3.166,1.26,5.7,2.502,7.209,3.287C79.94,40.206,80.44,41.223,80.256,42.238z"
        />
      );

    case "phone":
      return (
        <path
          {...props}
          d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"
        />
      );

    case "satisfaction":
      return (
        <path
          {...props}
          d="M35.27,21.108c0.202-0.637,0.23-1.298,0.23-1.915c0-2.065-1.362-2.511-2.387-2.667c-0.836-0.128-3.783-0.217-5.537-0.261c0.097-0.121,0.203-0.246,0.311-0.376c0.911-1.085,2.289-2.726,2.146-5.726c-0.088-1.812-0.604-3.131-1.536-3.922c-0.896-0.764-1.854-0.754-2.099-0.738c-1.809,0.021-2.07,1.942-2.262,3.345c-0.123,0.912-0.263,1.945-0.701,2.281c-1.677,1.288-3.492,2.835-4.236,4.528c-0.79,1.794-1.599,3.28-3.527,3.28h-0.967v-2.402H4.5V34.05h10.206v-2.178c2.203,0.067,3.171,0.498,4.009,1.206c1.274,1.078,2.385,1.422,4.573,1.422c2.79,0,6.488-0.076,8.27-0.438c0.597-0.121,1.391-0.442,1.775-1.272c0.217-0.47,0.277-0.962,0.307-1.338c0.008-0.102,0.01-0.209,0.012-0.312c0.002-0.111,0.006-0.3,0.023-0.409c0.02-0.02,0.039-0.039,0.06-0.063c0.306-0.341,0.654-0.73,0.823-1.338c0.164-0.579,0.186-1.171,0.186-1.668c0-0.421-0.106-0.734-0.201-1.009c-0.025-0.075-0.049-0.145-0.07-0.215c0.035-0.073,0.117-0.188,0.17-0.265c0.109-0.158,0.234-0.337,0.314-0.542c0.263-0.668,0.284-1.377,0.284-1.991c0-0.272-0.018-0.676-0.163-1.067c-0.088-0.236-0.21-0.404-0.33-0.533c0.018-0.016,0.035-0.033,0.052-0.051C35.047,21.736,35.172,21.416,35.27,21.108z M13.212,32.567H5.994V18.019h7.218V32.567z M33.846,20.66c-0.064,0.201-0.102,0.274-0.117,0.294c-0.019,0.02-0.064,0.056-0.104,0.091c-0.219,0.186-0.586,0.494-0.595,0.991c-0.005,0.289,0.122,0.566,0.36,0.783c0.05,0.047,0.099,0.089,0.146,0.128c0.125,0.105,0.127,0.111,0.139,0.143c0.063,0.168,0.07,0.394,0.07,0.551c0,0.479-0.014,1.023-0.182,1.452c-0.018,0.045-0.1,0.163-0.152,0.239c-0.227,0.325-0.566,0.813-0.405,1.416c0.038,0.143,0.082,0.269,0.12,0.38c0.073,0.215,0.122,0.358,0.122,0.534c0,0.399-0.017,0.862-0.13,1.272c-0.071,0.253-0.219,0.432-0.471,0.714c-0.064,0.049-0.18,0.145-0.27,0.307c-0.207,0.372-0.215,0.806-0.222,1.157c-0.001,0.085-0.003,0.166-0.008,0.226c-0.02,0.252-0.057,0.576-0.175,0.831c-0.037,0.081-0.148,0.324-0.72,0.439c-1.292,0.264-4.123,0.408-7.968,0.408c-2.014,0-2.713-0.314-3.605-1.068c-1.069-0.902-2.316-1.48-4.977-1.559v-9.969h0.967c3.063,0,4.21-2.608,4.894-4.167c0.611-1.391,2.256-2.778,3.783-3.951c0.922-0.707,1.099-2.002,1.269-3.255c0.085-0.622,0.172-1.265,0.349-1.676c0.154-0.358,0.289-0.385,0.463-0.385c0.028,0,0.055-0.002,0.082-0.004c0.005-0.002,0.52-0.034,1.016,0.385c0.599,0.507,0.949,1.498,1.014,2.865c0.115,2.424-0.948,3.69-1.802,4.709c-0.53,0.631-1.032,1.228-1.103,1.968c-0.02,0.206,0.047,0.409,0.186,0.563c0.139,0.155,0.334,0.245,0.543,0.249c2.031,0.041,5.693,0.144,6.521,0.269c0.91,0.139,1.119,0.365,1.119,1.202C34.006,19.692,33.986,20.216,33.846,20.66z"
        />
      );

    case "dollarSign":
      return (
        <g>
          <path
            {...props}
            d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933C477.726,107.033,370.834,0.141,238.933,0z M238.933,443.733c-113.108,0-204.8-91.692-204.8-204.8s91.692-204.8,204.8-204.8s204.8,91.692,204.8,204.8C443.611,351.991,351.991,443.611,238.933,443.733z M256,221.867h-34.133c-18.851,0-34.133-15.282-34.133-34.133v-17.067c0-18.851,15.282-34.133,34.133-34.133H256c18.851,0,34.133,15.282,34.133,34.133c0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067c0-37.703-30.564-68.267-68.267-68.267V85.333c0-9.426-7.641-17.067-17.067-17.067s-17.067,7.641-17.067,17.067V102.4c-37.703,0-68.267,30.564-68.267,68.267v17.067c0,37.703,30.564,68.267,68.267,68.267H256c18.851,0,34.133,15.282,34.133,34.133V307.2c0,18.851-15.282,34.133-34.133,34.133h-34.133c-18.851,0-34.133-15.282-34.133-34.133c0-9.426-7.641-17.067-17.067-17.067S153.6,297.774,153.6,307.2c0,37.703,30.564,68.267,68.267,68.267v17.067c0,9.426,7.641,17.067,17.067,17.067S256,401.959,256,392.533v-17.067c37.703,0,68.267-30.564,68.267-68.267v-17.067C324.267,252.431,293.703,221.867,256,221.867z"
          />
        </g>
      );

    case "rightCheck":
      return (
        <g>
          <path
            {...props}
            d="M437.019,74.98C388.667,26.629,324.38,0,256,0C187.619,0,123.331,26.629,74.98,74.98C26.628,123.332,0,187.62,0,256s26.628,132.667,74.98,181.019C123.332,485.371,187.619,512,256,512c68.38,0,132.667-26.629,181.019-74.981C485.371,388.667,512,324.38,512,256S485.371,123.333,437.019,74.98z M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z M378.305,173.859c-5.857-5.856-15.355-5.856-21.212,0.001L224.634,306.319l-69.727-69.727c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213l80.333,80.333c2.929,2.929,6.768,4.393,10.606,4.393c3.838,0,7.678-1.465,10.606-4.393l143.066-143.066C384.163,189.215,384.163,179.717,378.305,173.859z"
          />
        </g>
      );

    case "safety":
      return (
        <path
          {...props}
          d="M256,512a73.79,73.79,0,0,1-38.09-10.6c-54-32.44-179.54-123-179.54-263.17V110.67c0-25.08,18.92-45.47,43.08-46.43,34.89-1.38,100-10,144.4-52.51h0c16.34-15.65,44-15.65,60.3,0,44.36,42.48,109.51,51.13,144.4,52.51,24.16,1,43.08,21.35,43.08,46.43V238.24c0,140.15-125.56,230.73-179.54,263.17A73.85,73.85,0,0,1,256,512Zm0-486.45a18,18,0,0,0-12.43,4.68h0C193.11,78.56,121,88.31,82.46,89.83,72.09,90.24,64,99.4,64,110.67V238.24c0,127.07,116.87,211,167.13,241.23a48.25,48.25,0,0,0,49.81,0C331.16,449.27,448,365.31,448,238.24V110.67c0-11.28-8.12-20.43-18.49-20.85C391,88.31,318.89,78.56,268.43,30.23A18,18,0,0,0,256,25.55Z M256,179.18A76.81,76.81,0,1,1,179.19,256,76.9,76.9,0,0,1,256,179.18m0-25.6A102.42,102.42,0,1,0,358.42,256,102.42,102.42,0,0,0,256,153.57Z M250.88,294.4a12.8,12.8,0,0,1-8.2-3L222.2,274.36a12.8,12.8,0,1,1,16.39-19.67l9,7.5,23-38.39a12.8,12.8,0,1,1,22,13.18l-30.72,51.21a12.8,12.8,0,0,1-8.84,6A12.34,12.34,0,0,1,250.88,294.4Z"
        />
      );

    case "star":
      return (
        <path
          {...props}
          d="M415.29,511.82a5.71,5.71,0,0,1-3.31-1.06L256,399.34,100,510.77a5.69,5.69,0,0,1-8.82-6l44.73-178.92L1.67,191.58a5.69,5.69,0,0,1,4-9.71h178.1L250.67,3.51c1.67-4.44,9-4.44,10.66,0l66.88,178.35h178.1a5.69,5.69,0,0,1,4,9.71L376.08,325.83,420.8,504.75a5.69,5.69,0,0,1-5.52,7.07ZM256,386.67a5.71,5.71,0,0,1,3.31,1.06L406,492.52,364.26,325.47a5.68,5.68,0,0,1,1.49-5.4L492.58,193.24H324.27a5.69,5.69,0,0,1-5.33-3.69L256,21.71,193.06,189.56a5.69,5.69,0,0,1-5.33,3.69H19.42L146.24,320.07a5.68,5.68,0,0,1,1.49,5.4L106,492.52l146.72-104.8A5.71,5.71,0,0,1,256,386.67Z"
        />
      );

    case "mail":
      return (
        <path
          {...props}
          d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
        />
      );

    case "location":
      return (
        <path
          {...props}
          d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
        />
      );

    case "facebook":
      return (
        <path
          {...props}
          d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
        />
      );

    case "instagram":
      return (
        <path
          {...props}
          d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"
        />
      );

    case "shareIcon":
      return (
        <path
          {...props}
          d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.778v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z"
        />
      );

    case "clock":
      return (
        <g>
          <path
            {...props}
            d="M16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,16,25Z"
          />
          ,
          <polygon points="15 15 9.33 15 9.33 17 17 17 17 8.83 15 8.83 15 15" />
        </g>
      );

    case "copyright":
      return (
        <path
          {...props}
          d="M8 1.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z M9.9 10.3c-0.5 0.4-1.2 0.7-1.9 0.7-1.7 0-3-1.3-3-3s1.3-3 3-3c0.8 0 1.6 0.3 2.1 0.9l1.1-1.1c-0.8-0.8-2-1.3-3.2-1.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.1 0 2-0.4 2.8-1l-0.9-1.2z"
        />
      );

    case "passwordIcon":
      return (
        <path
          {...props}
          d="M230.792,354.313l-6.729,60.51c-0.333,3.01,0.635,6.031,2.656,8.292c2.021,2.26,4.917,3.552,7.948,3.552h42.667c3.031,0,5.927-1.292,7.948-3.552c2.021-2.26,2.99-5.281,2.656-8.292l-6.729-60.51c10.927-7.948,17.458-20.521,17.458-34.313c0-23.531-19.135-42.667-42.667-42.667S213.333,296.469,213.333,320C213.333,333.792,219.865,346.365,230.792,354.313zM256,298.667c11.76,0,21.333,9.573,21.333,21.333c0,8.177-4.646,15.5-12.125,19.125c-4.073,1.979-6.458,6.292-5.958,10.781l6.167,55.427h-18.833l6.167-55.427c0.5-4.49-1.885-8.802-5.958-10.781c-7.479-3.625-12.125-10.948-12.125-19.125C234.667,308.24,244.24,298.667,256,298.667z M437.333,192h-32v-42.667C405.333,66.99,338.344,0,256,0S106.667,66.99,106.667,149.333V192h-32C68.771,192,64,196.771,64,202.667v266.667C64,492.865,83.135,512,106.667,512h298.667C428.865,512,448,492.865,448,469.333V202.667C448,196.771,443.229,192,437.333,192z M128,149.333c0-70.583,57.417-128,128-128s128,57.417,128,128V192h-21.333v-42.667c0-58.813-47.854-106.667-106.667-106.667S149.333,90.521,149.333,149.333V192H128V149.333z M341.333,149.333V192H170.667v-42.667C170.667,102.281,208.948,64,256,64S341.333,102.281,341.333,149.333z M426.667,469.333c0,11.76-9.573,21.333-21.333,21.333H106.667c-11.76,0-21.333-9.573-21.333-21.333v-256h341.333V469.333z"
        />
      );

    case "users":
      return (
        <path
          {...props}
          d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40c59.551,0,108,48.448,108,108S315.551,256,256,256z"
        />
      );

    case "right-arrow":
      return (
        <path
          {...props}
          d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
        />
      );

    case "down-arrow":
      return (
        <path
          {...props}
          d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"
        />
      );

    case "calendar":
      return (
        <path
          {...props}
          d="M 12 0 C 10.90625 0 10 0.90625 10 2 L 10 4 L 4 4 C 3.476563 4 2.945313 4.191406 2.570313 4.570313 C 2.191406 4.945313 2 5.476563 2 6 L 2 46 C 2 46.523438 2.191406 47.054688 2.570313 47.433594 C 2.945313 47.808594 3.476563 48 4 48 L 46 48 C 46.523438 48 47.054688 47.808594 47.433594 47.433594 C 47.808594 47.054688 48 46.523438 48 46 L 48 6 C 48 5.476563 47.808594 4.945313 47.433594 4.570313 C 47.054688 4.191406 46.523438 4 46 4 L 40 4 L 40 2 C 40 0.90625 39.09375 0 38 0 L 36 0 C 34.90625 0 34 0.90625 34 2 L 34 4 L 16 4 L 16 2 C 16 0.90625 15.09375 0 14 0 Z M 12 2 L 14 2 L 14 8 L 12 8 Z M 36 2 L 38 2 L 38 8 L 36 8 Z M 4 6 L 10 6 L 10 8 C 10 9.09375 10.90625 10 12 10 L 14 10 C 15.09375 10 16 9.09375 16 8 L 16 6 L 34 6 L 34 8 C 34 9.09375 34.90625 10 36 10 L 38 10 C 39.09375 10 40 9.09375 40 8 L 40 6 L 46 6 L 46 13 L 4 13 Z M 4 15 L 46 15 L 46 46 L 4 46 Z M 10 19 L 10 42 L 40 42 L 40 19 Z M 12 21 L 17 21 L 17 26 L 12 26 Z M 19 21 L 24 21 L 24 26 L 19 26 Z M 26 21 L 31 21 L 31 26 L 26 26 Z M 33 21 L 38 21 L 38 26 L 33 26 Z M 12 28 L 17 28 L 17 33 L 12 33 Z M 19 28 L 24 28 L 24 33 L 19 33 Z M 26 28 L 31 28 L 31 33 L 26 33 Z M 33 28 L 38 28 L 38 33 L 33 33 Z M 12 35 L 17 35 L 17 40 L 12 40 Z M 19 35 L 24 35 L 24 40 L 19 40 Z M 26 35 L 31 35 L 31 40 L 26 40 Z M 33 35 L 38 35 L 38 40 L 33 40 Z"
        />
      );

    case "luggage":
      return (
        <g>
          <g>
            <path
              {...props}
              d="m4 52h52c2.209139 0 4-1.790861 4-4v-33c0-2.209139-1.790861-4-4-4v-2c0-1.1045695-.8954305-2-2-2h-4c-1.1045695 0-2 .8954305-2 2v2h-2v-1c-.0049246-4.87782664-3.8947501-8.86388883-8.771-8.988-.5635966-.64123669-1.3752901-1.00975792-2.229-1.012h-10c-.8537099.00224208-1.6654034.37076331-2.229 1.012-4.8762499.12411117-8.7660754 4.11017336-8.771 8.988v1h-2v-2c0-1.1045695-.8954305-2-2-2h-4c-1.1045695 0-2 .8954305-2 2v2c-2.209139 0-4 1.790861-4 4v33c0 2.209139 1.790861 4 4 4zm46-43h4v2h-4zm-6 1v1h-3v-1c-.0066474-1.82394449-1.2463225-3.41240681-3.014-3.862 0-.047.014-.091.014-.138v-2.92c3.4409267.49665255 5.9959255 3.44341782 6 6.92zm-2.253 10.1c.0683525-.0646016.1589507-.1004112.253-.1.0937823-.0005682.1841249.0352821.252.1l2.667 2.546c.0500351.0450456.0793288.108696.081.176v8.909c-.0203506.1652892-.1669292.2854573-.333.273h-5.334c-.1674517.0123106-.3146166-.1101058-.333-.277v-8.909c.0016712-.067304.0309649-.1309544.081-.176zm-16.747-11.1h10c.8382672-.00294569 1.6366637-.35823216 2.2-.979 1.0191412.09962281 1.7971545.95500516 1.8 1.979v1h-18v-1c.0028455-1.02399484.7808588-1.87937719 1.8-1.979.5633363.62076784 1.3617328.97605431 2.2.979zm-1-6c0-.55228475.4477153-1 1-1h10c.5522847 0 1 .44771525 1 1v3c0 .55228475-.4477153 1-1 1h-10c-.5522847 0-1-.44771525-1-1zm-8 7c.0040745-3.47658218 2.5590733-6.42334745 6-6.92v2.92c0 .047.012.091.014.138-1.7676775.44959319-3.0073526 2.03805551-3.014 3.862v1h-3zm-10-1h4v2h-4zm-4 6c0-1.1045695.8954305-2 2-2h37v5.231c-.2328424.1030427-.4467977.2443276-.633.418l-2.667 2.551c-.4447612.4229998-.6975946 1.0092121-.7 1.623v8.909c.0213738 1.2690528 1.0638499 2.2824843 2.333 2.268h5.334c1.2710705.0144628 2.3143483-1.0019841 2.333-2.273v-8.909c-.0027534-.6137153-.2555304-1.1997969-.7-1.623l-2.667-2.546c-.1861486-.1734806-.4001286-.3144438-.633-.417v-5.232h13c1.1045695 0 2 .8954305 2 2v33c0 1.1045695-.8954305 2-2 2h-3v-2c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v2h-42v-25c0-.5522847-.44771525-1-1-1s-1 .4477153-1 1v25h-3c-1.1045695 0-2-.8954305-2-2z m8 22c.55228475 0 1-.4477153 1-1v-3c0-.5522847-.44771525-1-1-1s-1 .4477153-1 1v3c0 .5522847.44771525 1 1 1z m52 45c.5522847 0 1-.4477153 1-1v-26c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v26c0 .5522847.4477153 1 1 1z"
            />
          </g>
        </g>
      );

    case "info":
      return (
        <path
          {...props}
          d="M 13 1.1875 C 6.476563 1.1875 1.1875 6.476563 1.1875 13 C 1.1875 19.523438 6.476563 24.8125 13 24.8125 C 19.523438 24.8125 24.8125 19.523438 24.8125 13 C 24.8125 6.476563 19.523438 1.1875 13 1.1875 Z M 15.460938 19.496094 C 14.851563 19.734375 14.367188 19.917969 14.003906 20.042969 C 13.640625 20.167969 13.222656 20.230469 12.742188 20.230469 C 12.007813 20.230469 11.433594 20.050781 11.023438 19.691406 C 10.617188 19.335938 10.414063 18.878906 10.414063 18.324219 C 10.414063 18.109375 10.429688 17.890625 10.460938 17.667969 C 10.488281 17.441406 10.539063 17.191406 10.605469 16.90625 L 11.367188 14.21875 C 11.433594 13.960938 11.492188 13.71875 11.539063 13.488281 C 11.585938 13.257813 11.605469 13.046875 11.605469 12.855469 C 11.605469 12.515625 11.535156 12.273438 11.394531 12.140625 C 11.25 12.003906 10.980469 11.9375 10.582031 11.9375 C 10.386719 11.9375 10.183594 11.96875 9.976563 12.027344 C 9.769531 12.089844 9.59375 12.148438 9.445313 12.203125 L 9.648438 11.375 C 10.144531 11.171875 10.621094 11 11.078125 10.855469 C 11.53125 10.710938 11.964844 10.636719 12.367188 10.636719 C 13.097656 10.636719 13.664063 10.816406 14.058594 11.167969 C 14.453125 11.519531 14.652344 11.980469 14.652344 12.542969 C 14.652344 12.660156 14.640625 12.867188 14.613281 13.160156 C 14.585938 13.453125 14.535156 13.722656 14.460938 13.972656 L 13.703125 16.652344 C 13.640625 16.867188 13.585938 17.113281 13.535156 17.386719 C 13.488281 17.660156 13.464844 17.871094 13.464844 18.011719 C 13.464844 18.367188 13.542969 18.613281 13.703125 18.742188 C 13.859375 18.871094 14.136719 18.933594 14.53125 18.933594 C 14.714844 18.933594 14.921875 18.902344 15.15625 18.839844 C 15.386719 18.773438 15.554688 18.71875 15.660156 18.667969 Z M 15.324219 8.617188 C 14.972656 8.945313 14.546875 9.109375 14.050781 9.109375 C 13.554688 9.109375 13.125 8.945313 12.769531 8.617188 C 12.414063 8.289063 12.238281 7.890625 12.238281 7.425781 C 12.238281 6.960938 12.417969 6.558594 12.769531 6.226563 C 13.125 5.894531 13.554688 5.730469 14.050781 5.730469 C 14.546875 5.730469 14.972656 5.894531 15.324219 6.226563 C 15.679688 6.558594 15.855469 6.960938 15.855469 7.425781 C 15.855469 7.890625 15.679688 8.289063 15.324219 8.617188 Z"
        />
      );

    case "quotes":
      return (
        <path
          {...props}
          d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
        />
      );

    case "quotes-1":
      return (
        <path
          {...props}
          d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
        />
      );

    case "cancel":
      return (
        <path
          {...props}
          d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285L284.286,256.002z"
        />
      );

    case "wifi":
      return (
        <path
          {...props}
          d="M499.846,162.304C362.8,24.895,140.311,24.601,2.903,161.647c-0.219,0.219-0.438,0.438-0.657,0.657
			c-3.069,3.178-2.981,8.243,0.197,11.312c3.1,2.994,8.015,2.994,11.115,0c130.816-131.148,343.179-131.417,474.327-0.601
			c0.201,0.2,0.401,0.401,0.601,0.601c3.124,3.137,8.199,3.148,11.336,0.024C502.959,170.516,502.969,165.441,499.846,162.304z M454.622,207.528c-53.86-54.201-127.165-84.601-203.576-84.424c-76.411-0.177-149.716,30.223-203.576,84.424
			c-3.069,3.178-2.981,8.243,0.197,11.312c3.1,2.994,8.015,2.994,11.115,0c105.998-106.184,278.006-106.335,384.191-0.337
			c0.113,0.112,0.225,0.225,0.337,0.337c3.178,3.07,8.242,2.982,11.312-0.196C457.616,215.543,457.616,210.628,454.622,207.528z M409.35,252.808c-41.858-42.191-98.873-65.855-158.304-65.704c-59.431-0.151-116.446,23.513-158.304,65.704
			c-3.122,3.128-3.116,8.195,0.012,11.316c3.128,3.121,8.195,3.116,11.316-0.012c80.929-81.173,212.339-81.37,293.511-0.441
			c0.147,0.147,0.294,0.294,0.441,0.441c3.122,3.128,8.188,3.133,11.316,0.012C412.466,261.002,412.471,255.936,409.35,252.808z M364.142,298.008c-29.921-30.113-70.646-47.003-113.096-46.904c-42.45-0.099-83.175,16.791-113.096,46.904
			c-3.07,3.178-2.982,8.242,0.196,11.312c3.1,2.994,8.015,2.994,11.116,0c56.107-56.214,147.161-56.3,203.375-0.193
			c0.064,0.064,0.129,0.128,0.193,0.193c3.178,3.07,8.242,2.982,11.312-0.196C367.136,306.024,367.136,301.108,364.142,298.008z M319.12,343.385c-0.064-0.066-0.129-0.13-0.195-0.194c-17.987-18.023-42.417-28.132-67.88-28.088
			c-25.463-0.044-49.893,10.065-67.88,28.088c-3.186,3.061-3.287,8.125-0.226,11.311c3.061,3.186,8.125,3.287,11.311,0.226
			c0.066-0.063,0.131-0.128,0.195-0.194c31.266-31.244,81.934-31.244,113.2,0c3.079,3.169,8.144,3.241,11.313,0.162
			S322.199,346.554,319.12,343.385z M273.685,388.511c-0.008-0.008-0.015-0.015-0.023-0.023c-12.648-12.103-32.584-12.103-45.232,0
			c-12.503,12.49-12.513,32.752-0.023,45.255c12.49,12.503,32.752,12.513,45.255,0.023
			C286.165,421.275,286.175,401.014,273.685,388.511z M251.046,427.104c-8.837,0-16-7.163-16-16s7.163-16,16-16
			c8.837,0,16,7.163,16,16S259.882,427.104,251.046,427.104z"
        />
      );

    case "qualityPhone":
      return (
        <path
          {...props}
          d="M23.71,26.301l-1.633-1.633c5.33-5.33,5.33-14.004,0-19.334l1.632-1.633C29.939,9.933,29.939,20.069,23.71,26.301z
		 M20.888,6.521l-1.633,1.631c3.776,3.776,3.776,9.92,0,13.696l1.635,1.631C25.562,18.806,25.562,11.195,20.888,6.521z
		 M17.976,9.434l-1.633,1.634c2.17,2.168,2.17,5.701,0,7.869l1.633,1.633C21.045,17.499,21.045,12.502,17.976,9.434z M1.938,8.445
		c-0.172,2.125-0.271,4.253-0.309,6.383h-0.01C1.62,14.886,1.624,14.942,1.624,15c0,0.059-0.004,0.115-0.005,0.171H1.63
		c0.038,2.13,0.137,4.26,0.309,6.384c0.445,5.56,4.814,9.252,9.098,8.294c0.188-0.038,0.384-0.04,0.561-0.112
		c1.043-0.434,1.907-1.241,2.87-1.837c1.228-0.77-1.419-7.3-3.059-6.457c-0.606,0.316-2.28,1.553-2.953,1.646
		c-0.601,0.084-1.071-0.711-1.131-1.445c-0.157-1.938-0.015-4.414-0.003-6.472h0.003c0-0.055-0.001-0.114-0.001-0.171
		s0.001-0.117,0.001-0.171H7.321c-0.012-2.058-0.154-4.534,0.003-6.472c0.06-0.735,0.53-1.531,1.131-1.445
		c0.673,0.093,2.347,1.33,2.953,1.646c1.64,0.843,4.286-5.689,3.059-6.457c-0.963-0.597-1.827-1.405-2.87-1.837
		c-0.177-0.074-0.374-0.075-0.561-0.113C6.752-0.807,2.384,2.886,1.938,8.445z"
        />
      );

    case "handWash":
      return (
        <path
          {...props}
          d="M21.47,407.589l46.209,15.4,18.362,18.363a49.943,49.943,0,0,0,24.169,13.378,7.962,7.962,0,0,0,1.79.2V472a23.99,23.99,0,0,0,44.223,12.9,23.952,23.952,0,0,0,32-8,23.952,23.952,0,0,0,32-8,23.973,23.973,0,0,0,34.4-12.9H264a24,24,0,0,0,22.312-32.842,24,24,0,0,0,16-32,23.969,23.969,0,0,0,11.72-38.958,56.008,56.008,0,1,0-78.027-79.138,39.81,39.81,0,0,0-20-5.359,7.931,7.931,0,0,0-1.182.1c-.133-.29-.264-.579-.407-.865a27.562,27.562,0,0,0-32.21-14.17,143.715,143.715,0,0,0-63.333,37.661l-92.1-33.933A8,8,0,0,0,16,264V400A8,8,0,0,0,21.47,407.589ZM144,472a8,8,0,0,1-16,0V432a8,8,0,0,1,16,0v40Zm32-8a8,8,0,0,1-16,0V424a8,8,0,0,1,16,0v40Zm32-8a8,8,0,0,1-16,0V416a8,8,0,0,1,16,0v40Zm24,0a8.009,8.009,0,0,1-8-8V416a8,8,0,0,1,16,0v32A8.009,8.009,0,0,1,232,456Zm32-16h-8V424h8a8,8,0,0,1,0,16ZM215.907,287.969a27.926,27.926,0,0,0,1.047-4.221,23.875,23.875,0,0,1,15.54,6.533,8,8,0,0,0,12.5-1.93,40,40,0,1,1,58.659,51.613A23.894,23.894,0,0,0,280,312H191.064a40.752,40.752,0,0,1,11.027-8.1A27.372,27.372,0,0,0,215.907,287.969ZM186.6,268.15a11.551,11.551,0,0,1,8.34,21.438,57.025,57.025,0,0,0-25.346,25.345l-.744,1.487A8,8,0,0,0,176,328H280a8,8,0,0,1,0,16H224a8,8,0,0,0,0,16h72a8,8,0,0,1,0,16H224a8,8,0,0,0,0,16h56a8,8,0,0,1,0,16H254.624A23.977,23.977,0,0,0,216,398.131a23.959,23.959,0,0,0-36.223,4.97,23.952,23.952,0,0,0-32,8A23.982,23.982,0,0,0,112,432v6.661a33.961,33.961,0,0,1-14.645-8.619l-19.7-19.7a8,8,0,0,0-3.127-1.932L32,394.234V313.758l70.431,14.087a8,8,0,0,0,7.715-2.723l13.1-15.724A127.867,127.867,0,0,1,186.6,268.15Zm-79.087,35.142-6.608,7.93L32,297.441V275.473Z M472,169.013V144a8,8,0,0,0-8-8H448V88h8a8,8,0,0,0,8-8V38a22.025,22.025,0,0,0-22-22H406a22.036,22.036,0,0,0-21.162,16H320a7.994,7.994,0,0,0-6.786,3.762L271.645,82.7a8,8,0,0,0,1.456,11.9l26.366,18.133a8,8,0,0,0,10.369-1.12L339.466,80H384a8,8,0,0,0,8,8h8v48H384a8,8,0,0,0-8,8v25.013A32.056,32.056,0,0,0,352,200V392a32,32,0,1,0,32,32H488a8,8,0,0,0,8-8V200A32.056,32.056,0,0,0,472,169.013ZM480,344H408V248h72ZM400,38a6.006,6.006,0,0,1,6-6h36a6.006,6.006,0,0,1,6,6V72H400ZM336,64a8,8,0,0,0-5.836,2.528l-27.3,29.117-13.248-9.111L323.748,48H384V64Zm80,24h16v48H416Zm-24,64h64v16H392ZM352,440a16,16,0,1,1,16-16A16.019,16.019,0,0,1,352,440ZM379.7,408A32.238,32.238,0,0,0,368,396.305V392h16a8,8,0,0,0,0-16H368V200a16.019,16.019,0,0,1,16-16h80a16.019,16.019,0,0,1,16,16v32H400a8,8,0,0,0-8,8V352a8,8,0,0,0,8,8h80v16H416a8,8,0,0,0,0,16h64v16Z M265.688,184.073a25.8,25.8,0,0,0,36.439-34.746L286.86,123.884a8,8,0,0,0-13.72,0l-15.267,25.444A25.773,25.773,0,0,0,265.688,184.073Zm5.906-26.513L280,143.549l8.406,14.01a9.8,9.8,0,1,1-16.812,0Z M216,240a24,24,0,1,0-24-24A24.027,24.027,0,0,0,216,240Zm0-32a8,8,0,1,1-8,8A8.009,8.009,0,0,1,216,208Z M144,200a32,32,0,1,0-32-32A32.036,32.036,0,0,0,144,200Zm0-48a16,16,0,1,1-16,16A16.019,16.019,0,0,1,144,152Z M269.336,295.775a16.007,16.007,0,0,1,25.756,6.594,8,8,0,0,0,15.086-5.332,32.007,32.007,0,0,0-51.514-13.183,8,8,0,1,0,10.672,11.921Z M400,216a8,8,0,0,0,0-16h-8a8,8,0,0,0,0,16Z M432,216h24a8,8,0,0,0,0-16H432a8,8,0,0,0,0,16Z"
        />
      );

    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%",
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    viewBox={viewBox || getViewBox(name)}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </svg>
);

export default SVGIcon;
