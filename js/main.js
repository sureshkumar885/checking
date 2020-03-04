$(document).ready(function() {
    var
        $console_message_1 = "CONNECTING TO " + $niche_name + " SERVERS...";
    $console_message_2 = "VERIFYING ID";
    $console_message_3 = "VERIFIED...";
    $console_message_4 = "GENERATING";
    $console_message_5 = "DONE";
    $console_message_6 = "PREPARING TO SAVE GENERATED";
    $console_message_7 = "...SCHEDULED";
    $console_message_8 = "SAVING ALL CHANGES...";
    $console_message_9 = "FINISHING SAVING...";
    $console_message_10 = "ALMOST DONE...";
    $console_message_11_1 = "YOUR FREE";
    $console_message_11_2 = "IS READY! WE JUST NEED TO MAKE SURE YOU ARE A HUMAN AND NOT A BOT. <br/><br/>PLEASE PASS OUR HUMAN VERIFICATION SO WE CAN GENERATE YOUR FREE";
    $console_message_11_3 = "FOR";
    setTimeout(function() {
        $('.status-row-1').fadeOut(function() {
            $('.status-row-2').fadeIn();
            $('.status-row-2').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('animated bounceIn');
            });
        });
    }, 3000);
    setTimeout(function() {
        $('.status-row-2').fadeOut(function() {
            $('.status-row-3').fadeIn();
            $('.status-row-3').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('animated bounceIn');
            });
        });
    }, 6000);
    setTimeout(function() {
        $('.status-row-3').fadeOut(function() {
            $('.status-row-1').fadeIn();
            $('.status-row-1').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('animated bounceIn');
            });
        });
    }, 9000);

    function loopStatus() {
        setTimeout(function() {
            $('.status-row-1').fadeOut(function() {
                $('.status-row-2').fadeIn();
                $('.status-row-2').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this).removeClass('animated bounceIn');
                });
            });
        }, 3000);
        setTimeout(function() {
            $('.status-row-2').fadeOut(function() {
                $('.status-row-3').fadeIn();
                $('.status-row-3').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this).removeClass('animated bounceIn');
                });
            });
        }, 6000);
        setTimeout(function() {
            $('.status-row-3').fadeOut(function() {
                $('.status-row-1').fadeIn();
                $('.status-row-1').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this).removeClass('animated bounceIn');
                });
            });
        }, 9000);
    }
    window.setInterval(loopStatus, 9000);
    $(".accent-color").css("color", accent_color);
    $(".accent-background").css("background", accent_color);
    $sound_setting = 1;
    ion.sound({
        sounds: [{
            name: "button",
            path: "audio/",
            volume: 1
        }, {
            name: "transition-1",
            path: "audio/",
            volume: 0.9
        }, {
            name: "count",
            path: "audio/",
            loop: true,
            volume: 0.7
        }, {
            name: "transition-2",
            path: "audio/",
            volume: 0.7
        }],
        path: "sounds/",
        preload: true,
        multiplay: true
    });
    $('#resource-one').selectric({
        disableOnMobile: false,
        nativeOnMobile: false
    });
    $('#resource-two').selectric({
        disableOnMobile: false,
        nativeOnMobile: false
    });
    var $selected_platform_option = '';

    function fixplatformBox($platform_parent_class) {
        resetplatformBoxes();
        if ($platform_parent_class.hasClass('platform-item-1')) {
            $selected_platform_option = 'Android';
            $platform_icon = "<i class='fab fa-android platform-select-icon'></i>";
        }
        if ($platform_parent_class.hasClass('platform-item-2')) {
            $selected_platform_option = 'iOS';
            $platform_icon = "<i class='fab fa-apple platform-select-icon'></i>";
        }
        $platform_parent_class.addClass('active accent-color');
        $(".accent-color").css("color", accent_color);
        $platform_parent_class.addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated jello');
        });
    }

    function resetplatformBoxes() {
        var $platform_list = $('.platform-item-1, .platform-item-2');
        if ($platform_list.hasClass('active')) {
            $platform_list.removeClass('active accent-color');
            $($platform_list).css("color", "#fff");
        }
    }
    $('.platform-item').click(function() {
        if ($(this).hasClass('active')) {} else {
            if ($sound_setting == 1) {
                ion.sound.play("button");
            }
        }
        fixplatformBox($(this));
    });
    $('#button-start').click(function() {
        if ($sound_setting == 1) {
            ion.sound.play("button");
        }
        if ($('#user-id-input').val() == '') {
            $(".username-input-v").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('shake animated');
            });
            $(".platform-information-row").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('shake animated');
            });
        } else if ($selected_platform_option == '') {
            $(".platform-v").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('shake animated');
            });
        } else if ($('#resource-one').val() == '0' || $('#resource-two').val() == '0') {
            $(".resource-v").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('shake animated');
            });
        } else {
            startProc();
        }
    });

    function startProc() {
        var $selected_amount_r1 = $('#resource-one').val();
        var $selected_amount_r2 = $('#resource-two').val();
        var $player_id = $('#user-id-input').val();
        var $player_platform = $selected_platform_option;
		
//          $.ajax({
            // type: "GET",
            // url: "parts/s_1.html",
            // success: function(dataprocess) { 
                console.clear();
                console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
                if ($sound_setting == 1) {
                    ion.sound.play("transition-2");
                }
				
				$('#gcontentinner1').hide();
                $('#gcontentinner2').show().fadeIn();
				
                $(".accent-background").css("background", accent_color);
                $('#user-info-username-val').html($player_id);
                $('#user-info-platform-val').html($platform_icon + ' ' + $player_platform);
                $.fn.digits = function() {
                    return this.each(function() {
                        $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    })
                }
                $('.r-i-l-one').html($resource_name_1);
                $('.r-i-l-two').html($resource_name_2);
                $('.r-i-v-one').html($selected_amount_r1);
                $('.r-i-v-two').html($selected_amount_r2);
                $("#verification-button").attr("href", $locker_url);
                $(".r-i-v").digits();
                var $console_msg = ".console-message";
                $($console_msg).html($console_message_1);
                $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this).removeClass('animated bounceIn');
                });
                setTimeout(function() {
                    $($console_msg).html($console_message_2 + ' ' + $player_id + ' ...');
                    $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('animated bounceIn');
                    });
                }, 2000);
                setTimeout(function() {
                    $($console_msg).html($console_message_2 + ' ' + $player_id + ' <span class="msg-green">' + $console_message_3 + '</span>');
                    $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('animated bounceIn');
                    });
                }, 4000);
                setTimeout(function() {
                    $($console_msg).html($console_message_4 + ' ' + $selected_amount_r1 + ' ' + $resource_name_1);
                    $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('animated bounceIn');
                    });
                    $(".console-count-1").fadeIn();
                    $(".console-message").addClass('small-p-t');
                    if ($sound_setting == 1) {
                        ion.sound.play("count");
                    }
                    $('.console-count-val-one').countTo({
                        from: 0,
                        to: $selected_amount_r1,
                        speed: 2300,
                        refreshInterval: 5,
                        formatter: function(value, options) {
                            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                        },
                        onComplete: function(value, options) {
                            if ($sound_setting == 1) {
                                ion.sound.pause("count");
                            }
                        }
                    });
                }, 6000);
                setTimeout(function() {
                    $($console_msg).html($console_message_4 + ' ' + $selected_amount_r1 + ' ' + $resource_name_1 + ' <span class="msg-green">' + $console_message_5 + '</span>');
                    $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('animated bounceIn');
                    });
                }, 9000);
                setTimeout(function() {
                    $($console_msg).html($console_message_4 + ' ' + $selected_amount_r2 + ' ' + $resource_name_2);
                    $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('animated bounceIn');
                    });
                    $(".console-count-1").fadeOut(function() {
                        $(".console-count-2").fadeIn();
                        if ($sound_setting == 1) {
                            ion.sound.play("count");
                        }
                        $('.console-count-val-two').countTo({
                            from: 0,
                            to: $selected_amount_r2,
                            speed: 2300,
                            refreshInterval: 5,
                            formatter: function(value, options) {
                                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                            },
                            onComplete: function(value, options) {
                                if ($sound_setting == 1) {
                                    ion.sound.pause("count");
                                }
                            }
                        });
                    });
                }, 11000);
                setTimeout(function() {
                    $($console_msg).html($console_message_4 + ' ' + $selected_amount_r2 + ' ' + $resource_name_2 + ' <span class="msg-green">' + $console_message_5 + '</span>');
                    $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('animated bounceIn');
                    });
                }, 14000);
                setTimeout(function() {
                    $(".console-count-2").fadeOut(function() {
                        $(".console-message").removeClass('small-p-t');
                        $($console_msg).html($console_message_6 + ' ' + $resource_name_1 + ' and ' + $resource_name_2);
                        $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            $(this).removeClass('animated bounceIn');
                        });
                    });
                }, 16000);
                setTimeout(function() {
                    $(".console-count-2").fadeOut(function() {
                        $(".console-message").removeClass('small-p-t');
                        $($console_msg).html($console_message_6 + ' ' + $resource_name_1 + ' and ' + $resource_name_2 + ' <span class="msg-red">' + $console_message_7 + '</span>');
                        $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            $(this).removeClass('animated bounceIn');
                        });
                    });
                }, 18000);
                setTimeout(function() {
                    $($console_msg).html($console_message_8);
                    $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('animated bounceIn');
                    });
                }, 20000);
                setTimeout(function() {
                    $($console_msg).html($console_message_9);
                    $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('animated bounceIn');
                    });
                }, 22000);
                setTimeout(function() {
                    $($console_msg).html($console_message_10);
                    $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('animated bounceIn');
                    });
                }, 24000);
                setTimeout(function() {
                    $(".console-message").addClass('small-p-t console-last-msg');
                    $($console_msg).html('<div class="console-last-msg">' + $console_message_11_1 + ' ' + $resource_name_1 + ' and ' + $resource_name_2 + ' ' + $console_message_11_2 + ' ' + $resource_name_1 + ' and ' + $resource_name_2 + ' ' + $console_message_11_3 + ' ' + $niche_name + '</div>');
                    $($console_msg).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('animated bounceIn');
                    });
                    $(".verfication-button-wrapper").fadeIn();
                    $(".verfication-button-wrapper").addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('animated bounceIn');
                    });
                }, 26000);
            // }
        // });
    }
});
var starting_number = 500;
var random;

function online_count() {
    document.getElementById("online-count").innerHTML = starting_number;
    var randCalc = Math.floor(Math.random() * 10 + 1);
    if (randCalc <= 5) {
        starting_number = starting_number + Math.floor(Math.random() * 10 + 1);;
    } else {
        starting_number = starting_number - Math.floor(Math.random() * 10 + 1);;
    }
    random = setTimeout("online_count()", 1000);
}
online_count();
document.getElementById("date").innerHTML = formatAMPM();

function formatAMPM() {
    var d = new Date(),
        hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' ';
}

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Random(_0xaa63x2, _0xaa63x3) {
    return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};