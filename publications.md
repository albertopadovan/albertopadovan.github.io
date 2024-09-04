# Publications

<!-- Search Bar -->
<input type="text" id="searchInput" onkeyup="searchPublications()" placeholder="Search by year..">

<div id="publicationList">
   <!-- 2024 Publications -->
   <h2 data-year="2024">2024</h2>
   <ul class="publication-list" data-year="2024">
       <li class="publication"><b>Padovan, A.</b>, Vollmer, B. and Bodony, D.J., Data-driven model reduction via non-intrusive optimization of projection operators and reduced-order dynamics, <i>SIAM Journal on Applied Dynamical Systems</i>, 2024 (to appear) <a href="https://arxiv.org/abs/2401.01290" target="_blank">[link]</a></li>
       <li class="publication"><b>Padovan, A.</b> and Rowley, C.W., Continuous-time balanced truncation for time-periodic fluid flows using frequential Gramians, <i>Journal of Computational Physics</i>, 2024 <a href="https://www.sciencedirect.com/science/article/pii/S0021999123006927?via%3Dihub" target="_blank">[link]</a> <a href="manuscripts/PadovanRowley_JCP2024.pdf" target="_blank">[pdf]</a></li>
   </ul>

   <!-- 2023 Publications -->
   <h2 data-year="2023">2023</h2>
   <ul class="publication-list" data-year="2023">
       <li class="publication">Otto, S.E., <b>Padovan, A.</b> and Rowley, C.W., Model Reduction for Nonlinear Systems by Balanced Truncation of State and Gradient Covariance, <i>SIAM Journal on Scientific Computing</i>, 2023 <a href="https://epubs.siam.org/doi/full/10.1137/22M1513228" target="_blank">[link]</a></li>
   </ul>

   <!-- 2022 Publications -->
   <h2 data-year="2022">2022</h2>
   <ul class="publication-list" data-year="2022">
       <li class="publication">Wu, W., Meneveau, C., Mittal, R., <b>Padovan, A.</b>, Rowley, C.W. and Cattafesta, L., Response of a turbulent separation bubble to zero-net-mass-flux jet perturbations, <i>Physical Review Fluids</i>, 2022 <a href="https://journals.aps.org/prfluids/abstract/10.1103/PhysRevFluids.7.084601" target="_blank">[link]</a> <a href="manuscripts/WuEtAl_PRF2022.pdf" target="_blank">[pdf]</a> </li>
       <li class="publication"><b>Padovan, A.</b> and Rowley, C.W., Analysis of the dynamics of subharmonic flow structures via the harmonic resolvent: Application to vortex pairing in an axisymmetric jet, <i>Physical Review Fluids</i>, 2022 <a href="https://journals.aps.org/prfluids/abstract/10.1103/PhysRevFluids.7.073903" target="_blank">[link]</a> <a href="manuscripts/PadovanRowley_PRF2022.pdf" target="_blank">[pdf]</a></li>
       <li class="publication">Otto, S.E., <b>Padovan, A.</b> and Rowley, C.W., Optimizing Oblique Projections for Nonlinear Systems using Trajectories, <i>SIAM Journal on Scientific Computing</i>, 2022 <a href="https://epubs.siam.org/doi/10.1137/21M1425815" target="_blank">[link]</a></li>
   </ul>
</div>

<script src="search.js"></script>

<style>
#searchInput {
    width: 100%;
    padding: 12px;
    margin: 12px 0;
    box-sizing: border-box;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 4px;
    transition: border-color 0.3s, box-shadow 0.3s;
}

#searchInput:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
}

/* Justify the text of publication entries */
.publication-list {
    text-align: justify;
}

/* Adjust the font size of the year headings */
h2[data-year] {
    font-size: 1.2em; /* Adjust this value as needed */
    margin-top: 20px; /* Adjust the top margin if needed */
    margin-bottom: 10px; /* Adjust the bottom margin if needed */
}
</style>