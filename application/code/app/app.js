/**
 * Created by Shivali on 6/29/15.
 */

    
        angular.module("NSD",["config"]);
    
        angular.module("InstantiationRequests",["config"]);
    


angular.module("SonataBSS", ["angular-json-tree","ui.router","formly","formlyBootstrap","ngAnimate"
    
        ,"NSD"

        ,"InstantiationRequests"
    

])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        
            $stateProvider
            
                .state("NSD",{
                    url: "/nSDs",
                    templateUrl: "modules/NSD/nSD/views/nSDs.html",
                    controller: "NSDCtrl"
                    })
                .state("InstantiationRequests",{
                    url: "/InstantiationRequestss",
                    templateUrl: "modules/InstantiationRequests/instantiationRequests/views/instantiationRequestss.html",
                    controller: "InstantiationRequestsCtrl"
                    })
		
         
        
            $urlRouterProvider.otherwise("/nSDs");
        
    }]);