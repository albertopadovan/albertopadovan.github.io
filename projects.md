## Research

Below is a list of current and past projects that I am/was involved in.

-------------------
**The Harmonic Resolvent Framework for Time-Periodic Fluid Flows**

Fluid flows that exhibit time-periodic behavior, or that evolve in the proximity of time-periodic orbits, are ubiquitous in nature and engineering.
Some examples include wake flows, jets and mixing layers at moderately low Reynolds number, flows in turbomachinery and rotorcraft, as well as some wall-bounded laminar and turbulent flows. 
In this work, we introduce the harmonic resolvent framework as a tool to study the amplification mechanisms and triadic frequency interactions in nonlinear fluid flows that evolve in the proximity of time-periodic solutions of the Navier-Stokes equation.
The harmonic resolvent operator can be understood as a frequency-domain linear input-output operator that governs how a fluid flow responds to harmonic excitation.
We show that studying the structure of this operator allows to extract insightful information on the physics of the underlying fluid, and to develop reduced-order models for prediction and control.

<br>

Related publications and preprints:
- <b>Padovan, A.</b>, Otto, S.E. and Rowley, C.W., [Analysis of amplification mechanisms and cross-frequency interactions in nonlinear flows via the harmonic resolvent](https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/abs/analysis-of-amplification-mechanisms-and-crossfrequency-interactions-in-nonlinear-flows-via-the-harmonic-resolvent/49CEFC0FDF1E6F395E4CD97001832B5F), <i> Journal of Fluid Mechanics </i>, 2020
- <b>Padovan, A.</b> and Rowley, C.W., [Analysis of the dynamics of subharmonic flow structures via the harmonic resolvent: Application to vortex pairing in an axisymmetric jet](https://journals.aps.org/prfluids/abstract/10.1103/PhysRevFluids.7.073903), <i> Physical Review Fluids </i>, 2022
- Wu, W., Meneveau, C., Mittal, R., <b>Padovan, A.</b>, Rowley, C.W. and Cattafesta, L., [Response of a turbulent separation bubble to zero-net-mass-flux jet perturbations](https://journals.aps.org/prfluids/abstract/10.1103/PhysRevFluids.7.084601), <i> Physical Review Fluids </i>, 2022
- <b>Padovan, A.</b> and Rowley, C.W., [Continuous-time balanced truncation for time-periodic fluid flows using frequential Gramians](https://arxiv.org/abs/2208.13245), arXiv:2208.13245, 2022


-------------------
**Projection-Based Reduced-Order Models for Highly Non-Normal Fluid Flows**

Simulating the flow of a fluid using classical computational fluid dynamics techniques is often an expensive task. The field of model reduction concerns itself with the development of mathematically-sound methods to identify reduced-order (or surrogate) models that can be used to accurately predict the behavior of the fluid at a fraction of the computational cost of classical methods.
Projection-based reduced-order models are a class of models obtained by projecting the governing equations of a fluid onto a (usually linear) low-dimensional space.
The predictive accuracy of these models and their properties (e.g., stability) depend heavily on the projection operators that are used to define them.
In this work, we propose two different approaches to define projection operators that yield reduced-order models that can accurately predict the behvior of highly non-normal fluid flows.
These are flows that are typically advection-dominated and exhibit travelling-wave-like behavior (e.g., jets and mixing layers), and it is well-known that these features pose a significant challenges for most classes of model reduction techniques.
The first method proposed herein yields an optimal projection operator by minimizing the error between observations collected via direct numerical simulation and the prediction computed using the projection-based model.
The second method yields a projection operator obtain by diagonalizing the state and gradient covariances matrices, which we compute by performing forward and adjoint direct numerical simulations.

<br>

Related publications and preprints:
- Otto, S.E., <b>Padovan, A.</b> and Rowley, C.W., [Optimizing Oblique Projections for Nonlinear Systems using Trajectories](https://epubs.siam.org/doi/10.1137/21M1425815), <i>SIAM Journal on Scientific Computing</i>, 2022
- Otto, S.E., <b>Padovan, A.</b> and Rowley, C.W., [Model Reduction for Nonlinear Systems by Balanced Truncation of State and Gradient Covariance](https://arxiv.org/abs/2207.14387), arXiv:2207.14387, 2022



