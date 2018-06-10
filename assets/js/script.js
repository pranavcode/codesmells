var codesmells = [{
  "name": "Alternative Classes with Different Interfaces",
	"category": "Tool Abusers",
	"excerpt": "Classes performing same functions but have different method names.",
  "description": "This smells occurs when there are two or more classes that performs \
    identical function or operation during an action but have different method names for the same.",
  "reasons": "This happens when a programmer who created one of the classes might \
    be unaware of the class that have a same functionality. Due to this \
    ignorance the programmer tends to create a new class or method that \
    exhibit equivalent functionality.",
  "solutions": "If you can find the similarities between the two classes, you can \
    often refactor the classes to make them share a common interface. Rename methods \
    to a common name in all the classes. Move them, add parameters and inject objects \
    to enable them to be moved to a common interface. You may move the methods to a \
    super-class and existing classes will become sub-classes. Its normal to come to \
    a point where certain class seems to be redundant and easily removed.",
  "refactorings": ""
}, {
  "name": "Comments",
  "category": "Dispensables",
  "excerpt": "Methods or classes filled with explanatory comments.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Data Class",
  "category": "Dispensables",
  "excerpt": "Class responsible only for holding fields and accessor methods without\
    haveing additional functionality to operate on the data they own.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Data Clumps",
  "category": "Bloaters",
  "excerpt": "Pieces of information that flows together across methods or classes.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Divergent Change",
  "category": "Change Preventers",
  "excerpt": "Situation that forces change in many unrelated class methods when changes are made to a class.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Duplicate Code",
  "category": "Dispensables",
  "excerpt": "Almost identical pieces of code repeated in two or more places.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Feature Envy",
  "category": "Couplers",
  "excerpt": "Classes that tends to work on data from other classes than their own.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Inappropriate Intimacy",
  "category": "Couplers",
  "excerpt": "Class uses private methods or data of another class.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Incomplete Library Client",
  "category": "Couplers",
  "excerpt": "Third-party library stops meeting project's upcoming needs.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Large Class",
  "category": "Bloaters",
  "excerpt": "Class have \"too\" many fields/methods/lines of code.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Lazy Class",
  "category": "Dispensables",
  "excerpt": "Class that is maintained but does nothing.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Long Method",
  "category": "Bloaters",
  "excerpt": "Method containing too many lines of code.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Long Parameter List",
  "category": "Bloaters",
  "excerpt": "Methods that take too many parameters as their arguments.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Message Chains",
  "category": "Couplers",
  "excerpt": "Successive calls made from one method to another with multiple hops \
    in between to accomplish specific thing.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Middle Man",
  "category": "Couplers",
  "excerpt": "Class that exits for a sole purpose of delegating work to other class.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Parallel Inheritance Hierarchies",
  "category": "Change Preventers",
  "excerpt": "Changes made to one set of hierarchical classes needs its replication into parallel classes.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Primitive Obsession",
  "category": "Bloaters",
  "excerpt": "Obsessive use of primitive types instead of small classes for simple tasks.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Refused Bequest",
  "category": "Tool Abusers",
  "excerpt": "Sub-classes use only some of the methods and data inheirted from parent \
    classes, keeping unneeded methods unused or redefined to throw undefined exceptions.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Shotgun Surgery",
  "category": "Change Preventers",
  "excerpt": "Adding a change in specific part of the code requires many small changes in many different classes.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Speculative Generality",
  "category": "Dispensables",
  "excerpt": "Code that is written in anticipation of future requirements and stays unused forever.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Switch Statements",
  "category": "Tool Abusers",
  "excerpt": "Complex set of conditionals to perform next step.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}, {
  "name": "Temporary Field",
  "category": "Tool Abusers",
  "excerpt": "Temporary properties that get their values under very specific circumstances,\
    otherwise remains empty.",
  "description": "",
  "reasons": "",
  "solutions": "",
  "refactorings": "",
}]

function resetFilterButtons() {
  $('.filters .btn').each(function(index){
    var GREY_COLOR = "#9e9e9e";
    $(this).css("background", GREY_COLOR);
  });
}

function search() {
  resetFilterButtons();
  var searchTerm = $('#search-box').val().toLowerCase()
  $('.card').each(function(index){
    if(this.innerHTML.toLowerCase().indexOf(searchTerm) > -1) {
      $(this).parent().show();
    } else {
      $(this).parent().hide();
    }
  });
}

function categorize(category) {
  if(category === 'Clear') {
    $('.card').each(function(index){
      $(this).parent().show();
    });
    resetFilterButtons();
    $('.clearfilters').hide();
  } else {
    $('.card-header').each(function(index){
      if(this.innerHTML.indexOf(category) > -1) {
        $(this).parent().parent().show();
      } else {
        $(this).parent().parent().hide();
      }
    });

    $('.filters .btn').each(function(index){
      if(this.innerHTML.indexOf(category) > -1) {
        $(this).css("background", "#1e1e1e");
      } else {
        $(this).css("background", "#9e9e9e");
      }
    });

    $('.clearfilters').show();
  }
}

function generateCodeSmells() {
  var node = $(".codesmell-section").clone();
  node.removeClass("codesmell-section");
  var nodeBackup = node;
  codesmells.forEach(function(codesmell) {
    node = nodeBackup.clone();
    node.find('.card-header').text(codesmell['category']);
    node.find('.card-title').text(codesmell['name']);
    node.find('.card-text').text(codesmell['excerpt']);

    $('.codesmells > .row').append(node);
  });
  $('.codesmell-section').remove();
}

$(function() {
  generateCodeSmells();

  $('.expansion-section').click(function() {
    currentCardTitle = $(this).find('.card-title').text();
    $('.expansion-section').each(function(index) {
      if($(this).find('.card-title').text() !== currentCardTitle) {
        $(this).hide();
      }
    });
    $(this).removeClass("col-lg-4 col-md-6");
    $(this).find(".details").show();
    $(this).find(".close-expansion").show();
  });

  $('.close-expansion').click(function() {
    location.reload();
  });
});
