/**
 * Created by Shivali on 6/30/15.
 */

angular.module('InstantiationRequests')
    .factory('InstantiationRequestsServices',["$http","$q",function ($http,$q) {
        return {
            retrieveInstantiationRequestss:function(){

                var defer=$q.defer();
                $http.get("InstantiationRequests")
                    .success(function(result){defer.resolve(result)})
                    .error(function(error){defer.reject(error)});
                return defer.promise;
            },
            saveInstantiationRequests:function(InstantiationRequestsObj){

                var defer=$q.defer();
                $http.post("InstantiationRequests",InstantiationRequestsObj)
                    .success(function(result){defer.resolve(result)})
                    .error(function(error){defer.reject(error)});
                return defer.promise;
            },
            updateInstantiationRequests:function(InstantiationRequestsObj){

                var defer=$q.defer();
                $http.put("InstantiationRequests/"+InstantiationRequestsObj.id,InstantiationRequestsObj)
                    .success(function(result){defer.resolve(result)})
                    .error(function(error){defer.reject(error)});

                return defer.promise;
            },
            deleteInstantiationRequests:function(id){

                var defer=$q.defer();
                $http.delete("InstantiationRequests/"+id)
                    .success(function(result){defer.resolve(result)})
                    .error(function(error){defer.reject(error)});

                return defer.promise;
            },
            retrieveInstantiationRequestsById:function(id){

                var defer=$q.defer();
                $http.get("InstantiationRequests/"+id)
                    .success(function(result){defer.resolve(result)})
                    .error(function(error){defer.reject(error)});
                return defer.promise;
            }
        }
    }]);