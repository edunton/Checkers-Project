######
#
# A simple Makefile
#
######

PATSCC=$(PATSHOME)/bin/patscc
ATSCC2JS=$(PATSHOME)/bin/atscc2js

new: cleanall all

######
#
all:: \
draw_checkers_vtypes_dats.js
#
draw_checkers_vtypes_dats.c: draw_checkers_vtypes.dats; $(PATSCC) -ccats $<
draw_checkers_vtypes_dats.js: draw_checkers_vtypes_dats.c; $(ATSCC2JS) -o $@ -i $<
#
######

RMF=rm -f

######

clean:: ; $(RMF) *~
clean:: ; $(RMF) *_dats.c

######

cleanall:: clean
cleanall:: ; $(RMF) *_dats.js

###### end of [Makefile] ######
