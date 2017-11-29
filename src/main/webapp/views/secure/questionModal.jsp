
<!-- Modal -->
<div id="questionModal" class="modal fade" role="dialog">
	<div class="modal-dialog">
		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title" id="questionModalTitle">Muokkaa
					kysymyst‰</h4>
			</div>
			<div class="modal-body">
				<input type="text" class="form-control" placeholder="kysymysteksti"
					id="kysymysteksti"> <br>
				<div class="col-md-4">
					<label for="typeselect">Kysymyksen tyyppi:</label> <select
						class="form-control" id="typeselect">
						<option value="1">Teksti</option>
						<option value="2">Checkbox/Radio</option>
						<option value="3">Skaala</option>
						<option value="4">Monivalinta</option>
					</select>

				</div>
				<div class="col-md-4">
					<label for="vaadittu">Vaadittu</label> <input type="checkbox"
						class="form-control" id="vaadittu" name="vaadittu">
				</div>
				<div class="col-md-4">
					<label for="options">Lis‰‰</label>
					<button class="btn btn-default" name="options" id="lisaaVaihtoehto"
						onclick="addOption();" disabled="disabled">Lis‰‰
						vaihtoehto</button>
				</div>
				<br> <br>
				<div id="vaihtoehdot"></div>
				<br> <br>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger left"
					onclick="poistaKysymys()">Poista kysymys</button>
				<button type="button" class="btn btn-success"
					onclick="tallennaKysymys();">Tallenna</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Takaisin</button>
			</div>
		</div>
	</div>
</div>


<!-- Modal -->
<div id="showQuestions" class="modal fade" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title" id="questionModalTitle">Kysymykset</h4>
			</div>
			<div class="modal-body">
				<div id="questionDiv"></div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-info left" data-dismiss="modal" data-toggle="modal" onclick="addQuestion();">Lis‰‰ kysymys</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Takaisin</button>
			</div>
		</div>

	</div>
</div>

