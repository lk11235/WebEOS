examples_main = {
   TH1 : [
     { opt: "", file: "hsimple.root", item: "hpx;1" },
     { opt: "P" },
     { opt: "P0" },
     { name: "star", opt:"*", title: "draw stars on histogram bins" },
     { name: "*H", opt:"*H", title: "draw stars and histogram itself" },
     { opt: "L", title: "draw histogram as line" },
     { name: "LF2", opt:"LF2,fill_blue", title: "draw histogram as line with filled area" },
     { name: "B", opt:"B,fill_red", title: "draw histogram as bar chart" },
     { opt: "A", title: "disables axes drawing" },
     { opt: "E" },
     { opt: "E0", title: "draw errors, also for empty bins" },
     { opt: "E1" },
     { opt: "E1X0", title: "draw error markers, without horizontal part" },
     { opt: "pE2" },
     { name: "E3", opt: "e3,fill_red" },
     { name: "E4", opt: "e4,fill_blue" },
     { name: "text", opt: "hist,text" },
     { name: "lego", opt: "lego2,pal50", r3d: "svg" },
     { opt: "X+Y+", title: "draw axes on other side of frame" },
     { opt: "gridx", title: "enable grid on X axis" },
     { opt: "gridy", title: "enable grid on Y axis" },
     { opt: "gridxy", title: "enable grid on both axes" },
     { opt: "logy", title: "enable logy scale" },
     { opt: "tickx", title: "draw X ticks also on opposite frame side" },
     { opt: "ticky", title: "draw Y ticks also on opposite frame side" },
     { opt: "tickxy", title: "draw X and Y ticks also on opposite frame sides" },
     { opt: "inspect", asurl: true, file: "hsimple.root", item: "hpx;1", title: "universal object inspector, can be used for any class" },
     { name: "docu", file: "histpainter6.root", layout: "vert32", items: ["two_axis","draw_e1","draw_bar","draw_e34","draw_text"], title:"several TH1 examples from THistPainter documentation" },
     { name: "twoscales", url: "?nobrowser&file=$$$tutorials_hist.root&item=[twoscales/[1],twoscales/[3]]&opt=[hist,yaxis_red;line_red;y+]", title: "interactive second Y scale to draw axis for second histogram" },
     { name: "twoscales2", url: "?nobrowser&file=$$$tutorials_hist.root&item=[transpad/pad1/[1],transpad/pad2/[0]]&opt=[hist,Y+;yaxis_red]", title: "interactive second Y scale to draw axis for second histogram" }
   ],
   TH2 : [
     { opt: "", file: "hsimple.root", item: "hpxpy;1" },
     { opt: "col" },
     { opt: "colpal77", title: "example how color palette 77 can be used for drawing" },
     { opt: "colz", title: "color draw with palette" },
     { opt: "acol", title: "disable axes drawing with col option" },
     { opt: "col_rx_ry", title: "reverse x and y axis with col drawing" },
     { name: "projx1", opt: "projx1,colz", title: "Draw X projection together with 2D plot", notest:true },
     { name: "projy3", opt: "projy3,colz", title: "Draw Y projection over 3 bins together with 2D plot", notest:true },
     { opt: "arr", title: "ARR draw option" },
     { opt: "cont", title: "Contour plot" },
     { opt: "cont1", title: "Contour plot with different line colors" },
     { opt: "cont2", title: "Contour plot with different line styles" },
     { opt: "cont3", title: "Contour plot with just lines" },
     { opt: "cont4", title: "Contour plot with background color" },
     { opt: "surf", title: "3D plot with surf option" },
     { opt: "surf1", title: "3D SURF plot with colors levels" },
     { opt: "surf2", title: "3D colored SURF without lines" },
     { opt: "surf3", title: "3D SURF with contour plot on the top" },
     { opt: "surf4", title: "3D SURF with Gouraud shading" },
     { opt: "surf6", title: "Only contour lines in 3D space" },
     { opt: "surf7", title: "3D colored SURF with contours on the top" },
     { opt: "e", title: "3D plot with errors" },
     { opt: "lego", title: "3D lego plot" },
     { opt: "lego0", title: "3D lego plot (without zeros)" },
     { opt: "lego1", title: "3D lego plot with red colors on x-sides", r3d: "svg" },
     { opt: "lego2", title: "3D lego plot with color levels" },
     { opt: "lego3", title: "lego3 plot - lego1 without border lines" },
     { opt: "lego4", title: "lego4 plot - lego2 without border lines" },
     { opt: "text", title: "draw bins content as text, can be combined with col, box or scat options" },
     { opt: "texte", title: "draw bins bins content as text and error in new line - using #splitline syntax" },
     { opt: "texte0", title: "draw errors in the same line" },
     { opt: "scat", title: "scatter plot (used as default draw option)" },
     { name: "box", json: "hbox.json.gz", opt: "box", title: "boxes, area proportional to bin content" },
     { name: "box1", json: "hbox.json.gz", opt: "box1", title: "boxes, area proportional to bin content" },
     { name: "ctx_cty", opt: "col_ctx_cty", file: "QAresults.root", item: "PIDqa/PIDqa1/ITS/hNsigmaP_ITS_helium-3;1", title: "center title x (ctx) and center title y (cty)" },
     { name: "otx_oty", opt: "col_otx_oty", file: "QAresults.root", item: "PIDqa/PIDqa1/ITS/hNsigmaP_ITS_triton;1", title: "opposite title x (otx) and opposite title y (oty)" },
     { name: "twoscales", url: "?nobrowser&file=$$$histpainter6.root&item=[draw_boxsame/[1],draw_boxsame/[2]]&opt=[box,box;x+y+;xaxis_red;yaxis_red]", title: "interactive second X and Y scale for second histogram" }
   ],
   TH2Poly : [
      { name: "honeycomb", file: "th2poly.root", item: "honeycomb;1", opt: "l,col" },
      { opt: "lego", file: "th2poly.root", item: "boxes;1" },
      { opt: "col0z", title: "suppress empty bins with 0 option" },
      { name: "europe", item: "europe;1", opt: "", title: "Europe map (relatively old)" },
      { name: "usa", item: "usa;1", opt: "l,col,pal50", title: "USA map" },
      { name: "fibonacci", file: "tutorials_hist.root", item: "Fibonacci",  title: "Macro outputs from $ROOTSYS/tutorials/hist/Fibonacci.C" },
      { name: "tprofile2poly", file: "tprofile2poly.root", item: "c2", title: "Example of TProfile2Poly class, see $ROOTSYS/tutorials/hist/tprofile2polyRealistic.C output" }
   ],
   TH3 : [
     { opt: "", file: "histpainter6.root", item: "draw_th3_scat;1" },
     { opt: "box", file: "histpainter6.root", item: "draw_th3_box;1/h3box" },
     { name: "box2", file: "hsimple.root", item: "ntuple", opt: "px:py:pz;hbins:15;drawopt:box2", title: "use colors" },
     { name: "box3", file: "hsimple.root", item: "ntuple", opt: "px:py:pz;hbins:15;drawopt:box3", title: "use colors" },
     { opt: "glbox1", file: "glbox.root", item: "h31;1", title: "draw spheres" },
     { opt: "glbox2", title: "draw spheres with color derived from bin content" },
     { opt: "glcol", file: "histpainter6.root", item: "glvoxel",  title: "draw semi-transparent boxes with color derived from bin content" }
   ],
   TTree : [
      { name: "Draw", asurl: true, file: "hsimple.root", item: "ntuple", opt: "px", title: "Histogram data of TBranch object" },
      { name: "2d", asurl: true, file: "hsimple.root", item: "ntuple", opt: "px:py", title: "Two-dimensional TTree::Draw" },
      { name: "3d", asurl: true, file: "hsimple.root", item: "ntuple", opt: "px:py:pz", title: "Three-dimensional TTree::Draw" },
      { name: "dump", asurl: true, file: "hsimple.root", item: "ntuple", opt: "px+py+pz>>dump;num:30", title: "Three-dimensional TTree::Draw" },
      { name: "hist", asurl: true, file: "hsimple.root", item: "ntuple", opt: "px:py>>hist(50,-5,5,50,-5,5)", title: "TTree::Draw into custom histogram" },
      { name: "cut", asurl: true, file: "hsimple.root", item: "ntuple", opt: "px:py::pz>5", title: "TTree::Draw with cut condition" },
      { name: "player", asurl: true, file: "hsimple.root", item: "ntuple", opt: "px:py::pz>5;player", title: "Enable player to let change draw expression", notest:true },
      { name: "lhcb2", asurl: true, file: "https://root.cern/files/lhcb2.root", item: "E;1//Event/Gen/Header/m_evtNumber", title: "Histogram data of sub-sub-branches from lhcb2.root file" },
      { name: "atlas", asurl: true, file: "https://root.cern/files/atlas30new.root", item: "CollectionTree", opt: "TileMuContainer_p1_TileMuObj.vector.m_phi", title: "Histogram data of tree from atlas30new.root file" },
      { name: "expr", asurl: true, file: "WJets.root", opt: "TMath::Abs(lep1_p4.M())", item: "t", title: "Use of expression and object methods" },
      { name: "vect_expr", asurl: true, file: "WJets.root", item: "t", opt: "jets.M()", title: "Use of expression for objects, stored in the vector" }
   ],
   TProfile : [
     { opt: "", file: "hsimple.root", item: "hprof;1" },
     { opt: "E" },
     { opt: "E1" },
     { opt: "pE2" },
     { opt: "hist" },
     { name: "text", opt: "hist,text" },
     { name: "texte", opt: "hist,texte" }
   ],
   THStack : [
     { opt: "", file: "histpainter6.root", item: "draw_hstack;1", title: "several examples from THistPainter docu" },
     { name: "nostackb", item: "draw_nostackb;1", title: "example of bar chart with stacked histograms" },
     { name: "err", item: "draw_stacke;1", title: "error draw options for stacked histograms" },
     { name: "lego", file: "tutorials_hist.root", item: 'multicolor', title: "Several histograms with different colors, tutorials/hist/multicolor.C" }
   ],
   TF1 : [
     { name: "func", file: "fillrandom.root", item: "sqroot;1", title: "default drawing of TF1" },
     { name: "X+Y+", file: "fillrandom.root", item: "sqroot;1", opt: "X+Y+", title: "draw axes on other sides" },
     { name: "hist+func", opt: "", url: "?nobrowser&file=$$$fillrandom.root&item=h1f;1+sqroot;1" },
     { name: "hist+func+Y+", opt: "", url: "?nobrowser&file=$$$fillrandom.root&item=[h1f;1,sqroot;1]&opt=[hist,y+]", title: "demo for second fully interactive Y axis" },
     { name: "canv", opt: "", file: "danilo6.root", item: "canvas;1" },
     { name: "sum", opt: "", file: "tf1new.root", item: "c1;1", title: "newest version of ROOT with new coding rules for the functions parameters" },
     { name: "ff2", file: "ff2.root", item: "c1Dia;1" },
     { name: "ff3", file: "ff3.root", item: "c1Dia;1" }
   ],
   TF2 : [
     { name: "tf2", json: "tf2.json.gz", opt: "nosave", title: "Example of TF2 drawing" },
     { name: "3d", file: "tutorials_graphs.root", item: "annotation3d", title: "Output of tutorials/graphs/annotation3d.C" },
     { name: "pnt", file: "tutorials_graphs.root", item: "graph2derrorsfit", title: "Combination of TF2 and TGraph2DErrors, output of tutorials/graphs/graph2derrorsfit.C" },
   ],
   TCanvas : [
     { name:"roofit", file: "rf107.root", item: "rf107_plotstyles;1" },
     { name:"subpad", url: "?nobrowser&file=$$$rf107.root&item=rf107_plotstyles;1/[0]", title: "Draw only selected sub-pad from list of TCanvas list of primitives"  },
     { name:"zdemo", file: "zdemo.root", item: "zdemo;1" },
     { name:"legend", asurl: true, file: "legends.root", item: "legends;1", latex: "mathjax", title: "TCanvas with TLegend, use MathJax.js" },
     { name:"time", file: "ct.root", item: "ct;1" },
     { name:"2d+3d", file: "mix2d3d.root", item: "Canvas;1", title: "Mixture of 2D and 3D drawings on the same canvas (work properly in Firefox and Chrome)" },
     { name: "big", file: "bigcanvas.root", item: "big", title: "100 histograms in subpads, for performance testing" },
     { name: "log2", file: "tutorials_graphs.root", item: "exclusiongraph2", opt: "log2", title: "log2 for both x and y axes" },
     { name: "axes", file: "tutorials_graphs.root", item: "exclusiongraph2", opt: "ctx_oty_log2x", title: "Moving axes title ctx - center title x, oty - opposite title y, plus log2x option" },
     { name: "df104", file: "df104_HiggsToTwoPhotons.root", item: "c", opt: "", title: "Output produced by tutorials/dataframe/df104_HiggsToTwoPhotons.py macro" },
     { name: "df105", file: "df105_WBosonAnalysis.root", item: "c", opt: "", title: "Output produced by tutorials/dataframe/df105_WBosonAnalysis.py macro" }
   ],
   TRatioPlot : [
      { name:"r1", file: "ratioplot.root", item: "ratioplot1;1", title: "Output of tutorial hist/ratioplot1.C" },
      { name:"r2", item: "ratioplot2;1", title: "Output of tutorial hist/ratioplot2.C" },
      { name:"r3", item: "ratioplot3;1", title: "Output of tutorial hist/ratioplot3.C" },
      { name:"r4", item: "ratioplot4;1", title: "Output of tutorial hist/ratioplot4.C" },
      { name:"r5", item: "ratioplot5;1", title: "Output of tutorial hist/ratioplot5.C" },
      { name:"r6", item: "ratioplot6;1", title: "Output of tutorial hist/ratioplot6.C" }
   ],
   TGeo : [
     { name: "logo", asurl: true, file: "geom/rootgeom.root", item: "simple1;1", title:"Geometry from rootgeom.C example" },
     { name: "camera", asurl: true, file: "geom/rootgeom.root", item: "simple1;1", opt:"roty88,rotz357,zoom149", title:"Change camera position and zoom via URL parameters" },
     { name: "prim", file: "geom/geodemo.root", layout: "vert333", items: ['box','para','arb8','trap','gtra','trd1','trd2','xtru'], opts: ['z','z','z','z','z','z','z','z','z'], r3d: "svg", title: "Basic TGeo primitives from tutorials/geom/geodemo.C, group 1" },
     { name: "prim2", file: "geom/geodemo.root", layout: "vert333", items: ['cone','coneseg','tube','tubeseg','ctub','eltu','pcon','pgon'], opts: ['z','z','z','z','z','z','z','z'], r3d: "svg", title: "Basic TGeo primitives from tutorials/geom/geodemo.C, group 2" },
     { name: "prim3", file: "geom/geodemo.root", layout: "grid3x2", items: ['sphere','torus','parab','hype','comp'], opts: ['z','z','z','z','z'], title: "Basic TGeo primitives from tutorials/geom/geodemo.C, group 3" },
     { name: "tess", file: "geom/tess.root", item: 'tess', r3d: "svg", title: "New TGeoTessellated shape" },
     { name: "comp", url: "?nobrowser&file=$$$geom/geodemo.root+&layout=grid2x2&items=[comp;1/Left,comp;1/Right,comp;1,comp;1]&opts=[az,az,comp_az,az]", title:"Components of composite shape" },
     { name: "building", asurl: true, file: "geom/building.root", item: "geom;1", opt: "allz", title: "Geometry from tutorials/geom/building.C" },
     { name: "alice", asurl: true, file: "https://root.cern/files/alice2.root", item: "Geometry;1", opt: "macro:https://root.cern/js/files/geomAlice.C;black;vislvl2", title: "ALICE geometry" },
     { name: "atlas", asurl: true, file: "https://root.cern/files/atlas.root", item: "atlas;1", opt: "dflt;black", title:"ATLAS geometry" },
     { name: "cms", asurl: true, file: "https://root.cern/files/cms.root", item: "cms;1", opt: "macro:https://root.cern/files/cms_cmse.C;clipxyz;black", title: "CMS geomtery" },
     { name: "animate", asurl: true, file: "https://root.cern/files/cms.root", item: "cms;1/OCMS/CMSE_1", opt: "vislvl4;dflt;trr300;trz300;rotate;zoom90;black;ctrl", title: "Animated and transformed CMS geomtery", notest:true },
     { name: "lhcb", asurl: true, file: "https://root.cern/files/lhcbfull.root", item: "Geometry;1", opt: "all;dflt;black", title: "LHCb geometry" },
     { name: "eve", asurl: true, json: "geom/evegeoshape.json.gz", title: "Example of drawing snapshot of volumes from EVE" },
     { name: "tracks", url: "?nobrowser&json=$$$geom/evegeoshape.json.gz&file=$$$geom/eve_tracks.root&item=evegeoshape.json.gz+eve_tracks.root/tracks;1", title:"Overlap of geometry with tracks, read from separate file" },
     { name: "tracks+hits", url: "?nobrowser&json=$$$geom/simple_alice.json.gz&file=$$$geom/tracks_hits.root&item=simple_alice.json.gz+tracks_hits.root/tracks;1+tracks_hits.root/hits;1&opt=black", title:"Overlap of simple ALICE geometry with tracks and hits, read from separate file" },
     { name: "proj", url: "?nobrowser&layout=h12_21&files=[https://root.cern/files/alice_ESDgeometry.root,$$$geom/eve_tracks.root]&items=[[[0]/Gentle,[1]/tracks],[0]/Gentle,[0]/Gentle]&opts=[main;black,projz;black,projx;black]", title: "Simple ALICE geometry and two projections" },
     { name: "overlap", asurl: true, file: "geom/overlap.root", r3d: "svg", item: "default/Overlaps/ov00010", title: "example of TGeoOverlap" },
     { name: "half", json: "geom/comp_half.json.gz", title: "Use of TGeoHalfSpace for building composites" }
   ],
   TGraph : [
     { opt: "", file: "graph.root", item: "Graph;1" },
     { opt: "L" },
     { opt: "P" },
     { name: "star", opt:"*" },
     { opt: "LP" },
     { opt: "B" },
     { opt: "B1" },
     { opt: "AX+Y+L", title: "move X/Y labels on other side" },
     { opt: "IA", title: "hide (Invisible) axes drawing " },
     { opt: "gridxy", title: "enable grid on both axes" },
     { opt: "logxy", title: "enable logx/y scales" },
     { opt: "tickxy", title: "draw X and Y ticks also on opposite frame sides" },
     { name: "RX", opt: "ARXL", title: "reverse X axis" },
     { name: "RY", opt: "ARYL", title: "reverse Y axis" },
     { name: "docu", file: "graph.root", layout: "vert333", items: ['c1','c47','c4','c48','c41','c42','c43','c44','c45'], title: "several canvas from TGraph documentation page" },
     { name: "excl", file: "tutorials_graphs.root", item: "exclusiongraph2", title: "Exclusion draw example, output of tutorials/graphs/exclusiongraph2.C" },
     { name: "plc", file: "tutorials_graphs.root", item: "graphpalettecolor", title: "Automatic set of graph colors, output of tutorials/graphs/graphpalettecolor.C" },
     { name: "shade", file: "tutorials_graphs.root", item: "graphShade", title: "output of tutorials/graphs/graphShade.C" },
     { name: "second_axis", url: "?nobrowser&file=$$$graph_twopad.root&item=[c1/pad1/[0],c1/pad2/[0]]&opt=[alp,ly+;yaxis_red]", title: "two overlayed graphs with second Y axis" },
   ],
   TGraphErrors : [
     { opt:"", file: "graph.root", item: "GraphErrors;1" },
     { opt:"l",  title: 'just line with errors' },
     { opt:"lx", title: 'suppress drawing of the errors' },
     { opt:"z" , title: "do not draw ends"},
     { opt:">" , title: "draw arrows at the ends"},
     { opt:"|>" , title: "draw closed arrows at the ends"},
     { opt:"||" , title: "do not draw main error lines, only ends"},
     { opt:"[]" , title: "do not draw main error lines, only ends as brackets"},
     { opt:"0", title: "do not draw errors for points outside range" },
     { opt:"2", title: "filled rec" },
     { opt:"3" },
     { opt:"4" },
     { opt:"5", title: "filled rec plus line contour" }
   ],
   TGraphAsymmErrors : [
     { opt:"", file: "graph.root", item: "GraphAsymmErrors;1" },
     { opt:"z" , title: "do not draw ends"},
     { opt:">" , title: "draw arrows at the ends"},
     { opt:"|>" , title: "draw closed arrows at the ends"},
     { opt:"||" , title: "do not draw main error lines, only ends"},
     { opt:"[]" , title: "do not draw main error lines, only ends as brackets"},
     { opt:"2", title: "filled rec"  }
   ],
   TGraphPolar : [
      { opt: "", file: "tutorials_graphs.root", item: "graphpolar", title: "Polar coordinates, output of tutorials/graphs/graphpolar.C" },
      { name: "tut2", item: "graphpolar2", title: "Polar coordinates, output of tutorials/graphs/graphpolar2.C" },
      { name: "tut3", item: "graphpolar3", title: "Polar coordinates, output of tutorials/graphs/graphpolar3.C" }
   ],
   TMultiGraph : [
     { name: "exclusion", file: "graph.root", item: "exclusion;1" },
     { name: "c1", file: "multigraph.root", item: "c1;1" },
     { name: "c2", item: "c2;1" },
     { name: "c3", item: "c3;1" },
     { name: "c4", item: "c4;1" },
     { name: "c5", item: "c5;1" },
     { name: "all", url: "?nobrowser&file=$$$multigraph.root&layout=grid3x2&items=[c1,c2,c3,c4,c5]" }
   ],
   TGraph2D : [
      { opt: "", file: "graph2d.root", item: "Graph2D", title: "example of TGraph2D" },
      { name: "pcol", item: "pcol", title: "example of TGraph2D, color options" },
      { opt: "err",  item: "cerr", title: "example of TGraph2DErrors, errors drawing" },
      { opt: "line",  item: "line", title: "line drawing with TGraph2D" }
   ],
   TLatex : [
     { name: "latex", file: "latex.root", layout: "grid2x2", items: ['lva','ex1','ex2','ex3'], title: "Internal TLatex processor" },
     { name: "mathjax", file: "latex.root", layout: "grid2x2", latex: "mathjax", items: ['lva','ex1','ex2','ex3'], title: "Render TLatex with MathJax.js" },
     { name: "math", file: "latex.root", item: "math", reset_mathjax: true, title: "TMathText drawn always with MathJax.js rendering" }
   ],
   TASImage : [
      { name: "n4254", file: "image.root", item: "image", title: "TASImage with binary data, see tutorials/image/galaxy_image.C macro" },
      { name: "rose", file: "rose.root", item: "rose512", title: "TASImage with PNG and binary data, see tutorials/image/rose_image.C macro" }
   ],
   Misc : [
     { name: "ellipse", file: "ellipse.root", item: "c1;1", title: "TEllipse class" },
     { name: "axis", file: "gaxis.root", item: "c1;1", title: "TGaxis class" },
     { name: "arrow", file: "arrow.root", item: "c1;1", title: "TArrow class" },
     { name: "sinfo", url: "?nobrowser&file=$$$hsimple.root&item=StreamerInfo", title: "List of streamer infos" },
     { name: "3dmark", url: "?nobrowser&file=$$$mix2d3d.root&item=Canvas;1/pad4&opt=white", title: "TPloyMarker3D class" },
     { name: "profile2d", file: "profile2d.root", item: "c1;1", title: "TProfile2D class" },
     { name: "spline", file: "tutorials_graphs.root", item: 'splines_test',  title: "TSpline3 and TSpline5 classes, tutorials/graphs/splines_test.C" },
     { name: "polyline", file: "polyline.root", item: "can;1", title: "TPolyLine class (produced with graphics/triangles.C)" },
     { name: "class", json: "draw_class.json.gz", title: "Canvas, produced with DrawClass() call" },
     { name: "archi", file: "tutorials_graphics.root", item: 'archi',  title: "Usage of TPavesText, tutorials/graphics/archi.C" },
     { name: "feynman", file: "tutorials_graphics.root", item: 'feynman',  title: "Usage of TCulyLine/Arc, tutorials/graphics/feynman.C" },
     { name: "pie", file: "tutorials_graphics.root", item: 'piechart',  title: "TPie, tutorials/graphics/piechart.C" },
     { name: "fill", file: "fillpatterns.root", item: 'patterns',  title: "Different fill patterns" }
   ]
 };