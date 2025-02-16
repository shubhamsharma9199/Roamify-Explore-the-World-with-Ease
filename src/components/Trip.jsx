import "./TripStyles.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You cab discover unique destination using google Maps</p>
      <div className="tripcard">
        <TripData
          image="https://images.unsplash.com/photo-1598091383021-15ddea10925d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D"
          heading="Trip in kashmir"
          text="Jammu and Kashmir[c] (abbreviated J&K) is a region administered by India as a union territory[1] and consists of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan since 1947 and between India and China since 1959.[3] The Line of Control separates Jammu and Kashmir from the Pakistani-administered territories of Azad Kashmir and Gilgit-Baltistan in the west and north. It lies to the north of the Indian states of Himachal Pradesh and Punjab"
        />
        <TripData
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Auli%2C_India.jpg/1200px-Auli%2C_India.jpg"
          heading="Trip in uttarkhnda"
          text="Uttarakhand  is a state in northern India. The state is bordered by Himachal Pradesh to the northwest, Tibet to the north, Nepal to the east, Uttar Pradesh to the south and southeast, with a small part touching Haryana in the west. Uttarakhand has a total area of 53,483 km2 (20,650 sq mi), equal to 1.6% of the total area of India. Dehradun serves as the state capital, with Nainital being the judicial capital. The state is divided into two divisions, Garhwal and Kumaon, with a total of 13 districts. The forest cover in the state is 45.4% of the state's geographical area. The cultivable area is 16% of the total geographical area."
        />
        <TripData
          image="https://static.toiimg.com/thumb/105141695.cms?resizemode=75&width=1200&height=900"
          heading="Trip in ooty"
          text="The region was earlier known as Ottakal Mandu, with Otta-kal meaning 'single stone' in Tamil, a reference to a sacred stone revered by the local Toda people and Mandu, a Toda word for 'village'.[4] This later became Udagamandalam which was anglicised to Ootacamund by the British, with the first part of the name (Ootaca), a corruption of the local name for the region and the second part (Mand), a shortening of the local Toda word Mandu.[5][6][7] The first known written mention of the place is given as Wotokymund in a letter dated March 1821, written to the Madras Gazette by an unknown correspondent.[8] Ootacamund was later shortened to Ooty. Ooty is in the Nilgiri hills, meaning the blue mountains, so named due to the Kurunji flower, which used to give the slopes a bluish tinge.[9]"
      />
      </div>
    </div>
  );
}

export default Trip;
