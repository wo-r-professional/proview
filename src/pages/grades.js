export async function run() {
    const hlp = await import("../helpers.js");
    const site = await import("../site.js");

    await hlp.load(async function () {
        await $("#root").html(`
            <div id="top" class="${hlp.gettheme("bg", "700")} text-white">
                <div class="fixed left-0 right-0 top-0 z-20 flex flex-row ${hlp.gettheme("bg", "700")}">
                    <div id="scrolled-title-reload" showreload class="flex justify-center items-center container mx-auto py-2 px-4 h-[60px]">
                        <div id="go-back" class="invisible -ml-4 flex-2 cursor-pointer py-3 pl-4 pr-2 rounded-full">
                            <svg class="w-[25px] pointer-events-none" viewBox="-14 -1000 1000 1000">
                                <path class="fill-white w-0" d="m213-480 278 277q22 23 22.5 55T491-94q-22 22-54.5 22T381-94L90-384q-20-21-30-45.5T50-480q0-27 10-51.5T90-576l291-292q23-22 55.5-22t54.5 22q22 22 22 55t-22 55L213-480Z"/>
                            </svg>
                        </div>
                        <span class="flex-grow font-bold text-center text-[22px]">
                            <span class="inner">Grades</span>
                        </span>
                        <div id="reload" class="-mr-2 flex-2 cursor-pointer py-3 pl-4 pr-2 rounded-full">
                            <svg class="w-[25px] pointer-events-none" viewBox="-14 -1000 1000 1000">
                                <path class="fill-white w-0" d="M476.28-113Q324-113 216.5-220 109-327 109-479t107.5-260Q324-847 476-847q78.29 0 148.15 31.5Q694-784 745-726v-68q0-22 14.8-37.5t37.7-15.5q22.9 0 38.2 15.5Q851-816 851-794v229q0 27.6-20.2 47.8Q810.6-497 783-497H552q-21.57 0-36.79-15.58Q500-528.16 500-550.28q0-21.69 15.5-36.71Q531-602 553-602h117q-33-50-83.9-78.5Q535.2-709 476-709q-96 0-163.5 66.92Q245-575.17 245-479q0 96.33 67.5 163.17Q380-249 476-249q56 0 104.61-25.81Q629.22-300.63 662-346q15.62-22.16 41.81-30.58Q730-385 754.74-375q26.26 10 37.76 32.5Q804-320 792-298q-48 84-132.19 134.5T476.28-113Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="relative overflow-hidden flex flex-row gap-10 justify-between container mx-auto pt-16 pb-5 px-4">
                    <div class="flex flex-col flex-grow justify-center">
                        <h1 class="text-5xl sm:text-7xl font-bold pb-0 -m-[2px] mb-0">Grades</h1>
                    </div>
                </div>
            </div>
            <!---->
            <!---->
            <div class="flex flex-col gap-5 pt-[1.1rem] mb-[1.8rem] container mx-auto py-10 px-4">
                ${hlp.gpa.exists && hlp.gpa.courses.length != 0 ? `
                    <div id="gpa"></div>
                ` : ""}
                <div id="averages" class="flex flex-col gap-5">
                
                    <div class="flex flex-col gap-5 sm:flex-row">
                        <div class="relative flex-1 flex flex-col justify-between container mx-auto ${hlp.gettheme("theme-card")} rounded-xl py-3 px-3">
                            <div class="flex justify-center items-center h-full">
                                <svg width="136" height="136" viewBox="0 0 136 136">
                                    <circle class="${hlp.gettheme("theme-stroke")}" cx="68" cy="68" r="54" fill="none" stroke="inherit" stroke-width="16" />
                                    <circle class="stroke-yellow-500" cx="68" cy="68" r="54" fill="none" stroke-width="16" stroke-dasharray="339.292" stroke-dashoffset="${339.292 * (1 - 0 / 100)}" transform="rotate(-90 68 68)" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 flex flex-col justify-center items-center">
                                <span class="score-text font-bold text-3xl">0</span>
                                <span class="score hidden">90</span>
                                <span class="font-bold text-zinc-400 text-sm">Agency</span>
                            </div>
                        </div>
                        <div class="relative flex-1 flex flex-col justify-between container mx-auto ${hlp.gettheme("theme-card")} rounded-xl py-3 px-3">
                            <div class="flex justify-center items-center h-full">
                                <svg width="136" height="136" viewBox="0 0 136 136">
                                    <circle class="${hlp.gettheme("theme-stroke")}" cx="68" cy="68" r="54" fill="none" stroke="inherit" stroke-width="16" />
                                    <circle class="stroke-violet-500" cx="68" cy="68" r="54" fill="none" stroke-width="16" stroke-dasharray="339.292" stroke-dashoffset="${339.292 * (1 - 0 / 100)}" transform="rotate(-90 68 68)" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 flex flex-col justify-center items-center">
                                <span class="score-text font-bold text-3xl">0</span>
                                <span class="score hidden">96</span>
                                <span class="font-bold text-zinc-400 text-sm">Collab</span>
                            </div>
                        </div>
                    </div>    
                    <div class="flex flex-col gap-5 sm:flex-row">
                        <div class="relative flex-1 flex flex-col justify-between container mx-auto ${hlp.gettheme("theme-card")} rounded-xl py-3 px-3">
                            <div class="flex justify-center items-center h-full">
                                <svg width="136" height="136" viewBox="0 0 136 136">
                                    <circle class="${hlp.gettheme("theme-stroke")}" cx="68" cy="68" r="54" fill="none" stroke="inherit" stroke-width="16" />
                                    <circle class="stroke-blue-500" cx="68" cy="68" r="54" fill="none" stroke-width="16" stroke-dasharray="339.292" stroke-dashoffset="${339.292 * (1 - 0 / 100)}" transform="rotate(-90 68 68)" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 flex flex-col justify-center items-center">
                                <span class="score-text font-bold text-3xl">0</span>
                                <span class="score hidden">95</span>
                                <span class="font-bold text-zinc-400 text-sm">K & T</span>
                            </div>
                        </div>
                        <div class="relative flex-1 flex flex-col justify-between container mx-auto ${hlp.gettheme("theme-card")} rounded-xl py-3 px-3">
                            <div class="flex justify-center items-center h-full">
                                <svg width="136" height="136" viewBox="0 0 136 136">
                                    <circle class="${hlp.gettheme("theme-stroke")}" cx="68" cy="68" r="54" fill="none" stroke="inherit" stroke-width="16" />
                                    <circle class="stroke-green-500" cx="68" cy="68" r="54" fill="none" stroke-width="16" stroke-dasharray="339.292" stroke-dashoffset="${339.292 * (1 - 0 / 100)}" transform="rotate(-90 68 68)" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 flex flex-col justify-center items-center">
                                <span class="score-text font-bold text-3xl">0</span>
                                <span class="score hidden">87</span>
                                <span class="font-bold text-zinc-400 text-sm">Oral</span>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-1 flex flex-col justify-between container mx-auto ${hlp.gettheme("theme-card")} rounded-xl py-3 px-3">
                        <div class="flex justify-center items-center h-full">
                            <svg width="136" height="136" viewBox="0 0 136 136">
                                <circle class="${hlp.gettheme("theme-stroke")}" cx="68" cy="68" r="54" fill="none" stroke="inherit" stroke-width="16" />
                                <circle class="stroke-cyan-500" cx="68" cy="68" r="54" fill="none" stroke-width="16" stroke-dasharray="339.292" stroke-dashoffset="${339.292 * (1 - 0 / 100)}" transform="rotate(-90 68 68)" />
                            </svg>
                        </div>
                        <div class="absolute inset-0 flex flex-col justify-center items-center">
                            <span class="score-text font-bold text-3xl">0</span>
                                <span class="score hidden">72</span>
                            <span class="font-bold text-zinc-400 text-sm">Written</span>
                        </div>
                    </div>

                </div>
                <div id="courses" class="flex flex-col gap-5"><div>
            </div>
            <!---->
            <!---->
            <div id="bottom" class="fixed bottom-0 left-0 right-0">
                <div class="${hlp.gettheme("theme-card")}">
                    <div class="flex flex-row justify-between items-center">
                        <a id="overview" class="cursor-pointer flex justify-center items-center py-3 w-full">
                            <span class="w-8 font-black pointer-events-none">
                                <svg class="w-full h-full flex justify-center items-center" viewBox="-14 -1000 1000 1000">
                                    <path class="${hlp.gettheme("theme-fill")}" d="M117-212v-341q0-33 14-61.5t40-47.5l227-171q37-27 82-27t82 27l227 171q26 19 40 47.5t14 61.5v341q0 57-39.5 96.5T707-76h-67q-29 0-48.5-20T572-144v-196q0-28-20-48t-48-20h-48q-28 0-48 20t-20 48v196q0 28-19.5 48T320-76h-67q-57 0-96.5-39.5T117-212Z"/>
                                </svg>
                            </span>
                        </a>
                        <a id="calendar" class="cursor-pointer flex justify-center items-center py-3 w-full">
                            <span class="w-8 font-black pointer-events-none material-symbols-rounded">
                                <svg class="w-full h-full flex justify-center items-center" viewBox="-14 -1000 1000 1000">
                                    <path class="${hlp.gettheme("theme-fill")}" d="M210-34q-57.12 0-96.56-40.14Q74-114.28 74-170v-541q0-57.13 39.44-96.56Q152.88-847 210-847h15v-23q0-22.6 17.2-39.3Q259.4-926 282-926q24 0 40 16.7t16 39.3v23h284v-23q0-22.6 16.5-39.3 16.5-16.7 40-16.7t40 16.7Q735-892.6 735-870v23h15q57.13 0 96.56 39.44Q886-768.13 886-711v541q0 55.72-39.44 95.86Q807.13-34 750-34H210Zm0-136h540v-398H210v398Zm270.49-220q-20.91 0-35.7-14.59Q430-419.18 430-439.79q0-20.61 14.79-35.41 14.79-14.8 35.7-14.8 20.91 0 35.21 14.59t14.3 35.2q0 20.61-14.3 35.41-14.3 14.8-35.21 14.8Zm-160.28 0q-20.61 0-35.41-14.59-14.8-14.59-14.8-35.2 0-20.61 14.59-35.41 14.59-14.8 35.2-14.8 20.61 0 35.41 14.59 14.8 14.59 14.8 35.2 0 20.61-14.59 35.41-14.59 14.8-35.2 14.8Zm319.3 0Q620-390 605-404.59q-15-14.59-15-35.2 0-20.61 15-35.41 15-14.8 35.01-14.8 20.01 0 35 14.59Q690-460.82 690-440.21q0 20.61-14.79 35.41-14.79 14.8-35.7 14.8ZM480.49-230q-20.91 0-35.7-15Q430-260 430-280.01q0-20.01 14.79-35Q459.58-330 480.49-330q20.91 0 35.21 14.79t14.3 35.7Q530-260 515.7-245q-14.3 15-35.21 15Zm-160.28 0q-20.61 0-35.41-15-14.8-15-14.8-35.01 0-20.01 14.59-35Q299.18-330 319.79-330q20.61 0 35.41 14.79 14.8 14.79 14.8 35.7Q370-260 355.41-245q-14.59 15-35.2 15Zm319.3 0Q620-230 605-245q-15-15-15-35.01 0-20.01 15-35Q620-330 640.01-330q20.01 0 35 14.79Q690-300.42 690-279.51 690-260 675.21-245q-14.79 15-35.7 15Z"/>
                                </svg>
                            </span>
                        </a>
                        <a id="grades" class="cursor-pointer flex justify-center items-center py-3 w-full">
                            <span class="w-8 font-black pointer-events-none material-symbols-rounded">
                                <svg class="w-full h-full flex justify-center items-center" viewBox="-14 -1000 1000 1000">
                                    <path class="${hlp.gettheme("fill", "700")}" d="M212-76q-57.4 0-96.7-39.3Q76-154.6 76-212v-536q0-57.4 39.3-96.7Q154.6-884 212-884h536q57.4 0 96.7 39.3Q884-805.4 884-748v536q0 57.4-39.3 96.7Q805.4-76 748-76H212Zm108.42-489q-18.42 0-31.92 13.2T275-520v201q0 18.6 13.28 31.8t32 13.2Q339-274 352-287.2t13-31.8v-201q0-18.6-13.08-31.8t-31.5-13.2Zm160-121q-18.42 0-31.92 13.2T435-641v322q0 18.6 13.28 31.8t32 13.2Q499-274 512-287.2t13-31.8v-322q0-18.6-13.08-31.8t-31.5-13.2Zm159.3 241Q621-445 608-431.5T595-400v81q0 18.6 13.08 31.8t31.5 13.2q18.42 0 31.92-13.2T685-319v-81q0-18-13.28-31.5t-32-13.5Z"/>
                                </svg>
                            </span>
                        </a>
                        <a id="settings" class="cursor-pointer flex justify-center items-center py-3 w-full">
                            <span class="w-8 font-black pointer-events-none material-symbols-rounded">
                                <svg class="w-full h-full flex justify-center items-center" viewBox="-14 -1000 1000 1000">
                                    <path class="${hlp.gettheme("theme-fill")}" d="M405-34q-32 0-55-20t-27-51l-10-70q-3-2-6.5-4t-6.5-4l-65 27q-29 12-59 2.5T131-191L56-325q-16-27-10-57.5T77-431l54-42q0-2 .5-4t.5-4q0-2-.5-3.5t-.5-3.5l-53-40q-26-19-32-49.5T56-636l75-132q16-27 45-37t58 2l66 26q4-1 7.5-3t6.5-4l9-70q3-32 26.5-52.5T405-927h150q32 0 55.5 20.5T637-854l9 70 8 4 8 4 62-27q30-12 59.5-2t45.5 37l75 132q16 28 10 58.5T882-528l-55 40v8q0 2-.5 4t-.5 4l55 40q26 18 32 48.5T903-325l-76 134q-15 27-44.5 37t-59.5-2l-65-27q-3 1-6 3.5t-5 3.5l-10 71q-4 31-27 51t-55 20H405Zm73-296q63 0 107-44t44-107q0-62-44-106.5T478-632q-63 0-107 44.5T327-481q0 63 44 107t107 44Z"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        `).click(async function (e) {
            switch ($(e.target).attr("id")) {
                /**
                 * Topbar
                 */
                case "reload": {
                    $("#gpa").empty();
                    $("#averages").empty();
                    $("#courses").empty();
                    hlp.load(async function () {
                        await call();
                    });
                    break;
                }

                /**
                 * Navigation
                 */
                case "calendar": {
                    await site.runtime("calendar");
                    break;
                }
                case "overview": {
                    await site.runtime("overview");
                    break;
                }
                case "settings": {
                    await site.runtime("settings");
                    break;
                }
            }
        });

        async function call() {
            // Animate the guages
            let wait = 0;
            $.each($("#averages svg"), (i, guage) => {
                wait++; wait++;
                setTimeout(function () {
                    var circle = $(guage).find("[class^='stroke-'][class$='-500']");
                    var percentage = $(guage).parent().parent().find(".score").text(); // Set the percentage value here
                    var offset = 339.292 * (1 - percentage / 100);
                    circle.css("stroke-dashoffset", 339.292).animate({"stroke-dashoffset": offset}, 1000);
                    
                    $({scoreCounter: 0}).animate({scoreCounter: percentage}, {
                        duration: 1000,
                        easing: 'linear',
                        step: function () {
                            $(guage).parent().parent().find(".score-text").text(Math.ceil(this.scoreCounter));
                        }
                    });
                }, wait * 80);
            });
        }

        await call();
    })
}