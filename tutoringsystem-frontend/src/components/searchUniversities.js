import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})


function UniversityDto(name) {
    this.name = name
}
function CoursesDto(courseCode){
    this.courseCode = courseCode
}

export default{
    name: 'universities',
    data () {
      return {
        universities: [],
        newUniversity: '',
        selectedUniversity: '',
        errorUniversity: '',
        
        courses: [],
        newCourse: '',
        selectedCourse: '',
        errorCourse: '',
        response: []
      }
    },
    methods : {
        getUniversities: function () {
                // Initializing people from backend
                  AXIOS.get(`/universities`)
                  .then(response => {
                    // JSON responses are automatically parsed.
                    this.universities = response.data
                    this.errorUniversity =''
                  })
                  .catch(e => {
                    this.errorUniversity = e.response.data.message;
                  });
          },
          getCourses: function(uniName){
            AXIOS.get(`/courses/`+ uniName )
            .then(response => {
              // JSON responses are automatically parsed.
              this.courses = response.data
            })
            .catch(e => {
              this.errorCourse = e;
            });
          }
  }
}