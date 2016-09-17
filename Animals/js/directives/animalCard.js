function animalCard(){
	return{
		restrict :"E",
		controller:'mainController',
		template:`<div class="container">
					<div ng-repeat='animal in animals' class='col-md-12 animal'>
                    <img ng-src='{{animal.image}}'>
                    <h1>{{animal.name}}</h1>
                    <h3>{{animal.info}}</h3>
                    </div>`
	};
}