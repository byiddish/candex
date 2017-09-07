$(document).ready(function () {
    //function AppViewModel() {
    //    var self = this;

    //    self.people = ko.observableArray([
    //        { name: 'Bert' },
    //        { name: 'Charles' },
    //        { name: 'Denise' }
    //    ]);

    //    self.addPerson = function () {
    //        self.people.push({ name: "New at " + new Date() });
    //    };

    //    self.removePerson = function () {
    //        self.people.remove(this);
    //    }
    //}

    //ko.applyBindings(new AppViewModel());
    function AppViewModel() {
        var self = this;

        self.products = ko.observableArray([
            { qty: '', profileNum: '', itemNum: '', itemDescription: '', color: '', price: '' }
        ]);

        self.addProduct = function () {
            self.products.push({ qty: '', profileNum: '', itemNum: '', itemDescription: '', color: '', price: '' });
        };

        self.removeProduct = function () {
            self.products.remove(this);
        }
    }

    ko.applyBindings(new AppViewModel());

    //function formatCurrency(value) {
    //    return "$" + value.toFixed(2);
    //}

    //qty: "",
    //            profileNum: ko.observableArray([]),
    //            itemNum: ko.observableArray(['0015', '0016', '0017', '0018', '0019']),
    //            color: ko.observableArray(['Red', 'Orange', 'Green', 'Blue', 'Purple']),
    //            itemDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    //            price: ko.observable(372.35).extend({ number: true }),
    //            //total: ko.computed(function () {
    //            //    return this.price * this.qty;
    //            //}, this)

    //function Products() {
    //    var self = this;
    //    self.qty = ko.observable();
    //    self.profileNum = ko.observableArray([]);
    //    self.itemNum = ko.observableArray(['0015', '0016', '0017', '0018', '0019']);
    //    self.color = ko.observableArray(['Red', 'Orange', 'Green', 'Blue', 'Purple']);
    //    self.price = ko.observable(372.35).extend({ number: true });
    //self.subtotal = ko.computed(function () {
    //    return self.product() ? self.price * parseInt("0" + self.qty(), 10) : 0;
    //}
    //);

    // Whenever the category changes, reset the product selection
    //self.category.subscribe(function () {
    //    self.product(undefined);
    //});
    //    self.addProduct = function () { self.lines.push(new Products()) };
    //    self.removeProduct = function (line) { self.lines.remove(line) };
    //};

    //var Cart = function () {
    //    // Stores an array of lines, and from these, can work out the grandTotal
    //    var self = this;
    //    self.lines = ko.observableArray([new CartLine()]); // Put one line in by default
    //    self.grandTotal = ko.computed(function () {
    //        var total = 0;
    //        $.each(self.lines(), function () { total += this.subtotal() })
    //        return total;
    //    });

    //    // Operations
    //    self.addLine = function () { self.lines.push(new CartLine()) };
    //    self.removeLine = function (line) { self.lines.remove(line) };
    //    self.save = function () {
    //        var dataToSave = $.map(self.lines(), function (line) {
    //            return line.product() ? {
    //                productName: line.product().name,
    //                quantity: line.quantity()
    //            } : undefined
    //        });
    //        alert("Could now send this to server: " + JSON.stringify(dataToSave));
    //    };
    //};
    //ko.extenders.number = function (observable, opt) {
    //    return ko.computed({
    //        read: observable,
    //        write: function (value) {
    //            if (typeof value !== "number") {
    //                value = parseFloat(value);
    //            }

    //            if (!isNaN(value)) {
    //                observable(value);
    //            }
    //        }
    //    });
    //}

    //function AppViewModel() {
    //    var self = this;

    //    self.people = ko.observableArray([
    //        { name: 'Bert' },
    //        { name: 'Charles' },
    //        { name: 'Denise' }
    //    ]);

    //    self.addPerson = function () {
    //        self.people.push({ name: "New at " + new Date() });
    //    };

    //    self.removePerson = function () {
    //        self.people.remove(this);
    //    }
    //}

    //ko.applyBindings(new AppViewModel());

    //function AppViewModel() {
    //    var self = this;

    //    self.products = ko.observableArray([
    //        { qty: "", profileNum: ko.observableArray([]), itemNum: ko.observableArray(['0015', '0016', '0017', '0018', '0019']), color: ko.observableArray(['Red', 'Orange', 'Green', 'Blue', 'Purple']), itemDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", price: ko.observable(372.35).extend({ number: true }), }
    //    ]);

    //    self.addProduct = function () {
    //        self.products.push({ qty: "", profileNum: ko.observableArray([]), itemNum: ko.observableArray(['0015', '0016', '0017', '0018', '0019']), color: ko.observableArray(['Red', 'Orange', 'Green', 'Blue', 'Purple']), itemDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", price: ko.observable(372.35).extend({ number: true }), });
    //    };

    //    self.removeProduct = function () {
    //        self.products.remove(this);
    //    }
    //}

    //ko.applyBindings(new AppViewModel());

    //function orderViewModel() {
    //    var self = this;
    //    self.product = [
    //        {
    //            qty: "",
    //            profileNum: ko.observableArray([]),
    //            itemNum: ko.observableArray(['0015', '0016', '0017', '0018', '0019']),
    //            color: ko.observableArray(['Red', 'Orange', 'Green', 'Blue', 'Purple']),
    //            itemDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    //            price: ko.observable(372.35).extend({ number: true }),
    //            //total: ko.computed(function () {
    //            //    return this.price * this.qty;
    //            //}, this)
    //        }
    //    ]

    //    self.products = ko.observableArray([

    //    ])

    //    self.addProduct = function (product) {
    //        self.products.push(product);
    //    }
    //}

    //function orderViewModel() {
    //    this.qty = 5;
    //    this.profileNum = ko.observableArray(['1mm', '2mm', '3mm']);
    //    this.itemNum = ko.observableArray(['0015', '0016', '0017', '0018', '0019']);
    //    this.color = ko.observableArray(['Red', 'Orange', 'Green', 'Blue', 'Purple']);
    //    this.itemDescription = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
    //    this.price = ko.observable(372.35).extend({ number: true });
    //    this.total = ko.computed(function () {
    //        return this.price() + 20;
    //    }, this);
    //}

    //ko.applyBindings(new orderViewModel);
})
