// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Email",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Emails/:id",
          { 'id': '@id' },
          {
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Email#modelName
        * @propertyOf lbServices.Email
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Email`.
        */
        R.modelName = "Email";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Users",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Users/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Employee
 * @header lbServices.Employee
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Employee` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Employee",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Employees/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Employee.issueReports.findById() instead.
            "prototype$__findById__issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Employees/:id/issueReports/:fk",
              method: "GET",
            },

            // INTERNAL. Use Employee.issueReports.destroyById() instead.
            "prototype$__destroyById__issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Employees/:id/issueReports/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.issueReports.updateById() instead.
            "prototype$__updateById__issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Employees/:id/issueReports/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Employee.state() instead.
            "prototype$__get__state": {
              url: urlBase + "/Employees/:id/state",
              method: "GET",
            },

            // INTERNAL. Use Employee.group() instead.
            "prototype$__get__group": {
              url: urlBase + "/Employees/:id/group",
              method: "GET",
            },

            // INTERNAL. Use Employee.member() instead.
            "prototype$__get__member": {
              url: urlBase + "/Employees/:id/member",
              method: "GET",
            },

            // INTERNAL. Use Employee.company() instead.
            "prototype$__get__company": {
              url: urlBase + "/Employees/:id/company",
              method: "GET",
            },

            // INTERNAL. Use Employee.region() instead.
            "prototype$__get__region": {
              url: urlBase + "/Employees/:id/region",
              method: "GET",
            },

            // INTERNAL. Use Employee.issueReports() instead.
            "prototype$__get__issueReports": {
              isArray: true,
              url: urlBase + "/Employees/:id/issueReports",
              method: "GET",
            },

            // INTERNAL. Use Employee.issueReports.create() instead.
            "prototype$__create__issueReports": {
              url: urlBase + "/Employees/:id/issueReports",
              method: "POST",
            },

            // INTERNAL. Use Employee.issueReports.destroyAll() instead.
            "prototype$__delete__issueReports": {
              url: urlBase + "/Employees/:id/issueReports",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.issueReports.count() instead.
            "prototype$__count__issueReports": {
              url: urlBase + "/Employees/:id/issueReports/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#create
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Employees",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#createMany
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Employees",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#upsert
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Employees",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#exists
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Employees/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#findById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Employees/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#find
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Employees",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#findOne
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Employees/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#updateAll
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Employees/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#deleteById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Employees/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#count
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Employees/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$updateAttributes
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Employees/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#createChangeStream
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Employees/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#os
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `OSystem` – `{object=}` -
             */
            "os": {
              url: urlBase + "/Employees/os",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#dir
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `Dirs` – `{Array=}` -
             */
            "dir": {
              url: urlBase + "/Employees/dir",
              method: "GET",
            },

            // INTERNAL. Use Confirmation.employee() instead.
            "::get::Confirmation::employee": {
              url: urlBase + "/Confirmations/:id/employee",
              method: "GET",
            },

            // INTERNAL. Use IssueReport.employee() instead.
            "::get::IssueReport::employee": {
              url: urlBase + "/IssueReports/:id/employee",
              method: "GET",
            },

            // INTERNAL. Use State.employees.findById() instead.
            "::findById::State::employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/employees/:fk",
              method: "GET",
            },

            // INTERNAL. Use State.employees.destroyById() instead.
            "::destroyById::State::employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/employees/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use State.employees.updateById() instead.
            "::updateById::State::employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/employees/:fk",
              method: "PUT",
            },

            // INTERNAL. Use State.employees() instead.
            "::get::State::employees": {
              isArray: true,
              url: urlBase + "/States/:id/employees",
              method: "GET",
            },

            // INTERNAL. Use State.employees.create() instead.
            "::create::State::employees": {
              url: urlBase + "/States/:id/employees",
              method: "POST",
            },

            // INTERNAL. Use State.employees.createMany() instead.
            "::createMany::State::employees": {
              isArray: true,
              url: urlBase + "/States/:id/employees",
              method: "POST",
            },

            // INTERNAL. Use State.employees.destroyAll() instead.
            "::delete::State::employees": {
              url: urlBase + "/States/:id/employees",
              method: "DELETE",
            },

            // INTERNAL. Use State.employees.count() instead.
            "::count::State::employees": {
              url: urlBase + "/States/:id/employees/count",
              method: "GET",
            },

            // INTERNAL. Use Group.employees.findById() instead.
            "::findById::Group::employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/employees/:fk",
              method: "GET",
            },

            // INTERNAL. Use Group.employees.destroyById() instead.
            "::destroyById::Group::employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/employees/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Group.employees.updateById() instead.
            "::updateById::Group::employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/employees/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Group.employees() instead.
            "::get::Group::employees": {
              isArray: true,
              url: urlBase + "/Groups/:id/employees",
              method: "GET",
            },

            // INTERNAL. Use Group.employees.create() instead.
            "::create::Group::employees": {
              url: urlBase + "/Groups/:id/employees",
              method: "POST",
            },

            // INTERNAL. Use Group.employees.createMany() instead.
            "::createMany::Group::employees": {
              isArray: true,
              url: urlBase + "/Groups/:id/employees",
              method: "POST",
            },

            // INTERNAL. Use Group.employees.destroyAll() instead.
            "::delete::Group::employees": {
              url: urlBase + "/Groups/:id/employees",
              method: "DELETE",
            },

            // INTERNAL. Use Group.employees.count() instead.
            "::count::Group::employees": {
              url: urlBase + "/Groups/:id/employees/count",
              method: "GET",
            },

            // INTERNAL. Use Company.employees.findById() instead.
            "::findById::Company::employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/employees/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.employees.destroyById() instead.
            "::destroyById::Company::employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/employees/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.employees.updateById() instead.
            "::updateById::Company::employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/employees/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.employees() instead.
            "::get::Company::employees": {
              isArray: true,
              url: urlBase + "/Companies/:id/employees",
              method: "GET",
            },

            // INTERNAL. Use Company.employees.create() instead.
            "::create::Company::employees": {
              url: urlBase + "/Companies/:id/employees",
              method: "POST",
            },

            // INTERNAL. Use Company.employees.createMany() instead.
            "::createMany::Company::employees": {
              isArray: true,
              url: urlBase + "/Companies/:id/employees",
              method: "POST",
            },

            // INTERNAL. Use Company.employees.destroyAll() instead.
            "::delete::Company::employees": {
              url: urlBase + "/Companies/:id/employees",
              method: "DELETE",
            },

            // INTERNAL. Use Company.employees.count() instead.
            "::count::Company::employees": {
              url: urlBase + "/Companies/:id/employees/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Employee#updateOrCreate
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Employee#update
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Employee#destroyById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Employee#removeById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Employee#modelName
        * @propertyOf lbServices.Employee
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Employee`.
        */
        R.modelName = "Employee";

    /**
     * @ngdoc object
     * @name lbServices.Employee.issueReports
     * @header lbServices.Employee.issueReports
     * @object
     * @description
     *
     * The object `Employee.issueReports` groups methods
     * manipulating `IssueReport` instances related to `Employee`.
     *
     * Call {@link lbServices.Employee#issueReports Employee.issueReports()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Employee#issueReports
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Queries issueReports of Employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::get::Employee::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.issueReports#count
             * @methodOf lbServices.Employee.issueReports
             *
             * @description
             *
             * Counts issueReports of Employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.issueReports.count = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::count::Employee::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.issueReports#create
             * @methodOf lbServices.Employee.issueReports
             *
             * @description
             *
             * Creates a new instance in issueReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.create = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::create::Employee::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.issueReports#createMany
             * @methodOf lbServices.Employee.issueReports
             *
             * @description
             *
             * Creates a new instance in issueReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.createMany = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::createMany::Employee::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.issueReports#destroyAll
             * @methodOf lbServices.Employee.issueReports
             *
             * @description
             *
             * Deletes all issueReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.issueReports.destroyAll = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::delete::Employee::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.issueReports#destroyById
             * @methodOf lbServices.Employee.issueReports
             *
             * @description
             *
             * Delete a related item by id for issueReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for issueReports
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.issueReports.destroyById = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::destroyById::Employee::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.issueReports#findById
             * @methodOf lbServices.Employee.issueReports
             *
             * @description
             *
             * Find a related item by id for issueReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for issueReports
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.findById = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::findById::Employee::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.issueReports#updateById
             * @methodOf lbServices.Employee.issueReports
             *
             * @description
             *
             * Update a related item by id for issueReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for issueReports
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.updateById = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::updateById::Employee::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee#state
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Fetches belongsTo relation state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R.state = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::get::Employee::state"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee#group
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Fetches belongsTo relation group.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R.group = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::get::Employee::group"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee#member
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Fetches belongsTo relation member.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
        R.member = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::get::Employee::member"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee#company
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Fetches belongsTo relation company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::Employee::company"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee#region
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Fetches belongsTo relation region.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.region = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::get::Employee::region"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Confirmation
 * @header lbServices.Confirmation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Confirmation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Confirmation",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Confirmations/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Confirmation.employee() instead.
            "prototype$__get__employee": {
              url: urlBase + "/Confirmations/:id/employee",
              method: "GET",
            },

            // INTERNAL. Use Confirmation.update() instead.
            "prototype$__get__update": {
              url: urlBase + "/Confirmations/:id/update",
              method: "GET",
            },

            // INTERNAL. Use Confirmation.group() instead.
            "prototype$__get__group": {
              url: urlBase + "/Confirmations/:id/group",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#create
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Confirmations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#createMany
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Confirmations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#upsert
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Confirmations",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#exists
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Confirmations/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#findById
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Confirmations/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#find
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Confirmations",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#findOne
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Confirmations/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#updateAll
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Confirmations/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#deleteById
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Confirmations/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#count
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Confirmations/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#prototype$updateAttributes
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Confirmations/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#createChangeStream
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Confirmations/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Update.confirmations.findById() instead.
            "::findById::Update::confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Updates/:id/confirmations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Update.confirmations.destroyById() instead.
            "::destroyById::Update::confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Updates/:id/confirmations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Update.confirmations.updateById() instead.
            "::updateById::Update::confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Updates/:id/confirmations/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Update.confirmations() instead.
            "::get::Update::confirmations": {
              isArray: true,
              url: urlBase + "/Updates/:id/confirmations",
              method: "GET",
            },

            // INTERNAL. Use Update.confirmations.create() instead.
            "::create::Update::confirmations": {
              url: urlBase + "/Updates/:id/confirmations",
              method: "POST",
            },

            // INTERNAL. Use Update.confirmations.createMany() instead.
            "::createMany::Update::confirmations": {
              isArray: true,
              url: urlBase + "/Updates/:id/confirmations",
              method: "POST",
            },

            // INTERNAL. Use Update.confirmations.destroyAll() instead.
            "::delete::Update::confirmations": {
              url: urlBase + "/Updates/:id/confirmations",
              method: "DELETE",
            },

            // INTERNAL. Use Update.confirmations.count() instead.
            "::count::Update::confirmations": {
              url: urlBase + "/Updates/:id/confirmations/count",
              method: "GET",
            },

            // INTERNAL. Use Group.confirmations.findById() instead.
            "::findById::Group::confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/confirmations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Group.confirmations.destroyById() instead.
            "::destroyById::Group::confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/confirmations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Group.confirmations.updateById() instead.
            "::updateById::Group::confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/confirmations/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Group.confirmations() instead.
            "::get::Group::confirmations": {
              isArray: true,
              url: urlBase + "/Groups/:id/confirmations",
              method: "GET",
            },

            // INTERNAL. Use Group.confirmations.create() instead.
            "::create::Group::confirmations": {
              url: urlBase + "/Groups/:id/confirmations",
              method: "POST",
            },

            // INTERNAL. Use Group.confirmations.createMany() instead.
            "::createMany::Group::confirmations": {
              isArray: true,
              url: urlBase + "/Groups/:id/confirmations",
              method: "POST",
            },

            // INTERNAL. Use Group.confirmations.destroyAll() instead.
            "::delete::Group::confirmations": {
              url: urlBase + "/Groups/:id/confirmations",
              method: "DELETE",
            },

            // INTERNAL. Use Group.confirmations.count() instead.
            "::count::Group::confirmations": {
              url: urlBase + "/Groups/:id/confirmations/count",
              method: "GET",
            },

            // INTERNAL. Use Company.confirmations.findById() instead.
            "::findById::Company::confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/confirmations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.confirmations.destroyById() instead.
            "::destroyById::Company::confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/confirmations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.confirmations.updateById() instead.
            "::updateById::Company::confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/confirmations/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.confirmations() instead.
            "::get::Company::confirmations": {
              isArray: true,
              url: urlBase + "/Companies/:id/confirmations",
              method: "GET",
            },

            // INTERNAL. Use Company.confirmations.create() instead.
            "::create::Company::confirmations": {
              url: urlBase + "/Companies/:id/confirmations",
              method: "POST",
            },

            // INTERNAL. Use Company.confirmations.createMany() instead.
            "::createMany::Company::confirmations": {
              isArray: true,
              url: urlBase + "/Companies/:id/confirmations",
              method: "POST",
            },

            // INTERNAL. Use Company.confirmations.destroyAll() instead.
            "::delete::Company::confirmations": {
              url: urlBase + "/Companies/:id/confirmations",
              method: "DELETE",
            },

            // INTERNAL. Use Company.confirmations.count() instead.
            "::count::Company::confirmations": {
              url: urlBase + "/Companies/:id/confirmations/count",
              method: "GET",
            },

            // INTERNAL. Use Region.confirmations.findById() instead.
            "::findById::Region::confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Regions/:id/confirmations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Region.confirmations.destroyById() instead.
            "::destroyById::Region::confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Regions/:id/confirmations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Region.confirmations.updateById() instead.
            "::updateById::Region::confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Regions/:id/confirmations/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Region.confirmations() instead.
            "::get::Region::confirmations": {
              isArray: true,
              url: urlBase + "/Regions/:id/confirmations",
              method: "GET",
            },

            // INTERNAL. Use Region.confirmations.create() instead.
            "::create::Region::confirmations": {
              url: urlBase + "/Regions/:id/confirmations",
              method: "POST",
            },

            // INTERNAL. Use Region.confirmations.createMany() instead.
            "::createMany::Region::confirmations": {
              isArray: true,
              url: urlBase + "/Regions/:id/confirmations",
              method: "POST",
            },

            // INTERNAL. Use Region.confirmations.destroyAll() instead.
            "::delete::Region::confirmations": {
              url: urlBase + "/Regions/:id/confirmations",
              method: "DELETE",
            },

            // INTERNAL. Use Region.confirmations.count() instead.
            "::count::Region::confirmations": {
              url: urlBase + "/Regions/:id/confirmations/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Confirmation#updateOrCreate
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#update
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#destroyById
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#removeById
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Confirmation#modelName
        * @propertyOf lbServices.Confirmation
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Confirmation`.
        */
        R.modelName = "Confirmation";


            /**
             * @ngdoc method
             * @name lbServices.Confirmation#employee
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Fetches belongsTo relation employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employee = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::get::Confirmation::employee"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#update
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Fetches belongsTo relation update.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Update` object.)
             * </em>
             */
        R.update = function() {
          var TargetResource = $injector.get("Update");
          var action = TargetResource["::get::Confirmation::update"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Confirmation#group
             * @methodOf lbServices.Confirmation
             *
             * @description
             *
             * Fetches belongsTo relation group.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R.group = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::get::Confirmation::group"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.IssueReport
 * @header lbServices.IssueReport
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `IssueReport` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "IssueReport",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/IssueReports/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use IssueReport.employee() instead.
            "prototype$__get__employee": {
              url: urlBase + "/IssueReports/:id/employee",
              method: "GET",
            },

            // INTERNAL. Use IssueReport.update() instead.
            "prototype$__get__update": {
              url: urlBase + "/IssueReports/:id/update",
              method: "GET",
            },

            // INTERNAL. Use IssueReport.state() instead.
            "prototype$__get__state": {
              url: urlBase + "/IssueReports/:id/state",
              method: "GET",
            },

            // INTERNAL. Use IssueReport.group() instead.
            "prototype$__get__group": {
              url: urlBase + "/IssueReports/:id/group",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#create
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/IssueReports",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#createMany
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/IssueReports",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#upsert
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/IssueReports",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#exists
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/IssueReports/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#findById
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/IssueReports/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#find
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/IssueReports",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#findOne
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/IssueReports/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#updateAll
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/IssueReports/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#deleteById
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/IssueReports/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#count
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/IssueReports/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#prototype$updateAttributes
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/IssueReports/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#createChangeStream
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/IssueReports/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Employee.issueReports.findById() instead.
            "::findById::Employee::issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Employees/:id/issueReports/:fk",
              method: "GET",
            },

            // INTERNAL. Use Employee.issueReports.destroyById() instead.
            "::destroyById::Employee::issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Employees/:id/issueReports/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.issueReports.updateById() instead.
            "::updateById::Employee::issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Employees/:id/issueReports/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Employee.issueReports() instead.
            "::get::Employee::issueReports": {
              isArray: true,
              url: urlBase + "/Employees/:id/issueReports",
              method: "GET",
            },

            // INTERNAL. Use Employee.issueReports.create() instead.
            "::create::Employee::issueReports": {
              url: urlBase + "/Employees/:id/issueReports",
              method: "POST",
            },

            // INTERNAL. Use Employee.issueReports.createMany() instead.
            "::createMany::Employee::issueReports": {
              isArray: true,
              url: urlBase + "/Employees/:id/issueReports",
              method: "POST",
            },

            // INTERNAL. Use Employee.issueReports.destroyAll() instead.
            "::delete::Employee::issueReports": {
              url: urlBase + "/Employees/:id/issueReports",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.issueReports.count() instead.
            "::count::Employee::issueReports": {
              url: urlBase + "/Employees/:id/issueReports/count",
              method: "GET",
            },

            // INTERNAL. Use Update.issueReports.findById() instead.
            "::findById::Update::issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Updates/:id/issueReports/:fk",
              method: "GET",
            },

            // INTERNAL. Use Update.issueReports.destroyById() instead.
            "::destroyById::Update::issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Updates/:id/issueReports/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Update.issueReports.updateById() instead.
            "::updateById::Update::issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Updates/:id/issueReports/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Update.issueReports() instead.
            "::get::Update::issueReports": {
              isArray: true,
              url: urlBase + "/Updates/:id/issueReports",
              method: "GET",
            },

            // INTERNAL. Use Update.issueReports.create() instead.
            "::create::Update::issueReports": {
              url: urlBase + "/Updates/:id/issueReports",
              method: "POST",
            },

            // INTERNAL. Use Update.issueReports.createMany() instead.
            "::createMany::Update::issueReports": {
              isArray: true,
              url: urlBase + "/Updates/:id/issueReports",
              method: "POST",
            },

            // INTERNAL. Use Update.issueReports.destroyAll() instead.
            "::delete::Update::issueReports": {
              url: urlBase + "/Updates/:id/issueReports",
              method: "DELETE",
            },

            // INTERNAL. Use Update.issueReports.count() instead.
            "::count::Update::issueReports": {
              url: urlBase + "/Updates/:id/issueReports/count",
              method: "GET",
            },

            // INTERNAL. Use State.issueReports.findById() instead.
            "::findById::State::issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/issueReports/:fk",
              method: "GET",
            },

            // INTERNAL. Use State.issueReports.destroyById() instead.
            "::destroyById::State::issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/issueReports/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use State.issueReports.updateById() instead.
            "::updateById::State::issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/issueReports/:fk",
              method: "PUT",
            },

            // INTERNAL. Use State.issueReports() instead.
            "::get::State::issueReports": {
              isArray: true,
              url: urlBase + "/States/:id/issueReports",
              method: "GET",
            },

            // INTERNAL. Use State.issueReports.create() instead.
            "::create::State::issueReports": {
              url: urlBase + "/States/:id/issueReports",
              method: "POST",
            },

            // INTERNAL. Use State.issueReports.createMany() instead.
            "::createMany::State::issueReports": {
              isArray: true,
              url: urlBase + "/States/:id/issueReports",
              method: "POST",
            },

            // INTERNAL. Use State.issueReports.destroyAll() instead.
            "::delete::State::issueReports": {
              url: urlBase + "/States/:id/issueReports",
              method: "DELETE",
            },

            // INTERNAL. Use State.issueReports.count() instead.
            "::count::State::issueReports": {
              url: urlBase + "/States/:id/issueReports/count",
              method: "GET",
            },

            // INTERNAL. Use Group.issueReports.findById() instead.
            "::findById::Group::issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/issueReports/:fk",
              method: "GET",
            },

            // INTERNAL. Use Group.issueReports.destroyById() instead.
            "::destroyById::Group::issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/issueReports/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Group.issueReports.updateById() instead.
            "::updateById::Group::issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/issueReports/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Group.issueReports() instead.
            "::get::Group::issueReports": {
              isArray: true,
              url: urlBase + "/Groups/:id/issueReports",
              method: "GET",
            },

            // INTERNAL. Use Group.issueReports.create() instead.
            "::create::Group::issueReports": {
              url: urlBase + "/Groups/:id/issueReports",
              method: "POST",
            },

            // INTERNAL. Use Group.issueReports.createMany() instead.
            "::createMany::Group::issueReports": {
              isArray: true,
              url: urlBase + "/Groups/:id/issueReports",
              method: "POST",
            },

            // INTERNAL. Use Group.issueReports.destroyAll() instead.
            "::delete::Group::issueReports": {
              url: urlBase + "/Groups/:id/issueReports",
              method: "DELETE",
            },

            // INTERNAL. Use Group.issueReports.count() instead.
            "::count::Group::issueReports": {
              url: urlBase + "/Groups/:id/issueReports/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.IssueReport#updateOrCreate
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#update
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#destroyById
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#removeById
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.IssueReport#modelName
        * @propertyOf lbServices.IssueReport
        * @description
        * The name of the model represented by this $resource,
        * i.e. `IssueReport`.
        */
        R.modelName = "IssueReport";


            /**
             * @ngdoc method
             * @name lbServices.IssueReport#employee
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Fetches belongsTo relation employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employee = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::get::IssueReport::employee"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#update
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Fetches belongsTo relation update.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Update` object.)
             * </em>
             */
        R.update = function() {
          var TargetResource = $injector.get("Update");
          var action = TargetResource["::get::IssueReport::update"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#state
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Fetches belongsTo relation state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R.state = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::get::IssueReport::state"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.IssueReport#group
             * @methodOf lbServices.IssueReport
             *
             * @description
             *
             * Fetches belongsTo relation group.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R.group = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::get::IssueReport::group"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Update
 * @header lbServices.Update
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Update` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Update",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Updates/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Update.confirmations.findById() instead.
            "prototype$__findById__confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Updates/:id/confirmations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Update.confirmations.destroyById() instead.
            "prototype$__destroyById__confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Updates/:id/confirmations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Update.confirmations.updateById() instead.
            "prototype$__updateById__confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Updates/:id/confirmations/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Update.issueReports.findById() instead.
            "prototype$__findById__issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Updates/:id/issueReports/:fk",
              method: "GET",
            },

            // INTERNAL. Use Update.issueReports.destroyById() instead.
            "prototype$__destroyById__issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Updates/:id/issueReports/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Update.issueReports.updateById() instead.
            "prototype$__updateById__issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Updates/:id/issueReports/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Update.state() instead.
            "prototype$__get__state": {
              url: urlBase + "/Updates/:id/state",
              method: "GET",
            },

            // INTERNAL. Use Update.confirmations() instead.
            "prototype$__get__confirmations": {
              isArray: true,
              url: urlBase + "/Updates/:id/confirmations",
              method: "GET",
            },

            // INTERNAL. Use Update.confirmations.create() instead.
            "prototype$__create__confirmations": {
              url: urlBase + "/Updates/:id/confirmations",
              method: "POST",
            },

            // INTERNAL. Use Update.confirmations.destroyAll() instead.
            "prototype$__delete__confirmations": {
              url: urlBase + "/Updates/:id/confirmations",
              method: "DELETE",
            },

            // INTERNAL. Use Update.confirmations.count() instead.
            "prototype$__count__confirmations": {
              url: urlBase + "/Updates/:id/confirmations/count",
              method: "GET",
            },

            // INTERNAL. Use Update.issueReports() instead.
            "prototype$__get__issueReports": {
              isArray: true,
              url: urlBase + "/Updates/:id/issueReports",
              method: "GET",
            },

            // INTERNAL. Use Update.issueReports.create() instead.
            "prototype$__create__issueReports": {
              url: urlBase + "/Updates/:id/issueReports",
              method: "POST",
            },

            // INTERNAL. Use Update.issueReports.destroyAll() instead.
            "prototype$__delete__issueReports": {
              url: urlBase + "/Updates/:id/issueReports",
              method: "DELETE",
            },

            // INTERNAL. Use Update.issueReports.count() instead.
            "prototype$__count__issueReports": {
              url: urlBase + "/Updates/:id/issueReports/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Update#create
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Update` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Updates",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Update#createMany
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Update` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Updates",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Update#upsert
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Update` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Updates",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Update#exists
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Updates/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Update#findById
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Update` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Updates/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Update#find
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Update` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Updates",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Update#findOne
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Update` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Updates/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Update#updateAll
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Updates/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Update#deleteById
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Update` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Updates/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Update#count
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Updates/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Update#prototype$updateAttributes
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Update` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Updates/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Update#createChangeStream
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Updates/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Update#sendReminder
             * @methodOf lbServices.Update
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `email` – `{Array=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "sendReminder": {
              url: urlBase + "/Updates/sendReminder",
              method: "POST",
            },

            // INTERNAL. Use Confirmation.update() instead.
            "::get::Confirmation::update": {
              url: urlBase + "/Confirmations/:id/update",
              method: "GET",
            },

            // INTERNAL. Use IssueReport.update() instead.
            "::get::IssueReport::update": {
              url: urlBase + "/IssueReports/:id/update",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Update#updateOrCreate
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Update` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Update#update
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Update#destroyById
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Update` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Update#removeById
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Update` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Update#modelName
        * @propertyOf lbServices.Update
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Update`.
        */
        R.modelName = "Update";

    /**
     * @ngdoc object
     * @name lbServices.Update.confirmations
     * @header lbServices.Update.confirmations
     * @object
     * @description
     *
     * The object `Update.confirmations` groups methods
     * manipulating `Confirmation` instances related to `Update`.
     *
     * Call {@link lbServices.Update#confirmations Update.confirmations()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Update#confirmations
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Queries confirmations of Update.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::get::Update::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Update.confirmations#count
             * @methodOf lbServices.Update.confirmations
             *
             * @description
             *
             * Counts confirmations of Update.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.confirmations.count = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::count::Update::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Update.confirmations#create
             * @methodOf lbServices.Update.confirmations
             *
             * @description
             *
             * Creates a new instance in confirmations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.create = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::create::Update::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Update.confirmations#createMany
             * @methodOf lbServices.Update.confirmations
             *
             * @description
             *
             * Creates a new instance in confirmations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.createMany = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::createMany::Update::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Update.confirmations#destroyAll
             * @methodOf lbServices.Update.confirmations
             *
             * @description
             *
             * Deletes all confirmations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.confirmations.destroyAll = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::delete::Update::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Update.confirmations#destroyById
             * @methodOf lbServices.Update.confirmations
             *
             * @description
             *
             * Delete a related item by id for confirmations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for confirmations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.confirmations.destroyById = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::destroyById::Update::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Update.confirmations#findById
             * @methodOf lbServices.Update.confirmations
             *
             * @description
             *
             * Find a related item by id for confirmations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for confirmations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.findById = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::findById::Update::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Update.confirmations#updateById
             * @methodOf lbServices.Update.confirmations
             *
             * @description
             *
             * Update a related item by id for confirmations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for confirmations
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.updateById = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::updateById::Update::confirmations"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Update.issueReports
     * @header lbServices.Update.issueReports
     * @object
     * @description
     *
     * The object `Update.issueReports` groups methods
     * manipulating `IssueReport` instances related to `Update`.
     *
     * Call {@link lbServices.Update#issueReports Update.issueReports()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Update#issueReports
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Queries issueReports of Update.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::get::Update::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Update.issueReports#count
             * @methodOf lbServices.Update.issueReports
             *
             * @description
             *
             * Counts issueReports of Update.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.issueReports.count = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::count::Update::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Update.issueReports#create
             * @methodOf lbServices.Update.issueReports
             *
             * @description
             *
             * Creates a new instance in issueReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.create = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::create::Update::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Update.issueReports#createMany
             * @methodOf lbServices.Update.issueReports
             *
             * @description
             *
             * Creates a new instance in issueReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.createMany = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::createMany::Update::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Update.issueReports#destroyAll
             * @methodOf lbServices.Update.issueReports
             *
             * @description
             *
             * Deletes all issueReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.issueReports.destroyAll = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::delete::Update::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Update.issueReports#destroyById
             * @methodOf lbServices.Update.issueReports
             *
             * @description
             *
             * Delete a related item by id for issueReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for issueReports
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.issueReports.destroyById = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::destroyById::Update::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Update.issueReports#findById
             * @methodOf lbServices.Update.issueReports
             *
             * @description
             *
             * Find a related item by id for issueReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for issueReports
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.findById = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::findById::Update::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Update.issueReports#updateById
             * @methodOf lbServices.Update.issueReports
             *
             * @description
             *
             * Update a related item by id for issueReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for issueReports
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.updateById = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::updateById::Update::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Update#state
             * @methodOf lbServices.Update
             *
             * @description
             *
             * Fetches belongsTo relation state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R.state = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::get::Update::state"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.State
 * @header lbServices.State
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `State` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "State",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/States/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use State.employees.findById() instead.
            "prototype$__findById__employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/employees/:fk",
              method: "GET",
            },

            // INTERNAL. Use State.employees.destroyById() instead.
            "prototype$__destroyById__employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/employees/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use State.employees.updateById() instead.
            "prototype$__updateById__employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/employees/:fk",
              method: "PUT",
            },

            // INTERNAL. Use State.issueReports.findById() instead.
            "prototype$__findById__issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/issueReports/:fk",
              method: "GET",
            },

            // INTERNAL. Use State.issueReports.destroyById() instead.
            "prototype$__destroyById__issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/issueReports/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use State.issueReports.updateById() instead.
            "prototype$__updateById__issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/issueReports/:fk",
              method: "PUT",
            },

            // INTERNAL. Use State.groups.findById() instead.
            "prototype$__findById__groups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/groups/:fk",
              method: "GET",
            },

            // INTERNAL. Use State.groups.destroyById() instead.
            "prototype$__destroyById__groups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/groups/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use State.groups.updateById() instead.
            "prototype$__updateById__groups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/groups/:fk",
              method: "PUT",
            },

            // INTERNAL. Use State.company() instead.
            "prototype$__get__company": {
              url: urlBase + "/States/:id/company",
              method: "GET",
            },

            // INTERNAL. Use State.region() instead.
            "prototype$__get__region": {
              url: urlBase + "/States/:id/region",
              method: "GET",
            },

            // INTERNAL. Use State.employees() instead.
            "prototype$__get__employees": {
              isArray: true,
              url: urlBase + "/States/:id/employees",
              method: "GET",
            },

            // INTERNAL. Use State.employees.create() instead.
            "prototype$__create__employees": {
              url: urlBase + "/States/:id/employees",
              method: "POST",
            },

            // INTERNAL. Use State.employees.destroyAll() instead.
            "prototype$__delete__employees": {
              url: urlBase + "/States/:id/employees",
              method: "DELETE",
            },

            // INTERNAL. Use State.employees.count() instead.
            "prototype$__count__employees": {
              url: urlBase + "/States/:id/employees/count",
              method: "GET",
            },

            // INTERNAL. Use State.issueReports() instead.
            "prototype$__get__issueReports": {
              isArray: true,
              url: urlBase + "/States/:id/issueReports",
              method: "GET",
            },

            // INTERNAL. Use State.issueReports.create() instead.
            "prototype$__create__issueReports": {
              url: urlBase + "/States/:id/issueReports",
              method: "POST",
            },

            // INTERNAL. Use State.issueReports.destroyAll() instead.
            "prototype$__delete__issueReports": {
              url: urlBase + "/States/:id/issueReports",
              method: "DELETE",
            },

            // INTERNAL. Use State.issueReports.count() instead.
            "prototype$__count__issueReports": {
              url: urlBase + "/States/:id/issueReports/count",
              method: "GET",
            },

            // INTERNAL. Use State.groups() instead.
            "prototype$__get__groups": {
              isArray: true,
              url: urlBase + "/States/:id/groups",
              method: "GET",
            },

            // INTERNAL. Use State.groups.create() instead.
            "prototype$__create__groups": {
              url: urlBase + "/States/:id/groups",
              method: "POST",
            },

            // INTERNAL. Use State.groups.destroyAll() instead.
            "prototype$__delete__groups": {
              url: urlBase + "/States/:id/groups",
              method: "DELETE",
            },

            // INTERNAL. Use State.groups.count() instead.
            "prototype$__count__groups": {
              url: urlBase + "/States/:id/groups/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#create
             * @methodOf lbServices.State
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/States",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#createMany
             * @methodOf lbServices.State
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/States",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#upsert
             * @methodOf lbServices.State
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/States",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#exists
             * @methodOf lbServices.State
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/States/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#findById
             * @methodOf lbServices.State
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/States/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#find
             * @methodOf lbServices.State
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/States",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#findOne
             * @methodOf lbServices.State
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/States/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#updateAll
             * @methodOf lbServices.State
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/States/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#deleteById
             * @methodOf lbServices.State
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/States/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#count
             * @methodOf lbServices.State
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/States/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#prototype$updateAttributes
             * @methodOf lbServices.State
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/States/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#createChangeStream
             * @methodOf lbServices.State
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/States/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Employee.state() instead.
            "::get::Employee::state": {
              url: urlBase + "/Employees/:id/state",
              method: "GET",
            },

            // INTERNAL. Use IssueReport.state() instead.
            "::get::IssueReport::state": {
              url: urlBase + "/IssueReports/:id/state",
              method: "GET",
            },

            // INTERNAL. Use Update.state() instead.
            "::get::Update::state": {
              url: urlBase + "/Updates/:id/state",
              method: "GET",
            },

            // INTERNAL. Use Group.state() instead.
            "::get::Group::state": {
              url: urlBase + "/Groups/:id/state",
              method: "GET",
            },

            // INTERNAL. Use Member.state() instead.
            "::get::Member::state": {
              url: urlBase + "/Members/:id/state",
              method: "GET",
            },

            // INTERNAL. Use Company.states.findById() instead.
            "::findById::Company::states": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/states/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.states.destroyById() instead.
            "::destroyById::Company::states": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/states/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.states.updateById() instead.
            "::updateById::Company::states": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/states/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.states() instead.
            "::get::Company::states": {
              isArray: true,
              url: urlBase + "/Companies/:id/states",
              method: "GET",
            },

            // INTERNAL. Use Company.states.create() instead.
            "::create::Company::states": {
              url: urlBase + "/Companies/:id/states",
              method: "POST",
            },

            // INTERNAL. Use Company.states.createMany() instead.
            "::createMany::Company::states": {
              isArray: true,
              url: urlBase + "/Companies/:id/states",
              method: "POST",
            },

            // INTERNAL. Use Company.states.destroyAll() instead.
            "::delete::Company::states": {
              url: urlBase + "/Companies/:id/states",
              method: "DELETE",
            },

            // INTERNAL. Use Company.states.count() instead.
            "::count::Company::states": {
              url: urlBase + "/Companies/:id/states/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.State#updateOrCreate
             * @methodOf lbServices.State
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.State#update
             * @methodOf lbServices.State
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.State#destroyById
             * @methodOf lbServices.State
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.State#removeById
             * @methodOf lbServices.State
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.State#modelName
        * @propertyOf lbServices.State
        * @description
        * The name of the model represented by this $resource,
        * i.e. `State`.
        */
        R.modelName = "State";

    /**
     * @ngdoc object
     * @name lbServices.State.employees
     * @header lbServices.State.employees
     * @object
     * @description
     *
     * The object `State.employees` groups methods
     * manipulating `Employee` instances related to `State`.
     *
     * Call {@link lbServices.State#employees State.employees()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.State#employees
             * @methodOf lbServices.State
             *
             * @description
             *
             * Queries employees of State.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::get::State::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.employees#count
             * @methodOf lbServices.State.employees
             *
             * @description
             *
             * Counts employees of State.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.employees.count = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::count::State::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.employees#create
             * @methodOf lbServices.State.employees
             *
             * @description
             *
             * Creates a new instance in employees of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.create = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::create::State::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.employees#createMany
             * @methodOf lbServices.State.employees
             *
             * @description
             *
             * Creates a new instance in employees of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.createMany = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::createMany::State::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.employees#destroyAll
             * @methodOf lbServices.State.employees
             *
             * @description
             *
             * Deletes all employees of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employees.destroyAll = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::delete::State::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.employees#destroyById
             * @methodOf lbServices.State.employees
             *
             * @description
             *
             * Delete a related item by id for employees.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for employees
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employees.destroyById = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::destroyById::State::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.employees#findById
             * @methodOf lbServices.State.employees
             *
             * @description
             *
             * Find a related item by id for employees.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for employees
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.findById = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::findById::State::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.employees#updateById
             * @methodOf lbServices.State.employees
             *
             * @description
             *
             * Update a related item by id for employees.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for employees
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.updateById = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::updateById::State::employees"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.State.issueReports
     * @header lbServices.State.issueReports
     * @object
     * @description
     *
     * The object `State.issueReports` groups methods
     * manipulating `IssueReport` instances related to `State`.
     *
     * Call {@link lbServices.State#issueReports State.issueReports()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.State#issueReports
             * @methodOf lbServices.State
             *
             * @description
             *
             * Queries issueReports of State.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::get::State::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.issueReports#count
             * @methodOf lbServices.State.issueReports
             *
             * @description
             *
             * Counts issueReports of State.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.issueReports.count = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::count::State::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.issueReports#create
             * @methodOf lbServices.State.issueReports
             *
             * @description
             *
             * Creates a new instance in issueReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.create = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::create::State::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.issueReports#createMany
             * @methodOf lbServices.State.issueReports
             *
             * @description
             *
             * Creates a new instance in issueReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.createMany = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::createMany::State::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.issueReports#destroyAll
             * @methodOf lbServices.State.issueReports
             *
             * @description
             *
             * Deletes all issueReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.issueReports.destroyAll = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::delete::State::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.issueReports#destroyById
             * @methodOf lbServices.State.issueReports
             *
             * @description
             *
             * Delete a related item by id for issueReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for issueReports
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.issueReports.destroyById = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::destroyById::State::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.issueReports#findById
             * @methodOf lbServices.State.issueReports
             *
             * @description
             *
             * Find a related item by id for issueReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for issueReports
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.findById = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::findById::State::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.issueReports#updateById
             * @methodOf lbServices.State.issueReports
             *
             * @description
             *
             * Update a related item by id for issueReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for issueReports
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.updateById = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::updateById::State::issueReports"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.State.groups
     * @header lbServices.State.groups
     * @object
     * @description
     *
     * The object `State.groups` groups methods
     * manipulating `Group` instances related to `State`.
     *
     * Call {@link lbServices.State#groups State.groups()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.State#groups
             * @methodOf lbServices.State
             *
             * @description
             *
             * Queries groups of State.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R.groups = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::get::State::groups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.groups#count
             * @methodOf lbServices.State.groups
             *
             * @description
             *
             * Counts groups of State.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.groups.count = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::count::State::groups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.groups#create
             * @methodOf lbServices.State.groups
             *
             * @description
             *
             * Creates a new instance in groups of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R.groups.create = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::create::State::groups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.groups#createMany
             * @methodOf lbServices.State.groups
             *
             * @description
             *
             * Creates a new instance in groups of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R.groups.createMany = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::createMany::State::groups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.groups#destroyAll
             * @methodOf lbServices.State.groups
             *
             * @description
             *
             * Deletes all groups of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.groups.destroyAll = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::delete::State::groups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.groups#destroyById
             * @methodOf lbServices.State.groups
             *
             * @description
             *
             * Delete a related item by id for groups.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for groups
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.groups.destroyById = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::destroyById::State::groups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.groups#findById
             * @methodOf lbServices.State.groups
             *
             * @description
             *
             * Find a related item by id for groups.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for groups
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R.groups.findById = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::findById::State::groups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.groups#updateById
             * @methodOf lbServices.State.groups
             *
             * @description
             *
             * Update a related item by id for groups.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for groups
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R.groups.updateById = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::updateById::State::groups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State#company
             * @methodOf lbServices.State
             *
             * @description
             *
             * Fetches belongsTo relation company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::State::company"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State#region
             * @methodOf lbServices.State
             *
             * @description
             *
             * Fetches belongsTo relation region.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.region = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::get::State::region"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Group
 * @header lbServices.Group
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Group` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Group",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Groups/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Group.employees.findById() instead.
            "prototype$__findById__employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/employees/:fk",
              method: "GET",
            },

            // INTERNAL. Use Group.employees.destroyById() instead.
            "prototype$__destroyById__employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/employees/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Group.employees.updateById() instead.
            "prototype$__updateById__employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/employees/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Group.state() instead.
            "prototype$__get__state": {
              url: urlBase + "/Groups/:id/state",
              method: "GET",
            },

            // INTERNAL. Use Group.issueReports.findById() instead.
            "prototype$__findById__issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/issueReports/:fk",
              method: "GET",
            },

            // INTERNAL. Use Group.issueReports.destroyById() instead.
            "prototype$__destroyById__issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/issueReports/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Group.issueReports.updateById() instead.
            "prototype$__updateById__issueReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/issueReports/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Group.confirmations.findById() instead.
            "prototype$__findById__confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/confirmations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Group.confirmations.destroyById() instead.
            "prototype$__destroyById__confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/confirmations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Group.confirmations.updateById() instead.
            "prototype$__updateById__confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Groups/:id/confirmations/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Group.region() instead.
            "prototype$__get__region": {
              url: urlBase + "/Groups/:id/region",
              method: "GET",
            },

            // INTERNAL. Use Group.employees() instead.
            "prototype$__get__employees": {
              isArray: true,
              url: urlBase + "/Groups/:id/employees",
              method: "GET",
            },

            // INTERNAL. Use Group.employees.create() instead.
            "prototype$__create__employees": {
              url: urlBase + "/Groups/:id/employees",
              method: "POST",
            },

            // INTERNAL. Use Group.employees.destroyAll() instead.
            "prototype$__delete__employees": {
              url: urlBase + "/Groups/:id/employees",
              method: "DELETE",
            },

            // INTERNAL. Use Group.employees.count() instead.
            "prototype$__count__employees": {
              url: urlBase + "/Groups/:id/employees/count",
              method: "GET",
            },

            // INTERNAL. Use Group.issueReports() instead.
            "prototype$__get__issueReports": {
              isArray: true,
              url: urlBase + "/Groups/:id/issueReports",
              method: "GET",
            },

            // INTERNAL. Use Group.issueReports.create() instead.
            "prototype$__create__issueReports": {
              url: urlBase + "/Groups/:id/issueReports",
              method: "POST",
            },

            // INTERNAL. Use Group.issueReports.destroyAll() instead.
            "prototype$__delete__issueReports": {
              url: urlBase + "/Groups/:id/issueReports",
              method: "DELETE",
            },

            // INTERNAL. Use Group.issueReports.count() instead.
            "prototype$__count__issueReports": {
              url: urlBase + "/Groups/:id/issueReports/count",
              method: "GET",
            },

            // INTERNAL. Use Group.confirmations() instead.
            "prototype$__get__confirmations": {
              isArray: true,
              url: urlBase + "/Groups/:id/confirmations",
              method: "GET",
            },

            // INTERNAL. Use Group.confirmations.create() instead.
            "prototype$__create__confirmations": {
              url: urlBase + "/Groups/:id/confirmations",
              method: "POST",
            },

            // INTERNAL. Use Group.confirmations.destroyAll() instead.
            "prototype$__delete__confirmations": {
              url: urlBase + "/Groups/:id/confirmations",
              method: "DELETE",
            },

            // INTERNAL. Use Group.confirmations.count() instead.
            "prototype$__count__confirmations": {
              url: urlBase + "/Groups/:id/confirmations/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Group#create
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Groups",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Group#createMany
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Groups",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Group#upsert
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Groups",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Group#exists
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Groups/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Group#findById
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Groups/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Group#find
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Groups",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Group#findOne
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Groups/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Group#updateAll
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Groups/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Group#deleteById
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Groups/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Group#count
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Groups/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Group#prototype$updateAttributes
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Groups/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Group#createChangeStream
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Groups/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Employee.group() instead.
            "::get::Employee::group": {
              url: urlBase + "/Employees/:id/group",
              method: "GET",
            },

            // INTERNAL. Use Confirmation.group() instead.
            "::get::Confirmation::group": {
              url: urlBase + "/Confirmations/:id/group",
              method: "GET",
            },

            // INTERNAL. Use IssueReport.group() instead.
            "::get::IssueReport::group": {
              url: urlBase + "/IssueReports/:id/group",
              method: "GET",
            },

            // INTERNAL. Use State.groups.findById() instead.
            "::findById::State::groups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/groups/:fk",
              method: "GET",
            },

            // INTERNAL. Use State.groups.destroyById() instead.
            "::destroyById::State::groups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/groups/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use State.groups.updateById() instead.
            "::updateById::State::groups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/States/:id/groups/:fk",
              method: "PUT",
            },

            // INTERNAL. Use State.groups() instead.
            "::get::State::groups": {
              isArray: true,
              url: urlBase + "/States/:id/groups",
              method: "GET",
            },

            // INTERNAL. Use State.groups.create() instead.
            "::create::State::groups": {
              url: urlBase + "/States/:id/groups",
              method: "POST",
            },

            // INTERNAL. Use State.groups.createMany() instead.
            "::createMany::State::groups": {
              isArray: true,
              url: urlBase + "/States/:id/groups",
              method: "POST",
            },

            // INTERNAL. Use State.groups.destroyAll() instead.
            "::delete::State::groups": {
              url: urlBase + "/States/:id/groups",
              method: "DELETE",
            },

            // INTERNAL. Use State.groups.count() instead.
            "::count::State::groups": {
              url: urlBase + "/States/:id/groups/count",
              method: "GET",
            },

            // INTERNAL. Use Company.groups.findById() instead.
            "::findById::Company::groups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/groups/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.groups.destroyById() instead.
            "::destroyById::Company::groups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/groups/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.groups.updateById() instead.
            "::updateById::Company::groups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/groups/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.groups() instead.
            "::get::Company::groups": {
              isArray: true,
              url: urlBase + "/Companies/:id/groups",
              method: "GET",
            },

            // INTERNAL. Use Company.groups.create() instead.
            "::create::Company::groups": {
              url: urlBase + "/Companies/:id/groups",
              method: "POST",
            },

            // INTERNAL. Use Company.groups.createMany() instead.
            "::createMany::Company::groups": {
              isArray: true,
              url: urlBase + "/Companies/:id/groups",
              method: "POST",
            },

            // INTERNAL. Use Company.groups.destroyAll() instead.
            "::delete::Company::groups": {
              url: urlBase + "/Companies/:id/groups",
              method: "DELETE",
            },

            // INTERNAL. Use Company.groups.count() instead.
            "::count::Company::groups": {
              url: urlBase + "/Companies/:id/groups/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Group#updateOrCreate
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Group#update
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Group#destroyById
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Group#removeById
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Group#modelName
        * @propertyOf lbServices.Group
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Group`.
        */
        R.modelName = "Group";

    /**
     * @ngdoc object
     * @name lbServices.Group.employees
     * @header lbServices.Group.employees
     * @object
     * @description
     *
     * The object `Group.employees` groups methods
     * manipulating `Employee` instances related to `Group`.
     *
     * Call {@link lbServices.Group#employees Group.employees()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Group#employees
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Queries employees of Group.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::get::Group::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.employees#count
             * @methodOf lbServices.Group.employees
             *
             * @description
             *
             * Counts employees of Group.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.employees.count = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::count::Group::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.employees#create
             * @methodOf lbServices.Group.employees
             *
             * @description
             *
             * Creates a new instance in employees of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.create = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::create::Group::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.employees#createMany
             * @methodOf lbServices.Group.employees
             *
             * @description
             *
             * Creates a new instance in employees of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.createMany = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::createMany::Group::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.employees#destroyAll
             * @methodOf lbServices.Group.employees
             *
             * @description
             *
             * Deletes all employees of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employees.destroyAll = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::delete::Group::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.employees#destroyById
             * @methodOf lbServices.Group.employees
             *
             * @description
             *
             * Delete a related item by id for employees.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for employees
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employees.destroyById = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::destroyById::Group::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.employees#findById
             * @methodOf lbServices.Group.employees
             *
             * @description
             *
             * Find a related item by id for employees.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for employees
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.findById = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::findById::Group::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.employees#updateById
             * @methodOf lbServices.Group.employees
             *
             * @description
             *
             * Update a related item by id for employees.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for employees
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.updateById = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::updateById::Group::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group#state
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Fetches belongsTo relation state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R.state = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::get::Group::state"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Group.issueReports
     * @header lbServices.Group.issueReports
     * @object
     * @description
     *
     * The object `Group.issueReports` groups methods
     * manipulating `IssueReport` instances related to `Group`.
     *
     * Call {@link lbServices.Group#issueReports Group.issueReports()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Group#issueReports
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Queries issueReports of Group.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::get::Group::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.issueReports#count
             * @methodOf lbServices.Group.issueReports
             *
             * @description
             *
             * Counts issueReports of Group.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.issueReports.count = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::count::Group::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.issueReports#create
             * @methodOf lbServices.Group.issueReports
             *
             * @description
             *
             * Creates a new instance in issueReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.create = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::create::Group::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.issueReports#createMany
             * @methodOf lbServices.Group.issueReports
             *
             * @description
             *
             * Creates a new instance in issueReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.createMany = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::createMany::Group::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.issueReports#destroyAll
             * @methodOf lbServices.Group.issueReports
             *
             * @description
             *
             * Deletes all issueReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.issueReports.destroyAll = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::delete::Group::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.issueReports#destroyById
             * @methodOf lbServices.Group.issueReports
             *
             * @description
             *
             * Delete a related item by id for issueReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for issueReports
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.issueReports.destroyById = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::destroyById::Group::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.issueReports#findById
             * @methodOf lbServices.Group.issueReports
             *
             * @description
             *
             * Find a related item by id for issueReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for issueReports
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.findById = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::findById::Group::issueReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.issueReports#updateById
             * @methodOf lbServices.Group.issueReports
             *
             * @description
             *
             * Update a related item by id for issueReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for issueReports
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `IssueReport` object.)
             * </em>
             */
        R.issueReports.updateById = function() {
          var TargetResource = $injector.get("IssueReport");
          var action = TargetResource["::updateById::Group::issueReports"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Group.confirmations
     * @header lbServices.Group.confirmations
     * @object
     * @description
     *
     * The object `Group.confirmations` groups methods
     * manipulating `Confirmation` instances related to `Group`.
     *
     * Call {@link lbServices.Group#confirmations Group.confirmations()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Group#confirmations
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Queries confirmations of Group.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::get::Group::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.confirmations#count
             * @methodOf lbServices.Group.confirmations
             *
             * @description
             *
             * Counts confirmations of Group.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.confirmations.count = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::count::Group::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.confirmations#create
             * @methodOf lbServices.Group.confirmations
             *
             * @description
             *
             * Creates a new instance in confirmations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.create = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::create::Group::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.confirmations#createMany
             * @methodOf lbServices.Group.confirmations
             *
             * @description
             *
             * Creates a new instance in confirmations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.createMany = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::createMany::Group::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.confirmations#destroyAll
             * @methodOf lbServices.Group.confirmations
             *
             * @description
             *
             * Deletes all confirmations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.confirmations.destroyAll = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::delete::Group::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.confirmations#destroyById
             * @methodOf lbServices.Group.confirmations
             *
             * @description
             *
             * Delete a related item by id for confirmations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for confirmations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.confirmations.destroyById = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::destroyById::Group::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.confirmations#findById
             * @methodOf lbServices.Group.confirmations
             *
             * @description
             *
             * Find a related item by id for confirmations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for confirmations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.findById = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::findById::Group::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group.confirmations#updateById
             * @methodOf lbServices.Group.confirmations
             *
             * @description
             *
             * Update a related item by id for confirmations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for confirmations
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.updateById = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::updateById::Group::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Group#region
             * @methodOf lbServices.Group
             *
             * @description
             *
             * Fetches belongsTo relation region.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.region = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::get::Group::region"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Member
 * @header lbServices.Member
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Member` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Member",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Members/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Member#prototype$__findById__accessTokens
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Members/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#prototype$__destroyById__accessTokens
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Members/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#prototype$__updateById__accessTokens
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Members/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Member.state() instead.
            "prototype$__get__state": {
              url: urlBase + "/Members/:id/state",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#prototype$__get__accessTokens
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Queries accessTokens of Member.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Members/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#prototype$__create__accessTokens
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Members/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#prototype$__delete__accessTokens
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Members/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#prototype$__count__accessTokens
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Counts accessTokens of Member.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Members/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#create
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Members",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#createMany
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Members",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#upsert
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Members",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#exists
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Members/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#findById
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Members/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#find
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Members",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#findOne
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Members/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#updateAll
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Members/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#deleteById
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Members/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#count
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Members/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#prototype$updateAttributes
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Members/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#createChangeStream
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Members/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#login
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Members/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#logout
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Members/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#confirm
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Members/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#resetPassword
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Members/reset",
              method: "POST",
            },

            // INTERNAL. Use Employee.member() instead.
            "::get::Employee::member": {
              url: urlBase + "/Employees/:id/member",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Member#getCurrent
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Members" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Member#updateOrCreate
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Member#update
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Member#destroyById
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Member#removeById
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Member` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Member#getCachedCurrent
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Member#login} or
         * {@link lbServices.Member#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Member instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Member#isAuthenticated
         * @methodOf lbServices.Member
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Member#getCurrentId
         * @methodOf lbServices.Member
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Member#modelName
        * @propertyOf lbServices.Member
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Member`.
        */
        R.modelName = "Member";


            /**
             * @ngdoc method
             * @name lbServices.Member#state
             * @methodOf lbServices.Member
             *
             * @description
             *
             * Fetches belongsTo relation state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R.state = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::get::Member::state"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Company
 * @header lbServices.Company
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Company` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Company",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Companies/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Company.states.findById() instead.
            "prototype$__findById__states": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/states/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.states.destroyById() instead.
            "prototype$__destroyById__states": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/states/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.states.updateById() instead.
            "prototype$__updateById__states": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/states/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.groups.findById() instead.
            "prototype$__findById__groups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/groups/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.groups.destroyById() instead.
            "prototype$__destroyById__groups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/groups/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.groups.updateById() instead.
            "prototype$__updateById__groups": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/groups/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.employees.findById() instead.
            "prototype$__findById__employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/employees/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.employees.destroyById() instead.
            "prototype$__destroyById__employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/employees/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.employees.updateById() instead.
            "prototype$__updateById__employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/employees/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.confirmations.findById() instead.
            "prototype$__findById__confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/confirmations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.confirmations.destroyById() instead.
            "prototype$__destroyById__confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/confirmations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.confirmations.updateById() instead.
            "prototype$__updateById__confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/confirmations/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.regions.findById() instead.
            "prototype$__findById__regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/regions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.regions.destroyById() instead.
            "prototype$__destroyById__regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/regions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.regions.updateById() instead.
            "prototype$__updateById__regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/regions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.states() instead.
            "prototype$__get__states": {
              isArray: true,
              url: urlBase + "/Companies/:id/states",
              method: "GET",
            },

            // INTERNAL. Use Company.states.create() instead.
            "prototype$__create__states": {
              url: urlBase + "/Companies/:id/states",
              method: "POST",
            },

            // INTERNAL. Use Company.states.destroyAll() instead.
            "prototype$__delete__states": {
              url: urlBase + "/Companies/:id/states",
              method: "DELETE",
            },

            // INTERNAL. Use Company.states.count() instead.
            "prototype$__count__states": {
              url: urlBase + "/Companies/:id/states/count",
              method: "GET",
            },

            // INTERNAL. Use Company.groups() instead.
            "prototype$__get__groups": {
              isArray: true,
              url: urlBase + "/Companies/:id/groups",
              method: "GET",
            },

            // INTERNAL. Use Company.groups.create() instead.
            "prototype$__create__groups": {
              url: urlBase + "/Companies/:id/groups",
              method: "POST",
            },

            // INTERNAL. Use Company.groups.destroyAll() instead.
            "prototype$__delete__groups": {
              url: urlBase + "/Companies/:id/groups",
              method: "DELETE",
            },

            // INTERNAL. Use Company.groups.count() instead.
            "prototype$__count__groups": {
              url: urlBase + "/Companies/:id/groups/count",
              method: "GET",
            },

            // INTERNAL. Use Company.employees() instead.
            "prototype$__get__employees": {
              isArray: true,
              url: urlBase + "/Companies/:id/employees",
              method: "GET",
            },

            // INTERNAL. Use Company.employees.create() instead.
            "prototype$__create__employees": {
              url: urlBase + "/Companies/:id/employees",
              method: "POST",
            },

            // INTERNAL. Use Company.employees.destroyAll() instead.
            "prototype$__delete__employees": {
              url: urlBase + "/Companies/:id/employees",
              method: "DELETE",
            },

            // INTERNAL. Use Company.employees.count() instead.
            "prototype$__count__employees": {
              url: urlBase + "/Companies/:id/employees/count",
              method: "GET",
            },

            // INTERNAL. Use Company.confirmations() instead.
            "prototype$__get__confirmations": {
              isArray: true,
              url: urlBase + "/Companies/:id/confirmations",
              method: "GET",
            },

            // INTERNAL. Use Company.confirmations.create() instead.
            "prototype$__create__confirmations": {
              url: urlBase + "/Companies/:id/confirmations",
              method: "POST",
            },

            // INTERNAL. Use Company.confirmations.destroyAll() instead.
            "prototype$__delete__confirmations": {
              url: urlBase + "/Companies/:id/confirmations",
              method: "DELETE",
            },

            // INTERNAL. Use Company.confirmations.count() instead.
            "prototype$__count__confirmations": {
              url: urlBase + "/Companies/:id/confirmations/count",
              method: "GET",
            },

            // INTERNAL. Use Company.regions() instead.
            "prototype$__get__regions": {
              isArray: true,
              url: urlBase + "/Companies/:id/regions",
              method: "GET",
            },

            // INTERNAL. Use Company.regions.create() instead.
            "prototype$__create__regions": {
              url: urlBase + "/Companies/:id/regions",
              method: "POST",
            },

            // INTERNAL. Use Company.regions.destroyAll() instead.
            "prototype$__delete__regions": {
              url: urlBase + "/Companies/:id/regions",
              method: "DELETE",
            },

            // INTERNAL. Use Company.regions.count() instead.
            "prototype$__count__regions": {
              url: urlBase + "/Companies/:id/regions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#create
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Companies",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#createMany
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Companies",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#upsert
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Companies",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#exists
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Companies/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#findById
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Companies/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#find
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Companies",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#findOne
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Companies/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#updateAll
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Companies/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#deleteById
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Companies/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#count
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Companies/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#prototype$updateAttributes
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Companies/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#createChangeStream
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Companies/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Employee.company() instead.
            "::get::Employee::company": {
              url: urlBase + "/Employees/:id/company",
              method: "GET",
            },

            // INTERNAL. Use State.company() instead.
            "::get::State::company": {
              url: urlBase + "/States/:id/company",
              method: "GET",
            },

            // INTERNAL. Use Region.company() instead.
            "::get::Region::company": {
              url: urlBase + "/Regions/:id/company",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Company#updateOrCreate
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Company#update
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Company#destroyById
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Company#removeById
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Company#modelName
        * @propertyOf lbServices.Company
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Company`.
        */
        R.modelName = "Company";

    /**
     * @ngdoc object
     * @name lbServices.Company.states
     * @header lbServices.Company.states
     * @object
     * @description
     *
     * The object `Company.states` groups methods
     * manipulating `State` instances related to `Company`.
     *
     * Call {@link lbServices.Company#states Company.states()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Company#states
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Queries states of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R.states = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::get::Company::states"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.states#count
             * @methodOf lbServices.Company.states
             *
             * @description
             *
             * Counts states of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.states.count = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::count::Company::states"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.states#create
             * @methodOf lbServices.Company.states
             *
             * @description
             *
             * Creates a new instance in states of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R.states.create = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::create::Company::states"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.states#createMany
             * @methodOf lbServices.Company.states
             *
             * @description
             *
             * Creates a new instance in states of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R.states.createMany = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::createMany::Company::states"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.states#destroyAll
             * @methodOf lbServices.Company.states
             *
             * @description
             *
             * Deletes all states of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.states.destroyAll = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::delete::Company::states"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.states#destroyById
             * @methodOf lbServices.Company.states
             *
             * @description
             *
             * Delete a related item by id for states.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for states
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.states.destroyById = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::destroyById::Company::states"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.states#findById
             * @methodOf lbServices.Company.states
             *
             * @description
             *
             * Find a related item by id for states.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for states
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R.states.findById = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::findById::Company::states"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.states#updateById
             * @methodOf lbServices.Company.states
             *
             * @description
             *
             * Update a related item by id for states.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for states
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R.states.updateById = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::updateById::Company::states"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.groups
     * @header lbServices.Company.groups
     * @object
     * @description
     *
     * The object `Company.groups` groups methods
     * manipulating `Group` instances related to `Company`.
     *
     * Call {@link lbServices.Company#groups Company.groups()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Company#groups
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Queries groups of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R.groups = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::get::Company::groups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.groups#count
             * @methodOf lbServices.Company.groups
             *
             * @description
             *
             * Counts groups of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.groups.count = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::count::Company::groups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.groups#create
             * @methodOf lbServices.Company.groups
             *
             * @description
             *
             * Creates a new instance in groups of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R.groups.create = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::create::Company::groups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.groups#createMany
             * @methodOf lbServices.Company.groups
             *
             * @description
             *
             * Creates a new instance in groups of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R.groups.createMany = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::createMany::Company::groups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.groups#destroyAll
             * @methodOf lbServices.Company.groups
             *
             * @description
             *
             * Deletes all groups of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.groups.destroyAll = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::delete::Company::groups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.groups#destroyById
             * @methodOf lbServices.Company.groups
             *
             * @description
             *
             * Delete a related item by id for groups.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for groups
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.groups.destroyById = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::destroyById::Company::groups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.groups#findById
             * @methodOf lbServices.Company.groups
             *
             * @description
             *
             * Find a related item by id for groups.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for groups
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R.groups.findById = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::findById::Company::groups"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.groups#updateById
             * @methodOf lbServices.Company.groups
             *
             * @description
             *
             * Update a related item by id for groups.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for groups
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Group` object.)
             * </em>
             */
        R.groups.updateById = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::updateById::Company::groups"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.employees
     * @header lbServices.Company.employees
     * @object
     * @description
     *
     * The object `Company.employees` groups methods
     * manipulating `Employee` instances related to `Company`.
     *
     * Call {@link lbServices.Company#employees Company.employees()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Company#employees
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Queries employees of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::get::Company::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.employees#count
             * @methodOf lbServices.Company.employees
             *
             * @description
             *
             * Counts employees of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.employees.count = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::count::Company::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.employees#create
             * @methodOf lbServices.Company.employees
             *
             * @description
             *
             * Creates a new instance in employees of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.create = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::create::Company::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.employees#createMany
             * @methodOf lbServices.Company.employees
             *
             * @description
             *
             * Creates a new instance in employees of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.createMany = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::createMany::Company::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.employees#destroyAll
             * @methodOf lbServices.Company.employees
             *
             * @description
             *
             * Deletes all employees of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employees.destroyAll = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::delete::Company::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.employees#destroyById
             * @methodOf lbServices.Company.employees
             *
             * @description
             *
             * Delete a related item by id for employees.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for employees
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employees.destroyById = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::destroyById::Company::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.employees#findById
             * @methodOf lbServices.Company.employees
             *
             * @description
             *
             * Find a related item by id for employees.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for employees
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.findById = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::findById::Company::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.employees#updateById
             * @methodOf lbServices.Company.employees
             *
             * @description
             *
             * Update a related item by id for employees.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for employees
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.updateById = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::updateById::Company::employees"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.confirmations
     * @header lbServices.Company.confirmations
     * @object
     * @description
     *
     * The object `Company.confirmations` groups methods
     * manipulating `Confirmation` instances related to `Company`.
     *
     * Call {@link lbServices.Company#confirmations Company.confirmations()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Company#confirmations
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Queries confirmations of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::get::Company::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.confirmations#count
             * @methodOf lbServices.Company.confirmations
             *
             * @description
             *
             * Counts confirmations of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.confirmations.count = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::count::Company::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.confirmations#create
             * @methodOf lbServices.Company.confirmations
             *
             * @description
             *
             * Creates a new instance in confirmations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.create = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::create::Company::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.confirmations#createMany
             * @methodOf lbServices.Company.confirmations
             *
             * @description
             *
             * Creates a new instance in confirmations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.createMany = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::createMany::Company::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.confirmations#destroyAll
             * @methodOf lbServices.Company.confirmations
             *
             * @description
             *
             * Deletes all confirmations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.confirmations.destroyAll = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::delete::Company::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.confirmations#destroyById
             * @methodOf lbServices.Company.confirmations
             *
             * @description
             *
             * Delete a related item by id for confirmations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for confirmations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.confirmations.destroyById = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::destroyById::Company::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.confirmations#findById
             * @methodOf lbServices.Company.confirmations
             *
             * @description
             *
             * Find a related item by id for confirmations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for confirmations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.findById = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::findById::Company::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.confirmations#updateById
             * @methodOf lbServices.Company.confirmations
             *
             * @description
             *
             * Update a related item by id for confirmations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for confirmations
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.updateById = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::updateById::Company::confirmations"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.regions
     * @header lbServices.Company.regions
     * @object
     * @description
     *
     * The object `Company.regions` groups methods
     * manipulating `Region` instances related to `Company`.
     *
     * Call {@link lbServices.Company#regions Company.regions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Company#regions
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Queries regions of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::get::Company::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.regions#count
             * @methodOf lbServices.Company.regions
             *
             * @description
             *
             * Counts regions of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.regions.count = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::count::Company::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.regions#create
             * @methodOf lbServices.Company.regions
             *
             * @description
             *
             * Creates a new instance in regions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions.create = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::create::Company::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.regions#createMany
             * @methodOf lbServices.Company.regions
             *
             * @description
             *
             * Creates a new instance in regions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions.createMany = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::createMany::Company::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.regions#destroyAll
             * @methodOf lbServices.Company.regions
             *
             * @description
             *
             * Deletes all regions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.regions.destroyAll = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::delete::Company::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.regions#destroyById
             * @methodOf lbServices.Company.regions
             *
             * @description
             *
             * Delete a related item by id for regions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for regions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.regions.destroyById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::destroyById::Company::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.regions#findById
             * @methodOf lbServices.Company.regions
             *
             * @description
             *
             * Find a related item by id for regions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for regions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions.findById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::findById::Company::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.regions#updateById
             * @methodOf lbServices.Company.regions
             *
             * @description
             *
             * Update a related item by id for regions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for regions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions.updateById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::updateById::Company::regions"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Region
 * @header lbServices.Region
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Region` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Region",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Regions/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Region.company() instead.
            "prototype$__get__company": {
              url: urlBase + "/Regions/:id/company",
              method: "GET",
            },

            // INTERNAL. Use Region.confirmations.findById() instead.
            "prototype$__findById__confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Regions/:id/confirmations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Region.confirmations.destroyById() instead.
            "prototype$__destroyById__confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Regions/:id/confirmations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Region.confirmations.updateById() instead.
            "prototype$__updateById__confirmations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Regions/:id/confirmations/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Region.confirmations() instead.
            "prototype$__get__confirmations": {
              isArray: true,
              url: urlBase + "/Regions/:id/confirmations",
              method: "GET",
            },

            // INTERNAL. Use Region.confirmations.create() instead.
            "prototype$__create__confirmations": {
              url: urlBase + "/Regions/:id/confirmations",
              method: "POST",
            },

            // INTERNAL. Use Region.confirmations.destroyAll() instead.
            "prototype$__delete__confirmations": {
              url: urlBase + "/Regions/:id/confirmations",
              method: "DELETE",
            },

            // INTERNAL. Use Region.confirmations.count() instead.
            "prototype$__count__confirmations": {
              url: urlBase + "/Regions/:id/confirmations/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#create
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Regions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#createMany
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Regions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#upsert
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Regions",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#exists
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Regions/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#findById
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Regions/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#find
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Regions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#findOne
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Regions/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#updateAll
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Regions/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#deleteById
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Regions/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#count
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Regions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#prototype$updateAttributes
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Regions/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#createChangeStream
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Regions/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Employee.region() instead.
            "::get::Employee::region": {
              url: urlBase + "/Employees/:id/region",
              method: "GET",
            },

            // INTERNAL. Use State.region() instead.
            "::get::State::region": {
              url: urlBase + "/States/:id/region",
              method: "GET",
            },

            // INTERNAL. Use Group.region() instead.
            "::get::Group::region": {
              url: urlBase + "/Groups/:id/region",
              method: "GET",
            },

            // INTERNAL. Use Company.regions.findById() instead.
            "::findById::Company::regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/regions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.regions.destroyById() instead.
            "::destroyById::Company::regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/regions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.regions.updateById() instead.
            "::updateById::Company::regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Companies/:id/regions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.regions() instead.
            "::get::Company::regions": {
              isArray: true,
              url: urlBase + "/Companies/:id/regions",
              method: "GET",
            },

            // INTERNAL. Use Company.regions.create() instead.
            "::create::Company::regions": {
              url: urlBase + "/Companies/:id/regions",
              method: "POST",
            },

            // INTERNAL. Use Company.regions.createMany() instead.
            "::createMany::Company::regions": {
              isArray: true,
              url: urlBase + "/Companies/:id/regions",
              method: "POST",
            },

            // INTERNAL. Use Company.regions.destroyAll() instead.
            "::delete::Company::regions": {
              url: urlBase + "/Companies/:id/regions",
              method: "DELETE",
            },

            // INTERNAL. Use Company.regions.count() instead.
            "::count::Company::regions": {
              url: urlBase + "/Companies/:id/regions/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Region#updateOrCreate
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Region#update
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Region#destroyById
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Region#removeById
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Region#modelName
        * @propertyOf lbServices.Region
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Region`.
        */
        R.modelName = "Region";


            /**
             * @ngdoc method
             * @name lbServices.Region#company
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Fetches belongsTo relation company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::Region::company"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Region.confirmations
     * @header lbServices.Region.confirmations
     * @object
     * @description
     *
     * The object `Region.confirmations` groups methods
     * manipulating `Confirmation` instances related to `Region`.
     *
     * Call {@link lbServices.Region#confirmations Region.confirmations()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Region#confirmations
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Queries confirmations of Region.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::get::Region::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.confirmations#count
             * @methodOf lbServices.Region.confirmations
             *
             * @description
             *
             * Counts confirmations of Region.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.confirmations.count = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::count::Region::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.confirmations#create
             * @methodOf lbServices.Region.confirmations
             *
             * @description
             *
             * Creates a new instance in confirmations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.create = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::create::Region::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.confirmations#createMany
             * @methodOf lbServices.Region.confirmations
             *
             * @description
             *
             * Creates a new instance in confirmations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.createMany = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::createMany::Region::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.confirmations#destroyAll
             * @methodOf lbServices.Region.confirmations
             *
             * @description
             *
             * Deletes all confirmations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.confirmations.destroyAll = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::delete::Region::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.confirmations#destroyById
             * @methodOf lbServices.Region.confirmations
             *
             * @description
             *
             * Delete a related item by id for confirmations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for confirmations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.confirmations.destroyById = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::destroyById::Region::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.confirmations#findById
             * @methodOf lbServices.Region.confirmations
             *
             * @description
             *
             * Find a related item by id for confirmations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for confirmations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.findById = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::findById::Region::confirmations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.confirmations#updateById
             * @methodOf lbServices.Region.confirmations
             *
             * @description
             *
             * Update a related item by id for confirmations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for confirmations
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Confirmation` object.)
             * </em>
             */
        R.confirmations.updateById = function() {
          var TargetResource = $injector.get("Confirmation");
          var action = TargetResource["::updateById::Region::confirmations"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
