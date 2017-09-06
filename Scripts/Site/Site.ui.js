$(document).ready(function () {
    /////////////////// LAYOUT FUNCTIONS //////////////////////

    function styleCurrentLink() {
        var href = window.location.pathname.toLocaleLowerCase();
        $('.navBtn').each(function () {
            var navLink = $(this).attr('href').toLocaleLowerCase();
            if (navLink == href) {
                $(this).addClass("selected");
            }
        });
    }

    /////////////////// INITIALIZE //////////////////////
    styleCurrentLink();

    $('body').on('click', '.navBtn', function () {
        $(this).addClass('selected');
    })

    /////////////////// MODAL //////////////////////
    ///////////////////// BASIC MODAL FUNCTIONS //////////////////////

    function openModal() {
        overlay.setAttribute('aria-hidden', "false");
        body.classList.add('noscroll');
    }

    function closeModal() {
        overlay.setAttribute('aria-hidden', "true");
        body.classList.remove('noscroll');
    }

    $('body').on('click', 'table tr', function () {
        openModal();
    })

    $('body').on('click', '.exit', function () {
        closeModal();
    })

    $('body').on('click', '.modalNav', function () {
        $('.modalNav').removeClass('selected');
        $(this).addClass('selected');
    })

    ///////// VARIABLES ///////////
    var body = document.body,

    overlay = document.querySelector('.overlay');
})






///////////////////// MODAL //////////////////////


/////////// VARIABLES ///////////
//var body = document.body,

//overlay = document.querySelector('.overlay');

//var inputWidth;
//try {
//    inputWidth = $('#city').val().length;
//}
//catch (err) {
//}

//var additionalContacts = $('.additionalContacts');
//var editMode = false;
//var addMode = false;
//var next = false;
//var previousTab = 0;
//var nextTab = 1;
//var feeScheduleMode = false;
//var strSecHtml = "<div class=\"sec\">\n                        <div class=\"secInner\">\n                            <input class=\"contName co editMode\" placeholder=\"Name\" >\n                            <div><div class=\"lbl e\">E</div> <input class=\"coEmail co editMode\" ></div>\n                            <div><div class=\"lbl p\">P</div> <input class=\"coPhone co editMode\" > <span class=\"lbl ex\">EXT</span> <input class=\"coExt co editMode\" ></div>\n                            <div>\n                                <div class=\"lbl f\">F</div> <input class=\"coPhone co editMode\" >\n                                <div class=\"selectCont\">\n                                    <select class=\"coSel editMode\">\n                                        <option>Additional</option>\n                                        <option>Primary</option>\n                                    </select>\n                                    <img class=\"selectArrow\" src=\"/DocProbe.Site/Images/dropB.png\" style=\"display: inline;\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"border\"></div>\n                        <div class=\"bottomBorder\"></div>\n                    </div>";
//var strClientSecHtml = "<div class=\"sec\">\n    <div class=\"secInner\">\n        <input class=\"contName co editMode\" placeholder=\"Name\" />\n        <div class=\"selectCont statusSelectCont\">\n            <select id=\"status\" class=\"coSel editMode\" data-bind=\"options: $root.positions(), optionsText: 'position', optionsValue: 'id', value: $root.selectedPosition, optionsCaption: 'Select one'\"></select>\n            <img class=\"selectArrow\" src=\"../Images/dropB.png\" style=\"display:inline\"/>\n        </div>\n        <div><div class=\"lbl e\">E</div> <input class=\"coEmail co editMode\" /></div>\n        <div><div class=\"lbl p\">P</div> <input class=\"coPhone co editMode\" /> <span class=\"lbl ex\">EXT</span> <input class=\"coExt co editMode\" /></div>\n        <div>\n            <div class=\"lbl f\">F</div> <input class=\"coPhone co editMode\" />\n            <div class=\"selectCont\">\n                <select class=\"coSel editMode\">\n                    <option>Additional</option>\n                    <option>Primary</option>\n                </select>\n                <img class=\"selectArrow\" src=\"../Images/dropB.png\" style=\"display: inline;\"/>\n            </div>\n        </div>\n        <button class=\"registerBtn createAccount\" data-bind=\"click: function(){ $root.addContact($data)}\">CREATE ACCOUNT</button>\n    </div>\n    <div class=\"border\"></div>\n    <div class=\"bottomBorder\"></div>\n</div>";
//var strNoteHtml = "<div class=\"background\"><div contenteditable=\"true\" placeholder=\"Begin typing here...\" class=\"notes addNote\"></div><div class=\"noteActions\"><div class=\"saveNote\"></div><div class=\"cancelNote\"></div></div></div>";
//var strCcInputHTml = "<input class=\"ccEmail editMode\" placeholder=\"Email\"/>";
//var pagetitle = $('hiddenTitle').html();
//var page = $('#hiddenTitle').text();
//var users;
//var titleCompanies;
//var clients;
//var investors;

///////////////////// PAGE LOAD FUNCTIONS //////////////////////
//try {
//    resizeCityInput();
//}
//catch (err) {
//}
//detectPage();

///////////////////// MODAL FUNCTIONS //////////////////////

//function detectPage() {
//    users = (page === "Users" ? true : false);
//    titleCompanies = (page === "Title Companies" ? true : false);
//    clients = (page === "Clients" ? true : false);
//    investors = (page === "Investors" ? true : false);
//}

//function resizeCityInput() {
//    try {
//        inputWidth = $('#city').val().length;
//        $('#city').css('width', inputWidth * 11 + 'px');
//    }
//    catch (err) {
//    }
//}

//function makeDivEditable() {
//    $('#companyName').attr('contentEditable', 'true');
//    $('#companyName').addClass('editMode');
//}

//function makeDivNotEditable() {
//    $('#companyName').attr('contentEditable', 'false');
//    $('#companyName').removeClass('editMode');
//}

//function hideEmptyAddress2() {
//    try {
//        var address2 = $('#address2');
//        if (address2.val().length < 1) {
//            address2.css("display", "none");
//        }
//    }
//    catch (err) {
//    }
//}

//function showEmptyAddress2() {
//    $('#address2').css("display", "block");
//}


//function cancel() {
//    if (next) {
//        navigate('', $('#edit'));
//    } else {
//        navigate($('#next'), $('#edit'));
//    }
//    hideAddAdditionCont()
//}

//function unselectOptions(parent) {
//    $(parent + ' select option').prop("selected", false)
//}

//function selectOption(option) {
//    $(option).prop("selected", true)
//}

//function enableSelects(parent) {
//    $(parent + ' select').prop('disabled', false);
//}

//function enableInputs(parent) {
//    $(parent + ' input:not(.notEditable input)').prop('readonly', false);
//}

//function disableSelects(parent) {
//    $(parent + ' select').prop('disabled', true);
//}

//function hideElement(element) {
//    $(element).css("display", "none");
//}

//function hidePrimaryLbl() {
//    $('.primaryLbl').hide();
//}

//function closeModal() {
//    overlay.setAttribute('aria-hidden', "true");
//    body.classList.remove('noscroll');
//    resetModal();
//}

//function showPrimaryLbl() {
//    if (next && $('.sec .contName').length) {
//        $('.primaryLbl').show();
//    } else {
//        hidePrimaryLbl();
//    }
//}

//function showAddAdditionCont() {
//    $('.sec.addSec').fadeIn(400);
//}

//function hideAddAdditionCont() {
//    $('.sec.addSec').fadeOut(400);
//}

//function toggleEditMode() {
//    editMode = !editMode;
//}

//function additionalContactTab() {
//    next = true;
//    $('.general').css('display', 'none');
//    $('.additionalContacts').css('display', 'inline');
//    $('.feeSchedule').css('display', 'none');
//    var tab = $('#additionalCont');
//    showContactMain();
//    hideCompanyTitle();
//    if (feeScheduleMode) {
//        feeScheduleMode = false;
//        setModalTitle();
//    }
//    styleModalTitleGrey();
//    changeTab(tab);
//    showPrimaryLbl();
//}

//function general() {
//    next = false;
//    hidePrimaryLbl();
//    if (feeScheduleMode) {
//        feeScheduleMode = false;
//        setModalTitle();
//    }
//    //if (editMode || addMode) {
//    //    navigate($('#previous'), $('#next'));
//    //} else {
//    //    navigate($('#previous'), $('#edit'));
//    //}
//    $('.general').css('display', 'inline');
//    $('.additionalContacts').css('display', 'none');
//    $('.feeSchedule').css('display', 'none');
//    showContactMain();
//    hideCompanyTitle();
//    styleModalTitleGrey();
//    var tab = $('#general');
//    changeTab(tab);
//}

//function feeSchedule() {
//    next = true;
//    feeScheduleMode = true;
//    setModalTitle();
//    if (addMode) {
//        hideCompanyTitle();
//    } else {
//        showCompanyTitle();
//    }
//    hidePrimaryLbl();
//    //if (editMode || addMode) {
//    //    navigate('#next', $('#previous'));
//    //}
//    $('.general').css('display', 'none');
//    $('.additionalContacts').css('display', 'none');
//    $('.feeSchedule').css('display', 'inline');
//    hideContactMain();
//    styleModalTitleGreen();
//    var tab = $('#feeSchedule');
//    changeTab(tab);
//}

//function edit() {
//    if (!next) {
//        navigate($('#edit'), $('#next'));
//    } else {
//        navigate($('#edit'), '');
//    }
//    showAddAdditionCont();
//}

//function hideCancelSave() {
//    $('.actionMiddle .actionBtn').removeClass('showActions');
//    $('.actionMiddle .actionBtn').css('opacity', '0');
//    $("#cancel").hide();
//    $("#save").hide();
//}

//function showCancelSave() {
//    $("#cancel").show();
//    $("#save").show();
//    $('.actionMiddle .actionBtn').addClass('showActions');
//    $('.actionMiddle .actionBtn').css('opacity', '1');
//}

//function disableInputs(parent) {
//    $(parent + " input").prop("readonly", true);
//}

//function disableCheckInputs() {
//    $('.general input[type=checkbox]').prop("disabled", true);
//}

//function enableCheckInputs() {
//    $('.general input[type=checkbox]').prop("disabled", false);
//}

//function disableSelects(parent) {
//    $(parent + " select").prop("disabled", true);
//}

//function navigate(from, to) {
//    $(from).css('display', 'none');
//    $(to).css('display', 'inline');
//}

//function changeTab(tab) {
//    $('.tab').removeClass('tabSelected');
//    $('.tabArrow').removeClass('arrowSelected');
//    $(tab).addClass('tabSelected').find('.tabArrow').addClass('arrowSelected');
//}

//function setModalTitle() {
//    var title;
//    if (feeScheduleMode) {
//        title = "Fee Schedule";
//    } else {
//        if (!editMode && !addMode) {
//            if (clients) {
//                title = "Client Info";
//            }
//            else if (titleCompanies) {
//                title = "Title Company Info";
//            }
//            else if (investors) {
//                title = "Investor Info";
//            }
//            else if (users) {
//                title = "User Info";
//            }
//        }
//        else if (addMode) {
//            if (clients) {
//                title = "Add Client";
//            }
//            else if (titleCompanies) {
//                title = "Add Title Company";
//            }
//            else if (investors) {
//                title = "Add Investor";
//            }
//            else if (users) {
//                title = "Add User";
//            }
//        } else {
//            if (clients) {
//                title = "Edit Client Info";
//            }
//            else if (titleCompanies) {
//                title = "Edit Title Company Info";
//            }
//            else if (investors) {
//                title = "Edit Investor Info";
//            }
//            else if (users) {
//                title = "Edit User Info";
//            }
//        }
//    }
//    $('.title h1').hide().html(title).fadeIn(0);
//}

//function resetModal() {
//    setModalTitle();
//    $('.modal input').removeClass('editMode');
//    $('.modal select').removeClass('editMode');
//    makeDivNotEditable();
//    $('.actionMiddle .actionBtn').removeClass('showActions');
//    $('.actionMiddle .actionBtn').css('opacity', '0');
//    hideCancelSave()
//    $(".modal input").prop("readonly", true);
//    resizeCityInput();
//    additionalContacts = $('.additionalContacts');
//    removeIfEmpty(additionalContacts);
//    $('#edit').css('display', 'inline');
//    $('#next').css('display', 'none');
//    hideSelectArrows();
//}

//function removeIfEmpty(tableParent) {
//    $(tableParent).find('.sec').not($('.addSec')).each(function () {
//        var contact = this;
//        var empty = true;
//        var inputs = $(this).find('input');
//        inputs.each(function (i) {
//            if (inputs.eq(i).val() != '') {
//                empty = false;
//            }
//        })
//        if (empty) {
//            contact.remove();
//        }
//    })
//}

//function showEmpty(tableParent) {
//    $(tableParent).find('td').each(function () {
//        var val = $(this).find('.contName').val();
//        if (val == '') {
//            $(this).css('opacity', '1');
//        }
//    })
//}

//function removeEmptyCCInputs() {
//    $('.ccEmail').each(function () {
//        var input = $(this).val();
//        if (input == '' || input == undefined) {
//            $(this).remove();
//        }
//    })
//}

//function uncheckCcOriginal() {
//    $('.checkCont input').prop('checked', false);
//}

//function hideClientAssociates() {
//    $('.clienAssoCont').hide();
//}

//function showClientAssociates() {
//    $('.clienAssoCont').show();
//}

//function removeNotes() {
//    $('.noteCont').remove();
//}

//function editStyle() {
//    $('.modal input:not(.notEditable input)').addClass('editMode');
//    $('.modal select').addClass('editMode');
//    makeDivEditable();
//    $('#city').css('width', 'calc(60% - 3px)');
//}

//function revealSelectArrows() {
//    $('.selectArrow').fadeIn(400);
//}

//function hideSelectArrows() {
//    $('.selectArrow').fadeOut(400);
//}

//function alterHtml(element, string) {
//    $(element).html(string);
//}

//function hideAddCCBtn() {
//    $('.addCcBtn').fadeOut();
//}

//function showAddCCBtn() {
//    $('.addCcBtn').fadeIn();
//}

//function hideContactMain() {
//    $('#contactMain').hide();
//}

//function showContactMain() {
//    $('#contactMain').show();
//}

//function styleModalTitleGreen() {
//    $('.title h1').addClass('green');
//}

//function styleModalTitleGrey() {
//    $('.title h1').removeClass('green');
//}

//function hideCompanyTitle() {
//    $('.companyTitle').hide();
//}

//function showCompanyTitle() {
//    $('.companyTitle').show();
//}

//function showNextButtons() {
//    $('#next').show();
//}

//function hideNextButtons() {
//    $('#next').hide();
//}

//function showPrevButtons() {
//    $('#previous').show();
//}

//function hidePrevButtons() {
//    $('#previous').hide();
//}

//function showHideNextPrev() {
//    if (editMode || addMode) {
//        var tabLength = $('.tab').length;
//        var tabIndex = $('.tab').index($('.tabSelected'));
//        if (tabIndex < tabLength - 1) {
//            showNextButtons();
//        } else {
//            hideNextButtons();
//        }
//        if (tabIndex > 0) {
//            showPrevButtons();
//        } else {
//            hidePrevButtons();
//        }
//    } else {
//        hideNextButtons();
//        hidePrevButtons();
//    }
//}

//function formatDownloadCoverLink() {
//    var customCover = $('#customCover');
//    if ($('#customCover').is(':checked') || editMode || addMode) {
//        $(customCover).siblings('a').text("CUSTOM COVER SHEET");
//    } else {
//        $(customCover).siblings('a').text("COVER SHEET");
//    }
//}

//function showHideDownloadManifestLink() {
//    if ($('#manifest').is(':checked') || editMode || addMode) {
//        $('#manifest').closest('.coverCont').show();
//    } else {
//        $('#manifest').closest('.coverCont').hide();
//    }
//}

///////////////////// ADD FEE FUNCTIONS //////////////////////
//function showAddFeeBtn() {
//    $('.addFee').fadeIn();
//}

//function hideAddFeeBtn() {
//    $('.addFee').fadeOut();
//}

//function removeEmptyFileFees() {
//    $('.feeScheduleTable tr').each(function () {
//        var row = $(this);
//        if (row.find('.fileName input').val() === "") {
//            $(row).remove();
//        }
//    })
//}


///////////////////// BASIC MODAL FUNCTIONS //////////////////////

//function openModal() {
//    overlay.setAttribute('aria-hidden', "false");
//    body.classList.add('noscroll');
//    formatDownloadCoverLink();
//    showHideDownloadManifestLink();
//    showHideNextPrev();
//}

//function openModalById(id) {
//    $(id).attr('aria-hidden', "false");
//    body.classList.add('noscroll');
//    formatDownloadCoverLink();
//    showHideDownloadManifestLink();
//}

//function styleContactModal() {
//    setModalTitle();
//    showClientAssociates();
//    hideEmptyAddress2();
//    hideCancelSave();
//    disableInputs(".modal");
//    disableSelects(".modal");
//    additionalContacts = $('.additionalContacts');
//    resizeCityInput();
//}

//function exitModal() {
//    overlay.setAttribute('aria-hidden', "true");
//    body.classList.remove('noscroll');
//}

//function exitModalById(id) {
//    $(id).attr('aria-hidden', "true");
//    body.classList.remove('noscroll');
//}

//function exitContactModal() {
//    exitModal();
//    removeEmptyCCInputs();
//    hideAddCCBtn();
//    if (clients) {
//        removeEmptyFileFees();
//        hideAddFeeBtn();
//    }
//    addMode = false;
//    editMode = false;
//    general();
//    disableSelects('.modal');
//    disableCheckInputs();
//    resetModal();
//    showHideNextPrev();
//}

//function saveCancelModalChanges() {
//    if (addMode) {
//        closeModal();
//    }
//    editMode = false;
//    addMode = false;
//    hideSelectArrows();
//    removeEmptyCCInputs();
//    hideEmptyAddress2();
//    hidePrevButtons();
//    hideNextButtons();
//    hideAddCCBtn();
//    if (clients) {
//        removeEmptyFileFees();
//        hideAddFeeBtn();
//    }
//    resetModal();
//    hideCancelSave();
//    hideAddAdditionCont();
//    disableSelects('.modal');
//    disableCheckInputs();
//    cancel();
//    formatDownloadCoverLink();
//    showHideDownloadManifestLink()
//}

//function editInfo() {
//    editMode = true;
//    edit();
//    setModalTitle();
//    showCancelSave();
//    showEmptyAddress2();
//    enableSelects('.modal');
//    enableInputs('.modal');
//    enableCheckInputs();
//    showHideNextPrev();
//    if (clients) {
//        showAddFeeBtn();
//    }
//    $('.actionMiddle .actionBtn').addClass('showActions');
//    $('.actionMiddle .actionBtn').animate({ opacity: 1, }, 400);
//    showAddCCBtn();
//    revealSelectArrows();
//    $('.modal input:not(.notEditable input)').addClass('editMode');
//    $('.modal select').addClass('editMode');
//    makeDivEditable();
//    $('#city').css('width', 'calc(60% - 3px)');
//    additionalContacts = $('.additionalContacts');
//    showEmpty(additionalContacts);
//    formatDownloadCoverLink();
//    showHideDownloadManifestLink()
//}

//function addNew() {
//    addMode = true;
//    hideClientAssociates();
//    removeNotes();
//    enableSelects('.modal');
//    enableCheckInputs();
//    showCancelSave();
//    showEmptyAddress2();
//    showAddAdditionCont();
//    showHideNextPrev();
//    showAddCCBtn();
//    setModalTitle();
//    uncheckCcOriginal();
//    clearModalInputs();
//    unselectOptions('.modal');
//    selectOption('.default');
//    revealSelectArrows();
//    navigate($('#edit'), $('#next'));
//    additionalContacts = $('.additionalContacts');
//    removeIfEmpty(additionalContacts);
//    showEmpty(additionalContacts);
//    if (clients) {
//        showAddFeeBtn();
//    }
//    editStyle();
//    $('.modal .notEditable input').prop("readonly", true);
//    $('.modal input:not(.notEditable input)').prop("readonly", false);
//    openAddNew();
//    formatDownloadCoverLink();
//    showHideDownloadManifestLink()
//}

//$('body').on('click', '.name.n', function () {
//    styleContactModal();
//    openModal();
//})

//$('body').on('click', '.exit', function () {
//    enableOtherTabs();
//    exitContactModal();
//})

//$('body').on('click', '#cancel', function () {
//    if (addMode) {
//        exitContactModal();
//    }
//    enableOtherTabs();
//    saveCancelModalChanges();
//})

//$('body').on('click', '#save', function () {
//    var validForm = $(".infoForm").validate();
//    if (validForm.valid()) {
//        if (addMode) {
//            saveAndEnableOtherTabs();
//        } else {
//            saveCancelModalChanges();
//        }
//    } else {
//        return false;
//    }
//})

//$('body').on('click', '#additionalCont:not(.disabled)', function () {
//    additionalContactTab();
//    showHideNextPrev();
//})

//$('body').on('click', '#general:not(.disabled)', function () {
//    general();
//    showHideNextPrev();
//    if (addMode) {
//        disableOtherTabs();
//    }
//})

//$('body').on('click', '#feeSchedule:not(.disabled)', function () {
//    feeSchedule();
//    showHideNextPrev();
//})

//$('body').on('click', '#edit', function () {
//    editInfo();
//})

//$('body').on('click', '#addContact, .addFee', function () {
//    editStyle();
//})

////$('body').on('click', '.add', function () {
////    if (clients) {
////        $(strClientSecHtml).insertBefore($(this).closest('.sec'));
////        showPrimaryLbl();
////    } else {
////        $(strSecHtml).insertBefore($(this).closest('.sec'));
////        showPrimaryLbl();
////    }
////})

//$('#next').on('click', function () {
//    $('.tabSelected').next().trigger("click");
//})

//$('#previous').on('click', function () {
//    $('.tabSelected').prev().trigger("click");
//})

//$('body').on('change', '#customCover', function () {
//    formatDownloadCoverLink();
//})

///////////////////// ADD NEW CONTACT FUNCTIONS //////////////////////

//function clearModalInputs() {
//    $(".modal input:not(.fileFee input)").val('');
//    $(".modal #companyName").html('');
//}

//function openAddNew() {
//    $(".modal input:not(.fileFee input)").val('');
//    $(".modal #companyName").html('');
//    try {
//        overlay.setAttribute('aria-hidden', "false");
//        body.classList.add('noscroll');
//    }
//    catch (err) {
//    }
//}

//$('body').on('click', '#addNew', function () {
//    addNew();
//    disableOtherTabs();
//})

///////////////////// ADD NOTE FUNCTIONS //////////////////////

////$('body').on('click', '.addNewNoteBtn', function () {
////    $(strNoteHtml).insertBefore($(this));
////})

////$('body').on('click', '.cancelNote', function () {
////    $(this).closest('.background').remove();
////})

///////////////////// ADD CC EMAIL INPUT FUNCTIONS //////////////////////

////$('body').on('click', '.addCcBtn', function () {
////    if (editMode || addMode) {
////        $(strCcInputHTml).insertBefore($(this));
////    }
////})

///////////////////// TABLE HOVER FUNCTIONS //////////////////////
//$(document).on("mouseenter", ".expandToggle", function (e) {
//    $(this).closest('.action').css('background-color', 'transparent');
//})

//$(document).on("mouseleave", ".expandToggle", function (e) {
//    if (!$(this).closest('.tableCont').hasClass('trOpen')) {
//        $(this).closest('.action').css('background-color', '#FFFFFF');
//    }
//})

///////////////////// EXPAND TABLE FUNCTIONS //////////////////////
//$('body').on('click', '.expandToggle, .exRow', function () {
//    var toggle = this;
//    $(toggle).find('.expand').toggleClass('open');
//    $(toggle).closest('.tableCont').toggleClass('trOpen');
//    $(toggle).closest('.tableCont').find('.moreContactsDiv').slideToggle({ duration: 700, easing: "easeOutQuart" });
//})

///////////////////// SORT BY INFO FUNCTIONS //////////////////////
//$('body').on('click', '.sort td', function () {
//    var sort = this;
//    $('.sort td').removeClass('selectedSort');
//    $(sort).addClass('selectedSort');
//})

///////////////////// SORT ALPHABETICLY FUNCTIONS //////////////////////
//$('.alpha').on('click', function () {
//    var alpha = this;
//    $('.alpha').removeClass('selectedAlpha');
//    $(alpha).addClass('selectedAlpha');
//})

///////////////////// IDENTIFY HEADER FUNCTIONS //////////////////////
//function expandHeader() {
//    $('body').on('click', '.internalActionHeader.asso, .internalActionHeader.asso .visibleHeader', function (e) {
//        if (e.target == this) {
//            $('.expandHeader').slideToggle({ duration: 700, easing: "easeOutQuart" });
//        }
//    })
//}
//expandHeader();

///////////////////// IDENTIFY COMPANY FUNCTIONS //////////////////////
//$('body').on('click', '.associateBtn', function () {
//    openModalById('#associateModal');
//})

//$('body').on('click', '.addNewIdentityBtn', function () {
//    openModalById('#newAssociateModal');
//})

//$('body').on('click', '#associateModal .assoCancel, #associateModal .assoSave', function () {
//    exitModalById('#associateModal');
//})

//$('body').on('click', '#newAssociateModal .assoCancel, #newAssociateModal .assoSave', function () {
//    exitModalById('#newAssociateModal');
//})

///////////////////// STAT FUNCTIONS //////////////////////
//var pendingPopupOpen = false;
//var pendingPopup = $('#pending');


//function numberPendingItems() {
//    $(".number").each(function (i) {
//        $(this).text(++i + ".");
//    });
//}

//function showPendingPopup() {
//    $(".pendingPopup").fadeIn('fast');
//    pendingPopupOpen = true;
//    $('#pending').addClass('selectedStat');
//}

//function hidePendingPopup() {
//    $(".pendingPopup").fadeOut('fast');
//    pendingPopupOpen = false;
//    $('#pending').removeClass('selectedStat');
//}

//function setFocusToSearchInput() {
//    $('.searchAllSearch').focus();
//}

//function disableOtherTabs() {
//    $('.tab:not(.tabSelected').addClass('disabled');
//    $('#next').hide();
//}

//function enableOtherTabs() {
//    $('.tab').removeClass('disabled');
//    if (addMode) {
//        $('#next').trigger('click');
//    }
//}

//function saveAndEnableOtherTabs() {
//    var tabLength = $('.tab').length - 1;
//    var tabIndex = $('.tab').index($('.tabSelected'));
//    if (tabIndex === tabLength) {
//        exitContactModal();
//    }
//    else {
//        $('.tab').removeClass('disabled');
//        if (addMode) {
//            $('#next').trigger('click');
//        }
//    }
//}

//numberPendingItems();

//$('body').on('mousedown', '.ident', function () {
//    $('.ident').removeClass('selectedSearch');
//    $(this).addClass('selectedSearch');
//})

//$('body').on('click', '.searchAllCont', function () {
//    setFocusToSearchInput();
//})

//$('body').on('click', '#pending', function () {
//    showPendingPopup();
//})

//$(document).on('click', function (e) {
//    if (pendingPopupOpen) {
//        if (!pendingPopup.is(e.target) // if the target of the click isn't the container...
//           && pendingPopup.has(e.target).length === 0) {
//            hidePendingPopup();
//        }
//    }
//});

//$('div[contenteditable]').keydown(function (e) {
//    // trap the return key being pressed
//    if (e.keyCode === 13) {
//        // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
//        document.execCommand('insertHTML', false, '<br><br>');
//        // prevent the default behaviour of return key pressed
//        return false;
//    }
//});


///////////////////// PENDING FUNCTIONS //////////////////////
//function makePendDivsNotEditable() {
//    $('.pendingInfo td:not(.invalid) div').attr('contentEditable', 'false');
//}

//makePendDivsNotEditable();

///////////////////// SELECT RADIO FUNCTIONS //////////////////////
//$('body').on('click', '.radio, .filter label', function () {
//    var radio = $(this).closest('.filter').find('.radio');
//    $('.radio').removeClass('selected');
//    $(radio).addClass('selected');
//    $('.filter').find('input').removeAttr('checked');
//    $(radio).closest('.filter').find('input').attr('checked', 'checked');
//})

//$('body').on('click', '.dateInput', function () {
//    var radio = $('.filterDate').find('.radio');
//    $('.radio').removeClass('selected');
//    $(radio).addClass('selected');
//    $('.filter').find('input').removeAttr('checked');
//    $(radio).closest('.filter').find('input').attr('checked', 'checked');
//})




