var filters = [{
  "name": "Bloaters",
  "description":
    "Bloaters are usually code which has grown to a considerable \
    size that makes it difficult to work with and maintain in the \
    long run. These could be methods as well as classes. These \
    type of smells are not very evident right away. Instead, they \
    start to grow over time, as the software evolves. Conscious \
    effort is required by someone to make sure these type of smells \
    are eradicated as an when possible and not ignored forever."
}, {
  "name": "Tool Abusers",
  "description":
    "Our primary programming paradigm in this context \
    is object-oriented programming. These abusers are \
    smells that are incorrect, inappropriate or sometimes incomplete \
    applications of principles of object-orientated programming. \
    Knowing things and unnecessarily applying them to places where \
    they could be hazardous is not a sound way of approaching solutions."
}, {
  "name": "Change Preventers",
  "description":
    "Change preventers literally make code masters from making meaningful \
    and required changes. These smells suggest that if you need to change \
    something in one place of your code, you have to make significant \
    changes in other areas too. As a result of which, the development \
    cost goes up making it expensive and complicated."
}, {
  "name": "Dispensables",
  "description":
    "Dispensables are smells that represents things are not vital \
    to the code. In other words, things that are pointless and unneeded. \
    The code becomes cleaner, efficient and straightforward if \
    these dispensable code pieces are removed. Which also enhances \
    its readability."
}, {
  "name": "Couplers",
  "description":
    "Coupler smells represent the attraction behavior of two classes \
    which could be called excessive. The way the code design helps in \
    contributing to this excessive coupling between classes. Also, the \
    smell could occur when disproportionate delegation happens from \
    one class to another."
}];

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
  "refactorings": "If you can find the similarities between the two classes, you can \
    often refactor the classes to make them share a common interface. Rename methods \
    to a common name in all the classes. Move them, add parameters and inject objects \
    to enable them to be moved to a common interface. You may move the methods to a \
    super-class and existing classes will become sub-classes. Its normal to come to \
    a point where certain class seems to be redundant and easily removable.",
  "references": "Move Method (Fowler, 142), Rename Method (Fowler, 273)"
}, {
  "name": "Comments",
  "category": "Dispensables",
  "excerpt": "Methods or classes filled with explanatory comments.",
  "description": "Comments are created near the code to provide elaborate discussion about it. \
    These are wisely positioned and decorated, but not necessarily required.",
  "reasons": "These are written when the code master feels the need to explain \
    the code as it is not very intuitive or straightforward. Such situations are \
    not natural but human-made. Sometimes, hiding the holes in the fishy code \
    that could be improved. Changing the structure of the code or better naming \
    could make comments unnecessary.",
  "refactorings": "If the comment talks about the section of code and explains it in \
    further details, this section can be extracted as a method with a name that \
    describes the code better. Expressions which needs comments to clarify further \
    the operations happening within it could be extracted as separate variables with \
    their subexpressions. Methods that carry comments with them are in need of a \
    self-explanatory name, so please rename them. If some assumptions are required \
    to allow code to word correct, check the assumptions directly instead of putting \
    them as comments.",
  "references": "Extract Method (Fowler, 110), Introduce Assertion (Fowler 267), \
    Rename Method (Fowler, 273)",
}, {
  "name": "Data Class",
  "category": "Dispensables",
  "excerpt": "Class responsible only for holding fields and accessor methods without \
    having additional functionality to operate on the data they own.",
  "description": "These classes have data fields, and corresponding is getting and \
    setting methods to read and modify that data. These methods are also called crude \
    methods. These are merely used as containers of data required by other classes. \
    These classes being dumb, are almost certainly being manipulated in far too much \
    detail by others.",
  "reasons": "These classes are the result of in-process extraction of objects as data \
    objects but never get their operations. These classes are created by having public \
    fields and accessing methods (getters and setters), not considering the real power \
    of objects being into their behavior to operate and manage their data because they \
    know it better.",
  "refactorings": "",
  "references": "Move Method (Fowler, 142), Encapsulate Field (Fowler, 206), \
    Encapsulate Collection (Fowler, 208)",
}, {
  "name": "Data Clumps",
  "category": "Bloaters",
  "excerpt": "Pieces of information that flows together across methods or classes.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Extract Class (Fowler, 149), Preserve Whole Object (Fowler, 288), \
    Introduce Parameter Object (Fowler, 295)",
}, {
  "name": "Divergent Change",
  "category": "Change Preventers",
  "excerpt": "Situation that forces change in many unrelated class methods when \
    changes are made to a class.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Extract Class (Fowler, 149)",
}, {
  "name": "Duplicate Code",
  "category": "Dispensables",
  "excerpt": "Almost identical pieces of code repeated in two or more places.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Extract Method (Fowler, 110), Substitue Algorithm (Fowler, 139), \
    Extract Class (Fowler, 149), Introduce Null Object (Fowler, 260), \
    Pull Up Field (Fowler, 320), Pull Up Method (Fowler, 322), \
    Form Template Method (Fowler, 345)",
}, {
  "name": "Feature Envy",
  "category": "Couplers",
  "excerpt": "Classes that tends to work on data from other classes than their own.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references":
    "Extract Method (Fowler, 110), Move Method (Fowler, 142), Move Field (Fowler, 146)",
}, {
  "name": "Inappropriate Intimacy",
  "category": "Couplers",
  "excerpt": "Class uses private methods or data of another class.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references":
    "Move Method (Fowler, 142), Move Field (Fowler, 146), \
    Change Bidirectional Association to Unidirectional Association (Fowler, 200), \
    Extract Class (Fowler, 149), Hide Delegate (Fowler, 157), \
    Replace Inheritance with Delegation (Fowler, 352)",
}, {
  "name": "Incomplete Library Client",
  "category": "Couplers",
  "excerpt": "Third-party library stops meeting project's upcoming needs.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Introduce Foreign Method (Fowler, 162), \
    Introduce Local Extension (Fowler, 164)",
}, {
  "name": "Large Class",
  "category": "Bloaters",
  "excerpt": "Class have 'too' many fields/methods/lines of code.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Extract Class (Fowler, 149), Replace Data Value with Object (Fowler, 175), Extract Subclass (Fowler, 330), Extract Interface (Fowler, 341)",
}, {
  "name": "Lazy Class",
  "category": "Dispensables",
  "excerpt": "Class that is maintained but does nothing.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Inline Class (Fowler, 154), Collapse Hierarchy (Fowler, 344)",
}, {
  "name": "Long Method",
  "category": "Bloaters",
  "excerpt": "Method containing too many lines of code.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Extract Method (Fowler, 110), Replace Temp with Query (Fowler, 120), \
    Replace Method with Method Object (Fowler, 135), Decompose Conditional (Fowler, 238), \
    Preserve Whole Object (Fowler, 288), Introduce Parameter Object (Fowler, 295)",
}, {
  "name": "Long Parameter List",
  "category": "Bloaters",
  "excerpt": "Methods that take too many parameters as their arguments.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Preserve Whole Object (Fowler, 288), \
    Replace Parameter with Method (Fowler, 292), \
    Introduce Parameter Object (Fowler, 295)",
}, {
  "name": "Message Chains",
  "category": "Couplers",
  "excerpt": "Successive calls made from one method to another with multiple hops \
    in between to accomplish specific thing.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Extract Method (Fowler, 110), Move Method (Fowler, 142), \
    Hide Delegate (Fowler, 157)",
}, {
  "name": "Middle Man",
  "category": "Couplers",
  "excerpt": "Class that exits for a sole purpose of delegating work to other class.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Inline Method (Fowler, 117), Remove Middle Man (Fowler, 160), \
    Replace Delegation with Inheritance (Fowler, 355)",
}, {
  "name": "Parallel Inheritance Hierarchies",
  "category": "Change Preventers",
  "excerpt": "Changes made to one set of hierarchical classes needs its \
    replication into parallel classes.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Move Method (Fowler, 142), Move Field (Fowler, 146)",
}, {
  "name": "Primitive Obsession",
  "category": "Bloaters",
  "excerpt": "Obsessive use of primitive types instead of small classes for simple tasks.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Extract Class (Fowler, 149), Replace Data Value with Object (Fowler, 175), \
    Replace Array With Object (Fowler, 186), Replace Type Code with Class (Fowler, 218), \
    Replace Type Code with Subclasses (Fowler, 223), Replace Type Code with State/Strategy (Fowler, 227), \
    Introduce Parameter Object (Fowler, 295)",
}, {
  "name": "Refused Bequest",
  "category": "Tool Abusers",
  "excerpt": "Sub-classes use only some of the methods and data inheirted from parent \
    classes, keeping unneeded methods unused or redefined to throw undefined exceptions.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Push Down Field (Fowler, 329), Push Down Method (Fowler, 322), \
    Replace Inheritance with Delegation (Fowler, 352)",
}, {
  "name": "Shotgun Surgery",
  "category": "Change Preventers",
  "excerpt": "Adding a change in specific part of the code requires many small \
    changes in many different classes.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Move Method (Fowler, 142), Move Field (Fowler, 146), \
    Inline Class (Fowler, 154)",
}, {
  "name": "Speculative Generality",
  "category": "Dispensables",
  "excerpt": "Code that is written in anticipation of future requirements and \
    stays unused forever.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Inline Class (Fowler, 154), Rename Method (Fowler, 273), \
    Remove Parameter (Fowler, 277), Collapse Hierarchy (Fowler, 344)",
}, {
  "name": "Switch Statements",
  "category": "Tool Abusers",
  "excerpt": "Complex set of conditionals to perform next step.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Replace Type Code with Subclasses (Fowler, 223), \
    Replace Type Code with State/Strategy (Fowler, 227), \
    Replace Conditional with Polymorphism (Fowler, 255), \
    Replace Parameter with Explicit Methods (Fowler, 285), \
    Introduce Null Object (Fowler, 260)",
}, {
  "name": "Temporary Field",
  "category": "Tool Abusers",
  "excerpt": "Temporary properties that get their values under very specific \
    circumstances, otherwise remains empty.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Extract Class (Fowler, 149), Introduce Null Object (Fowler, 260)",
}]

function countSmells() {
  $(".count-smells").text("Showing " + $(".card:visible").length + " of 22 code smells");
}

function resetFilterButtons() {
  $('.filters .btn.filter').each(function(index) {
    $(this).css("background", "#9e9e9e");
  });
  $(".clearfilters").hide();
  $(".filter-section").hide();
}

function search() {
  resetFilterButtons();
  $('.card').each(function() {
    $(this).parent().show();
  })
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
    window.filter = '';
    $(".expansion-section").show();
    $(".filters-section").hide();
    resetFilterButtons();
  } else {
    window.filter = category;
    $(".filter-section").hide();
    $(".filter-section." + category.replace(/\s/g,'')).show();
    $(".card-header").each(function(index) {
      if(this.innerHTML.indexOf(category) > -1) {
        $(this).parent().parent().show();
      } else {
        $(this).parent().parent().hide();
      }
    });

    $(".filters .btn.filter").each(function(index){
      if(this.innerHTML.indexOf(category) > -1) {
        $(this).css("background", "#3b5998");
      } else {
        $(this).css("background", "#9e9e9e");
      }
    });

    $(".clearfilters").css("display", "inline-block");
  }
  countSmells();
}

function expandDetailsSection(expansionSection) {
  $(expansionSection).removeClass("col-lg-4 col-md-6");
  $(expansionSection).find(".details").show();
  $(expansionSection).find(".close-expansion").show();
}

function compressDetailsSection(expansionSection) {
  $(expansionSection).addClass("col-lg-4 col-md-6");
  $(expansionSection).find(".details").hide();
  $(expansionSection).find(".expansion-button").show();
}

function reinstateBindings() {
  $(".expansion-section").on("click", ".expansion-button", function() {
    currentCardTitle = $(this).siblings(".card-title").text();
    $(".expansion-section").each(function(index) {
      if($(this).find(".card-title").text() !== currentCardTitle) {
        $(this).hide();
      }
    });
    hideOtherSections();
    expandDetailsSection($(this).closest(".expansion-section"));
    $(this).hide();
  });

  $(".expansion-section").on("click", ".close-expansion", function() {
    showOtherSections();
    compressDetailsSection($(this).closest(".expansion-section"));
    $(this).hide();
    if(window.filter !== undefined && window.filter !== "") {
      categorize(window.filter);
    }
  });
}

function hideOtherSections() {
  $(".filters").hide();
  $(".search").hide();
  $(".count-smells").hide();
}

function showOtherSections() {
  $(".expansion-section").show();
  $(".filters").show();
  $(".search").show();
  $(".count-smells").show();
}

function generateCodeSmells() {
  node = window.nodeTemplate.clone();
  node.removeClass("codesmell-section");
  var nodeBackup = node;
  codesmells.forEach(function(codesmell) {
    node = nodeBackup.clone();
    node.find('.card-header').append(codesmell['category']);
    node.find('.card-title').text(codesmell['name']);
    node.find('.excerpt-text').text(codesmell['excerpt']);
    node.find('.description-text').text(codesmell['description']);
    node.find('.reasons-text').text(codesmell['reasons']);
    node.find('.refactorings-text').text(codesmell['refactorings']);
    node.find('.references-text').text(codesmell['references']);
    $('.codesmells > .row').append(node);
  });
  reinstateBindings();
}

function generateFilters() {
  node = $(".filter-template").clone();
  node.removeClass("filter-template");
  var nodeBackup = node;
  filters.reverse().forEach(function(filter) {
    node = nodeBackup.clone();
    node.text(filter["name"]);
    node.attr("onclick", "categorize('"+ filter["name"] +"')");
    $(".filters").prepend(node);
  });
  $(".filter-template").hide();
}

function generateFilterInfo() {
  node = $(".filter-info").clone();
  node.removeClass("filter-info").addClass("filter-section").hide();
  var nodeBackup = node;
  filters.forEach(function(filter) {
    node = nodeBackup.clone();
    node.addClass(filter["name"].replace(/\s/g,''));
    node.find(".filter-header").text(filter["name"]);
    node.find(".filter-text").text(filter["description"]);
    $(".filters-description").append(node);
  });
  $(".filter-info").remove();
}

$(function() {
  window.nodeTemplate = $(".codesmell-section").clone();
  $(".codesmell-section").remove();
  generateCodeSmells();
  generateFilters();
  generateFilterInfo();
  countSmells();
});
